# ScenGen — LLM-Guided Scenario-Based Android GUI Testing

> **Tagline:** Automating Android UI testing with multi-agent LLM orchestration — an AI that sees, thinks, and acts on your phone.
>
> **Category:** AI / ML / QA Automation / Mobile Testing
> **Duration:** 12 Weeks
> **Team:** Vision Nexus (2 Members — Subhajit Paul)
> **Role:** Research Engineer
> **Technologies:** Python, OpenAI GPT-4 (Vision), Ollama, PaddleOCR, ADB, OpenCV, PaddlePaddle

---

## 1. Project Overview

**Problem:** Manual GUI testing of Android applications is time-consuming, error-prone, and doesn't scale. Traditional automated testing frameworks (Espresso, UI Automator) require extensive scripting, are brittle to UI changes, and cannot handle novel scenarios.

**Why This Matters:** Mobile apps are updated weekly, with each update potentially breaking functionality. QA teams spend 30-50% of their time on regression testing. An intelligent agent that autonomously navigates and validates Android apps would dramatically reduce testing overhead.

**Target Users:** QA engineers, mobile development teams, DevOps pipelines, app store reviewers, and accessibility testers.

## 2. Problem Statement

Android GUI testing is stuck in a manual-first paradigm. Three core challenges:

1. **Brittle Test Scripts:** Espresso and UI Automator tests break with every UI redesign, consuming 30-50% of QA engineering time in maintenance.
2. **Limited Scenario Coverage:** Scripted tests only cover anticipated cases. Novel edge cases and complex multi-step workflows are rarely tested.
3. **Visual Understanding Gap:** Frameworks interact via resource IDs and XPaths — they cannot "see" the screen. A button's appearance and visual context are invisible.

The challenge: build an autonomous testing agent combining computer vision (to see the screen), LLM reasoning (to understand context and decide actions), and mobile device control (to execute interactions) — all without pre-written test scripts.

## 3. Solution Approach

We designed ScenGen as a **multi-agent system** with five specialized agents:

1. **Observer Agent** — Captures screenshots and extracts GUI widgets using a hybrid of OCR (PaddleOCR) and computer vision (UIED).
2. **Decider Agent** — Feeds screenshot + widget list to an LLM (GPT-4 Vision or Llama 3 8B), which decides the next action: tap, swipe, type, or validate.
3. **Executor Agent** — Executes the chosen action on the Android device via ADB.
4. **Recorder Agent** — Logs every action, screenshot, and LLM decision. Generates bug reports on failure.
5. **Supervisor Agent** — Monitors for errors, infinite loops, and timeout conditions.

This architecture separates concerns cleanly: vision, reasoning, action, logging, and oversight are independent modules.

## 4. Key Features

- **LLM-Driven Autonomous Testing:** GPT-4 with vision (or local Llama 3) reasons about GUI screenshots and decides the next action — no test scripts required.
- **Multi-Agent Architecture:** Five specialized agents (Observer, Decider, Executor, Recorder, Supervisor) collaborate to explore and validate apps.
- **OCR-Powered Widget Detection:** PaddleOCR extracts text from GUI elements, enabling the LLM to understand buttons, labels, and input fields.
- **UIED Computer Vision Pipeline:** Traditional CV algorithms detect interactive widgets when OCR alone is insufficient.
- **95+ Pre-Configured Android Apps:** Ready-to-test configurations covering email, music, notes, camera, calculator, and more.
- **11 Pre-Defined Test Scenarios:** Send email, play music, take note, take photo, translation, shopping, login, calculation, weather, alarm, downloads.
- **Context Memory:** Maintains conversation history across test steps for coherent multi-step scenarios.
- **Automatic Bug Reporting:** Generates structured bug reports with full action trace and screenshots.

## 5. System Architecture

```
┌─────────────────────────────────────────────┐
│  User Input: APP-ID + SCENARIO-ID           │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  TestAgent (testbot/core.py)                │
│  → Orchestrates testing loop                │
│  → Manages context memory                   │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  Testing Loop (until END/FAILED/ERROR)       │
│                                             │
│  ┌──────────────┐    ┌──────────────┐      │
│  │ Observer     │───→│  Decider     │      │
│  │ Agent        │    │  Agent (LLM) │      │
│  │ → Screenshot │    │ → Analyze UI │      │
│  │ → UIED widget│    │ → Reason     │      │
│  │ → PaddleOCR  │    │ → Decide act │      │
│  └──────────────┘    └──────┬───────┘      │
│                              │              │
│  ┌──────────────┐    ┌──────┴───────┐      │
│  │ Executor     │←───│  Decider     │      │
│  │ Agent (ADB)  │    │  (response)  │      │
│  │ → tap/swipe  │    └──────────────┘      │
│  │ → type text  │                          │
│  └──────┬───────┘    ┌──────────────┐      │
│         │            │ Recorder     │      │
│         ▼            │ Agent        │      │
│  ┌──────────────┐    │ → Log action │      │
│  │ Supervisor   │    │ → Save sshot │      │
│  │ Agent        │    │ → Bug report │      │
│  │ → Validate   │    └──────────────┘      │
│  │ → Loop detect│                          │
│  │ → Timeout    │                          │
│  └──────────────┘                          │
└─────────────────────────────────────────────┘
         │
         ▼
  Test Complete: PASS / FAIL / ERROR
  ↓
  Bug Report Generated
`````````

