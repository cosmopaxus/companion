# Equilibrium · Release 4.3 · alpha (Oct 25, 2026)

Hall of Spirit H5 (the four safe-use cards, Be Well's private member records and follow-ups; joining still held on live) + the Settings trim (tools on Progress, a shorter Settings) + Bug pass 7 (the Grok bot's B1–B15 + Q1, REVIEW_LIST #10–#13: tiles open a note of their kind, each step has its own page, the evening check-in is final once saved). Everyone signs up once more (the safe-use cards changed the forms); journals and saved data stay.

Source: branch `bug-pass-7` `6d4d378`. Build stamp `mvos6i7z` (build-target.txt: live). Live database: setup v1.4 (`supabase/schema.sql`, SHA-256 `a257b3ee…`) run Oct 25, ~9:45 PM PT. Rollback: the previous site is commit `90221bd` (Release 4.2).

Checked: the Grok bot's re-check on the lab, 20 of 20 · unit lab 840/840, live 833 + 7 skipped · full live browser suite on a no-database live build 533 passed, 106 skipped; 10 load flakes passed on rerun; 1 lab-only spec (settingsTrim "Lab · preview only") doesn't apply to live.

---

# Equilibrium · Release 3.4 · Nothing you type gets lost (Oct 18, 2026)

Practice saves Piece B on top of Release 3.3. Source: branch `practice-saves`, commit `ba408a8`. Build stamp `mve3vjxs`.

**Tap Refresh on every device after this publish**, so every device runs the same version before it syncs.

- **Drafts kept on the device** until saved (or canceled on purpose): a lesson's note, first-time setup (comes back to the same step), the goal sheet (new goal, edits, the "what did it take" line), the area editor, a soul-mirror trait, and a trial's "what draws you". "Start over" / "Undo my changes" where it helps. Drafts waiting to be written are written when the app is closed or hidden.
- **Today's lesson note can be edited** after marking it practiced.
- **Teaching cards reopen on the card you left.**
- **Home is tidier:** the path ("Foundation") and hall ("Herb Garden") pills are gone; the streak flame stays.
- The guided Compass still keeps nothing until Save (as built in Release 3.2).
- No data changes: still `companion.v2`, schema 3. Drafts use the existing drafts storage.

Tests: 279 unit; browser 198 pass on the full run, and the teaching, hall, drafts and schools specs (67) pass on the final build (2 sandbox-only account tests fail, as before).
