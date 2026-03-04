# V2 Pitch Deck Brief — ECR 2026 Vienna

## What to build
A React + Vite + Tailwind pitch deck at `v2/` in this repo. 7 slides, keyboard-navigable (arrow keys), dark theme matching beswift.ai.

## Structure (from the pptx)
1. **TITLE** — "Outthink the market." + "ECR 2026 · Vienna · March 2026" + SuperSwift bolt logo
2. **THE PROBLEM** — "AI without context is just noise." + 4 pain point cards (Context is fragmented, No shared vision, AI tools don't talk, Strategy stays tribal) + bottom line: "every AI initiative underperforms because it lacks unified GTM context"
3. **INTEL** — "Know your battlefield." + 3 features (Company Intel, Competitor Radar, Market Sizing) + **rendered UI mockup** on right side
4. **MONITOR** — "Never miss a signal." + 3 features (Regulatory Alerts, KOL Tracking, Signal Detection) + **rendered UI mockup** on right side
5. **SYNTHESIZE** — "Connect the dots." + 3 features (Knowledge Graph, Pattern Recognition, Evidence Mapping) + **rendered UI mockup** on right side
6. **STRATEGIZE** — "Plan with precision." + 3 features (GTM Playbooks, Scenario Modelling, Insight Reports) + **rendered UI mockup** on right side
7. **DELIVER** — "Execute with confidence." + 3 features (Launch Roadmaps, Stakeholder Briefs, Feedback Loops) + **rendered UI mockup** on right side

## Style
- Dark background: `#050A18`
- Accent: `#FF4D2A` (SuperSwift orange-red)
- Font: DM Sans
- Slides 3-7: left side = text (pillar name, tagline, 3 feature bullets), right side = rendered UI mockup
- Left accent bar on pillar slides (thin vertical stripe)
- Progress bar at top
- Slide counter bottom-right
- Clean, premium, minimal — like beswift.ai

## UI Mockups (CRITICAL — these are CODE, not images)
Each pillar slide (3-7) needs a **rendered, interactive-looking UI mockup** on the right side. These should look like simplified app screens with real data. Use "NeuralStent" / "NeuralStent Technologies" as the company being analyzed throughout (a fictional MedTech AI company in the neurovascular stent space).

Example mockup ideas:
- **INTEL**: Knowledge graph visualization — nodes (companies, people, products, regulations) connected by edges. Show NeuralStent at center with connections to competitors (CerebroFlow, VascuNet, NeuroPath), KOLs, products. Use colored nodes by entity type. Could use CSS/SVG circles and lines.
- **MONITOR**: Signal radar — circular radar plot with dots representing signals. Axes: Technology/IP, Regulatory, Financial, Clinical. Show a threat card: "CerebroFlow Series C — Financial · Impact: high · This week". Color-coded dots (red=threat, green=opportunity, orange=neutral).
- **SYNTHESIZE**: Canvas overview — grid of canvas cards (Competitive Battlecard, Market Map, Regulatory Timeline, etc.) with completion indicators. Show 17 canvases total, some with data, some generating.
- **STRATEGIZE**: GTM playbook view — structured strategy document with sections (Market Entry, Channel Strategy, Pricing). Show a battlecard-like comparison table between NeuralStent and CerebroFlow.
- **DELIVER**: Launch timeline — horizontal timeline with milestones (CE-MDR Submission, US 510(k), KOL Advisory Board, Commercial Launch). Status indicators (complete, in progress, upcoming).

These mockups should be **built in React/CSS** — no images. Dark cards with subtle borders (`rgba(255,255,255,0.1)`), glassmorphism effects, subtle gradients. Make them look like real product screens but simplified for a presentation.

## Data source
Always use **NeuralStent Technologies** as the company being researched:
- Domain: neurovascular AI-guided stent placement
- Competitors: CerebroFlow (well-funded, Series C), VascuNet (regulatory lead), NeuroPath (clinical evidence)
- Key entities: Dr. Sarah Chen (KOL), NeuralGuide Pro (product), CE-MDR filing, FDA 510(k)

## Tech stack
- React 18 + TypeScript
- Vite
- Tailwind CSS (via CDN or config)
- No external component libraries
- SVG for charts/graphs (no D3 or chart libs)
- Same structure as v1/ (index.html, index.tsx, App.tsx, components/)

## Navigation
- Arrow keys left/right
- Click areas on sides
- Progress bar at top
- Slide indicator bottom-right
