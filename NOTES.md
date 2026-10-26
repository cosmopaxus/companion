# Release 4.5.1 · alpha · no Stress card on the asleep Compass (Oct 26, 2026, ~4:45 PM PT)

- Source: branch `release-4.5.1` `b273c63` = `release-4.5` `e9d7c20` + the fix. Build `mvpwf7b7`. Label still "4.5 · alpha" (no What's new card for this one).
- Cosmo (4:32 PM): "it needs to be gone immediately". The asleep Compass (under 3 check-ins this week) showed a lone Stress card with no number and no elements. Removed. The awake page keeps Stress under the four elements until the Grok bot's Stress addendum (Cosmo: Stress never shows alone; its numbers belong in the deeper look).
- Tests: unit lab 909/909, live 902 + 7 skipped; tsc clean; lint at baseline; live browser (no database) release45 + needle specs 28 passed, 2 skipped.
- Rollback: `2096364` (4.5).

# Release 4.5 · alpha (includes 4.4) · 0-100 evening check-in, Compass Stress row, First steps for Simple, Then vs now at day 14, Beta feedback tab (Oct 26, 2026)

- Source: branch `release-4.5` `e9d7c20` on `then-feedback` `b3b7090` (4.4) on `release-4.3.2` `1de92f0`. Build `mvptx029`. Same source as the lab `ae27166` (build `mvpppt3m`).
- Cosmo's go (Oct 26, ~3:00 PM, after the Grok bot's re-check of `mvpppt3m`: no blockers): "publish this build to live as it is".
- Live database: needs setup v1.5 (`supabase/schema.sql`, SHA-256 `9157a821…`) + Cosmo on `feedback.team` before this push (the feedback tab writes there).
- Data: optional `fine`/`inner` on evening check-ins (0-10 fields stay the truth); draft key `evening100:<day>`; storage `companion.v2`, schema 4 unchanged. Research `app_version` 4.5.
- Tests: unit lab 909/909, live 902 + 7 skipped; tsc clean; live browser (no database) 618 passed, 80 skipped, 6 known (p5:29 Mondays, settingsTrim:40 lab-only heading, updates:40 old note text; phone + desktop).
- Rollback: `96f5a54` (4.3.2).

# Release 4.3.2 · alpha · practice levels + the staff card's full cleared record (Oct 26, 2026)

- Source: branch `release-4.3.2` `1de92f0` = `joining-open` `8165eb2` (4.3.1) + `practice-levels` `3ebfb63` + `staff-card-union` `44b7466`. Build `mvpfy8wr`.
- Cosmo's go (Oct 26, 8:04 AM: lab, then the full push live; the What's new wording approved ~9:00 AM).
- Members: the Other practices climb 3 → 5 → 10 minutes (teacher offers the next step after five days); staff cards list every question an earlier follow-up cleared, with dates. No data, storage-key or database change.
- Tests: unit lab 865/865, live 858 + 7 skipped; lab browser 602 passed; live browser (no database) 581 passed, 72 skipped; known: settingsTrim:40 (lab-only heading), updates:40 (old note text), p5:29 (garden stage on a Monday).
- Rollback: `8a37eba` (4.3.1).

# Release 4.3.1 · alpha · Hall joining OPEN on live (Oct 25, 2026, ~10:50 PM PT)

- Source: branch `joining-open` `8165eb2` = `staff-card` `1f2f1e2` (the 4.3.1 staff card) + `JOINING_OPEN` true on live. Build `mvouii1c`.
- Cosmo's go (Oct 25, 10:06 PM "go for it", 10:20 PM "Yes, do 1-4").
- Live database: staff = Cosmo (the Grok bot once it signs in to live); `heads_up_url` set; function `ministry-heads-up` deployed (Verify JWT off, GMAIL_USER + GMAIL_APP_PASSWORD; no label). Ping check: 200 {"sent":0}.
- Tests: unit lab 849/849, live 842 + 7 skipped; full live browser suite 576 passed, 72 skipped, 2 known (settingsTrim:40 expects the lab-only heading).
- Rollback: `a07afa0` (4.3, joining held).

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
