/**
 * How much Zoo Labs has actually published.
 *
 * Counted from the sources, not estimated: one entry per paper directory in
 * github.com/zooai/papers, one per proposal in github.com/zooai/ZIPs. The site
 * used to say "130+ papers" in eight places, which was both wrong and eight
 * separate things to be wrong. It says this instead, once.
 *
 * Recount in a papers checkout with `ls -d -- *_/ | grep -vE
 * '(figures|pdfs|site|shared)' | wc -l`, and in a ZIPs checkout with
 * `ls ZIPs | wc -l`.
 *
 * The same rule now covers the models and the proofs, for the same reason:
 * /about/ and /research/ each carried their own literals, and the two pages
 * had already drifted — one published 7 papers and 102 proposals while the
 * home page published 86 and 149, all four numbers describing the same two
 * facts. A page states a count by reading it from here.
 *
 * A list on a page is a SELECTION, never a count. /research/ shows seven
 * papers and eight proposals because that many fit; the number beside them
 * still comes from this file.
 */
export const CORPUS = {
  papers: 86,
  proposals: 149,
  /** Open-weight Zen releases on huggingface.co/zenlm. */
  models: 45,
  /** Machine-checked proofs in github.com/zooai/proofs — Lean 4, plus one TLA+. */
  proofs: 15,
} as const;
