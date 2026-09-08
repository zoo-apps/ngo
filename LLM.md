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

## Blue is one Blue, and it lives at zoolabs.io

The hero used to be a still of the beluga beside the words, and the corner
carried a second Blue: 380 lines with its own system prompt, its own transport
and its own turns, answering the same questions the room at zoolabs.io answers
and free to drift from it on every one of them. Two Blues is two Blues to be
wrong.

Now there is one. `src/components/Deep.tsx` shows zoolabs.io inside this page —
Blue swimming on the foundation's own footage, answering for itself, changing
clip with how it feels about what was just said, one of twenty-four feelings —
and none of that is reimplemented here. `src/components/Ask.tsx` is a door onto
the same room, so anything Blue learns to do it does in both places on the day
it learns it. `src/components/Blue.tsx` stays what it always was, the still, and
it is the room's poster: it paints at once, the frame fades over it, and if the
frame never arrives what is left is the beluga rather than a white rectangle.

`?embed=1` is the whole of what the room does differently in here: it drops the
header this page already draws and the appearance panel, which is not ours to
offer to someone reading their own page, and puts `Open Blue ↗` in their place —
the full room, at the top of the window, carrying the question already asked
(`?q=`, read by `lib/arrival.ts` over there). Nobody needs an account on either
side of that link.

The hero is `.hero` + `.hero-two`: the height left under the bar, less the
distance the stats climb back into it, in `svh` so a phone's toolbars cannot
push the ask off the bottom. The room is the larger half and it is tall — a
beluga in a letterbox is a stock photo, a beluga in a window you can talk into
is the foundation's whole argument. The frame is fetched when it is about to be
seen rather than when the page parses, because it is several megabytes of video,
and the corner disc hides while the room is on screen: a door to the room you
are already standing in is not a door.

The donation band still uses the still, `<Blue ratio='4 / 3' />`. It is a
picture there, and one live room per page is the right number.
