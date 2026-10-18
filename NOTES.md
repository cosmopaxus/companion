# Equilibrium · Release 3.1 (Oct 17, 2026)

A fix on top of Release 3 (Journey is a world). Source: branch `journey-world`, commit `d6c95ee`. Build stamp `mvd90tmc`.

**Tap Refresh on every device after this publish.** On a computer with the app installed, Chrome will ask once to approve the new name "Equilibrium": tap **Update** that time.

- **Why:** Chrome offered to rename the installed app "Companion". A device that once ran the first build (Sep 2026, "Companion") still had that build's offline storage (`companion-…`). The app searched every storage box, oldest first, so it read the old "Companion" name card, and offline it could have opened the old app.
- **Fixed:** the app reads only its own current storage, and it deletes its older storage (`companion-…` and older `companion2-…`) on every device it opens on. Other apps on the same address (the lab's `companionlab-…`) are never touched.
- **Fresh copies:** a new version stores fresh files instead of copies the browser kept from before.
- **Name:** the app installs and titles itself as just "Equilibrium" (was the v3 build label "Equilibrium v3 · Graphics & Interface").
- No data changes: still `companion.v2`, schema 3. Your practice data is not in the storage that gets cleared.
