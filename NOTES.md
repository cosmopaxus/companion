# Equilibrium v4 · painted academy · piece 4: familiars and seals

October 14, 2026 · branch `v3-painted-academy`, commit c513080 "Painted academy piece 4: familiars and seals". The source zip now includes `.git`, so history carries forward (the piece-3 zip had none; this repo starts with a baseline commit of piece 3 round 2).

## Decisions (Oct 14, Cosmo)
1. The familiar follows the lesson: a lesson's familiar is its element's (Fire → Salamander, Air → Sylph, Water → Undine, Earth → Gnome). A lesson with no element uses the hall it's taught in.
2. Each hall keeps its own familiar: the Gnome asks the Journal prompt in the Herb Garden.
3. No "Choose your guide" screen (mockup 12) for now; no new setting or saved data.

## Piece 4
- Home guide card: "From your guide · <name>" with the familiar's portrait (52 px) in place of the path icon.
- Lesson teaching card: the familiar (56 px) in place of the medallion. Mastered / locked / in preparation are still written on the page.
- Journal: when a prompt is picked, the Gnome (44 px) sits beside it.
- Seals: Home Compass row (32 px), Compass element bars (42 px), hall chips on the art (24 px), invitation (48 px).
- Portraits bob 2 px over 4.2 s; reduced motion holds them still.
- New files: `src/theme/familiars.ts`, `src/ui/academy/Familiars.tsx`, `familiarSources(.web).ts`, `public/art/familiars/`, `public/art/seals/`, `shots/painted5.spec.ts`.

## Rules
Storage unchanged · 175 unit and 135 browser tests pass (3 skipped) · typecheck and lint clean · iOS/Android export · no text on the new art · reduced motion stops all ambient motion · no new library.

## Still different from the mockups
Preview-size art (170 px faces, painted backgrounds; cut-outs on the ChatGPT list) · no Choose-your-guide screen · mockups show Undine everywhere.
