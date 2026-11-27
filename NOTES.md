# Build mwy7o118 · 5.0.1 · alpha · Stress and Demands run low to high, and a pause kept past 100 moves, from chat 20 (Nov 26, 2026, ~4:10 PM PT)

- Source: branch `claude/layer2-calendar` `844bb6d` = `2e05a03` (the session pause) + the sliders (`f9948f3`), the moves reader (`54c7fcf`) and the sliders' browser test (`844bb6d`; the branch head `ebe9704` changes that test only). Build `mwy7o118`. Same source as the lab build `mwy7nf2i`. The version stays 5.0.1 and there is no new What's new line (Cosmo did not ask for one).
- The sliders (Cosmo's lock, Nov 26, 1:05 PM PT, and his four picks, 3:15 to 3:16 PM PT): on the evening check-in, Stress and Demands read "Not at all" on the left and "Very" on the right like every line; their three shades are the same, turned, so the bright end is still the good end; the end pictures swap with the words (feather and bolt, short and tall stack) in the light and the middle shade; the line is brightest at the bright left end; the strip after Done and the reopened check-in draw them like every row; the right arrow is a higher saved number. Display only: no saved value, key or format changes (Stress 40 stays 40).
- The moves reader (Cosmo's pick, Nov 26, 3:23 PM PT: "Nothing is trimmed: a pause the merge puts back may sit past 100, and the app keeps it when it reads her moves"; the Equilibrium App bot's check the same day): `readMoves` now skips a line that is over its limit and never stops at it; her day and slide moves count toward 100, her pauses toward their own 100. Before, on a rhythm at 100 moves, a pause the merge had put back was cut on the next load while her session still named it. Making a new move or pause still stops at 100 in all. No shape changes: storage `companion.v2`, schema 4 unchanged. Nobody signs up again.
- Live database: no step by this build. The old-copy guard is on at `mwy4gldf`; raising it to this build is the Equilibrium App bot's step, on Cosmo's go (Nov 26, 3:35 PM PT: "My go for the Equilibrium App bot to raise min_build on the live database to the new live number, right after the ship"). Until then a copy on `mwy4gldf` still cuts a put-back pause at 100.
- Tests: unit 1,444 passed + 3 skipped (1,436 + 8 new); tsc clean; lint at baseline (2 errors, 12 warnings). Browser: `e2e/sliderDirection.spec.ts` 4/4 and `e2e/sessionPause.spec.ts` 8/8 on this exact live package served locally with outside hosts blocked in the browser, phone 390 + desktop 1366, Night + Day. Full lab suite on a database-free build: 493 passed, 3 failed, 420 skipped; none of the three is a slider or pause screen; two passed on a rerun; the third (`e2e/p3c.spec.ts:46`, a goal's second step, phone) is unsteady on the shipped build `mwy4fx9u` too (1 of 6 there, 3 of 6 here).
- Rollback: the files of `83c08d5` (5.0.1, live mwy4gldf), keep NOTES.md.

# Build mwy4gldf · 5.0.1 · alpha · the session pause from chat 18 (Nov 26, 2026, ~2:35 PM PT)

- Source: branch `claude/layer2-calendar` `2e05a03` = `c1783e3` (5.0.1) + the session pause (`9018b0b`) and its browser test (`2e05a03`). Cosmo's go, Nov 26, ~2:20 PM PT: "Ship the session pause: go. Test app and live together from 2e05a03". Build `mwy4gldf`. Same source as the lab `88fe74e` (build `mwy4fx9u`). The version stays 5.0.1 and there is no new What's new line (he did not ask for one).
- What it adds: two switches in the plan sheet, "Pause my rhythm · On prep days · On integration days", shown only with a current rhythm and days above 0, both off until she turns them on. While paused there are no days on, the session day included; a weekday rhythm keeps its weekdays and a beat rhythm starts a fresh run on the first day after the pause. The Calendar's rhythm door reads "Rhythm · paused until <day>" while today is inside the pause. The sheet's note moved behind one info icon by the title. Cancel or move part way: the pause ends today (his pick A). Decisions: `claude/equilibrium-build-18-decisions.md` and parts 2 to 4.
- Data: two optional saved shapes, checked by the Equilibrium App bot (Nov 26): a rhythm move `{ type: 'hold', from, until, at }` and a session mark `rhythmHold { prep?, integration?, rhythmId, moveAts }`. Storage `companion.v2`, schema 4 unchanged. No form changed: nobody signs up again.
- Live database: no step by this build. The old-copy guard (`sync_guard.min_build`) is still OFF on live; raising it to this build is the Equilibrium App bot's step, on Cosmo's go (asked in #app right after this push). Until then an old copy of the app can drop a pause on sync; the merge rules keep a pause her session still names.
- Tests: unit 1,436 passed + 3 skipped (1,401 + 35 new); tsc clean; lint at baseline (2 errors, 12 warnings). Browser: `e2e/sessionPause.spec.ts` 8/8 on this exact live package served locally with every outside call blocked (none tried), phone 390 + desktop 1366, Night + Day; full lab suite on a database-free build 496 passed, 0 failed, 420 skipped.
- Rollback: the files of `f0f2e4d` (5.0.1, live mwxxh9m8), keep NOTES.md.

# Release 5.0.1 · alpha · the calendar picks from chat 16 (Nov 26, 2026, ~11:35 AM PT)

- Source: branch `claude/layer2-calendar` `c1783e3` = `40329e3` (5.0) + Cosmo's chat 16 picks: Settings "Dosing tools · On · your rhythm and sessions", the rhythm page's how-to line out, Today's Start-here tile named Calendar; Day mode session colors (#6C7FAF, #B5821F, #8F6410); the week bars match the Calendar (lines and diamond, no solid tints); "‹ Today" on the Calendar only when she came from Today's week bar; the check-in's dose cards fold back in 320 ms (reduce motion: a plain swap). What's new 5.0.1 (Cosmo: "B, but you make the 5.0.1 words"). Build `mwxxh9m8`. Same source as the lab (build `mwxxgl60`).
- Live database: no step. Data: none (the "came from" flag lives in navigation memory only); storage `companion.v2`, schema 4 unchanged. No form changed.
- Tests: unit 1,401 passed + 3 skipped; tsc clean; lint at baseline. Browser: the live package served locally, outside calls blocked, Night + Day, 390 + 1366: the week bar's lines and diamond, Day colors read from the page, "‹ Today" shows only from the week bar and stays through a day page, the first view still holds this week and three ahead (last week ends at 483 of 777 px at 390), the fold runs 52 → 0 px in ~330 ms, a 5.0 member sees 5.0.1 once. Full lab suite: 479 passed; every failure re-run green on a database-free build or alone (timing under load).
- Rollback: the files of `2691bb2` (5.0, live mwxvdbdn), keep NOTES.md.

# Release 5.0 · alpha · the What's new note for everything since 4.9.2 (Nov 26, 2026, ~10:50 AM PT)

- Source: branch `claude/layer2-calendar` `40329e3` = `d3f9b60` + RELEASE 5.0 and Cosmo's seven locked lines (8:08 AM PT, `claude/equilibrium-release-5-0-note-locked.md`). Build `mwxvdbdn`. Same source as the lab `5923ea0` (build `mwxvckfj`).
- Live-first (Cosmo, Nov 25, 3:01 PM): test app and live from the same commit, build chat 17.
- Live database: no step. Data: none; storage `companion.v2`, schema 4 unchanged. No form changed: nobody signs up again.
- Tests: unit 1,390 passed + 3 skipped; tsc clean; lint at baseline (2 errors, 12 warnings). Browser: e2e/updates 18/18 (lab build, phone + desktop); the live package served locally with all outside calls blocked: a 4.9.2 member sees the 5.0 note once, Night + Day, 390 + 1366, Settings reads "5.0 · alpha", no page errors.
- Rollback: the files of `433ac62` (live mwx7fq2i), keep NOTES.md.

# Release 4.8 · alpha · Simple first, birth month + year, room to write, why you're here (Nov 6, 2026, ~11:40 PM PT)

- Source: branch `night-one` `3ddea95` = `release-4.7` `a639baf` + night one + `onboarding-why-heard` `06cc9d1` + the § 9 follow-up. Build `mw62jtta`. Same source as the lab `1b4bba2` (build `mw5xhnwp`).
- Cosmo's go (Nov 6, 11:10 PM: "push live if it's safe"), after the Grok bot's re-check of `mw5xhnwp` (no blockers) and the 4.8 checkpoint.
- Upgrade check before the push: a journey saved by the 4.7 code opens in 4.8 exactly as 4.7 reads it (no record dropped, same counts); real browser upgrade 4.7 site → 4.8 site on the same storage: history, Light and check-ins intact, Advanced choice kept but Simple shown; storage `companion.v2`, schema 4 unchanged.
- Live database: no step. Data: optional `profile.birth`, `arrival` (incl. `asMinor`).
- Tests: unit lab 999/999, live 992 + 10 skipped (run at a daytime clock; after ~4 PM PT a few seed-based specs fail on 4.7 too, a test-seed date issue). tsc clean. QA: phone + desktop, Night + Day, no page errors.
- Rollback: branch `release-4.7-live` = `ddc3fbe` (4.7).

# Release 4.6 · alpha · Reminders, Check in from the Compass, Stress in the deeper look (Oct 31, 2026, ~11:45 AM PT)

- Source: branch `checkin-door-on-reminders` `e66f5be` = Reminders A + B `9038e53` + the Compass check-in button `0ef4974` + the Grok bot's next batch (#1 Journal heading, #2 Stress to Over time, #4 sliders from the middle, #8 Safety & Path card with Dosing tools off, #9 latest still-due reminder). Build `mvwqmkda`. Same source as the lab `c794848` (build `mvwnz1mc`).
- Cosmo's go (Oct 31, 11:01 AM: "push live"), after the Grok bot's re-check of `mvwnz1mc`: 16 of 17 pass + 1 by design, 0 blockers.
- Live database: no step. Research `app_version` stays 4.5. Data: optional `prefs.reminders` (Reminders); storage `companion.v2`, schema 4 unchanged.
- Tests: unit lab 923/923, live 916 + 7 skipped; tsc clean; live browser (no database) 634 passed, 80 skipped, 14 failed = known (settingsTrim:40 lab-only heading, updates:40, v2:234/375/425) + reports:39 (a session planned "tomorrow" = Nov 1, off the October calendar) + release4:97 (a stale "4.5" in the spec; fixed in `e66f5be`, reran green).
- Rollback: `d8ea014` (4.5.1).

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
