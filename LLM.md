# zoo.ngo — AI Assistant Context

Zoo Labs Foundation Next.js website (community login, ZIPs voting, comments).

## Auth — Hanzo IAM

Engine: `ghcr.io/hanzoai/iam` (white-label). Consumer config in `src/config/iam.ts`.

App slug follows the canonical convention `<org>-<app>` — for zoo.ngo that is
**`zoo-ngo`** in the **`zoo`** org. The OAuth authorize endpoint is the
canonical `/v1/iam/oauth/authorize` (never `/login/oauth/authorize`).

Env vars (NEXT_PUBLIC_ prefix is needed for client-side reads in Next.js;
the `CASDOOR_` brand has been retired engine-side):

| Var | Default |
|---|---|
| `NEXT_PUBLIC_IAM_URL` | `https://iam.hanzo.ai` |
| `NEXT_PUBLIC_IAM_CLIENT_ID` | _(per-env, set in deployment)_ |
| `NEXT_PUBLIC_IAM_APP_NAME` | `zoo-ngo` |
| `NEXT_PUBLIC_IAM_ORG` | `zoo` |
| `NEXT_PUBLIC_IAM_REDIRECT_PATH` | `/api/auth/callback` |

Reference: `~/work/hanzo/iam/docs/CONVENTION.md`.

## Published counts — `src/config/corpus.tsx`

Papers, proposals and models are counted from the things themselves, twice:
`scripts/counts.mjs` counts once per build and writes `src/config/counts.json`,
which every page is compiled with; and the page counts again after it mounts, so
a page served from cache still shows today's numbers.

The counting happens in a build script, not in a page's `getStaticProps`,
because this build runs nine worker processes and then exports every page a
second time — a module-level memo holds for none of it, and a per-page fetch
spent the whole 60-an-hour GitHub allowance on one build. From the script the
whole build asks three times, once per source, which is measurable: run it under
`NODE_OPTIONS="--import <a file that wraps globalThis.fetch>"` and count.

The rules still live in `corpus.tsx` (the browser runs the same ones); the
script only decides when, and imports them through esbuild so there is no second
copy. It is the first link of `dev`, `build` and `typecheck`, like
`scripts/gui-css.mjs`, and `counts.json` is gitignored for the same reason
`gui.css` is.

| Count | Source | Rule |
|---|---|---|
| `papers` | `api.github.com/repos/zoo-apps/papers/git/trees/main?recursive=1` | directories holding `<name>/<name>.tex` — the repo's own convention, so no list of directories to ignore |
| `proposals` | `api.github.com/repos/zoo-apps/ZIPs/git/trees/main:ZIPs` | files matching `zip-<number>-*.md` |
| `models` | `huggingface.co/api/models?author=zenlm` | one per model repository |
| `proofs` | none public | typed by hand in `scripts/counts.mjs`; must agree with proofs.zoo.ngo |

Rules that hold the whole thing up:

- A page reads `useCorpus()` and never learns where a number comes from. There
  is no per-page plumbing to forget: every page is compiled with the counts.
- A source that will not answer keeps the count the build wrote. A count is
  never zero, a dash or a spinner — `keep()` refuses anything that is not a
  positive integer, and a truncated GitHub tree counts as no answer rather than
  as a short count.
- `CORPUS` is what the build counted. The menu labels in `registry.ts` — a plain
  array, read once at module load — are the one surface that shows it rather
  than the count as refreshed after mount.
- The floor lives in `scripts/counts.mjs` and is only reached on a first run
  that cannot reach the network. Every later run starts from the file it wrote.
- Unauthenticated GitHub allows 60 requests/hour/IP and a page load spends two,
  so a shared address will be refused and quietly keep the compiled numbers —
  which is also true of a CI builder behind a shared address. The cure for both
  is one same-origin route that reads all three sources with a server-held token
  and caches at the edge; `SOURCE` in `corpus.tsx` is then one fetch.
- A list on a page is a SELECTION, never a count.

## Blue is the hero, in the water — `src/components/Portal.tsx`

The panel is the clip, not an iframe: zoolabs.io is the full room (feelings,
voice, history) and the panel links it as `Open Blue ↗` rather than framing it,
because a frame brought a second header, sign-in and footer into this page.
Turns are laid along the edges, Blue left and the reader right, so the middle of
the frame, where the whale is, stays water. The panel asks the public lane
(`api.hanzo.ai/v1/chat/public`, `zen-free`) with no credential; a spent daily
allowance sends the reader to zoolabs.id.

The film is three files with one stem, all cut from the foundation's own render:

| File | What | Size |
|---|---|---|
| `public/videos/blue.webm` | AV1, 1080p, 5.04 s loop, no audio | ~390 KB |
| `public/videos/blue.mp4` | H.264 High 4.1, same loop, `+faststart` | ~900 KB |
| `public/videos/blue.jpg` | the loop's first frame, the poster | ~42 KB |

The loop opens on the source's frame 60 (the beluga centred, face up), so the
poster, the first frame and what a reduced-motion reader sees are one picture.
Re-cut from the source render with `trim` 60–121 then 0–60, `concat`, then
libsvtav1 `-crf 27` and libx264 `-preset veryslow -crf 22`; each `<source>`
names its codec so a browser skips the one it cannot decode.

- **Never an empty box.** `poster` paints before the film and stays when it is
  refused; the page head preloads it.
- **Reduced motion gets the still and no film**: there is no `autoplay`
  attribute and `preload='none'`; `Film` calls `play()` only when the panel is on
  screen and motion is welcome, and pauses otherwise.
- **The water answers** (`data-mood` on `.portal`): `listen` while a question is
  out and no word has come back — the film eases to 0.8× and the frame breathes;
  `speak` while the answer streams — 1.35×, leaned in 4%, a wash of light over
  the animal; `rest` after, back to 1×. The pace is one property on the media
  element eased a step a frame; the rest is transform and opacity. Reduced
  motion keeps the light and drops the movement.
- **Signed in or not, the panel is the same.** zoo.ngo holds no session: it is a
  static export with no `/api` routes, `AuthContext` is mounted nowhere, and the
  ask carries no cookie or bearer. A person signed in at zoolabs.id sees the
  page a stranger sees.

## Publishing — the Sites plane, `zoo/ngo`

zoo.ngo is `infra/aws/routes/sites.yaml` `zoo-ngo` in hanzoai/universe:
staticFiles over `s3://hanzo-sites/zoo/ngo` (the in-cluster S3 gateway, whose
bucket is AWS `hanzo-s3-hanzo-sites-532217001883`). GitHub Pages is off for
this repo; nothing it published is served. `.github/workflows/deploy.yml` builds
every push and pull request, holds the export to carrying the film, and on main
publishes through `hanzoai/ci`'s site action as slug `ngo`, which needs the zoo
KMS pair on this repo and the project `ngo` in org `zoo`. Until both exist the
publish step fails and says which.

A copy placed in the prefix by hand must be the WHOLE export. The copies made
in October left out `videos/`, `models/`, `document/`, `guidebook.pdf` and the
sitemaps, and the hero answered 404 for its film while every build carried it;
the bucket's version history holds no object under `zoo/ngo/videos/` before
2026-10-22.

`zooai/zoo` still carries a second lane for the same slug
(`.github/workflows/deploy.yml`, slug `ngo`, from `foundation/**`), the site
this repo replaced. Retire it before the project is created, or a push there
puts the old foundation site on zoo.ngo.
