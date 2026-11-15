# Verification report — 14 November 2026

## Submission preparation update — 15 November 2026

Added a Science Notebook, contextual NASA-resource explanations in debriefs, source mapping, SI disclosures in text and metadata, and visible SI artwork labels. Two official NASA resources were reviewed; numerical rules are unchanged. Syntax and all five automated engine walkthroughs pass after the update. The six-slide demonstration was rendered and visually reviewed, including correction of an initially missing screenshot. Its standalone web viewer contains exactly six exported slides and keyboard/button navigation. This new update is local and has not been uploaded or browser-tested on the public site. The published-site browser verification below applies to the previous release.

## Published-site browser verification — 15 November 2026

The team published https://sllegg.github.io/orbita-ai/. This public HTTPS site was tested in the in-app browser, resolving the earlier local-file testing blocker for the tested flows.

Verified through actual browser controls: menu and briefing; individual Habitat placement; training layout with eight connected modules; live engineering report (33.5 generation, 7 water, 20 m shelter access); mission launch; emergency pause; cleaning choice and immediate costs; reload and exact emergency restoration via Resume; all three shifts of Mission 1; successful debrief (800 score, 12 science, 100 health); three achievements; Mission 2 unlock, briefing and retained layout. A 390 × 844 viewport check of the builder showed no horizontal page overflow (reported page width 375, viewport 390). Desktop artwork was visually inspected. Captured browser error log was empty.

Screenshot: accompanying `ORBITA-live-verified.jpg`. This was a browser walkthrough of Mission 1 and the transition to Mission 2, not a browser playthrough of all five missions. The remaining missions retain automated-engine verification only. Mobile operations, exhaustive accessibility, cross-browser and physical-device testing remain pending. No contest submission was performed.

The historical local-file blocker and checklist below describe the earlier delivery; the tested items above are now verified on the published site.

## Frontier visual update — 15 November 2026

Added original shaded SVG miniatures for all eight modules, a lunar-outpost menu diorama, mission illustrations, terrain decoration and visible automatic service links. The resource rules and saved-game key are unchanged. JavaScript syntax checks, all five engine walkthroughs, minimal-DOM rendering checks and standalone/source consistency verification were rerun successfully. The previous real-browser limitation below still applies; the new appearance has not been visually verified in a browser.

## Passed automated checks

`node --check game.js` passes. `node tests/engine-tests.cjs` passes against the shipped game source using a minimal DOM and localStorage substitute.

Covered behaviors:

- Eight-module training layout forms a complete Habitat-rooted utility network.
- Moving solar panels outside the connected network eliminates their generation.
- Changing solar orientation changes output; moving Water Processing away from ice reduces extraction.
- Removing the battery reduces reserve capacity to 30.
- Longer shelter routes increase modeled storm injury.
- An unresolved emergency blocks the next shift; resolving twice has no additional effect.
- Deferred cleaning reduces future solar output, rather than granting a one-time bonus.
- Every main emergency choice executes and keeps reserve values within bounds.
- All five missions can be completed; low-energy shadow operation can fail.
- Serialization and a fresh engine context restore an in-progress attempt.
- Menu, briefing, builder, operations, emergency and debrief rendering execute against the minimal DOM contract.

### Successful engine walkthroughs

All used the optional training layout. Missions 1–4 used Normal operating modes and the first emergency choice. Mission 5 used intensive science on shifts 1–3, Normal on shift 4, intensive on shifts 5–6; greenhouse Normal for shifts 1–3 then Standby. This is one feasible strategy, not an assertion of optimal balance.

| Mission | Shifts | Science / objective | Final energy | Result |
|---|---:|---:|---:|---|
| First Footprint | 3 | 12 / 4 | 95 | Pass |
| Closed Loop | 4 | 16 / 10 | 100 | Pass |
| Into the Dark | 5 | 20 / 16 | 59 | Pass |
| Solar Warning | 5 | 20 / 20 | 100 | Pass |
| Beyond Survival | 6 | 35 / 32 | 36 | Pass |

## Browser testing: blocked, not passed

No completed real-browser playthrough or screenshot verification is claimed. Chrome was unavailable to the browser tool. The available in-app browser rejected the local `file:` URL under its browser security policy. That restriction was not bypassed. Engine checks do not verify browser layout, actual pointer/keyboard behavior, fonts, accessibility-tree quality or real browser storage.

Before publication, open the standalone HTML yourself in a modern browser and check:

- [ ] Menu and briefing display correctly; start the first mission.
- [ ] Place each module, select a placed module to move it, rotate the solar array, try occupied and crater tiles.
- [ ] Compare connected/disconnected markers and the engineering report before and after movement.
- [ ] Load training layout, launch, change modes and advance. Confirm emergency buttons unblock operations.
- [ ] Complete one mission, read debrief, unlock the next mission and retry.
- [ ] Reload during operations and use Resume expedition. Confirm exact resource and shift restoration.
- [ ] Open Model & assumptions, close with button and Escape; navigate core controls with Tab/Enter/Space.
- [ ] Check a narrow phone viewport for clipped controls or horizontal scrolling.
- [ ] Complete the final campaign and verify all certifications and achievements.
- [ ] Repeat a smoke test on the actual GitHub Pages URL after authorized publication.

## Remaining limitations

- Browser testing and visual QA remain pending because of the tool restriction above.
- Balancing has been checked for feasible success/failure paths, not with classroom playtesting.
- Automatic links are now drawn between modules within service range, with cyan highlighting for connected networks. Manual cable routing is not implemented. Placement uses click/tap, not drag-and-drop.
- No real NASA datasets, challenge Resources or external AI service are integrated. The official challenge year, URL and submission requirements are not verified.
- Module artwork now uses inline SVG; some interface symbols still depend on system fonts. Storage depends on browser policy and origin. Screen-reader and mobile-device testing are pending.
- No publishing or Space Apps submission has been performed.
