/* Copy-address helper. Touches nothing outside this page. */
(function () {
  var btn = document.getElementById("copy-addr");
  if (!btn) return;
  var status = document.getElementById("copy-addr-status");
  btn.addEventListener("click", function () {
    var addr = "netsanctuary@agentmail.to";
    function ok() { status.textContent = "Copied."; }
    function fail() { status.textContent = "Select the address above and copy it."; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(addr).then(ok, fail);
    else fail();
  });
})();
