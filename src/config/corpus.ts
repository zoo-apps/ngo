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
 */
export const CORPUS = {
  papers: 86,
  proposals: 149,
} as const;
