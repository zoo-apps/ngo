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
