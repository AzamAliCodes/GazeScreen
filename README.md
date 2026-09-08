# 👁️ GazeScreen

> **Front-Camera Digital Biomarker for Pediatric Neurodivergence Screening**
> Built by **Azam Ali** for **iQOO Hackathon 2026 — Chennai**

---

## 🚀 Quick Start

```bash
cd gazescreen
npm install
npm run dev
```
Open **http://localhost:5173** in Chrome/Safari with camera access.

---

## 📋 What It Does

GazeScreen is a **60-second, browser-based, entirely on-device** pediatric neurodivergence screening tool that:

1. **Calibrates** front camera via MediaPipe Face Mesh
2. **Plays** alternating social ↔ geometric stimulus video (based on gaze-preference research)
3. **Tracks** gaze fixations, saccades, blink events — all on-device
4. **Classifies** session against normative baselines using a local heuristic model
5. **Generates** a plain-language parent report with Risk Index (Low / Moderate / Elevated)

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite |
| Routing | React Router DOM v7 |
| Animations | Framer Motion |
| Charts | Recharts |
| Gaze Tracking | MediaPipe Face Mesh (CDN, WebGL) |
| Styling | Custom Neo-Brutalism CSS Design System |
| State | React Context |

---

## 🎨 Design System

**Minimal White Neo-Brutalism** (inspired by `srm-planner`, elevated with 30-year Art Direction polish):
- **Surfaces:** Clean white `#ffffff` canvas with subtle architectural dot grid
- **Ink & Contrast:** Deep charcoal `#121826`, `2.5px solid #121826` borders, `4px/6px` offset drop-shadows
- **Accents:** Emerald `#16a34a` / `#22c55e`, Lime `#84cc16`, Medical Blue `#2563eb`, Mint `#dcfce7`
- **Typography:** Space Grotesk + Space Mono + Plus Jakarta Sans
- **React Bits Components:** `ShinyText`, `SpotlightCard` (interactive cursor spotlight), `DecryptedText` (cybernetic decode)
- **Framer Motion:** Tactile `MotionButton` with spring physics & shine sweep, animated counter cards, progress rings, and page transitions

---

## 📱 Flow

```
Landing → Consent → Calibration → Stimulus (60s) → Analysis → Report
```

---

## ⚠️ Disclaimer

GazeScreen is a **screening aid, not a medical diagnosis**. Not validated by clinical study.
