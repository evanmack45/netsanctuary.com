// Shared helpers for the answer pages. One owner for markup helpers and for the quote rules.
export const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Inline markup: [[text|url]] becomes a link. Everything else is escaped text.
export const inline = s => esc(s).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, t, u) => `<a href="${u}">${t}</a>`);
export const stripMarkup = s => String(s).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1");
// Normalize text for quote matching: curly quotes and dashes become plain, whitespace collapses.
export const norm = s => String(s)
  .replace(/[\u2018\u2019\u02bc]/g, "'").replace(/[\u201c\u201d]/g, '"')
  .replace(/[\u2013\u2014]/g, "-").replace(/\u00a0/g, " ")
  .replace(/\s+/g, " ").replace(/\s+([.,;:!?)])/g, "$1").replace(/\(\s+/g, "(").trim().toLowerCase();

// Render the body blocks. Blocks: {p}, {q, src}, {ul:[...]}.
// Consecutive quotes from the same source share one blockquote and one source line.
export function renderBlocks(blocks, sources) {
  const out = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.p) out.push(`<p>${inline(b.p)}</p>`);
    else if (b.ul) out.push(`<ul>${b.ul.map(x => `<li>${inline(x)}</li>`).join("")}</ul>`);
    else if (b.q) {
      const s = sources[b.src];
      if (!s) throw new Error("unknown source " + b.src);
      const run = [b];
      while (blocks[i + 1]?.q && blocks[i + 1].src === b.src) run.push(blocks[++i]);
      out.push(`<blockquote class="quote">${run.map(r => `<p>${esc(r.q)}</p>`).join("")}<footer>From <a href="${esc(s.url)}">${esc(s.title)}</a>${s.note ? ", " + esc(s.note) : ""}.</footer></blockquote>`);
    } else throw new Error("bad block " + JSON.stringify(b));
  }
  return out.join("\n      ");
}

export const ymd = d => d.toISOString().slice(0, 10);
