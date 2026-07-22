# KARF OS

KARF OS (Komuniti Affiliates Raja Fatin Operating System) is the planned operating system for the Komuniti Affiliates Raja Fatin community.

## Current sprint

Sprint 0 — Project Foundation. This sprint establishes the application tooling and documentation structure only. Product features, authentication, portals, and database schema are intentionally out of scope.

## Technology stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Supabase JavaScript and SSR packages
- npm

## Local setup

1. Install a current Node.js LTS release.
2. Clone this repository and open its folder in a terminal.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Add your local Supabase URL and anon key to `.env.local` when they become available.
6. Run `npm run dev`.
7. Open `http://localhost:3000` in your browser.

## Secret safety

Never commit `.env.local`, passwords, access tokens, API keys, or a Supabase service-role key. Only placeholder values belong in `.env.example`.
