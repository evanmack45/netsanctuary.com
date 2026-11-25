import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { FILES } from "../scripts/build-letters.mjs";
const L = createRequire(import.meta.url)("../js/letters.js");
const root = new URL("../", import.meta.url);

test("accented names and cities pass through untouched", () => {
  const t = L.buildRequest({ broker: "Café Data Co.", name: "José Peña", city: "San Antonio", date: "2026-11-25", want: { delete: true } });
  assert.match(t, /Name: José Peña/);
  assert.match(t, /Subject: Texas privacy request for Café Data Co\./);
  const t2 = L.buildRequest({ broker: "Müller & Søn", name: "Zoë Nuñez", city: "El Paso", date: "2026-11-25", want: { delete: true } });
  assert.match(t2, /Zoë Nuñez/); assert.match(t2, /Müller & Søn/);
});

test("45-day date across month, year, and leap boundaries", () => {
  assert.equal(L.replyByDate("2026-11-25"), "2027-01-09");
  assert.equal(L.replyByDate("2026-01-01"), "2026-02-15");
  assert.equal(L.replyByDate("2028-01-20"), "2028-03-05"); // leap year
  assert.equal(L.replyByDate("2026-02-30"), "");           // invalid date
  assert.equal(L.replyByDate(""), "");
  assert.equal(L.longDate("2026-11-25"), "November 25, 2026");
});

test("request lists only the checked asks, renumbered", () => {
  const t = L.buildRequest({ want: { delete: false, optout: true, access: true } });
  assert.match(t, /1\. Stop selling my personal data\./);
  assert.match(t, /2\. Tell me whether you process/);
  assert.doesNotMatch(t, /Delete the personal data/);
});

test("optional lines are omitted when left blank, kept when given", () => {
  const blank = L.buildRequest({ name: "A", email: "", url: "" });
  assert.doesNotMatch(blank, /Email on the record|Profile page/);
  const given = L.buildRequest({ name: "A", email: "a@example.com", url: "https://x.example/p/1" });
  assert.match(given, /Email on the record: a@example\.com/);
  assert.match(given, /Profile page: https:\/\/x\.example\/p\/1/);
});

test("letters cite real section numbers and never ask for ID", () => {
  const all = L.buildRequest({}) + L.buildAppeal({});
  for (const s of ["541.051", "541.052(b)", "541.052(c)", "541.053", "541.053(d)"]) assert.ok(all.includes(s), s);
  assert.doesNotMatch(all, /509\./);
  assert.doesNotMatch(all, /driver|passport|social security|SSN|date of birth/i);
});

test("appeal builds with and without a reason", () => {
  assert.match(L.buildAppeal({ reason: "public record", sentDate: "2026-11-25" }), /What you told me: public record/);
  assert.doesNotMatch(L.buildAppeal({ reason: "" }), /What you told me/);
});

test("static fallback .txt files equal the module output", () => {
  for (const [p, expected] of Object.entries(FILES)) assert.equal(readFileSync(new URL(p, root), "utf8"), expected, p);
});
