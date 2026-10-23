# Listening Notebook

A private, browser-only listening and annotation notebook for field recordists, sound artists, ambient musicians, and curious listeners.

## Run & Operate

- `artifacts/listening-notebook: web` — run the Listening Notebook preview workflow
- `pnpm --filter @workspace/listening-notebook run typecheck` — typecheck the app
- `pnpm --filter @workspace/listening-notebook run build` — build the static app
- No database, API server, account, or secret is required by the app.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React, TypeScript, Vite
- Persistence: IndexedDB for sessions and imported audio; localStorage for theme and demo-seed state
- Audio: browser HTML audio element; no full-file decoding or generated waveform
- Offline support: web app manifest and service worker cache

## Where things live

- `artifacts/listening-notebook/src/App.tsx` — app navigation, screens, and interactions
- `artifacts/listening-notebook/src/lib/model.ts` — session model, IndexedDB, and fictional demonstration session
- `artifacts/listening-notebook/src/index.css` — theme and responsive layout
- `artifacts/listening-notebook/public/manifest.webmanifest` and `public/sw.js` — installability and offline shell

## Architecture decisions

- Session notes and imported audio stay in the current browser; there is no server sync.
- Notes duplication intentionally does not copy audio.
- Coordinates are omitted from exports unless the user opts in.
- The demo is fictional live-listening content and includes no downloaded audio.

## Product

Users can organize recordings and live listening sessions, write in separate listening perspectives, add timed observations, compare passes, assemble editable descriptions, explore vocabulary, and export notes or local backups.

## User preferences

- Keep the product private, local-first, and free of accounts, cloud audio, analytics, or AI.
- Keep sources/context, audible qualities, lived experience, recording mediation, and context-withheld notes distinct.
- Be explicit that audio codec support and browser storage vary; backups remain the user's responsibility.

## Gotchas

- Offline use requires an initial online visit so the service worker can cache the app shell.
- Browser storage can be cleared or run out; JSON backups containing audio may be very large.
- Playback support depends on browser and audio codec; sample rate and channel count are only recorded when known.

## Pointers

- See the `pnpm-workspace` skill for workspace structure and TypeScript conventions.
