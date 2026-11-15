# Educational model and limitations

ORBITA AI teaches relationships and trade-offs. It must not be used for real mission planning, radiation protection or life-support decisions.

## Spatial assumptions

- Invented 8 × 6 lunar terrain map. Each tile represents 20 m. Modules occupy one tile; all have equal footprint.
- Utility links are automatic for Manhattan distance ≤3 tiles. A module is operational only if a chain reaches Habitat. Links may pass beneath crater tiles; craters only block construction.
- Average nearest connected-link length × 2% is the modeled distribution loss, capped at 24%. This is a teaching proxy, not a physical cable simulation.
- Solar power is 22 units per shift before modifiers: ×1.3 on ridge; ×1.2 east-facing, ×0.8 otherwise; ×(1−link loss). Rotation affects only Solar Array operation.
- Water Processing extracts 7 units per shift on ice and 2 elsewhere, if connected and powered.
- A connected battery enables a 100-unit energy reserve; otherwise the reserve capacity is 30.
- Battery fault propagation affects modules one grid step from the battery. More spacing reduces that event's consequences but can make the service network less efficient.

## Operations assumptions

Four astronauts are represented collectively. All resources are normalized game units, not kg, liters, kWh or percent of an actual spacecraft capacity. Health and morale are abstract indexes.

Each shift:

- Power demand = 4 baseline + 7 × life mode + 5 × farming mode + 6 × science mode + 4 extraction, for connected active systems.
- Life modes: Eco 0.65, Normal 1, Boost 1.4. Farming: Standby 0, Normal 1, Intensive 1.6. Science: Standby 0, Normal 1, Intensive 1.7.
- Available power = stored energy + generation. If insufficient, all powered production is multiplied by available/demand, capped at 1.
- Oxygen change = −7 + 9 × life mode × power fraction.
- Water change = −6 + 4 × life mode × power fraction + extraction × power fraction − 3 × farming mode × power fraction.
- Food change = −5 + 7 × farming mode × power fraction.
- Science = rounded 4 × science mode × power fraction.
- Oxygen, water or food below 25 each cost 8 health; severe power shortfall (under 50% supplied) costs 6 more health. Unstressed morale gains 2; shortages cost 6.
- Reserves are capped at 100 (energy at its battery capacity). Zero in any tracked reserve or crew health ends the attempt. Insufficient science at the end is a failed objective, even if the crew survives.

A turn is an abstract teaching shift. Scheduled shadow shifts produce 12% of nominal solar energy. They are not a model of the actual lunar day, topography or polar lighting. Crop yields are compressed into immediate production to keep sessions short.

## Emergencies

All events and costs are scripted, disclosed choices, not forecasts. Deferred dust cleaning permanently reduces solar generation by 25% for that attempt. Water and crop repairs compete with reserves and science.

For a connected shelter, normal transfer costs health = max(0, (Habitat-to-shelter grid distance −2) ×4). Protected transfer reduces that multiplier to 1, at a higher energy cost. An unavailable shelter costs 35 or 22 health respectively. Continuing surface work costs 42 health. These invented values demonstrate the value of shielding and shorter transit; they do not represent radiation dose, real exposure thresholds or an actual protective transport system.

Mission resources reset between attempts and missions. Layout carries forward for revision. Best scores and achievements persist in the same browser.

## Provenance and claims

ChatGPT/Codex assisted the development of code, text, shaded SVG module illustrations and procedural CSS artwork, using system fonts and some Unicode interface symbols. Visible labels identify SI-generated artwork and HTML metadata discloses development assistance. The Frontier edition uses illustrated miniatures rather than a real-time 3D renderer. It has no runtime network requests, external assets or dependencies. Two NASA educational resources support the Science Notebook and related mission debriefs; see `NASA_SOURCES.md`. No NASA numerical dataset, challenge Resources dataset, AI service or sensor feed is integrated. Resource quantities remain teaching assumptions. Official challenge metadata and eligibility still need team verification before submission.
