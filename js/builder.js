/* Letter builder. Reads the form, calls NSLetters, writes the textarea.
   No network, no storage, no cookies. */
(function () {
  "use strict";
  var L = window.NSLetters;
  function $(id) { return document.getElementById(id); }

  function todayIso() {
    var d = new Date();
    function p(n) { return (n < 10 ? "0" : "") + n; }
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }

  var kinds = document.getElementsByName("kind");
  function kind() {
    for (var i = 0; i < kinds.length; i++) if (kinds[i].checked) return kinds[i].value;
    return "request";
  }

  function render() {
    var k = kind();
    $("request-fields").classList.toggle("hidden", k !== "request");
    $("appeal-fields").classList.toggle("hidden", k !== "appeal");
    var text;
    if (k === "request") {
      text = L.buildRequest({
        broker: $("f-broker").value, name: $("f-name").value, city: $("f-city").value,
        email: $("f-email").value, url: $("f-url").value, date: $("f-date").value,
        want: { delete: $("w-delete").checked, optout: $("w-optout").checked, access: $("w-access").checked }
      });
      var by = L.replyByDate($("f-date").value);
      $("reply-by").textContent = by
        ? "If the company gets this on " + L.longDate($("f-date").value) + ", its 45 days end on " + L.longDate(by) + ". Check for an answer on or after that date."
        : "Pick the date you send it and this box shows the first date to check for an answer.";
    } else {
      text = L.buildAppeal({
        broker: $("f-broker").value, name: $("f-name").value, city: $("f-city").value,
        date: $("f-date").value, sentDate: $("f-sent").value, reason: $("f-reason").value
      });
      var by2 = L.addDaysIso($("f-date").value, 60);
      $("reply-by").textContent = by2
        ? "If the company gets your appeal on " + L.longDate($("f-date").value) + ", its 60 days to answer in writing end on " + L.longDate(by2) + "."
        : "Pick the date you send it and this box shows when the company's 60 days end.";
    }
    $("out").value = text;
    var subject = (text.split("\n")[0] || "").replace(/^Subject:\s*/, "");
    var body = text.split("\n").slice(2).join("\n");
    $("b-mail").href = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  function say(msg) { $("status").textContent = msg; }

  $("f-date").value = todayIso();
  $("f-sent").value = "";
  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", render);
    inputs[i].addEventListener("change", render);
  }

  $("b-copy").addEventListener("click", function () {
    var t = $("out").value;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(function () { say("Copied."); }, function () { $("out").select(); say("Press Ctrl+C or Cmd+C to copy the selected text."); });
    } else { $("out").select(); say("Press Ctrl+C or Cmd+C to copy the selected text."); }
  });
  $("b-download").addEventListener("click", function () {
    var blob = new Blob([$("out").value], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = kind() === "appeal" ? "texas-privacy-appeal.txt" : "texas-privacy-request.txt";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    say("Saved to your downloads folder.");
  });
  $("b-print").addEventListener("click", function () { window.print(); });
  render();
})();
