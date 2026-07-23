const caseStudyData = [
  {
    id: "aerometric",
    title: "AEROMETRIC",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1611273426858-450d1f6047f0?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/AEROMETRIC",
    github: "https://github.com/Sahityabiswas/AEROMETRIC",
    tags: ["Regression", "Scikit-Learn", "Random Forest", "Python"],
    duration: "8 Weeks",
    teamSize: "Solo Project",
    tagline: "Predicting city-level air quality across India using comparative regression analysis to inform public health and environmental policy.",
    summary: "A systematic comparison of 4 regression models (Linear, Ridge, Lasso, Random Forest) for predicting Air Quality Index across 26 Indian cities using the Kaggle Indian Air Quality dataset (2015–2020). Random Forest achieves a best-in-class R² of 0.909 with a 19% RMSE reduction over linear models — with city-wise imputation, 5-fold cross-validation, and feature-importance analysis.",
    overview: {
      problem: "Air pollution is a critical public health crisis in India, with 14 of the world's 20 most polluted cities. Accurate AQI prediction is hard due to complex multi-pollutant interactions, seasonal variation, and missing monitoring data.",
      importance: "Reliable AQI prediction enables early warnings for vulnerable populations, helps authorities target interventions, and supports long-term environmental policy planning.",
      targetUsers: "Environmental agencies (CPCB, state pollution control boards), public health officials, urban planners, researchers, and citizens in pollution-prone areas."
    },
    problemStatement: {
      opening: "Air pollution causes an estimated 1.67 million deaths annually in India. AQI is the standard metric, but predicting it accurately is difficult because:",
      points: [
        "**Multi-Pollutant Interactions:** AQI depends on PM2.5, PM10, NO2, SO2, CO, O3, and more, with complex non-linear interactions.",
        "**Spatiotemporal Variability:** Pollution patterns vary dramatically across cities and seasons (Delhi's winter smog vs. Mumbai's moderate levels).",
        "**Data Quality Issues:** Monitoring stations frequently report ~25% missing values from equipment failure and calibration gaps.",
        "**Limited Comparative Research:** Most studies evaluate a single model rather than rigorously comparing several on Indian AQI data."
      ],
      closing: "**The challenge:** systematically compare multiple regression paradigms on a real-world Indian AQI dataset."
    },
    solutionApproach: "Standardized preprocessing — consistent cleaning, city-wise imputation, and a fixed 90/10 train/test split across every model.\n\nDiverse model selection spanning linear (OLS), regularized (Ridge, Lasso), and non-linear ensemble (Random Forest) paradigms.\n\n5-fold cross-validation on all models to assess generalization and overfitting.\n\nMulti-metric evaluation beyond R² — MAE, RMSE, residual distributions, and prediction scatter.\n\nHyperparameter tuning: Ridge/Lasso alphas via CV, Random Forest tree count/depth tuned for performance.",
    features: [
      "**Comparative analysis of 4 regression models:** Linear, Ridge (L2), Lasso (L1 + feature selection), Random Forest (ensemble)",
      "**City-wise missing-value imputation** (group-mean at the city level, preserving local pollution patterns)",
      "**5-fold cross-validation** across all models for reliable comparison",
      "**Comprehensive evaluation suite:** MAE, MSE, RMSE, R², residual analysis, predicted-vs-actual plots",
      "**Visual diagnostic toolkit:** residual distributions, scatter plots, feature-importance analysis",
      "**Reproducible, self-contained Jupyter notebooks** per model"
    ],
    architecture: `flowchart LR
    subgraph Data["Data Layer"]
        A[Kaggle<br/>city_day.csv]
    end
    subgraph Pipeline["ML Pipeline"]
        B[Preprocessing<br/>KNN Imputer]
        C[Feature Eng<br/>46 Features]
        D[Model Training<br/>7 Models Tuned]
        E[SHAP<br/>Analysis]
        F[Forecasting<br/>7-Day Ahead]
    end
    subgraph Deploy["Deployment"]
        H[Render<br/>Hosting]
    end
    A --> B --> C --> D
    D --> E
    D --> F
    E --> H
    F --> H`,
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "ML Framework", tech: "scikit-learn" },
      { category: "Boosted Trees", tech: "XGBoost, LightGBM, CatBoost" },
      { category: "Interpretability", tech: "SHAP" },
      { category: "Data Processing", tech: "NumPy, Pandas" },
      { category: "Visualization", tech: "Matplotlib, Seaborn" },
      { category: "Development", tech: "Jupyter Notebook" },
      { category: "Deployment", tech: "Streamlit, Render, GitHub Pages" }
    ],
    dataset: "**Dataset:** Indian Air Quality Data (2015–2020), Kaggle — city_day.csv, ~29,531 rows across 26 cities.\n\n**Features (12 predictors):** PM2.5, PM10, NO, NO2, NOx, NH3, CO, SO2, O3, Benzene, Toluene, Xylene.\n\n**Target:** AQI (continuous).\n\n**Preprocessing:** Drop City/Date columns → city-wise group-mean imputation → chronological train/test split → saved processed CSVs for reproducibility.",
    methodology: [
      "Load city_day.csv, inspect distributions and missing-value patterns per city.",
      "Drop non-feature columns; apply city-wise group-mean imputation; split train (90%) / test (10%).",
      "Train Linear Regression as baseline; record MAE, MSE, RMSE, R²; generate residual plots.",
      "Train Ridge Regression (α = 0.5) — handles multicollinearity among correlated pollutants.",
      "Train Lasso Regression (α = 0.5) — performs automatic feature selection.",
      "Train Random Forest (100 trees, max depth 5) — captures non-linear interactions; extract feature importance.",
      "Compare all models across MAE/MSE/RMSE/R²; visualize predicted vs. actual.",
      "Compile results into a documented report with methodology, figures, and conclusions."
    ],
    modelDesign: `Linear Regression:
  AQI = β₀ + β₁·PM2.5 + β₂·PM10 + … + β₁₂·Xylene + ε — baseline interpretable model.

Ridge (L2) Regression:
  min ||y - Xβ||² + α·||β||², α = 0.5 — controls multicollinearity via L2 penalty.

Lasso (L1) Regression:
  min ||y - Xβ||² + α·||β||₁, α = 0.5 — zeroes out unimportant coefficients via L1 penalty.

Random Forest:
  100 trees, max depth 5, bootstrap aggregation — captures non-linear pollutant synergies.

Champion pipeline: tuned Random Forest, validated against LightGBM/CatBoost/XGBoost;
separate lag-only XGBoost model handles 7-day-ahead forecasting.`,
    results: [
      { metric: "Random Forest (Tuned) R²", value: "0.9425" },
      { metric: "Random Forest RMSE", value: "21.60" },
      { metric: "Random Forest MAE", value: "12.70" },
      { metric: "LightGBM (Tuned) R²", value: "0.9389" },
      { metric: "CatBoost (Tuned) R²", value: "0.9372" },
      { metric: "XGBoost (Tuned) R²", value: "0.9367" },
      { metric: "Linear/Ridge/Lasso R²", value: "~0.84–0.88" },
      { metric: "Forecast Model (XGBoost, 7-day) R²", value: "0.9407" },
      { metric: "Global vs. city-specific model", value: "Global wins for 22/26 cities" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/AEROMETRIC" },
      { label: "Live Dashboard", url: "https://ml-based-aqi-prediction.onrender.com" },
      { label: "Dataset (Kaggle)", url: "https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india" }
    ]
  },
  {
    id: "campusbridge",
    title: "CAMPUSBRIDGE",
    category: "Emerging Technology",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/CAMPUSBRIDGE",
    github: "https://github.com/Sahityabiswas/CAMPUSBRIDGE",
    tags: ["MCP", "RBAC", "Python", "MySQL", "fastmcp"],
    duration: "Academic Project",
    teamSize: "Solo Project",
    tagline: "Giving AI assistants safe, scoped access to a student management system — one role-aware tool layer instead of raw database access.",
    summary: "A role-based Model Context Protocol (MCP) server for a Student Management System, with RBAC, department scoping, and tiered data minimization built directly into the tool layer, so a student, parent, faculty member, HOD, and registrar each see a different, appropriately scoped view of the same underlying data.",
    overview: {
      problem: "AI assistants are increasingly used for academic admin tasks, but giving an assistant raw database access to a student information system risks serious privacy leaks — a student querying another student's grades, or a parent seeing faculty-only data.",
      importance: "Institutions need AI-assisted workflows (grading, attendance, transcripts) without giving up access control; a tool-layer enforcement point makes every AI interaction auditable and scoped by design.",
      targetUsers: "Students, parents, faculty, HODs, registrars, and admins — all interacting through the same MCP server, each seeing only what their role permits."
    },
    problemStatement: {
      opening: "Build an MCP server that lets an AI assistant perform legitimate academic-record tasks while strictly enforcing access boundaries:",
      points: [
        "**Role Ambiguity:** A single 'assistant' persona must behave differently depending on who is actually logged in.",
        "**Department Scoping:** Faculty and HODs must only see their own department's data, not the whole institution.",
        "**Sensitive Data Handling:** Some data (e.g. disciplinary or sensitive records) needs an extra, justification-gated access tier rather than open availability.",
        "**Auditability:** Every tool call needs to be traceable back to a role and, where relevant, a justification."
      ],
      closing: "**The challenge:** enforce all of this at the tool layer so no single MCP call can leak data outside its caller's authorized scope."
    },
    solutionApproach: "Route every request through an MCP Tool Router that authenticates the caller and resolves their role + department.\n\nPass that context into an RBAC Policy Engine that decides what the caller is allowed to see.\n\nFilter all rows through a Data Minimization Layer before they reach the caller — enforcement happens once, centrally, rather than being duplicated per tool.\n\nRoute TIER_3 sensitive data through a separate, justification-gated Sensitive Access Broker with its own audit log.",
    features: [
      "**Role-based authentication** for student, parent, faculty, HOD, registrar, and admin",
      "**Automatic department scoping** for faculty and HODs",
      "**Grades, attendance, fee-status, and transcript-generation** tools",
      "**Tiered sensitive-data access** requiring an explicit justification",
      "**User/account management** (create, list, update status)",
      "**Department-level summary analytics**",
      "**Seeded demo accounts** covering the full permission matrix",
      "**Audit logging** on every tool call"
    ],
    architecture: `graph TD
    A["Claude / MCP Client"] -->|"MCP tool calls (stdio)"| B["MCP Tool Router"]
    B --> C["Auth & Session Manager"]
    C -->|"role + department context"| D["RBAC Policy Engine"]
    D -->|"scopes rows by role & department"| E["Data Minimization Layer"]


    E --> F["Profile Service"]
    E --> G["Academic Records Service"]
    E --> H["Attendance Service"]
    E --> I["Fees Service"]
    E --> J["Directory & Analytics Service"]
    E --> K["User Admin Service"]
    E --> L["Sensitive Access Broker"]


    F --> M[("MySQL Database")]
    G --> M
    H --> M
    I --> M
    J --> M
    K --> M
    L -->|"logged, justification-gated"| M`,
    techStack: [
      { category: "Server", tech: "Python 3.13, fastmcp 3.4.4" },
      { category: "Transport", tech: "stdio" },
      { category: "Database", tech: "MySQL 8.x" },
      { category: "Auth", tech: "bcrypt, in-memory sessions" },
      { category: "Tooling", tech: "uv (dependency management)" }
    ],
    dataset: "MySQL-backed student management schema (students, faculty, departments, grades, attendance, fees).\n\nSeeded demo accounts across every role, following the pattern {role}{id} / password{id:03d}.",
    methodology: [
      "Client calls list_test_credentials to see the seeded demo accounts.",
      "Client calls authenticate with a demo username/password.",
      "Client calls get_my_profile to confirm the resolved role.",
      "Client calls role-appropriate tools (get_grades, list_students, record_attendance, etc.).",
      "Every call passes through the RBAC engine and data-minimization layer before touching MySQL.",
      "Requests for TIER_3 sensitive data go through request_sensitive_access, which requires justification and is separately audit-logged."
    ],
    modelDesign: `Designed at academic scale (single local MCP server), not enterprise scale — multiple roles are simulated via login rather than separate machines/services.

Clean separation of concerns:
- Authentication
- RBAC policy
- Data minimization
- Per-domain services

Each lives in one place, so scope checks aren't duplicated across every tool.

15 exposed MCP tools spanning: auth, academic records, attendance, fees, transcripts, department analytics, user administration, and sensitive-access requests.`,
    results: [
      { metric: "MCP tools exposed", value: "15" },
      { metric: "Roles supported", value: "6 (student, parent, faculty, HOD, registrar, admin)" },
      { metric: "Transport", value: "stdio (local)" },
      { metric: "Database", value: "MySQL 8.x" },
      { metric: "Deliverable", value: "Working local MCP server with full RBAC + audit logging" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/CAMPUSBRIDGE" }
    ]
  },
  {
    id: "cityflow",
    title: "CITYFLOW",
    category: "Reinforcement Learning",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/CITYFLOW",
    github: "https://github.com/Sahityabiswas/CITYFLOW",
    tags: ["Reinforcement Learning", "DQN", "PyTorch", "PyGame", "Python"],
    duration: "8 Weeks",
    teamSize: "Team Project (with Sayan Ghosh, Pritam Koyal — RKMVERI)",
    tagline: "Reducing urban traffic congestion through reinforcement learning — an AI that learns optimal traffic light timing through experience.",
    summary: "A Deep Q-Network agent trained to control traffic lights at a 4-way urban intersection, reducing average wait time by 64.5% and increasing throughput by 50% compared to fixed-timer signals — with a custom PyGame simulation, 6-phase action space, engineered reward function, and emergency-vehicle override.",
    overview: {
      problem: "Urban traffic congestion costs the global economy over $300 billion annually. Fixed-timer signals can't adapt to real-time traffic fluctuations.",
      importance: "A single optimized intersection can cut average wait times by 20–40%, reducing fuel use and emissions proportionally — adaptive signal control is one of the most cost-effective smart-city upgrades since it needs no new infrastructure.",
      targetUsers: "City traffic management departments, urban planners, civil engineers, smart-city initiatives, and daily commuters."
    },
    problemStatement: {
      opening: "Urban traffic signal control is a sequential decision-making problem under uncertainty:",
      points: [
        "**Dynamic Traffic:** Vehicle arrivals follow no fixed schedule — rush hour, accidents, and events constantly change patterns.",
        "**Delayed Consequences:** A single light decision affects subsequent cycles for minutes, requiring long-term planning.",
        "**Multi-Objective Optimization:** Must minimize wait time, prevent queue overflow, handle emergency vehicles, and stay fair across directions.",
        "**Real-World Constraints:** Light phases have safety constraints and min/max durations."
      ],
      closing: "**The challenge:** formulate this as a Markov Decision Process and train a DQN agent that learns optimal phase timing from simulated experience."
    },
    solutionApproach: "**State:** 4-D vector [q_N, q_S, q_E, q_W] of per-direction vehicle queue lengths — compact enough to keep the network small and trainable.\n\n**Action space:** 6 discrete phases — N, S, E, W (single green) and N-S / E-W (paired greens).\n\n**Reward:** R_t = (2·ΔQ + 1·ΔW) / max(1, N_t) — rewards queue reduction (2x) and wait-time reduction (1x), normalized by current load.\n\n**Network:** Feedforward DQN (4 → 64 → 64 → 6, ReLU), trained via experience replay.\n\n**Simulation:** PyGame 2D visualization with real-time feedback for interpretable learning behavior.",
    features: [
      "**Deep Q-Network agent** making optimal phase decisions",
      "**Customizable 4-way intersection simulation** with realistic car spawning/movement/queuing physics",
      "**6 distinct traffic light phases** (4 single-direction + 2 paired)",
      "**Emergency-vehicle override** — auto-granted signal priority",
      "**Real-time HUD:** vehicle counts, wait times, reward, epsilon",
      "**Live learning curves** (avg. reward and avg. wait time trends across days)",
      "**Experience replay buffer** with target-network stabilization"
    ],
    architecture: `graph TD
    MP[main.py<br/>Entry point] --> SIM[simulation.py<br/>PyGame loop & rendering]
    SIM --> ENV[environment.py<br/>Cars, lanes, state & rewards]
    SIM --> AG[agent.py<br/>Replay buffer, epsilon-greedy]
    AG --> MD[model.py<br/>DQN neural network]
    AG --> ENV
    CFG[config.py<br/>Hyperparameters & constants] --> SIM
    CFG --> ENV
    CFG --> AG
    CFG --> MD

    style MP fill:#4a90d9,stroke:#2c5f8a,color:#fff
    style SIM fill:#7b68ee,stroke:#4a3fa0,color:#fff
    style ENV fill:#e8a838,stroke:#b07d20,color:#fff
    style AG fill:#50c878,stroke:#2e8b57,color:#fff
    style MD fill:#e06070,stroke:#a04050,color:#fff
    style CFG fill:#999,stroke:#666,color:#fff`,
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "Deep Learning", tech: "PyTorch" },
      { category: "Reinforcement Learning", tech: "Custom DQN (from scratch)" },
      { category: "Simulation", tech: "PyGame" },
      { category: "Numerical Computing", tech: "NumPy" },
      { category: "Visualization", tech: "PyGame real-time plotting, Matplotlib" }
    ],
    dataset: "No external dataset — traffic is procedurally simulated.\n\nCar spawn probability ~0.05/frame/direction (~3 cars/sec at 60 FPS); 5% of spawns are emergency vehicles; each simulated 'day' runs 7,200 frames (120s), with agent decisions every 60 frames (1s).",
    methodology: [
      "Build the 4-way intersection: road geometry (2 lanes/direction), light positions, stop lines, spawn points.",
      "Start each episode ('day') with empty roads and state S = [0,0,0,0].",
      "Each decision step: observe queue lengths → agent selects phase via epsilon-greedy → apply phase for 60 frames.",
      "Cars spawn, move, and queue; emergency vehicles override the signal when present.",
      "Compute reward from queue/wait-time change; store (S, A, R, S') in the replay buffer.",
      "Sample 64 experiences, compute target Q-values via the target network, and update the DQN.",
      "At episode end: sync target network, decay epsilon (ε = max(ε·0.9, 0.4)), log metrics, reset environment."
    ],
    modelDesign: `MDP Formulation:
- State: [q_N, q_S, q_E, q_W] (queue lengths)
- Action: 6 phases (N, S, E, W, N-S, E-W)
- Reward: (2·ΔQ + 1·ΔW) / max(1, N_t)
- Discount γ = 0.95

DQN Architecture:
Input(4) → Linear(64) → ReLU → Linear(64) → ReLU → Linear(6)

Hyperparameters:
- Batch size: 64
- Replay buffer: 6,000
- Epsilon start: 1.0 → min: 0.4
- Decay: 0.90/day
- Optimizer: Adam (lr = 0.001)`,
    results: [
      { metric: "Avg. Wait (DQN trained)", value: "11.5 frames" },
      { metric: "Avg. Wait (Fixed 30s timer)", value: "32.4 frames" },
      { metric: "Avg. Queue (DQN trained)", value: "2.1" },
      { metric: "Avg. Queue (Fixed timer)", value: "6.8" },
      { metric: "Throughput (DQN trained)", value: "1,800/hr" },
      { metric: "Throughput (Fixed timer)", value: "1,200/hr" },
      { metric: "Wait-time reduction vs. fixed", value: "64.5%" },
      { metric: "Queue-length reduction vs. fixed", value: "69.1%" },
      { metric: "Throughput increase vs. fixed", value: "50%" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/CITYFLOW" },
      { label: "Research Report", url: "https://github.com/Sahityabiswas/CITYFLOW/blob/main/docs/Report_Team_SSP.pdf" }
    ]
  },
  {
    id: "scengen",
    title: "ScenGen",
    category: "Emerging Technology",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/ScenGen",
    github: "https://github.com/Sahityabiswas/ScenGen",
    tags: ["LLM", "Emerging Technology", "OCR", "Multi-Agent", "ADB"],
    duration: "12 Weeks",
    teamSize: "Team Project",
    tagline: "Automating Android UI testing with multi-agent LLM orchestration — an AI that sees, thinks, and acts on your phone.",
    summary: "A multi-agent system with five specialized agents (Observer, Decider, Executor, Recorder, Supervisor) that collaborate to autonomously explore and validate Android applications. It combines OCR-powered widget detection via PaddleOCR with LLM-driven decision-making (GPT-4 Vision or Llama 3) to automate GUI testing without pre-written scripts.",
    overview: {
      problem: "Manual GUI testing of Android applications is time-consuming, error-prone, and doesn't scale. Traditional automated testing frameworks (Espresso, UI Automator) require extensive scripting, are brittle to UI changes, and cannot handle novel scenarios.",
      importance: "Mobile apps are updated weekly, with each update potentially breaking functionality. QA teams spend 30-50% of their time on regression testing. An intelligent agent that autonomously navigates and validates Android apps would dramatically reduce testing overhead.",
      targetUsers: "QA engineers, mobile development teams, DevOps pipelines, app store reviewers, and accessibility testers."
    },
    problemStatement: {
      opening: "Android GUI testing is stuck in a manual-first paradigm. Three core challenges:",
      points: [
        "**Brittle Test Scripts:** Espresso and UI Automator tests break with every UI redesign, consuming 30-50% of QA engineering time in maintenance.",
        "**Limited Scenario Coverage:** Scripted tests only cover anticipated cases. Novel edge cases and complex multi-step workflows are rarely tested.",
        "**Visual Understanding Gap:** Frameworks interact via resource IDs and XPaths — they cannot 'see' the screen. A button's appearance and visual context are invisible."
      ],
      closing: "**The challenge:** build an autonomous testing agent combining computer vision (to see the screen), LLM reasoning (to understand context and decide actions), and mobile device control (to execute interactions) — all without pre-written test scripts."
    },
    solutionApproach: "We designed ScenGen as a multi-agent system with five specialized agents:\n\n1. **Observer Agent** — Captures screenshots and extracts GUI widgets using a hybrid of OCR (PaddleOCR) and computer vision (UIED).\n2. **Decider Agent** — Feeds screenshot + widget list to an LLM (GPT-4 Vision or Llama 3 8B), which decides the next action: tap, swipe, type, or validate.\n3. **Executor Agent** — Executes the chosen action on the Android device via ADB.\n4. **Recorder Agent** — Logs every action, screenshot, and LLM decision. Generates bug reports on failure.\n5. **Supervisor Agent** — Monitors for errors, infinite loops, and timeout conditions.\n\nThis architecture separates concerns cleanly: vision, reasoning, action, logging, and oversight are independent modules.",
    features: [
      "**LLM-Driven Autonomous Testing:** GPT-4 with vision (or local Llama 3) reasons about GUI screenshots and decides the next action — no test scripts required.",
      "**Multi-Agent Architecture:** Five specialized agents (Observer, Decider, Executor, Recorder, Supervisor) collaborate to explore and validate apps.",
      "**OCR-Powered Widget Detection:** PaddleOCR extracts text from GUI elements, enabling the LLM to understand buttons, labels, and input fields.",
      "**UIED Computer Vision Pipeline:** Traditional CV algorithms detect interactive widgets when OCR alone is insufficient.",
      "**95+ Pre-Configured Android Apps:** Ready-to-test configurations covering email, music, notes, camera, calculator, and more.",
      "**11 Pre-Defined Test Scenarios:** Send email, play music, take note, take photo, translation, shopping, login, calculation, weather, alarm, downloads.",
      "**Context Memory:** Maintains conversation history across test steps for coherent multi-step scenarios.",
      "**Automatic Bug Reporting:** Generates structured bug reports with full action trace and screenshots."
    ],
    architecture: `graph TB
    subgraph "TestAgent (testbot/core.py)"
        TM[Memory] --- TA[TestAgent]
        TA --> Roles
    end

    subgraph "Agent Roles (testbot/roles/)"
        OB[Observer<br/>screenshot + widget detection]
        AD[ActionDecider<br/>LLM reasoning + widget matching]
        AE[ActionExecutor<br/>ADB command execution]
        TR[TestRecorder<br/>script + log saving]
        TS[TestSupervisor<br/>loading/effect/end checks]
    end

    subgraph "UIED Pipeline (testbot/uied/)"
        IP[detect_compo/<br/>CV component detection]
        OCR[detect_text/<br/>PaddleOCR]
        MG[detect_merge/<br/>compos + text merge]
        IP --> MG
        OCR --> MG
    end

    subgraph "LLM (testbot/llm.py)"
        LM[LLMChatManager<br/>Ollama llama3:8b]
        PC[prompt/ templates]
        LM --- PC
    end

    subgraph "Device (testbot/device.py)"
        DM[DeviceManager<br/>ADB wrapper]
        DV[Android Device]
    end

    OB --> IP
    OB --> OCR
    AD --> LM
    TS --> LM
    AE --> DM
    DM --> DV`,
    techStack: [
      { category: "Languages", tech: "Python 3.9" },
      { category: "LLM / AI", tech: "OpenAI GPT-4 Vision, Ollama (Llama 3 8B)" },
      { category: "OCR", tech: "PaddleOCR (PaddlePaddle based), PP-OCRv2" },
      { category: "Computer Vision", tech: "OpenCV, UIED (custom widget detection)" },
      { category: "Device Control", tech: "Android Debug Bridge (ADB)" },
      { category: "Deep Learning Framework", tech: "PaddlePaddle" },
      { category: "Configuration", tech: "JSON" },
      { category: "OS Support", tech: "Windows (.bat), Linux (.sh)" }
    ],
    dataset: "Inputs:\n- **APP-ID:** Maps to Android app package name and launch activity (95+ pre-configured apps)\n- **SCENARIO-ID:** Maps to natural language test scenario description (11 pre-defined scenarios)\n- **Android Device:** Physical device or emulator connected via ADB\n\nPre-Configured Apps (95+): Calculator, Camera, Clock/Alarm, Email, Music, Notes, Weather, Translator, Shopping, File Manager, Calendar, and more.\n\nPre-Defined Test Scenarios (11): Send Email, Play Music, Take Note, Take Photo, Translation, Shopping, Login, Calculation, Weather Query, Set Alarm, Open Downloads.\n\nResources: APK files, pre-trained PaddleOCR inference models, bug log output directory.",
    methodology: [
      "**Device Setup:** Connect Android device via USB, enable USB debugging, verify ADB connection (adb devices). Install target app.",
      "**Configuration Loading:** Load APP-ID -> package/activity mapping and SCENARIO-ID -> goal description from conf.json.",
      "**Launch App:** Use ADB to launch the target app's main activity.",
      "**Observation Loop:** For each iteration: Observer captures screenshot, UIED detects widget bounding boxes, PaddleOCR extracts text, widget tree structured into prompt format.",
      "**LLM Decision:** Decider sends to LLM: system prompt with scenario goal, screenshot (base64 for GPT-4 Vision), widget tree, conversation history. LLM returns structured action decision.",
      "**Action Execution:** Executor converts LLM decision to ADB commands: TAP (adb shell input tap x y), SWIPE, TYPE.",
      "**Validation and Recording:** Supervisor checks action validity. Recorder logs action, saves before/after screenshots, updates Context Memory.",
      "**Loop or Terminate:** If LLM returns 'END' (scenario complete), test passes. If 'FAILED' or 'ERROR', test terminates with bug report."
    ],
    modelDesign: `Decider Agent — LLM Integration
- **GPT-4 Vision:** gpt-4-vision-preview, temperature=0.2, max_tokens=1024
- **Ollama (Local):** llama3:8b, temperature=0.2, context=4096 tokens
- System prompt defines action format, scenario goal, and constraints

OCR Pipeline (PaddleOCR)
Screenshot -> Grayscale -> Threshold -> PP-OCRv2 Detection -> PP-OCRv2 Recognition -> Post-processing -> Text + Bounding Boxes
- Detection Model: ch_PP-OCRv2_det_infer
- Recognition Model: ch_PP-OCRv2_rec_infer

UIED Widget Detection
Traditional CV pipeline: Grayscale -> Adaptive Threshold -> Find Contours -> Filter by size/aspect -> Merge overlaps -> Classify widget type

Action Schema
{"action": "TAP|SWIPE|TYPE|END", "target": {x, y, text}, "value": "..."}`,
    results: [
      { metric: "Overall Success Rate", value: "78.3%" },
      { metric: "Average Steps per Scenario", value: "8.4" },
      { metric: "Avg Time per Scenario (GPT-4)", value: "45 seconds" },
      { metric: "Avg Time per Scenario (Llama 3)", value: "2 min 15 sec" },
      { metric: "Bug Reports Generated", value: "142" },
      { metric: "Unique Bugs Found", value: "37" },
      { metric: "GPT-4 Success Rate", value: "78.3%" },
      { metric: "Llama 3 8B Success Rate", value: "61.2%" },
      { metric: "OCR Accuracy (Fine-tuned)", value: "92.3%" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/ScenGen" },
      { label: "Linux Runbook", url: "https://github.com/Sahityabiswas/ScenGen/blob/main/LINUX_RUNBOOK.md" },
      { label: "Windows Runbook", url: "https://github.com/Sahityabiswas/ScenGen/blob/main/run_scengen_here.bat" }
    ]
  },
  {
    id: "jobnexus",
    title: "JOB_NEXUS",
    category: "Recommendation System",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/JOB_NEXUS",
    github: "https://github.com/Sahityabiswas/JOB_NEXUS",
    tags: ["Apache Spark", "Neo4j", "NLP", "FastAPI", "Python"],
    duration: "10 Weeks",
    teamSize: "Team Project",
    tagline: "Empowering career decisions through distributed NLP, semantic graph databases, and real-time skill matching.",
    summary: "A distributed career recommendation engine that ingests live job listings from 4 APIs across an Apache Spark cluster, processes NLP skill extraction in parallel, models the job market as a Neo4j property graph (6,500+ nodes, 18,000+ relationships), and serves matches through an interactive glassmorphic dashboard with a 'What-If' career simulator — with a 24x speedup over sequential ingestion.",
    overview: {
      problem: "Job seekers are overwhelmed by thousands of listings across platforms and struggle to see which roles match their skills, what's missing, or how to bridge the gap.",
      importance: "The modern job market demands continuous skill development; without intelligent tools, job seekers waste hours comparing listings manually and miss adjacent opportunities.",
      targetUsers: "Job seekers exploring transitions, recent graduates, career changers reskilling, and professionals identifying skill gaps and learning pathways."
    },
    problemStatement: {
      opening: "Modern job searching is broken — the average posting gets 250+ applications, and seekers spend 5+ hours/week browsing listings:",
      points: [
        "**No Skill Gap Analysis:** Seekers can't easily see what's missing for a target role.",
        "**No Learning Pathways:** Even identified gaps have no direct link to courses that teach them.",
        "**No Career Graph:** Users lack visibility into how their existing skills connect to multiple career paths."
      ],
      closing: "**The challenge:** ingest, process, and connect job-market data at scale, then surface it through an intuitive visual interface."
    },
    solutionApproach: "Four-layer architecture:\n\n1. **Ingestion Layer** — Apache Spark distributes API fetching and NLP preprocessing across worker nodes.\n2. **Storage Layer** — Neo4j's property graph naturally represents Job–Skill–Course relationships, enabling traversals like 'jobs requiring Python but not SQL.'\n3. **Matching Layer** — TF-IDF vectorization of requirements vs. user skills with diluted cosine similarity (to avoid inflated scores).\n4. **Presentation Layer** — a glassmorphic SPA with Vis.js for interactive graph exploration and real-time 'What-If' simulation.",
    features: [
      "**Distributed ingestion** from Remotive, The Muse, and Jobicy APIs, plus Coursera courses",
      "**Parallel NLP skill extraction/normalization** via spaCy across Spark workers",
      "**Semantic Neo4j graph** modeling jobs, skills, and courses as typed, connected nodes",
      "**TF-IDF + diluted cosine-similarity matching** for realistic scores",
      "**Interactive glassmorphic dashboard** with a physics-based constellation graph (Vis.js)",
      "**'What-If' career simulator** — click a missing skill to instantly resimulate matches",
      "**PDF export, skill autocomplete, proficiency sliders, confidence indicators, shareable profiles**"
    ],
    architecture: `graph TD
    A[Public Job & Course APIs] -->|Fetch Raw Data| B[Spark Master Node]
    B -->|Partition RDD| C[Spark Worker Node 1]
    B -->|Partition RDD| D[Spark Worker Node 2]
    C -->|Parallel NLP Skill Parse| E[Neo4j Database Server]
    D -->|Parallel NLP Skill Parse| E
    E <-->|Graph & Match Queries| F[FastAPI Backend Server]
    F <-->|REST / API Response| G[Job Nexus Frontend SPA]`,
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "Distributed Computing", tech: "Apache Spark (PySpark)" },
      { category: "Graph Database", tech: "Neo4j (AuraDB)" },
      { category: "Backend Framework", tech: "FastAPI" },
      { category: "NLP", tech: "spaCy (en_core_web_sm)" },
      { category: "ML / Vectorization", tech: "scikit-learn (TF-IDF, cosine similarity)" },
      { category: "Frontend", tech: "Vanilla JS SPA, glassmorphic CSS" },
      { category: "Graph Visualization", tech: "Vis.js" },
      { category: "PDF Export", tech: "html2pdf.js" },
      { category: "Data Sources", tech: "Remotive, The Muse, Jobicy APIs; Coursera" },
      { category: "Deployment", tech: "Uvicorn, Render" }
    ],
    dataset: "Live job listings from Remotive, The Muse, and Jobicy APIs; course data from Coursera.\n\nPreprocessing: HTML/text cleanup → spaCy NER + rule-based skill extraction → fuzzy normalization (e.g. 'pyton' → 'Python') → deduplication → REQUIRES/TEACHES relationship building.",
    methodology: [
      "Spark Master sends parallel requests to Remotive, The Muse, Jobicy, and Coursera APIs; responses flatten into RDDs.",
      "Spark workers load spaCy and process partitions: tokenize, extract noun phrases/entities, match a skill dictionary, normalize to canonical forms.",
      "Workers open concurrent Neo4j connections via foreachPartition, writing (Job)-[:REQUIRES]->(Skill) and (Course)-[:TEACHES]->(Skill) in parallel.",
      "FastAPI builds a TF-IDF matrix from all extracted skills; user-submitted skills are vectorized against it.",
      "Cosine similarity (diluted to prevent score inflation) ranks jobs against the user's skill vector.",
      "Vis.js renders the interactive graph of jobs, skills, and courses with physics simulation.",
      "Clicking a missing skill in the UI re-queries the API instantly, simulating 'what if I learned this.'"
    ],
    modelDesign: `Matching Pipeline:
- TfidfVectorizer(max_features=5000, ngram_range=(1,2), stop_words='english')
- Diluted similarity: score = cos_sim / (1 + α·sparsity), α = 0.3
- Minimum 15% match threshold for display

Graph Schema:
- (Job) {id, title, company, url, description, source}
- (Skill) {id, name, category, canonical_form}
- (Course) {id, title, provider, url, difficulty}
- (Job)-[:REQUIRES]->(Skill), (Course)-[:TEACHES]->(Skill)

NLP Pipeline:
raw text → tokenization → POS tagging → NER → dependency parse → noun-phrase chunking → skill dictionary match → fuzzy normalization → dedup check`,
    results: [
      { metric: "Jobs Ingested (Spark)", value: "1,200+" },
      { metric: "Skills Extracted", value: "4,500+" },
      { metric: "Courses Ingested", value: "800+" },
      { metric: "Ingestion Time (Spark)", value: "45 seconds" },
      { metric: "Ingestion Time (Sequential)", value: "18 minutes" },
      { metric: "Speedup", value: "24x" },
      { metric: "Precision@5", value: "0.87" },
      { metric: "Recall@10", value: "0.79" },
      { metric: "Avg. Match Score", value: "62.3%" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/JOB_NEXUS" },
      { label: "Live Demo", url: "https://sahityabiswas.github.io/JOB_NEXUS" }
    ]
  },
  {
    id: "gesture2sentence",
    title: "Gesture2Sentence",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/Gesture2Sentence",
    github: "https://github.com/Sahityabiswas/Gesture2Sentence",
    tags: ["Deep Learning", "MediaPipe", "T5", "CTRGCN", "Python"],
    duration: "12 Weeks",
    teamSize: "Team Project",
    tagline: "Bridging the communication gap by translating sign language gestures into natural language sentences using hierarchical deep learning.",
    summary: "A hierarchical deep learning system that translates continuous Indian Sign Language gestures into fluent English sentences across ~2,000 sign classes. The system uses MediaPipe for keypoint extraction, a two-stage hierarchical classifier, and a fine-tuned T5 transformer for sentence generation. The hierarchical approach achieves 84.7% top-1 accuracy (vs 72.3% for flat classification) with 4x faster training and 5x smaller model size.",
    overview: {
      problem: "Sign language is the primary mode of communication for millions of deaf and hard-of-hearing individuals worldwide, yet most hearing people do not understand it. Existing sign language recognition systems are limited to small vocabularies (50-100 signs) and fail to convert recognized gestures into coherent, grammatically correct sentences.",
      importance: "Communication barriers lead to social isolation, limited educational access, and reduced employment opportunities for the deaf community. A scalable, high-vocabulary sign-to-text system with natural language generation can dramatically improve accessibility.",
      targetUsers: "Deaf and hard-of-hearing individuals, sign language interpreters, educators in special education, accessibility organizations, and general users who wish to communicate across the language barrier."
    },
    problemStatement: {
      opening: "Sign language recognition is a challenging computer vision and sequence modeling problem. Existing solutions face three critical limitations:",
      points: [
        "**Vocabulary Size:** Most systems recognize only 50-100 signs, far short of the ~2,000+ signs needed for practical communication.",
        "**Scalability Challenges:** A flat classifier across thousands of classes suffers from class imbalance, vanishing gradients, and poor generalization across semantically similar signs.",
        "**No Language Generation:** Even when signs are recognized, systems output isolated keywords — they do not generate coherent, grammatically correct sentences."
      ],
      closing: "**The challenge:** scale to a large vocabulary while maintaining high accuracy, then bridge the gap from isolated sign recognition to fluent natural language generation."
    },
    solutionApproach: "**Hierarchical classification:** group semantically similar signs via KMeans clustering on learned embeddings (72 groups) → a stage-1 group predictor → stage-2 group-specific submodels for fine-grained sign class. This divide-and-conquer approach reduces each sub-problem to ~28 classes on average.\n\n**Language bridging:** fine-tune a T5 sequence-to-sequence model on sign-keyword-to-sentence pairs, generating grammatical sentences from a sliding 3-sign window.",
    features: [
      "**Hierarchical classification pipeline** (group → specific sign) for a ~2,000-class problem",
      "**Sign-to-sentence generation** via a fine-tuned T5 transformer",
      "**Raw-video inference end to end** (webcam or file → sentence) using MediaPipe keypoints",
      "**Configurable dual architecture:** Transformer encoder or BiLSTM with residual connections",
      "**Data augmentation:** noise injection, frame dropout, time masking, scale jitter, shift",
      "**Ensemble inference** across multiple trained models",
      "**Separate CTRGCN experimental workspace** for graph-based sign modeling research"
    ],
    architecture: `graph TD
    subgraph Input
        A[Raw Video File]
        A2[Dataset Video ID]
    end

    subgraph Preprocessing
        B[video_keypoint_extractor.py<br/>VideoKeypointExtractor - MediaPipe]
        C[video_preprocess_utils.py<br/>resample + preprocess]
        D[normalize.py<br/>normalize keypoints - global_stats.pkl]
        E[dataset.py / dataset.csv<br/>dataset video keypoints]
    end

    A --> B --> C --> D
    A2 --> E --> D

    subgraph Training["Train_hierarchical.py"]
        F[Build label_map.pkl]
        G[KMeans clustering<br/>classes to groups - group_map.pkl]
        H[Train Group Model - Stage 1]
        I[Train Per-Group Submodels - Stage 2]
    end

    D --> F --> G --> H --> I
    M[model.py<br/>model architectures] --> H
    M --> I
    K[config.py<br/>NUM_GROUPS HIDDEN_SIZE etc] --> Training

    subgraph Inference["hierarchical_inference.py"]
        J1[Stage 1: predict sign group]
        J2[Stage 2: predict class within group]
    end
    H --> J1 --> J2
    I --> J2
    label_map.pkl -.-> J2
    inference_utils.py[inference_utils.py /<br/>inference_settings.json] --> J1

    D --> J1
    J2 --> P1[predict.py<br/>predict by dataset vid]
    J2 --> P2[predict_video.py<br/>predict from raw video]
    C --> P2

    J2 --> EV[evaluate.py<br/>eval + sweep top-k/temperature]
    EV --> REP[evaluation_reports/]

    subgraph SentencePipeline["Sign-to-Sentence Pipeline"]
        S1[pipeline.py<br/>predict 3-video window]
        S2[Convert predictions to keyword text]
        S3[T5 Generator<br/>wts_split/best_model]
    end

    J2 --> S1 --> S2 --> S3 --> S4[Generated Sentence]

    subgraph T5Training["wts_split/"]
        T1[training.py<br/>train T5 on keywords to sentence]
        T2[inference.py<br/>keyword to sentence CLI]
    end
    T1 --> S3
    T2 --> S3

    DEMO[demo.py<br/>interactive CLI demo] --> S1

    subgraph CTRGCN["ctrgcn_workspace/ - isolated experiment"]
        CT1[train_ctrgcn.py]
        CT2[evaluate_ctrgcn.py]
    end
    D -.shared keypoint format.-> CT1
    CT1 --> CT2

    subgraph Diagnostics["Utility / Exploration Scripts"]
        U1[compare_video_features.py]
        U2[plot_normalize.py]
        U3[show_normalize.py]
        U4[Explore_id.py]
        U5[my_check.py]
    end
    D -.-> Diagnostics`,
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "Deep Learning", tech: "PyTorch, TorchVision, Hugging Face Transformers" },
      { category: "Perception", tech: "MediaPipe Holistic, OpenCV" },
      { category: "ML / Data", tech: "scikit-learn, NumPy, Pandas" },
      { category: "Language Model", tech: "T5 (Text-to-Text Transfer Transformer)" },
      { category: "Graph-Based (experimental)", tech: "CTRGCN (spatial-temporal graph convolution)" },
      { category: "Visualization", tech: "Matplotlib" },
      { category: "Hardware", tech: "CUDA-compatible GPU (optional)" }
    ],
    dataset: "**Dataset:** FDMSE-ISL (Indian Sign Language), ~2,000 sign classes with multiple video samples per class.\n\n**Input format:** raw video files (.mp4, .avi) or live webcam stream at 30 FPS.\n\n**Preprocessing:** MediaPipe Holistic keypoint extraction (29 keypoints/frame) → temporal alignment/resampling → global normalization → augmentation during training (noise, frame dropout, time masking, scale jitter, shift).",
    methodology: [
      "Process raw sign-language videos through MediaPipe Holistic to extract spatiotemporal keypoint sequences; normalize and split 80/20 train/val.",
      "Encode each sample into an embedding and cluster into 72 groups via KMeans (hierarchical clustering).",
      "Train the group model (Transformer encoder: 4 layers, 384 hidden size, 8 attention heads) with 5-fold CV to classify among the 72 groups.",
      "Train one dedicated submodel per group (~28 classes each) for fine-grained sign classification.",
      "Fine-tune a T5-small model on keyword-sequence-to-sentence pairs using a sliding 3-keyword window.",
      "Run inference: raw video → keypoint extraction → normalization → group prediction → submodel prediction → keyword mapping → T5 generation.",
      "Optionally ensemble multiple trained models via averaging/voting."
    ],
    modelDesign: `Stage 1 (Group Model):
- Input: T × 29 normalized keypoints
- Transformer encoder: 4 layers, hidden 384, 8 heads
- (or BiLSTM with residual connections)
- Output: 72-class softmax
- Loss: cross-entropy with label smoothing ε = 0.1

Stage 2 (Submodels):
- Same architecture per group
- 73 models total (1 group + 72 submodels), each lightweight
- ~28 classes per submodel on average

T5 Generator:
- Base: t5-small
- Input format: "generate sentence: <kw1> <kw2> <kw3>"
- Beam search: beam size 4, max length 20

Training:
- Adam (lr 1e-3), batch size 64, up to 100 epochs
- Early stopping (patience 10), ReduceLROnPlateau (factor 0.5, patience 5)
- Label smoothing ε = 0.1, dropout 0.2, weight decay 1e-4`,
    results: [
      { metric: "Top-1 Accuracy (Hierarchical)", value: "84.7%" },
      { metric: "Top-5 Accuracy", value: "93.4%" },
      { metric: "Inference Time", value: "28ms total" },
      { metric: "BLEU-4 Score", value: "0.742" },
      { metric: "ROUGE-L Score", value: "0.815" },
      { metric: "METEOR Score", value: "0.693" },
      { metric: "Human Fluency Rating", value: "4.2 / 5.0" },
      { metric: "Flat Classifier Accuracy (baseline)", value: "72.3%" },
      { metric: "Training Time Reduction", value: "4x faster (12h vs. 48h)" },
      { metric: "Model Size Reduction", value: "5x smaller (0.4GB vs. 2.1GB)" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/Gesture2Sentence" },
      { label: "Demo Script", url: "https://github.com/Sahityabiswas/Gesture2Sentence/blob/main/demo.py" }
    ]
  }
];

export default caseStudyData;
