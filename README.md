# ORBITA AI — Lunar Mission Trainer

An independent, English-language educational strategy game for four-crew lunar base operations. Intended to address the team-supplied NASA Space Apps brief, “Create a Training Simulator for Young Astronauts.” Verify the official challenge title, year, URL and submission rules before submitting. No official affiliation is implied.

The **ORBITA / Frontier** visual edition adds an illustrated lunar-outpost menu, eight distinct shaded vector miniatures, terrain features, visible service connections and a cyan/orange command-deck interface. The miniatures are original SVG illustrations, not a real-time 3D engine. No assets need downloading.

## Play

Open `index.html` in a modern browser, with `style.css` and `game.js` beside it. No installation, account, API key or internet connection is required. Alternatively use the accompanying standalone `ORBITA_AI_Lunar_Mission_Trainer.html`, which contains the same game in one file.

Select **Begin expedition → Accept mission & design base → Load training layout → Launch mission** for a quick start. The training layout is an optional worked example; all eight modules can also be placed individually. Click a module in the manifest, then an empty tile. Clicking a placed module selects it for moving. Rotate the solar array and compare the live engineering report.

Progress is stored in this browser using localStorage. Storage is address-specific: opening the standalone file and playing on GitHub Pages use different saves. Private browsing, browser cleanup, some local-file policies or blocked storage can prevent persistence. An in-game warning appears when saving fails. No server stores personal data.

## What is included

- Start menu, instructions, mission briefings and sequential unlocks.
- Eight-module base builder, blocked terrain, ice and ridge terrain, rotation, automatic utility connections and a live engineering report.
- Oxygen, water, food, power, crew health and morale; adjustable life support, farming and science modes; next-shift forecasts.
- Five progressively longer missions: First Footprint, Closed Loop, Into the Dark, Solar Warning and Beyond Survival.
- Dust, water leakage, crop stress, battery fault and solar particle event decisions. Solar storms account for shelter access and protection during transit.
- Learning debriefs, transparent scoring, five achievement types, replay and saved attempts.
- Responsive layout, native keyboard controls, visible focus indicators and no reaction-time requirements.

## GitHub Pages preparation — no publication performed

1. Review the game and the browser checklist in `TEST_REPORT.md`.
2. When ready to publish, create or choose a GitHub repository. Upload the contents of this folder so `index.html`, `style.css` and `game.js` are at the repository root. Include `.nojekyll`. Keep this README and model notes with the source.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the branch containing your files, select **/(root)** and save.
4. Wait for the Pages deployment to complete and open the published URL shown by GitHub. Test that URL on desktop and phone; local-file saves do not transfer.
5. Add that tested public URL to your Space Apps project only after the team confirms publication and submission details.

Official GitHub instructions: https://docs.github.com/en/pages/quickstart

Do not put credentials or private files in the repository. A Pages site is publicly accessible. This delivery has neither created a repository nor published a site nor submitted a NASA entry.

## Model and provenance

Read `MODEL.md`, or use **Model & assumptions** in the game. All quantities, terrain and events are original, simplified teaching assumptions. No challenge Resources dataset, live telemetry, real orbital illumination model or generative AI service is integrated. ORBITA's advice is a deterministic rule system. The name “AI” is branding.

The previous file was found at `Downloads/ORBITA_AI_Lunar_Mission_Trainer.html`. Its original resource-allocation prototype was inspected; this version replaces the single 30-day slider exercise with the requested campaign and base design system. The original download has not been modified.

## Verification

With Node.js installed, from this folder run:

```text
node --check game.js
node tests/engine-tests.cjs
```

These are engine and minimal-DOM checks, not real-browser tests. See `TEST_REPORT.md` for measured results and pending browser checks.
