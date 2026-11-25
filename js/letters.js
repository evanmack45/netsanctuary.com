/* Letter text for the Net Sanctuary pack. One owner of the wording.
   Runs in the browser and in Node. No network calls, no storage. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NSLetters = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  function clean(s) {
    return String(s == null ? "" : s).replace(/\r/g, "").replace(/[ \t]+/g, " ").trim();
  }

  // iso is "YYYY-MM-DD". Work in UTC so the browser's time zone cannot shift the day.
  function parseIso(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(clean(iso));
    if (!m) return null;
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    if (d.getUTCFullYear() !== +m[1] || d.getUTCMonth() !== +m[2] - 1 || d.getUTCDate() !== +m[3]) return null;
    return d;
  }

  function longDate(iso) {
    var d = parseIso(iso);
    if (!d) return "";
    return MONTHS[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
  }

  function addDaysIso(iso, days) {
    var d = parseIso(iso);
    if (!d) return "";
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  }

  // Section 541.052(b): up to 45 days after the business receives the request.
  function replyByDate(sentIso) { return addDaysIso(sentIso, 45); }

  function buildRequest(o) {
    o = o || {};
    var broker = clean(o.broker) || "[company name]";
    var name = clean(o.name) || "[your full name]";
    var city = clean(o.city) || "[your Texas city]";
    // undefined means "template": show a placeholder line. "" means "left blank": omit the line.
    var email = o.email === undefined ? "[optional, delete this line if you leave it out]" : clean(o.email);
    var url = o.url === undefined ? "[optional, delete this line if you leave it out]" : clean(o.url);
    var date = longDate(o.date) || "[date]";
    var want = o.want || { delete: true, optout: true, access: false };

    var asks = [];
    if (want.delete) asks.push("Delete the personal data you hold about me.");
    if (want.optout) asks.push("Stop selling my personal data.");
    if (want.access) asks.push("Tell me whether you process my personal data, and give me access to it.");
    if (!asks.length) asks.push("[pick at least one request above]");

    var lines = [];
    lines.push("Subject: Texas privacy request for " + broker);
    lines.push("");
    lines.push("To the privacy team at " + broker + ",");
    lines.push("");
    lines.push("I live in Texas. I am sending this request myself. No one else is acting for me.");
    lines.push("I am making it under the Texas Data Privacy and Security Act, Texas Business & Commerce Code chapter 541.");
    lines.push("");
    lines.push("Under section 541.051, I ask you to:");
    asks.forEach(function (a, i) { lines.push((i + 1) + ". " + a); });
    lines.push("");
    lines.push("So you can find my record:");
    lines.push("Name: " + name);
    lines.push("City: " + city + ", Texas");
    if (email) lines.push("Email on the record: " + email);
    if (url) lines.push("Profile page: " + url);
    lines.push("");
    lines.push("Section 541.052(b) gives you up to 45 days from receiving this request to answer. If you decline any part, please tell me why and how to appeal, as section 541.052(c) says.");
    lines.push("");
    lines.push("If you need to confirm it is me, tell me exactly what you need and why. I will decide what to send.");
    lines.push("");
    lines.push("Sent on " + date + ".");
    lines.push("");
    lines.push("Thank you,");
    lines.push(name);
    return lines.join("\n") + "\n";
  }

  function buildAppeal(o) {
    o = o || {};
    var broker = clean(o.broker) || "[company name]";
    var name = clean(o.name) || "[your full name]";
    var city = clean(o.city) || "[your Texas city]";
    var sent = longDate(o.sentDate) || "[date you sent the first request]";
    var date = longDate(o.date) || "[date]";
    var reason = o.reason === undefined ? "[what they said, or delete this line]" : clean(o.reason);

    var lines = [];
    lines.push("Subject: Appeal of your decision on my Texas privacy request");
    lines.push("");
    lines.push("To the privacy team at " + broker + ",");
    lines.push("");
    lines.push("On " + sent + " I sent you a request under section 541.051 of the Texas Business & Commerce Code. I am sending this appeal myself. No one else is acting for me.");
    if (reason) {
      lines.push("");
      lines.push("What you told me: " + reason);
    }
    lines.push("");
    lines.push("I am appealing your decision not to act on my request. Under section 541.053, please answer in writing within 60 days of receiving this appeal, and explain your reasons.");
    lines.push("If you deny the appeal, section 541.053(d) says you must tell me how to send a complaint to the Texas Attorney General.");
    lines.push("");
    lines.push("My details, so you can find the record:");
    lines.push("Name: " + name);
    lines.push("City: " + city + ", Texas");
    lines.push("");
    lines.push("Sent on " + date + ".");
    lines.push("");
    lines.push("Thank you,");
    lines.push(name);
    return lines.join("\n") + "\n";
  }

  return {
    buildRequest: buildRequest,
    buildAppeal: buildAppeal,
    replyByDate: replyByDate,
    longDate: longDate,
    addDaysIso: addDaysIso
  };
});