**Data Flow:**
1. User provides APP-ID + SCENARIO-ID -> TestAgent loads config from conf.json
2. Observer captures screenshot -> UIED widget detection -> PaddleOCR text extraction
3. Decider receives screenshot + widget tree + scenario goal -> LLM generates structured action decision
4. Executor converts decision to ADB commands (tap/swipe/type)
5. Recorder logs action, saves before/after screenshots, updates Context Memory
6. Supervisor validates execution, checks for errors and infinite loops
7. Loop continues until LLM outputs END (success), FAILED, or ERROR -> bug report generated

## 6. Technology Stack

| Category | Technologies |
|----------|--------------|
| **Languages** | Python 3.9 |
| **LLM / AI** | OpenAI GPT-4 Vision, Ollama (Llama 3 8B) |
| **OCR** | PaddleOCR (PaddlePaddle based), PP-OCRv2 |
| **Computer Vision** | OpenCV, UIED (custom widget detection) |
| **Device Control** | Android Debug Bridge (ADB) |
| **Deep Learning Framework** | PaddlePaddle |
| **Configuration** | JSON |
| **OS Support** | Windows (.bat), Linux (.sh) |

## 7. Dataset / Inputs / Resources

**Inputs:**
- **APP-ID:** Maps to Android app package name and launch activity (95+ pre-configured apps)
- **SCENARIO-ID:** Maps to natural language test scenario description (11 pre-defined scenarios)
- **Android Device:** Physical device or emulator connected via ADB

**Pre-Configured Apps (95+):** Calculator, Camera, Clock/Alarm, Email, Music, Notes, Weather, Translator, Shopping, File Manager, Calendar, and more.

**Pre-Defined Test Scenarios (11):** Send Email, Play Music, Take Note, Take Photo, Translation, Shopping, Login, Calculation, Weather Query, Set Alarm, Open Downloads.

**Resources:** APK files, pre-trained PaddleOCR inference models, bug log output directory.

## 8. Methodology / Workflow

### Step 1: Device Setup
Connect Android device via USB, enable USB debugging, verify ADB connection (adb devices). Install target app.

### Step 2: Configuration Loading
Load APP-ID -> package/activity mapping and SCENARIO-ID -> goal description from conf.json.

### Step 3: Launch App
Use ADB to launch the target app's main activity.

### Step 4: Observation Loop
For each iteration: Observer captures screenshot, UIED detects widget bounding boxes, PaddleOCR extracts text, widget tree structured into prompt format.

### Step 5: LLM Decision
Decider sends to LLM: system prompt with scenario goal, screenshot (base64 for GPT-4 Vision), widget tree, conversation history. LLM returns structured action decision.

### Step 6: Action Execution
Executor converts LLM decision to ADB commands: TAP (adb shell input tap x y), SWIPE, TYPE.

### Step 7: Validation and Recording
Supervisor checks action validity. Recorder logs action, saves before/after screenshots, updates Context Memory.

### Step 8: Loop or Terminate
If LLM returns "END" (scenario complete), test passes. If "FAILED" or "ERROR", test terminates with bug report.

## 9. Model / System Design

### Decider Agent — LLM Integration
- **GPT-4 Vision:** gpt-4-vision-preview, temperature=0.2, max_tokens=1024
- **Ollama (Local):** llama3:8b, temperature=0.2, context=4096 tokens
- System prompt defines action format, scenario goal, and constraints

### OCR Pipeline (PaddleOCR)
```
Screenshot -> Grayscale -> Threshold -> PP-OCRv2 Detection
  -> PP-OCRv2 Recognition -> Post-processing -> Text + Bounding Boxes
```
- Detection Model: ch_PP-OCRv2_det_infer
- Recognition Model: ch_PP-OCRv2_rec_infer

### UIED Widget Detection
Traditional CV pipeline: Grayscale -> Adaptive Threshold -> Find Contours -> Filter by size/aspect -> Merge overlaps -> Classify widget type

### Action Schema
```json
{"action": "TAP|SWIPE|TYPE|END", "target": {x, y, text}, "value": "..."}
```

## 10. Results and Performance

### Test Execution Results (95 apps x 11 scenarios)

| Metric | Value |
|--------|-------|
| Overall Success Rate | 78.3% |
| Average Steps per Scenario | 8.4 |
| Avg Time per Scenario (GPT-4) | 45 seconds |
| Avg Time per Scenario (Llama 3) | 2 min 15 sec |
| Bug Reports Generated | 142 |
| Unique Bugs Found | 37 |

### Success Rate by Scenario

| Scenario | Rate | Steps |
|----------|------|-------|
| Calculation | 94% | 4.2 |
| Set Alarm | 91% | 5.8 |
| Take Photo | 88% | 3.5 |
| Play Music | 82% | 6.1 |
| Send Email | 72% | 12.3 |
| Shopping | 65% | 14.5 |

### LLM Comparison
| Metric | GPT-4 Vision | Llama 3 8B |
|--------|-------------|------------|
| Success Rate | 78.3% | 61.2% |
| Invalid Actions | 3.1% | 8.7% |
| Cost per Scenario | ~$0.08 | Free |

### OCR Accuracy
| Model | Recognition |
|-------|------------|
| Baseline | 88.5% |
| Fine-tuned | 92.3% |
