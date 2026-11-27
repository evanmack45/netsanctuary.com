// Content owner for the eight answer pages. Every quote (q) must appear in sources/text/<file> (scripts/check-quotes.mjs).
// Every "not said" claim lists terms that must be absent from the files it names.
export const CHECKED = "25 Nov 2026";
export const DATE = "2026-11-25";

export const SOURCES = {
  bc541: { url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm", title: "Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)", note: "Texas Constitution and Statutes", file: "bc541.txt" },
  bc510: { url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.510.htm", title: "Texas Business & Commerce Code chapter 510 (Data Brokers)", note: "Texas Constitution and Statutes", file: "bc510.txt" },
  sos: { url: "https://www.sos.texas.gov/statdoc/data-brokers.shtml", title: "Data Brokers", note: "Texas Secretary of State", file: "sos-data-brokers.txt" },
  sosfaq: { url: "https://www.sos.texas.gov/statdoc/faqs4000.shtml", title: "Frequently Asked Questions for Data Brokers", note: "Texas Secretary of State", file: "sos-faq.txt" },
  agcomplaint: { url: "https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint", title: "File a Consumer Complaint", note: "Texas Attorney General", file: "ag-complaint.txt" },
  agtdpsa: { url: "https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act", title: "Texas Data Privacy and Security Act", note: "Texas Attorney General", file: "ag-tdpsa.txt" },
  agprivacy: { url: "https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights", title: "Consumer Privacy Rights", note: "Texas Attorney General", file: "ag-privacy.txt" },
  spokeo: { url: "https://www.spokeo.com/optout", title: "Opt out your listing from Spokeo", note: "Spokeo", file: "spokeo-optout.txt" },
  spokeohelp: { url: "https://help.spokeo.com/hc/en-us/articles/115010262907-How-do-I-remove-my-address-from-search-results", title: "How do I remove my address from search results?", note: "Spokeo Help Center", file: "spokeo-help-address.txt" },
  wp: { url: "https://www.whitepages.com/privacy/consumer-rights", title: "Consumer Privacy Rights", note: "Whitepages", file: "whitepages-rights.txt" },
  wpoptout: { url: "https://www.whitepages.com/suppression-requests", title: "Opt-out of Whitepages", note: "Whitepages", file: "whitepages-optout.txt" },
  drophow: { url: "https://droptexas.com/how-it-works", title: "Opt out of data brokers using the free DROP Texas form", note: "DROP Texas", file: "drop-how-it-works.txt" },
  dropoverview: { url: "https://droptexas.com/overview", title: "Delete personal information: a Texas opt-out guide", note: "DROP Texas", file: "drop-overview.txt" },
  drophelp: { url: "https://droptexas.com/help", title: "Privacy help for Texans who use the DROP Texas form", note: "DROP Texas", file: "drop-help.txt" },
  dropbrokers: { url: "https://droptexas.com/data-brokers", title: "Data brokers: what they hold and how Texans opt out", note: "DROP Texas", file: "drop-data-brokers.txt" },
  dropchildren: { url: "https://droptexas.com/children", title: "Children's data", note: "DROP Texas", file: "drop-children.txt" },
  drophome: { url: "https://droptexas.com/", title: "Texas data broker opt-out, free for Texans", note: "DROP Texas", file: "drop-home.txt" },
  bc503: { url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.503.htm", title: "Texas Business & Commerce Code chapter 503 (biometric identifiers)", note: "Texas Constitution and Statutes", file: "bc503.txt" },
  el18: { url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=EL&Value=18.066", title: "Texas Election Code chapter 18, sections 18.008, 18.009, 18.066 and 18.067", note: "Texas Constitution and Statutes", file: "el18.txt" },
  sosconf: { url: "https://www.sos.texas.gov/elections/laws/address-confidentiality.shtml", title: "Address Confidentiality", note: "Texas Secretary of State, Elections", file: "sos-address-confidentiality.txt" },
  rface: { url: "https://www.reddit.com/r/legaladvice/comments/1d28sd8/facial_recognition_clock_in/", title: "Facial Recognition clock in", note: "a user-posted thread on Reddit, r/legaladvice", file: "reddit-1d28sd8.txt" },
  rvoter: { url: "https://www.reddit.com/r/legaladvice/comments/taaq0q/a_website_is_doxxing_every_person_in_texas/", title: "A website is doxxing every person in Texas", note: "a user-posted thread on Reddit, r/legaladvice", file: "reddit-taaq0q.txt" },
  rgov: { url: "https://www.reddit.com/r/texas/comments/1vzizcs/houstons_flock_cameras_are_tracking_uswithout_our/", title: "Houston's Flock Cameras Are Tracking Us, Without Our Say", note: "a user-posted thread on Reddit, r/texas", file: "reddit-1vzizcs.txt" },
};

export const PAGES = [
  {
    slug: "texas-data-broker-registry",
    title: "Texas data broker registry: what it can and cannot do",
    h1: "Is there a Texas data broker registry, and does it remove me from anything?",
    description: "The Texas Secretary of State keeps a public list of registered data brokers. It takes no deletion requests, but each entry links to the broker's rights page.",
    short: "Yes, there is a registry, and no, it does not remove you from anything. The Secretary of State keeps it as a list. By law each entry includes a contact for the broker and a link to the broker's page on how to use your Texas privacy rights, so it is a place to find where to send a request.",
    sections: [
      { h: "What the registry is", blocks: [
        { p: "Chapter 510 of the Business and Commerce Code is the Texas data broker law. It says:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 510 (Data Brokers)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.510.htm]].", src: "bc510" },
        
        { p: "The Secretary of State's own page describes the same registry:" },
        { p: "Read it in: [[Data Brokers|https://www.sos.texas.gov/statdoc/data-brokers.shtml]].", src: "sos" },] },
      { h: "What each entry holds", blocks: [
        { p: "Section 510.005(b) lists what a broker must file. Two items matter for a request. The first is a contact:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 510 (Data Brokers)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.510.htm]].", src: "bc510" },
        
        { p: "The second is a link to the broker's own instructions:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 510 (Data Brokers)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.510.htm]].", src: "bc510" },
        { p: "The registry must show that filing:" },
        { q: "for each data broker, the information filed under Section 510.005(b).", src: "bc510" }] },
            { h: "How to use it", blocks: [
        { p: "Search the [[Secretary of State's registry|https://texas-sos.appianportalsgov.com/data-broker-registry]] for a company name. Open its entry, find the rights page link, and send your request there or to the listed contact. The [[free pack|/pack/]] has a letter builder and a tracker for that. We did not read the registry's entries for this page, because the registry runs as a browser app." }] }],
    notSaid: [],
    related: ["deletion-request-45-days", "people-search-said-no", "texas-attorney-general-complaint"],
  },
  {
    slug: "deletion-request-45-days",
    title: "You sent a Texas deletion request: the next 45 days",
    h1: "You sent a Texas deletion request. What does the law say happens in the first 45 days?",
    description: "Section 541.052 gives a company 45 days to answer, one extension, and a duty to explain a refusal and how to appeal. Here is the text and what it leaves out.",
    short: "The company has up to 45 days to answer under section 541.052. It can extend once by 45 days if it tells you why within the first 45. If it refuses, it must say why and how to appeal. See the [[Texas Data Privacy and Security Act|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act]].",
    sections: [
      { h: "The 45-day clock", blocks: [
        
        { p: "That is section 541.052(b). The clock runs from the date the company receives the request, not the date you send it." }] },
            { h: "Data a company got from someone else", blocks: [
        { p: "Data brokers mostly hold data they did not collect from you. Section 541.052(f) has a rule for that case:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "So a reply that says your request was recorded and your data is suppressed can meet the law. It is not the same as erasing every copy." }] },
      { h: "Who can enforce it", blocks: [
        
        
        
        { p: "So the law gives you no way to sue a company over an ignored request. The Attorney General can act, and must give the company 30 days to fix the problem first. See [[the complaint page|/texas-attorney-general-complaint/]]." }] },
      { h: "Proof of identity and cost", blocks: [
        
        
      ] }],
    cite: ["agtdpsa"],
    notSaid: [],
    related: ["people-search-said-no", "texas-attorney-general-complaint", "listing-came-back"],
  },
  {
    slug: "access-my-data",
    title: "Can I see or copy my data under Texas privacy law?",
    h1: "Can I ask a company to show me, or give me a copy of, the data it holds on me under the Texas privacy law?",
    description: "Section 541.051(b)(1) and (4): confirm whether a company processes your data, access it, and get a portable copy of what you gave it. Free twice a year.",
    short: "Yes, if the company is a covered controller and you are a Texas resident. Section 541.051(b)(1) gives you the right to confirm whether it is processing your personal data and to access it. Section 541.051(b)(4) adds a portable copy of the data you previously provided, if it is available in digital format.",
    sections: [
      { h: "What section 541.051 gives you", blocks: [
        { p: "The rights sit in section 541.051(b). Two of them concern seeing your data:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "The Attorney General's page on the Act sums up the first right as:" },
        { p: "Read it in: [[Texas Data Privacy and Security Act|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act]].", src: "agtdpsa" },
        { p: "The two statute items differ in reach. The copy right in (b)(4) is limited to data you previously provided to the company, and only if it is available in digital format. Item (b)(1) does not carry that limit in its text. The statute does not say what form access under (b)(1) must take." }] },
      { h: "How to ask", blocks: [
        
        { p: "Name the right you want to use. Section 541.055(a) tells the company to offer ways to ask:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },] },
                  { h: "If the company says no", blocks: [
        
        { p: "[[Appealing a denied request|/appeal-denied-privacy-request/]] walks through that step. Enforcement is by the Attorney General only: [[the complaint page|/texas-attorney-general-complaint/]]." }] }],
    cite: ["bc541"],
    notSaid: [],
    related: ["deletion-request-45-days", "deletion-request-fee", "appeal-denied-privacy-request"],
  },
  {
    slug: "people-search-said-no",
    title: "A people-search site said no to your request",
    h1: "A people-search site refused my request. Why does \"publicly available\" matter?",
    description: "Texas privacy law leaves out publicly available information, and people-search sites say they use it. The statute text, Spokeo's note, and where to appeal.",
    short: "Both Texas laws leave out publicly available information, which includes government records. People-search sites say they build listings from public sources, so they can refuse a letter. A site's own opt-out page is a second route, and a refusal must come with a reason and appeal steps.",
    sections: [
      { h: "What the statute leaves out", blocks: [
        { p: "The Texas Data Privacy and Security Act defines personal data this way:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "It defines the excluded category:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        { p: "The data broker law has a matching carve-out. Section 510.002(b) says the chapter does not apply to" },
        { q: "publicly available information;", src: "bc510" }] },
      { h: "What a people-search site says about itself", blocks: [
        { p: "Spokeo's opt-out page says:" },
        { p: "Read it in: [[Opt out your listing from Spokeo|https://www.spokeo.com/optout]].", src: "spokeo" },
        
        { p: "So Spokeo does not rely on the Texas letter. It offers its own form instead. Other sites can do the same, or refuse and cite the exemption. A refusal does not mean the statute is wrong. It means the site says its data falls outside it." }] }],
    notSaid: [],
    related: ["remove-home-address", "listing-came-back", "deletion-request-45-days"],
  },
  {
    slug: "listing-came-back",
    title: "Your listing came back after an opt-out: what to check",
    h1: "My listing came back after I opted out. What should I check?",
    description: "Spokeo says an opted-out listing can reappear, that each listing needs its own opt-out, and that the source records stay. Here is what that means for a tracker.",
    short: "Spokeo says new public records can bring a listing back without notice, and that you can have several listings, each opted out one at a time. An opt-out does not touch the source record. Check for new listings on a schedule you set and log each one.",
    sections: [
      { h: "What Spokeo says", blocks: [
        { p: "Read it in: [[Opt out your listing from Spokeo|https://www.spokeo.com/optout]].", src: "spokeo" },
        
        
        { p: "Spokeo's help page on addresses adds a limit:" },
        { q: "We are not able to remove the entire listing. However, we respect your privacy preferences and you can easily remove individual names associated with the address.", src: "spokeohelp" }] },
            { h: "A routine for it", blocks: [
        { p: "The [[free pack|/pack/]] includes a tracker file with one row per company. These steps use it:" },
        { ul: [
          "Write the company, the page where you sent the request, and the date.",
          "Write the listing's web address in the notes column, because Spokeo says each listing has its own.",
          "Pick a date to search again. Spokeo says to check regularly and gives no interval, so the date is yours to choose.",
          "When a listing returns, add a new row with a new date instead of overwriting the old one."] }] }],
    notSaid: [],
    related: ["people-search-said-no", "remove-home-address", "deletion-request-45-days"],
  },
  {
    slug: "remove-home-address",
    title: "Remove a home address from data broker sites",
    h1: "How do I remove my home address from data broker sites? The steps two sites publish",
    description: "The steps Spokeo and Whitepages publish for removing a listing, what each form asks for, and the limits each site states, read from their own pages.",
    short: "Both sites ask you to find your own listing, copy its web address, and paste it into their form. Spokeo asks for an email address and sends a confirmation link. Whitepages describes an automated tool that asks for a phone number, with an email alternative. Spokeo says its opt-out does not remove the record from its original source.",
    sections: [
      { h: "Spokeo", blocks: [
        { p: "Spokeo's help page lists the steps. It says what an address removal can and cannot do:" },
        { p: "Read it in: [[How do I remove my address from search results?|https://help.spokeo.com/hc/en-us/articles/115010262907-How-do-I-remove-my-address-from-search-results]].", src: "spokeohelp" },
        { p: "The steps, in Spokeo's order:" },
        { ul: [
          "Open an incognito window in your browser.",
          "Find the address listing and the name you want removed.",
          "Right-click the report name and choose Copy link address.",
          "Open Spokeo's opt-out page and paste the address into the box.",
          "Enter your email address. Spokeo says it uses it to verify the removal.",
          "Check the captcha box."] },
        { p: "Spokeo's opt-out page adds that it sends a confirmation email and that you must click the link, and it gives a time:" },
        { p: "Read it in: [[Opt out your listing from Spokeo|https://www.spokeo.com/optout]].", src: "spokeo" }] },
            { h: "Limits both sites state", blocks: [
        
        { p: "The [[listing-came-back page|/listing-came-back/]] covers what to log when a listing returns." }] }],
    notSaid: [],
    related: ["listing-came-back", "people-search-said-no", "one-texas-opt-out-form"],
  },
  {
    slug: "childs-data",
    title: "Can a parent ask brokers to delete a child's data?",
    h1: "Can a Texas parent ask data brokers to delete a child's data?",
    description: "Section 541.051(a) lets a parent or guardian use a known child's rights. The definitions, what the pack covers, and what it does not.",
    short: "Yes, for a known child under 13. Section 541.051(a) lets a parent or legal guardian exercise the child's rights. The statute does not give the same wording for teenagers. The letter builder in this pack is written for an adult asking about their own data and has no parent version.",
    sections: [
      { h: "What the statute says", blocks: [
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        { p: "The definitions that matter:" },
        { q: "\"Child\" means an individual younger than 13 years of age.", src: "bc541" }] },
      { h: "Proof", blocks: [
        { p: "A company may ask you to prove you are the parent or guardian. Section 541.052(e) lets it hold a request until it can confirm it:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },] },
      { h: "Brokers that hold a child's data", blocks: [
        { p: "A registered broker that knows it holds a child's data must file extra statements. Section 510.005(b)(5) lists them:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 510 (Data Brokers)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.510.htm]].", src: "bc510" },
        { p: "That statement is part of the broker's registry entry, so the [[registry|/texas-data-broker-registry/]] is one place to look for it." }] }],
    notSaid: [],
    related: ["one-texas-opt-out-form", "deletion-request-45-days", "texas-data-broker-registry"],
  },
  {
    slug: "texas-attorney-general-complaint",
    title: "When to complain to the Texas Attorney General",
    h1: "When can I complain to the Texas Attorney General about a data request?",
    description: "Only the Attorney General enforces the Texas privacy law. The AG's own page says what to bring, that complaints are public, and what a number means.",
    short: "The Attorney General alone enforces the Texas privacy law and runs an online complaint form. The law tells a company to point you there after it denies your appeal. The AG's page says complaints are public, warns against including your birth date or ID, and says a complaint number does not mean a case is open.",
    sections: [
      { h: "What the statute says", blocks: [
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "Section 541.152(2) is the source of that last line. The statute does not say a complaint must wait until an appeal is denied." }] },
      { h: "What the Attorney General's page says", blocks: [
        { p: "Read it in: [[File a Consumer Complaint|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint]].", src: "agcomplaint" },
        
        
        { p: "Have the business name and its full address ready. The page says the form cannot save a half-finished complaint:" },
        { q: "Be ready to complete the complaint form in full because the system cannot save your in-progress complaint.", src: "agcomplaint" }] },
      { h: "What to expect after you file", blocks: [
        
        
        { p: "Read it in: [[Texas Data Privacy and Security Act|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act]].", src: "agtdpsa" }] }],
    notSaid: [],
    related: ["deletion-request-45-days", "people-search-said-no", "texas-data-broker-registry"],
  },
  {
    slug: "one-texas-opt-out-form",
    title: "Is there one Texas opt-out form? DROP Texas compared",
    h1: "Is there one Texas opt-out form for data brokers? What DROP Texas does and what this pack does",
    description: "DROP Texas is a free private form that sends opt-out requests to the companies it names. This pack makes letters you send yourself. A plain comparison.",
    short: "DROP Texas is one free form, run by a private company, that sends opt-out-of-sale requests to the companies it names, nine of them on its home page. This pack sends nothing. It writes deletion letters you send yourself, to any company. For the companies DROP Texas names, it is less work.",
    sections: [
      { h: "What DROP Texas says it is", blocks: [
        { p: "Read it in: [[Privacy help for Texans who use the DROP Texas form|https://droptexas.com/help]].", src: "drophelp" },
        
        { p: "Read it in: [[Data brokers: what they hold and how Texans opt out|https://droptexas.com/data-brokers]].", src: "dropbrokers" },
        { p: "Its own pages say plainly that the form is not a deletion tool:" },
        { p: "Read it in: [[Delete personal information: a Texas opt-out guide|https://droptexas.com/overview]].", src: "dropoverview" }] },
      { h: "What it asks you for", blocks: [
        
        { q: "Your information is stored securely and auto-deleted per our retention policy", src: "drophow" },
        { p: "We did not read DROP Texas's retention policy, so we cannot say how long it keeps what you enter. We have not tested its form." }] }],
    notSaid: [],
    related: ["childs-data", "deletion-request-45-days", "texas-data-broker-registry"],
  },
  {
    slug: "texas-privacy-law-small-business",
    title: "Does the Texas privacy law cover small businesses?",
    h1: "Does the Texas privacy law apply to small businesses, and who is exempt?",
    description: "The Texas privacy law skips small businesses as the SBA defines them, with one sensitive-data exception. Nonprofits, colleges, and state agencies are also out.",
    short: "Mostly no. The Act applies to a company that does business in Texas, processes or sells personal data, and is not a small business by the U.S. Small Business Administration's definition. One exception: a small business needs your prior consent before it sells sensitive data. Nonprofits, colleges, state agencies, and some financial and health entities are also outside it.",
    sections: [
      { h: "Who the Act covers", blocks: [
        { p: "Section 541.002(a) sets the test. It says:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        
        { p: "The statute points to the SBA's definition and gives no revenue or headcount number of its own. We did not look up the SBA's size standards, and we cannot tell you whether a given company is a small business." }] },
      { h: "The sensitive-data exception", blocks: [
        { p: "Section 541.107 puts one duty on small businesses:" },
        { q: "A person described by Section 541.002(a)(3) may not engage in the sale of personal data that is sensitive data without receiving prior consent from the consumer.", src: "bc541" },
        { p: "What counts as sensitive data is on [[the sensitive data page|/texas-sensitive-data-consent/]]." }] },
      { h: "Others the Act does not apply to", blocks: [
        { p: "Section 541.002(b) lists entities outside the chapter. Among them:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        
        
        { p: "The list also names covered entities and business associates under the federal health privacy rules (HIPAA) and some electric utilities." }] }],
    notSaid: [],
    related: ["people-search-said-no", "texas-data-broker-registry", "deletion-request-45-days"],
  },
  {
    slug: "texas-sensitive-data-consent",
    title: "Texas sensitive data: what needs your consent",
    h1: "What counts as sensitive data under the Texas privacy law, and when is my consent required?",
    description: "The Texas privacy law lists sensitive data and requires your consent to process it. The list, the known-child rule, and the small-business sale rule.",
    short: "Section 541.001 lists sensitive data: data revealing race or ethnicity, religion, a health diagnosis, sexuality, or citizenship or immigration status; genetic or biometric data used to identify you; data from a known child; and precise geolocation. A company covered by the Act may not process it without your consent. A small business may not sell it without your prior consent.",
    sections: [
      { h: "The list", blocks: [
        { p: "The definitions section says:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" }] },
            { h: "Small businesses and sales", blocks: [
        { p: "A small business is outside most of the Act, with one exception. Section 541.107 says:" },
        { q: "A person described by Section 541.002(a)(3) may not engage in the sale of personal data that is sensitive data without receiving prior consent from the consumer.", src: "bc541" },
        { p: "[[The small business page|/texas-privacy-law-small-business/]] has the full applicability test." }] },
      { h: "Using this with a request", blocks: [
        { p: "The Act lets you ask a company to confirm whether it processes your personal data and to give you access to it. The [[free pack|/pack/]] letter has a box for that request. The statute does not say a company must tell you which of your data it treats as sensitive." }] }],
    notSaid: [],
    related: ["texas-privacy-law-small-business", "childs-data", "deletion-request-45-days"],
  },
  {
    slug: "texas-browser-opt-out-signals",
    title: "Texas privacy law and browser opt-out signals",
    h1: "Does the Texas privacy law make companies honor Global Privacy Control and browser opt-out signals?",
    description: "Section 541.055 lets you opt out of targeted ads and sales with a browser setting or extension. What it requires, what it excludes, and what it does not name.",
    short: "Section 541.055 lets a consumer use an Internet browser setting or extension, or a global device setting, to opt out of targeted advertising and the sale of personal data. A company must comply if it can verify your identity and the agent's authority. The signal must be your own choice, not a default.",
    sections: [
      { h: "What the statute says", blocks: [
        { p: "Section 541.055(e) lets you name an authorized agent. It then says how:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" }] },
      { h: "What counts as a valid signal", blocks: [
        { p: "Subsection (f) limits the technology. It says:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "So a browser that turns the signal on for everyone by default does not meet the rule. You have to choose it." }] },
            { h: "What a signal covers", blocks: [
        { p: "Subsection (e) points to section 541.051(b)(5)(A) and (B). Those are the rights to opt out of targeted advertising and of the sale of personal data. A signal does not ask a company to delete anything. For deletion, see [[the 45-day page|/deletion-request-45-days/]]." },
        { p: "Whitepages' notice, in the section that covers Texas residents, mentions the signal:" },
        { q: "You may also opt out of targeted advertising by setting the Global Privacy Control.", src: "wp" }] }],
    notSaid: [],
    related: ["authorized-agent-texas-privacy-request", "deletion-request-45-days", "texas-attorney-general-complaint"],
  },
  {
    slug: "opt-out-of-sale",
    title: "How to opt out of data sales and targeted ads in Texas",
    h1: "How do I opt out of the sale of my data, targeted ads, or profiling under the Texas privacy law?",
    description: "Section 541.051(b)(5): opt out of targeted ads, the sale of data, and some profiling. What each term means, what companies must tell you, and the 45-day clock.",
    short: "You send a covered company a request under section 541.051(b)(5) to opt out of one or more of three things: targeted advertising, the sale of personal data, or profiling in furtherance of a decision with a legal or similarly significant effect.",
    sections: [
      { h: "The three opt-outs", blocks: [
        { p: "Section 541.051(b)(5) gives the right to:" },
        { q: "opt out of the processing of the personal data for purposes of:", src: "bc541" },
        { p: "followed by three items: targeted advertising, the sale of personal data, and profiling in furtherance of a decision that produces a legal or similarly significant effect concerning the consumer. Each term has a definition in section 541.001." }] },
            { h: "What the company must tell you", blocks: [
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        { p: "That is section 541.103. The privacy notice under section 541.102 also has to describe how to submit requests. Look for both on the company's website before you write your own request." }] },
      { h: "Ways to opt out", blocks: [
        { p: "You can send the request yourself, naming section 541.051(b)(5) and the items you want to stop:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "Two other routes exist for the sale and targeted-ad opt-outs. A browser setting or device setting can send the opt-out for you: [[browser opt-out signals|/texas-browser-opt-out-signals/]]. An authorized agent can send it: [[authorized agents|/authorized-agent-texas-privacy-request/]]. [[The one-form page|/one-texas-opt-out-form/]] covers DROP Texas, a free form that sends opt-out-of-sale requests to the companies it names." }] }],
    notSaid: [],
    related: ["texas-browser-opt-out-signals", "one-texas-opt-out-form", "can-they-refuse-service"],
  },
  {
    slug: "authorized-agent-texas-privacy-request",
    title: "Can someone send my Texas privacy request for me?",
    h1: "Can someone else send my Texas privacy request for me? What the law says about authorized agents",
    description: "The Texas privacy law lets you name an authorized agent to opt out of targeted ads and sales. Whitepages' rule for agents on delete requests.",
    short: "Yes, for opt-outs. Section 541.055(e) lets you name an authorized agent to opt out of targeted advertising and the sale of personal data, and a company must comply if it can verify you and the agent's authority. The chapter uses the term authorized agent only there. Whitepages' notice says an agent can send a delete request with signed written permission.",
    sections: [
      { h: "What the statute says", blocks: [
        { q: "A consumer may designate another person to serve as the consumer's authorized agent and act on the consumer's behalf to opt out of the processing of the consumer's personal data under Sections 541.051(b)(5)(A) and (B).", src: "bc541" },
        { p: "Those two items are targeted advertising and the sale of personal data. Chapter 541 uses the term authorized agent only in section 541.055(e) and the lines that follow it. For a child, section 541.051(a) has a separate rule, covered on [[the child's data page|/childs-data/]]." },
        { p: "A company can refuse an agent's request in some cases. Two of them:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" }] },
            { h: "What the free pack does", blocks: [
        { p: "The pack's letter says the sender is the person asking and that no one else is acting for them. We are not your agent. We do not send, file, or follow up for you. If you want someone to send your requests, you would have to edit the letter and check the company's own rules first." }] }],
    notSaid: [],
    related: ["texas-browser-opt-out-signals", "childs-data", "deletion-request-45-days"],
  },
  {
    slug: "can-i-sue-texas-privacy-law",
    title: "Can I sue a company under the Texas privacy law?",
    h1: "Can I sue a company that ignored my Texas privacy request?",
    description: "Section 541.156 says no private right of action. Only the Attorney General enforces the law, after written notice and 30 days to cure. The text, by section.",
    short: "Not under this law. Section 541.156 says the chapter cannot be construed as providing a basis for a private right of action, and section 541.151 gives the Attorney General exclusive authority to enforce it. Before suing, the Attorney General must give written notice and 30 days to cure.",
    sections: [
      { h: "What the statute says", blocks: [
        { p: "Section 541.156 is titled No private right of action. Its full text:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "Section 541.151 says who enforces the chapter instead:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "The Attorney General's own page on the law agrees:" },
        { q: "The Act does not provide a private right of action.", src: "agtdpsa" },
        { p: "The sentence in 541.156 ends with \"or any other law\". What that does to a claim under a different statute is a legal question this page does not answer." }] },
            { h: "Penalties, and where the money goes", blocks: [
        { p: "Section 541.155 covers a company that does not cure:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "The Attorney General's page lists what an enforcement action can seek:" },
        { p: "Read it in: [[Texas Data Privacy and Security Act|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act]].", src: "agtdpsa" },
        { p: "Section 541.155 does not provide for a payment to the consumer." }] },
      { h: "What you can do", blocks: [
        { p: "Section 541.152(2) requires the Attorney General to post an online complaint mechanism. [[When to complain to the Attorney General|/texas-attorney-general-complaint/]] covers what the complaint page says. The Attorney General's page also says:" },
        { p: "Read it in: [[File a Consumer Complaint|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint]].", src: "agcomplaint" },
        
] }],
    cite: ["bc541"],
    notSaid: [],
    related: ["texas-attorney-general-complaint", "appeal-denied-privacy-request", "deletion-request-45-days"],
  },
  {
    slug: "correct-my-data",
    title: "Can I make a company correct my data under Texas law?",
    h1: "Can I make a company correct inaccurate personal data about me under the Texas privacy law?",
    description: "Section 541.051(b)(2) lets you ask a covered company to correct inaccuracies, weighed against the data's nature and purpose. The clock, the limits, the appeal.",
    short: "Yes, for a covered company. Section 541.051(b)(2) gives you the right to correct inaccuracies in your personal data, taking into account the nature of the personal data and the purposes of the processing. The statute does not say what proof you must give or exactly what the company must change.",
    sections: [
      { h: "What the statute says", blocks: [
        { p: "Section 541.051(b) lists the rights. The second is:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "The Attorney General's page on the Act has the same right in plain words:" },
        { p: "Read it in: [[Texas Data Privacy and Security Act|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act]].", src: "agtdpsa" },
        { p: "It sets no test for what counts as an inaccuracy, and it sets no standard of proof for you." }] },
            { h: "Correction is not deletion", blocks: [
        { p: "Deleting data is a separate right in 541.051(b)(3):" },
        { q: "delete personal data provided by or obtained about the consumer;", src: "bc541" },
        { p: "If the aim is to remove a record, not fix it, that is the right to use. [[Remove my home address|/remove-home-address/]] covers removal." }] },
      { h: "Where the right stops", blocks: [
        { p: "The right reaches personal data only. The definition says:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "So a company can argue that a listing copied from public records is outside the right. [[People-search said no|/people-search-said-no/]] covers that refusal. The Act also covers only companies it names, and only Texas residents acting in an individual or household context. See [[small business coverage|/texas-privacy-law-small-business/]]." }] }],
    notSaid: [],
    related: ["deletion-request-45-days", "appeal-denied-privacy-request", "people-search-said-no"],
  },
  {
    slug: "appeal-denied-privacy-request",
    title: "Texas privacy request denied: appeal to the company",
    h1: "A company denied my Texas privacy request. How do I appeal?",
    description: "Section 541.053 requires an appeal process, a written answer within 60 days, and a link to the Attorney General if you lose. What it leaves out.",
    short: "Under section 541.053 the company must run an appeal process that is conspicuously available and similar to the request process. It must answer your appeal in writing within 60 days of receiving it, with reasons. If it denies the appeal, it must give you the Attorney General's online complaint mechanism.",
    sections: [
      { h: "The denial must tell you how to appeal", blocks: [
        { p: "Section 541.052(c) says what a company owes you when it says no:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "The Attorney General's page says the same in plain terms:" },
        { q: "A company that declines a consumer's request must provide the consumer with notice of that decision, including a justification for the declination and instructions on how to appeal the decision.", src: "agtdpsa" }] },
            { h: "The company's answer to your appeal", blocks: [
        { p: "Section 541.053(c) sets the clock and the content:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "The 60 days run from the date the company receives your appeal. Keep a copy of what you sent and when." }] },
      { h: "If the appeal is denied", blocks: [
        { p: "Section 541.053(d):" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "That is the Attorney General's complaint form. What to bring and what to expect are on [[When to complain to the Attorney General|/texas-attorney-general-complaint/]]. The 45-day request clock is on [[the 45-day page|/deletion-request-45-days/]]." }] }],
    cite: ["bc541"],
    notSaid: [],
    related: ["texas-attorney-general-complaint", "can-i-sue-texas-privacy-law", "deletion-request-45-days"],
  },
  {
    slug: "deletion-request-fee",
    title: "Can a company charge a fee for my Texas request?",
    h1: "Can a company charge me a fee to act on my request under the Texas privacy law?",
    description: "Section 541.052(d): free at least twice a year. A fee is allowed only for manifestly unfounded, excessive or repetitive requests, and the company must prove it.",
    short: "Not for an ordinary request. Section 541.052(d) says a controller shall provide information in response to a consumer request free of charge, at least twice annually per consumer. It can charge a reasonable fee, or decline, only if a request is manifestly unfounded, excessive, or repetitive, and it bears the burden of showing that.",
    sections: [
      { h: "What section 541.052(d) says", blocks: [
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "Subsection (d) says \"a consumer request\" and does not single out deletion. It sits in the section that governs responses to every rights request. Subsection (a) says:" },
        { q: "a controller shall comply with a request submitted by a consumer to exercise the consumer's rights pursuant to Section 541.051 as provided by this section.", src: "bc541" }] },
            { h: "What the statute leaves open", blocks: [
        { p: "The chapter does not define \"manifestly unfounded, excessive, or repetitive\", and it sets no dollar figure for a reasonable fee. It limits the fee to the company's administrative costs of complying. Because the company has the burden, a fee demand without an explanation is something to ask about in writing." },
        { p: "A company that charges a fee or declines on this ground is declining to act on your request in part. Section 541.052(c) then requires it to say why and how to appeal. [[Appeal a denied request|/appeal-denied-privacy-request/]] covers that step." }] }],
    notSaid: [],
    related: ["deletion-request-45-days", "appeal-denied-privacy-request", "texas-attorney-general-complaint"],
  },
  {
    slug: "do-i-have-to-live-in-texas",
    title: "Do I have to live in Texas to use its privacy law?",
    h1: "Do I have to live in Texas to use its privacy law?",
    description: "The law protects a \"consumer\": a Texas resident acting only in an individual or household context. What that includes and excludes, and the company tests.",
    short: "On the statute's text, yes. Section 541.001(7) defines a consumer as an individual who is a resident of this state acting only in an individual or household context. It excludes an individual acting in a commercial or employment context. The statute does not say how a company checks residency or what happens if you move.",
    sections: [
      { h: "The definition", blocks: [
        { p: "Section 541.001(7) defines who the law's rights belong to:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        
        { p: "The rights in section 541.051 are given to that consumer:" },
        { q: "A consumer is entitled to exercise the consumer rights authorized by this section at any time by submitting a request to a controller specifying the consumer rights the consumer wishes to exercise.", src: "bc541" },
        { p: "Read together, a person who is not a resident of Texas is not a \"consumer\" under this chapter. Other states have their own laws. This page covers only Texas." }] },
      { h: "Individual context, not business or work", blocks: [
        { p: "Data about you as a private person fits the definition. Data about you acting in a commercial or employment context does not. The statute does not say how to treat a record that mixes your personal and business details, such as a listing under your own name for a business you run." }] },
            { h: "What the statute does not say", blocks: [
        { p: "The text has no residency proof requirement and no rule for a move. What it says about proving who you are is about identity, not address. Section 541.052(e) lets a company that cannot authenticate a request decline it and ask for more information. [[The 45-day page|/deletion-request-45-days/]] has that text." }] }],
    notSaid: [],
    related: ["texas-privacy-law-small-business", "deletion-request-45-days", "texas-data-broker-registry"],
  },
  {
    slug: "can-they-refuse-service",
    title: "Can a company refuse me over Texas privacy rights?",
    h1: "Can a company charge more or refuse service if I use my rights under the Texas privacy law?",
    description: "Section 541.101(b)(3) bars discrimination for using your rights, such as denying service or charging more. Subsection (c) allows loyalty and no-fee offers.",
    short: "Generally no. Section 541.101(b)(3) bars discrimination for using any of the consumer rights, including denying goods or services, charging more, or providing a different level of quality. Subsection (c) carves out a company's duty to provide a service that needs data it does not hold, a different charge after an opt-out, and bona fide loyalty or club card programs.",
    sections: [
      { h: "The rule", blocks: [
        { p: "Section 541.101(b) lists what a controller cannot do. Item (3) is:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        { p: "The Attorney General's page lists the same protection among your rights:" },
        { q: "Right to not face retaliation or discrimination for exercising these rights.", src: "agtdpsa" },
        { p: "Section 541.054 adds that a contract cannot waive the rights:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
      ] },
      { h: "Fees for answering a request are separate", blocks: [
        { p: "A fee for handling your request falls under section 541.052(d), not this rule. [[The fee page|/deletion-request-fee/]] covers it. For opting out of sales and targeted ads, see [[opt out of sale|/opt-out-of-sale/]]." }] },
      { h: "If a company does it anyway", blocks: [
        { p: "The Attorney General enforces the Act, and the statute gives no private right of action. [[Can I sue|/can-i-sue-texas-privacy-law/]] covers that, and [[the complaint page|/texas-attorney-general-complaint/]] covers the Attorney General's online complaint form." }] }],
    cite: ["bc541"],
    notSaid: [],
    related: ["deletion-request-fee", "can-i-sue-texas-privacy-law", "texas-attorney-general-complaint"],
  },
  {
    slug: "employer-face-scan",
    title: "Employer face scan to clock in: what Texas law says",
    h1: "My employer wants 60 photos of my face to clock in. Does Texas law stop that?",
    description: "Two separate Texas laws: chapter 503 on biometric identifiers, which needs notice and consent, and the privacy Act, which leaves employees out. What each says.",
    short: "Two laws, kept apart. Chapter 503 of the Business & Commerce Code says a person must inform an individual and receive consent before capturing a biometric identifier of that individual for a commercial purpose. The Texas Data Privacy and Security Act’s consumer definition excludes an individual acting in an employment context.",
    sections: [
      { h: "The question", blocks: [
        { p: "A 2024 post on r/legaladvice from a worker asking about Texas law, after the job changed management companies:" },
        { p: "Read it in: [[Facial Recognition clock in|https://www.reddit.com/r/legaladvice/comments/1d28sd8/facial_recognition_clock_in/]].", src: "rface" },
        
        { p: "Two statutes come up in this question. They work differently, so this page takes them one at a time." }] },
            { h: "What chapter 503 does not settle", blocks: [
        { p: "The statute does not define \"commercial purpose\", and the text says nothing about a time clock. We found no court or Attorney General source on whether an employer's clock-in system counts. The definition lists a record of face geometry, not a photograph. Whether a system that takes many photos and builds a template produces a record of face geometry is a fact about that system." },
        { p: "Chapter 503 also does not say what happens to a worker who says no. Neither the text nor this page can tell you whether you can decline and keep the job." }] },
            { h: "What this means", blocks: [
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        { p: "The privacy Act does not give an employee a request to send here. Chapter 503 is the statute that speaks to capturing a face-based identifier, and it works through notice, consent and the Attorney General. See [[when to complain to the Texas Attorney General|/texas-attorney-general-complaint/]] for that office's complaint page and what it covers. The 2024 post predates the Act, which took effect July 1, 2024; chapter 503 is the older law." }] }],
    cite: ["bc503", "agtdpsa", "bc541"],
    notSaid: [],
    related: ["texas-sensitive-data-consent", "texas-privacy-law-small-business", "can-i-sue-texas-privacy-law"],
  },
  {
    slug: "does-the-law-cover-government",
    title: "Does the Texas privacy law cover cities and police?",
    h1: "Does the Texas privacy law cover a city or police cameras?",
    description: "The Act does not apply to a state agency or a political subdivision of this state. What the text says, and what it leaves open for camera vendors.",
    short: "Not the government body itself. Section 541.002(b)(1) says the chapter does not apply to a state agency or a political subdivision of this state. The exemption names the government body. It does not name a company that sells cameras or software to one, and the chapter has no text on police or cameras.",
    sections: [
      { h: "What the Act says", blocks: [
        { p: "Section 541.002(b) of the Business & Commerce Code lists who the chapter does not apply to. The first item:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "The Attorney General's summary page says the same:" },
        { p: "Read it in: [[Texas Data Privacy and Security Act|https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act]].", src: "agtdpsa" },
        { p: "\"State agency\" is defined, in section 541.001(30):" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "\"Political subdivision\" has no definition in chapter 541. A city or a county is the everyday example, but this page cannot point to statute text in the chapter that says so." }] },
      { h: "What it means for a city or a police department", blocks: [
        { p: "On the text and ordinary usage, a city or county is a political subdivision, and a police department is part of one. If so, the chapter does not apply to it, and an access, correction, deletion or opt-out request under the Act sent to it is outside the statute. The Act also speaks to local rules:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "That is section 541.205. It is about ordinances on processing by controllers and processors. We have not found a source on how it applies to a city's own cameras." }] }],
    cite: ["bc541"],
    notSaid: [],
    related: ["texas-privacy-law-small-business", "do-i-have-to-live-in-texas", "texas-attorney-general-complaint"],
  },
  {
    slug: "voter-data-on-a-private-site",
    title: "Voter data on a private website: Texas privacy law",
    h1: "A website posts Texas voter registration data, including my address. Can I get it removed?",
    description: "The 2022 thread predates the Texas privacy Act, which excludes publicly available information. What the voter-list law says, what the Act says, and what's open.",
    short: "The thread behind this question is from March 2022. The Texas Data Privacy and Security Act took effect July 1, 2024, so it was not in play then. Under the Act today, personal data does not include publicly available information, and that term covers information lawfully made available through government records.",
    sections: [
      { h: "The question, and its date", blocks: [
        { p: "A March 2022 post on r/legaladvice about a website with Texas voter data:" },
        { p: "Read it in: [[A website is doxxing every person in Texas|https://www.reddit.com/r/legaladvice/comments/taaq0q/a_website_is_doxxing_every_person_in_texas/]].", src: "rvoter" },
        
        { p: "That post is older than the Texas Data Privacy and Security Act. The statute's own history line:" },
        { p: "Read it in: [[Texas Business & Commerce Code chapter 541 (Texas Data Privacy and Security Act)|https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm]].", src: "bc541" },
        
        { p: "The Act was not available to anyone in 2022. The poster asked for removal and we do not know how the site answered or whether it is still online." }] },
            { h: "Hiding an address: what the Secretary of State says", blocks: [
        { p: "The poster's \"protected voter\" is the poster's phrase. The Secretary of State's page describes programs for named groups. For one:" },
        { p: "Read it in: [[Address Confidentiality|https://www.sos.texas.gov/elections/laws/address-confidentiality.shtml]].", src: "sosconf" },
        
        { p: "The same page says what a general request to the office can and cannot do:" },
        { p: "Read it in: [[Address Confidentiality|https://www.sos.texas.gov/elections/laws/address-confidentiality.shtml]].", src: "sosconf" },
        { p: "Who qualifies for each program is listed on that page, not here." }] }],
    notSaid: [],
    related: ["remove-home-address", "people-search-said-no", "texas-data-broker-registry"],
  },
];

// Hub page content. Every answer slug must appear in exactly one group (the builder throws otherwise).
// Order matters: access-my-data, correct-my-data and opt-out-of-sale share one art setting, so no two of them sit next to each other here or on the home page list.
export const HUB = {
  slug: "texas-privacy-questions",
  title: "Texas privacy law questions, grouped by topic",
  h1: "Texas privacy law questions, by topic",
  description: "Every answer on this site, grouped by topic: making a request, opting out, who the law covers, enforcement, and data brokers.",
  intro: [
    "24 answers, quoted from the Texas statute and company pages.",
  ],
  groups: [
    { h: "Making a request and the clocks", slugs: ["deletion-request-45-days", "access-my-data", "deletion-request-fee", "authorized-agent-texas-privacy-request", "correct-my-data", "appeal-denied-privacy-request"] },
    { h: "Opting out and consent", slugs: ["texas-browser-opt-out-signals", "opt-out-of-sale", "one-texas-opt-out-form", "texas-sensitive-data-consent", "can-they-refuse-service"] },
    { h: "Who the law covers", slugs: ["do-i-have-to-live-in-texas", "texas-privacy-law-small-business", "childs-data", "employer-face-scan", "does-the-law-cover-government"] },
    { h: "Enforcement", slugs: ["can-i-sue-texas-privacy-law", "texas-attorney-general-complaint"] },
    { h: "Data brokers and people-search listings", slugs: ["texas-data-broker-registry", "people-search-said-no", "listing-came-back", "remove-home-address", "voter-data-on-a-private-site"] },
  ],
};
