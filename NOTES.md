# Equilibrium v4 · painted academy · piece 3: full-art screens (+ the Oct 14 decisions)

October 14, 2026 · branch `v3-painted-academy`, latest commit "Painted academy: check-in always in the Moon Pool; lessons offer 'Reflect in your Grimoire' (mockup 06)".

## Decisions (Oct 14, Cosmo)
1. Home: academy painting with two chips, tier and hall.
2. Glass wash: ~90% (Day) so text stays 4.5:1.
3. Art: keep previews until the ChatGPT re-creations arrive, then swap (`python3 scripts/make-art.py <folder>`).
4. Gems: in the app bar and as a chip on the art.
5. Check-in: Home card → its own screen, always in the Moon Pool.
6. Titles: Compass shows the reading word; Journal is "Today's page".
7. Journal prompts: one sideways-scrolling row.
8. Night: dim the paintings for now; add the darker Canva set as Night art later.

## Piece 3
- Rest (Sanctuary): full-screen art, breath orb (4 in / 6 out), 2:00 countdown, Pause, Finish. Records nothing. Opened from Home and the map.
- Path map: the walking path's seven lessons on the grounds painting's platforms, trail, you-are-here card, next path, Hall of Ascension, Sanctuary.
- Invitation (Hall of Ascension): Enter = openTier('invited'); Stay = deferInvitation. Opened from the teacher's card and the map.
- Lessons: "Reflect in your Grimoire".

## Rules
Storage unchanged · 171 unit and 126 browser tests pass · typecheck and lint clean · iOS/Android export · contrast tested over every painting · reduced motion stops all ambient motion.

## Still different from the mockups
Top app bar above the art · taller check-in · map inside the Journey page (not full screen) · guide and seal art (piece 4) · sample words.
