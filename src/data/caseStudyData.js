const caseStudyData = [
  {
    id: "scengen",
    title: "ScenGen",
    category: "Emerging Technology",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/ScenGen",
    github: "https://github.com/Sahityabiswas/ScenGen",
    tags: ["LLM", "Emerging Technology", "OCR", "Multi-Agent", "ADB"],
    projectType: "AI / ML / QA Automation / Mobile Testing",
    duration: "12 Weeks",
    teamSize: "Team Project",
    tagline: "Automating Android UI testing with multi-agent LLM orchestration — an AI that sees, thinks, and acts on your phone.",
    summary: "ScenGen is a multi-agent system with five specialized agents (Observer, Decider, Executor, Recorder, Supervisor) that collaborate to autonomously explore and validate Android applications. It combines OCR-powered widget detection via PaddleOCR with LLM-driven decision-making (GPT-4 Vision or Llama 3) to automate GUI testing without pre-written scripts.",
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
        "**Visual Understanding Gap:** Frameworks interact via resource IDs and XPaths — they cannot \"see\" the screen. A button's appearance and visual context are invisible."
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
    architecture: `
┌─────────────────────────────────────────────┐
│  **User Input: APP-ID + SCENARIO-ID**      │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **TestAgent (testbot/core.py)**            │
│  **→ Orchestrates testing loop**            │
│  **→ Manages context memory**               │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **Testing Loop (until END/FAILED/ERROR)**   │
│                                             │
│  ┌──────────────┐    ┌──────────────┐      │
│  │ **Observer** │───→│ **Decider**  │      │
│  │ **Agent**    │    │ **Agent (LLM)**│     │
│  │ **→ Screenshot**│  │ **→ Analyze UI**│  │
│  │ **→ UIED widget**│ │ **→ Reason**   │   │
│  │ **→ PaddleOCR**  │ │ **→ Decide act**│  │
│  └──────────────┘    └──────┬───────┘      │
│                              │              │
│  ┌──────────────┐    ┌──────┴───────┐      │
│  │ **Executor** │←───│ **Decider**  │      │
│  │ **Agent (ADB)**│   │ **(response)**│     │
│  │ **→ tap/swipe**│   └──────────────┘      │
│  │ **→ type text**│                         │
│  └──────┬───────┘    ┌──────────────┐      │
│         │            │ **Recorder** │      │
│         ▼            │ **Agent**    │      │
│  ┌──────────────┐    │ **→ Log action**│   │
│  │**Supervisor**│    │ **→ Save sshot**│   │
│  │ **Agent**    │    │ **→ Bug report**│   │
│  │ **→ Validate**│   └──────────────┘      │
│  │ **→ Loop detect**│                      │
│  │ **→ Timeout**   │                       │
│  └──────────────┘                          │
└─────────────────────────────────────────────┘
         │
         ▼
  **Test Complete: PASS / FAIL / ERROR**
  **↓**
  **Bug Report Generated**
    `.trim(),
    techStack: [
      { category: "Languages", tech: "Python 3.9" },
      { category: "LLM / AI", tech: "OpenAI GPT-4 Vision, Ollama (Llama 3 8B)" },
      { category: "OCR", tech: "PaddleOCR (PaddlePaddle based), PP-OCRv2" },
      { category: "Emerging Technology", tech: "OpenCV, UIED (custom widget detection)" },
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
      "**Loop or Terminate:** If LLM returns \"END\" (scenario complete), test passes. If \"FAILED\" or \"ERROR\", test terminates with bug report."
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
      { label: "Documentation", url: "https://github.com/Sahityabiswas/ScenGen/blob/main/LINUX_RUNBOOK.md" },
      { label: "Runbook (Windows)", url: "https://github.com/Sahityabiswas/ScenGen/blob/main/run_scengen_here.bat" }
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
    projectType: "AI / ML / Assistive Technology",
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
        "**Scalability:** Training a flat classifier across thousands of classes suffers from class imbalance, vanishing gradients, and poor generalization.",
        "**No Language Generation:** Even when signs are recognized, systems output isolated keywords rather than coherent sentences, requiring the user to mentally reconstruct grammar and context."
      ],
      closing: "The core challenge was to design a system that can scale to a large vocabulary while maintaining high accuracy, and then bridge the gap from isolated sign recognition to natural language generation."
    },
    solutionApproach: "We addressed the vocabulary scalability problem through hierarchical classification. Instead of training one massive 2,000-class classifier, we:\n\n1. **Grouped semantically similar signs** using KMeans clustering on learned feature embeddings (72 groups).\n2. **Trained a group predictor** (Stage 1) to identify which group a gesture belongs to.\n3. **Trained group-specific sub-models** (Stage 2) — one per group — for fine-grained sign classification.\n\nThis divide-and-conquer approach reduces each sub-problem to ~28 classes on average, dramatically improving accuracy and training efficiency.\n\nFor the language gap, we fine-tuned a T5 sequence-to-sequence model on sign-keyword-to-sentence pairs, enabling the system to output grammatically correct, contextually appropriate sentences from a sliding window of 3 predicted signs.",
    features: [
      "**Hierarchical Classification Pipeline:** Reduces a ~2,000-class classification problem into a two-stage prediction (group -> specific sign), dramatically improving accuracy and inference speed.",
      "**Sign-to-Sentence Generation:** Fine-tuned T5 transformer converts sequences of predicted sign keywords into grammatically correct English sentences.",
      "**Raw Video Inference:** End-to-end pipeline from raw video input (webcam or file) to final sentence output using MediaPipe for keypoint extraction.",
      "**Dual Model Architecture:** Configurable between Transformer encoder and BiLSTM with residual connections.",
      "**Data Augmentation Pipeline:** Noise injection, frame dropout, time masking, scale jitter, and shift for robust real-world performance.",
      "**Ensemble Inference:** Supports loading multiple trained models for ensemble predictions.",
      "**CTRGCN Experimental Workspace:** Optional spatial-temporal graph convolution for skeleton-based sign recognition research."
    ],
    architecture: `
┌─────────────────────────────────────┐
│  **VideoKeypointExtractor**          │
│  **(MediaPipe Holistic)**            │
│  **→ 29 keypoints per frame**        │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  **Feature Normalization**          │
│  **(Global mean/std fitted**        │
│  **on train)**                      │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  **Hierarchical Inference**         │
│  **Pipeline**                       │
│                                     │
│  **Stage 1: Group Model**           │
│  **→ Predicts among 72 sign groups**│
│                                     │
│  **Stage 2: Group-Specific**        │
│  **Submodel**                       │
│  **→ Predicts final sign class**    │
│  **(avg ~28 classes per model)**    │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  **Keyword Mapping**                │
│  **(class_map_FDMSE-ISL.csv)**      │
│  **→ Converts class ID → sign word**│
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  **T5 Sentence Generator**          │
│  **(Sliding window of 3 sign**      │
│  **words)**                         │
│  **→ Generates grammatical**        │
│  **sentence**                       │
└─────────────────────────────────────┘
         │
         ▼
  **Final Sentence Output**
    `.trim(),
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "Deep Learning", tech: "PyTorch, TorchVision, Hugging Face Transformers" },
      { category: "Emerging Technology", tech: "MediaPipe Holistic, OpenCV" },
      { category: "ML / Data", tech: "scikit-learn, NumPy, Pandas" },
      { category: "Language Model", tech: "T5 (Text-To-Text Transfer Transformer)" },
      { category: "Graph-Based", tech: "CTRGCN (Spatial-Temporal Graph Convolution)" },
      { category: "Visualization", tech: "Matplotlib" },
      { category: "Hardware", tech: "CUDA-compatible GPU (optional)" }
    ],
    dataset: "**Dataset:** FDMSE-ISL (Indian Sign Language dataset) containing ~2,000 sign classes with multiple video samples per class.\n\n**Input Format:** Raw video files (.mp4, .avi) or live webcam stream at 30 FPS.\n\nPreprocessing Pipeline:\n1. **Keypoint Extraction:** MediaPipe Holistic extracts 29 keypoints per frame (11 upper body pose + 9 left hand + 9 right hand landmarks)\n2. **Temporal Alignment:** Videos are sampled to a fixed number of frames for batch consistency\n3. **Normalization:** Global mean and standard deviation are computed across the entire training set and applied to all samples\n4. **Data Augmentation** (during training): Gaussian noise injection (+/-0.01), random frame dropout (10% probability), time masking (mask 5 consecutive frames), scale jitter (0.9x-1.1x), shift augmentation (+/-2 frames)",
    methodology: [
      "**Data Preparation:** Raw sign language videos are processed through MediaPipe Holistic to extract spatiotemporal keypoint sequences. Sequences are normalized and split into train/validation sets (80/20).",
      "**Hierarchical Clustering:** A feature extractor encodes each sign sample into an embedding vector. KMeans clustering groups semantically similar signs into 72 clusters.",
      "**Group Model Training:** A Transformer encoder (4 layers, 384 hidden size, 8 attention heads) is trained to classify which of the 72 groups a gesture belongs to. 5-fold cross-validation ensures robustness.",
      "**Sub-Model Training:** For each of the 72 groups, a dedicated sub-model is trained to classify among the signs within that group (average ~28 classes per sub-model).",
      "**Sign-to-Sentence Fine-Tuning:** A T5-small transformer is fine-tuned on keyword-sequence-to-sentence pairs with a sliding window of 3 predicted sign keywords.",
      "**Inference:** Raw video is processed through the full pipeline: keypoint extraction, normalization, group prediction, sub-model prediction, keyword mapping, T5 sentence generation.",
      "**Ensemble (Optional):** Multiple trained models can be loaded simultaneously for ensemble predictions via averaging or voting."
    ],
    modelDesign: `Hierarchical Classifier Architecture

**Stage 1 — Group Model:**
- Input: Normalized keypoint sequence (T x 29)
- Encoder: Transformer encoder with 4 layers, hidden size 384, 8 attention heads (or BiLSTM with residual connections)
- Output: 72-class softmax distribution over sign groups
- Loss: Cross-entropy with label smoothing

**Stage 2 — Sub-Models:**
- Same architecture as group model, each handling ~28 classes within its group
- 73 models total (1 group + 72 sub-models), keeping each lightweight

**T5 Sentence Generator:**
- Base model: t5-small from Hugging Face
- Input format: "generate sentence: <kw1> <kw2> <kw3>"
- Generation: Beam search with beam size 4, max length 20 tokens

**Training Configuration:**
- Optimizer: Adam (lr=1e-3)
- Batch Size: 64
- Epochs: 100 (early stopping, patience=10)
- Scheduler: ReduceLROnPlateau (factor=0.5, patience=5)
- Loss Function: Cross-Entropy (label smoothing e=0.1)
- Dropout: 0.2
- Weight Decay: 1e-4`,
    results: [
      { metric: "Top-1 Accuracy (Hierarchical)", value: "84.7%" },
      { metric: "Top-5 Accuracy", value: "93.4%" },
      { metric: "Inference Time", value: "28ms total" },
      { metric: "BLEU-4 Score", value: "0.742" },
      { metric: "ROUGE-L Score", value: "0.815" },
      { metric: "METEOR Score", value: "0.693" },
      { metric: "Human Fluency Rating", value: "4.2 / 5.0" },
      { metric: "Flat Classifier Accuracy", value: "72.3% (vs 84.7% hierarchical)" },
      { metric: "Training Time Reduction", value: "12 hours vs 48 hours (4x faster)" },
      { metric: "Model Size Reduction", value: "0.4 GB vs 2.1 GB (5x smaller)" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/Gesture2Sentence" },
      { label: "Demo Script", url: "https://github.com/Sahityabiswas/Gesture2Sentence/blob/main/demo.py" },
      { label: "Inference CLI", url: "https://github.com/Sahityabiswas/Gesture2Sentence?tab=readme-ov-file#predicting-from-a-raw-video-file" }
    ]
  },
  {
    id: "traffic-control",
    title: "Smart City Traffic Light Control",
    category: "Reinforcement Learning",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control",
    github: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control",
    tags: ["Reinforcement Learning", "DQN", "PyTorch", "PyGame", "Python"],
    projectType: "AI / ML / Reinforcement Learning / Smart City",
    duration: "8 Weeks",
    teamSize: "Team Project",
    tagline: "Reducing urban traffic congestion through reinforcement learning — an AI that learns optimal traffic light timing through experience.",
    summary: "A Deep Q-Network agent trained to control traffic lights at a 4-way urban intersection, reducing average wait time by 64.5% and increasing throughput by 50% compared to fixed-timer signals. The system features a custom PyGame simulation environment, 6-phase action space, engineered reward function, emergency vehicle override, and real-time learning visualization.",
    overview: {
      problem: "Urban traffic congestion costs the global economy over $300 billion annually in lost productivity, fuel waste, and environmental damage. Traditional fixed-timer traffic signals cannot adapt to real-time fluctuations in traffic flow.",
      importance: "A single optimized traffic intersection can reduce average wait times by 20-40%, cutting fuel consumption and emissions proportionally. At city scale, adaptive traffic signal control is one of the most cost-effective infrastructure improvements — requiring no new roads, only smarter software.",
      targetUsers: "City traffic management departments, urban planners, civil engineers, smart city initiatives, and daily commuters."
    },
    problemStatement: {
      opening: "Urban traffic signal control is a sequential decision-making problem under uncertainty:",
      points: [
        "**Dynamic Traffic:** Vehicle arrivals follow no fixed schedule. Rush hour, accidents, and events create constantly changing patterns that fixed-timer signals cannot adapt to.",
        "**Delayed Consequences:** A traffic light decision affects subsequent cycles for minutes. The agent must learn long-term planning.",
        "**Multi-Objective Optimization:** The system must minimize wait time, prevent queue overflow, handle emergency vehicles, and maintain fairness.",
        "**Real-World Constraints:** Traffic light phases have safety constraints and minimum/maximum durations."
      ],
      closing: "**The challenge:** formulate traffic signal control as a Markov Decision Process (MDP) and train a Deep Q-Network agent that learns optimal phase timing through simulated experience."
    },
    solutionApproach: "We modeled the traffic intersection as an MDP and solved it using Deep Q-Learning:\n\n1. **State Representation:** A 4-dimensional vector [q_N, q_S, q_E, q_W] representing vehicle queue lengths. This compact representation keeps the neural network small and trainable.\n2. **Action Space:** 6 discrete traffic light phases: N, S, E, W (single green), NS (N-S green), EW (E-W green).\n3. **Reward Function:** R_t = (2xDeltaQ + 1xDeltaW) / max(1, N_t) — incentivizes queue reduction (2x) and wait time reduction (1x), normalized by traffic load.\n4. **Deep Q-Network:** A feedforward network (4 -> 64 -> 64 -> 6) with ReLU, trained via experience replay.\n5. **Simulation:** PyGame-based 2D visualization with real-time feedback and interpretable decision-making.",
    features: [
      "**Deep Q-Network (DQN) Agent:** Neural network trained via RL to make optimal traffic light phase decisions.",
      "**Customizable 4-Way Intersection Simulation:** PyGame-based environment with realistic car spawning, movement, and queuing physics.",
      "**6 Distinct Traffic Light Phases:** Four single-direction greens plus N-S and E-W simultaneous greens.",
      "**Emergency Vehicle Override System:** 5% probability emergency vehicles automatically override red lights.",
      "**Real-Time Metrics HUD:** Live display of vehicle counts, average wait times, reward, and epsilon.",
      "**Dynamic Learning Curve:** Real-time plotted green line (average reward) and red line (average wait time).",
      "**Experience Replay Buffer:** 6,000-capacity memory with batch size 64 for stable Q-learning.",
      "**Target Network:** Separate frozen network for stable training, synced per episode."
    ],
    architecture: `
┌─────────────────────────────────────────────┐
│  **main.py — Application Entry Point**      │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **TrafficSimulation (src/simulation.py)**  │
│  **→ Manages training loop (episodes**      │
│  **= days)**                                │
│  **→ Orchestrates env, agent, rendering**   │
│  **→ Logs metrics per episode**             │
└─────────────────────────────────────────────┘
         │
         ├────────────────┬───────────────────┘
         ▼                ▼
┌─────────────────┐  ┌─────────────────┐
│**InterSection**│  │ **DQNAgent**    │
│**Env**         │  │ **(agent.py)**  │
│**→ Car spawning**│  │ **→ Q-network**│
│**→ Movement sim**│  │ **→ Target net**│
│**→ Queue physics**│  │**→ Replay buffer**│
│**→ State/reward**│  │ **→ ε-greedy**│
│**→ Emergency**   │  │ **→ Optimize()**│
└─────────────────┘  └────────┬────────┘
         │                    │
         └────────┬───────────┘
                  ▼
┌─────────────────────────────────────────────┐
│  **PyGame Renderer (simulation.py)**        │
│  **→ Roads, lanes, stop lines**             │
│  **→ Car rendering + traffic lights**       │
│  **→ Metrics HUD + Learning curve**         │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  **DQN Model (src/model.py)**               │
│  **Input(4) → Hidden(64→64, ReLU)**         │
│  **→ Output(6)**                            │
│  **Optimizer: Adam (lr=0.001)**             │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  **Config (src/config.py)**                 │
│  **→ All hyperparameters, colors,**         │
│  **geometry**                               │
└─────────────────────────────────────────────┘
    `.trim(),
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "Deep Learning", tech: "PyTorch" },
      { category: "Reinforcement Learning", tech: "Custom DQN (from scratch)" },
      { category: "Simulation", tech: "PyGame" },
      { category: "Numerical Computing", tech: "NumPy" },
      { category: "Visualization", tech: "PyGame real-time plotting, Matplotlib" }
    ],
    dataset: "No external dataset required. The system generates synthetic traffic data through its simulation environment.\n\nEnvironment Parameters:\n- **Intersection:** 4-way (N, S, E, W) with two lanes per direction\n- **Car Spawn Probability:** 0.05 per frame per direction (~3 cars/second at 60 FPS)\n- **Emergency Vehicle Probability:** 5% of spawned vehicles\n- **Day Length:** 7,200 frames (120 seconds simulated time per episode)\n- **Decision Interval:** 60 frames (agent decides every 1 second)\n\nTraffic Generation:\n- Vehicles spawn stochastically at each direction's entry point with configurable probability\n- Each vehicle has random speed variation (+/-20% of base speed)\n- Emergency vehicles (5% probability) are visually distinct (red with flashing effect) and override traffic signals",
    methodology: [
      "**Environment Setup:** 4-way intersection created with road geometry (2 lanes per direction), traffic light positions, stop lines, and car spawn points.",
      "**Episode Initialization:** Each episode (\"day\") begins with empty roads and initial state S = [0, 0, 0, 0].",
      "**Decision Loop (per second):** 1. Observe queue lengths [q_N, q_S, q_E, q_W] 2. DQN agent selects traffic light phase via epsilon-greedy 3. Apply phase for the next 60 frames 4. Cars spawn, move, and queue according to traffic rules 5. Compute reward based on queue reduction and wait time changes 6. Store experience (S, A, R, S') in replay buffer.",
      "**Learning (batch update):** Agent samples 64 random experiences, computes target Q-values using target network, performs gradient descent on DQN.",
      "**End of Episode:** 1. Sync target network weights with DQN 2. Decay epsilon: e = max(e * 0.9, 0.4) 3. Log episode metrics 4. Reset environment.",
      "**Training Completion:** After configured episodes, the trained DQN agent can be used for inference."
    ],
    modelDesign: `Markov Decision Process (MDP) Formulation
**State (S):** [q_N, q_S, q_E, q_W] — queue lengths in 4 directions
**Action (A):** 6 phases — N, S, E, W, NS, EW
**Reward (R):** (2xDeltaQ + 1xDeltaW) / max(1, N_t)
**Discount (y):** 0.95

Deep Q-Network Architecture
Input: 4 (queue lengths) -> Linear(4, 64) -> ReLU -> BatchNorm
  -> Linear(64, 64) -> ReLU -> BatchNorm
  -> Linear(64, 6) -> Output (Q-values)

DQN Agent Configuration
- Learning Rate: 0.001 (Adam optimizer)
- Discount (y): 0.95
- Batch Size: 64
- Buffer Size: 6,000
- **Epsilon Start:** 1.0
- **Epsilon Min:** 0.4
- **Epsilon Decay:** 0.9 (per-episode)`,
    results: [
      { metric: "Avg Wait (DQN trained)", value: "11.5 frames" },
      { metric: "Avg Wait (Fixed Timer 30s)", value: "32.4 frames" },
      { metric: "Avg Queue (DQN trained)", value: "2.1" },
      { metric: "Avg Queue (Fixed Timer 30s)", value: "6.8" },
      { metric: "Throughput (DQN trained)", value: "1,800/hr" },
      { metric: "Throughput (Fixed Timer 30s)", value: "1,200/hr" },
      { metric: "Wait Time Reduction vs Fixed", value: "64.5%" },
      { metric: "Queue Length Reduction vs Fixed", value: "69.1%" },
      { metric: "Throughput Increase vs Fixed", value: "50%" },
      { metric: "Improvement vs Greedy Heuristic", value: "38.5%" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control" },
      { label: "Research Report", url: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control/blob/main/docs/Report_Team_SSP.pdf" },
      { label: "Run Command", url: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control#running-the-simulation" }
    ]
  },
  {
    id: "job-nexus",
    title: "JOB_NEXUS",
    category: "Recommendation System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/JOB_NEXUS",
    github: "https://github.com/Sahityabiswas/JOB_NEXUS",
    tags: ["Apache Spark", "Neo4j", "NLP", "FastAPI", "Python"],
    projectType: "AI / ML / Distributed Systems / Recommendation System",
    duration: "10 Weeks",
    teamSize: "Team Project",
    tagline: "Empowering career decisions through distributed NLP, semantic graph databases, and real-time skill matching.",
    summary: "A distributed career recommendation engine that ingests live job listings from 4 APIs across an Apache Spark cluster, processes NLP skill extraction in parallel, models the job market as a Neo4j property graph (6,500+ nodes, 18,000+ relationships), and serves matches through an interactive glassmorphic dashboard with a 'What-If' career simulator. The Spark pipeline achieves 24x speedup over sequential processing.",
    overview: {
      problem: "Job seekers are overwhelmed by thousands of listings across multiple platforms. They struggle to identify which roles match their skills, what skills they're missing, and how to bridge the gap. Traditional job boards offer basic keyword search but no intelligent career path analysis.",
      importance: "The modern job market demands continuous skill development. Without intelligent tools, job seekers waste hours manually comparing job requirements against their profiles, and miss opportunities because they lack visibility into adjacent career paths.",
      targetUsers: "Job seekers exploring career transitions, recent graduates, career changers looking to reskill, and professionals who want to identify skill gaps and learning pathways."
    },
    problemStatement: {
      opening: "Modern job searching is broken. The average job posting receives 250+ applications, and job seekers spend 5+ hours per week browsing listings. Three critical gaps persist:",
      points: [
        "**No Skill Gap Analysis:** Job seekers can't easily see what skills they're missing for a target role.",
        "**No Learning Pathways:** Even when gaps are identified, there's no direct connection to courses that teach those skills.",
        "**No Career Graph:** Users lack visibility into how their existing skills connect to multiple career paths."
      ],
      closing: "The challenge was to build a system that ingests, processes, and connects job market data at scale, then surfaces actionable career intelligence through an intuitive visual interface."
    },
    solutionApproach: "We designed a four-layer architecture:\n\n1. **Ingestion Layer:** Apache Spark distributes API fetching and NLP preprocessing across worker nodes for scalable data processing.\n2. **Storage Layer:** Neo4j's property graph model naturally represents the relationships between jobs, skills, and courses — enabling graph traversals like \"find all jobs that require Python but not SQL.\"\n3. **Matching Layer:** TF-IDF vectorization of job requirements vs. user skills with cosine similarity, calibrated with a dilution factor to prevent inflated scores.\n4. **Presentation Layer:** A single-page glassmorphic dashboard with Vis.js for interactive graph exploration and real-time \"What-If\" simulation.",
    features: [
      "**Distributed Data Ingestion:** Apache Spark cluster fetches and processes live job listings from Remotive, The Muse, and Jobicy APIs, plus Coursera courses.",
      "**Parallel NLP Skill Extraction:** spaCy-based NLP runs across Spark workers to extract, normalize, and deduplicate skills from job descriptions.",
      "**Semantic Graph Database:** Neo4j property graph models jobs, skills, and courses as interconnected nodes with typed relationships.",
      "**TF-IDF + Cosine Similarity Matching:** Real-time matching between user skills and job requirements with diluted cosine similarity for realistic scores.",
      "**Interactive Glassmorphic Dashboard:** Vis.js-powered constellation graph with physics simulation, live metrics grid, and skill chips.",
      "**\"What-If\" Career Simulator:** Users can click missing skills to simulate learning them, instantly seeing how their match scores and career graph change."
    ],
    architecture: `
**Public Job APIs (Remotive, Muse, Jobicy) + Coursera**
         │
         ▼
┌─────────────────────────────────────────────┐
│  **Spark Master Node (Driver)**             │
│  **→ Fetches and partitions RDDs**          │
└─────────────────────────────────────────────┘
         │
         ├────────────────────┬────────────────┘
         ▼                    ▼
┌─────────────────┐  ┌─────────────────┐
│ **Spark Worker**│  │ **Spark Worker**│
│ **1**           │  │ **2**           │
│ **(spaCy NLP)** │  │ **(spaCy NLP)** │
│ **→ skill detect**│  │ **→ skill detect**│
│ **→ normalize** │  │ **→ normalize** │
│ **→ deduplicate**│  │ **→ deduplicate**│
└─────────────────┘  └─────────────────┘
         │                    │
         └────────┬───────────┘
                  ▼
┌─────────────────────────────────────────────┐
│  **foreachPartition — Parallel Neo4j**      │
│  **Ingestion**                               │
│  **(Job) -[:REQUIRES]-> (Skill)**            │
│  **(Course) -[:TEACHES]-> (Skill)**          │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  **Neo4j Semantic Graph Database**          │
│  **(6,500+ nodes, 18,000+ relationships)**  │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  **FastAPI Backend**                        │
│  **→ TF-IDF vectorization**                 │
│  **→ Cosine similarity matching**           │
│  **→ Cypher queries**                       │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  **Frontend SPA (Glassmorphic Dashboard)**  │
│  **→ Vis.js interactive graph**             │
│  **→ What-If Career Simulator**             │
│  **→ Skill chips & progress grid**          │
└─────────────────────────────────────────────┘
    `.trim(),
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "Distributed Computing", tech: "Apache Spark (PySpark)" },
      { category: "Graph Database", tech: "Neo4j" },
      { category: "Backend Framework", tech: "FastAPI" },
      { category: "NLP", tech: "spaCy (en_core_web_sm)" },
      { category: "ML / Vectorization", tech: "scikit-learn (TF-IDF, cosine similarity)" },
      { category: "Frontend", tech: "HTML5, CSS3, JavaScript (Vanilla)" },
      { category: "Graph Visualization", tech: "Vis.js" },
      { category: "Data Sources", tech: "Remotive API, The Muse API, Jobicy API, Coursera" },
      { category: "Deployment", tech: "Uvicorn, Spark Standalone Cluster" }
    ],
    dataset: "**Live API Sources:** Remotive API (remote job listings), The Muse API (company and job data), Jobicy API (remote-first jobs), Coursera (course and specialization data).\n\n**Data Format:** JSON with job titles, descriptions, required skills, company info, and URLs.\n\nPreprocessing (Spark Workers):\n1. **Text Cleaning:** Remove HTML tags, special characters, excessive whitespace\n2. **Skill Extraction:** spaCy NER and custom rule-based matching detects skill phrases\n3. **Normalization:** Fuzzy matching maps variations to canonical forms (e.g., \"pyton\" -> \"Python\")\n4. **Deduplication:** Same skill from multiple sources merged into a single node\n5. **Relationship Building:** Create REQUIRES edges between Job and Skill nodes, TEACHES edges between Course and Skill nodes",
    methodology: [
      "**Data Ingestion:** Spark Master sends parallel HTTP requests to Remotive, The Muse, Jobicy, and Coursera APIs. Raw JSON responses are parsed and flattened into RDDs.",
      "**Distributed NLP Processing:** Spark workers load spaCy en_core_web_sm. Each worker processes its partition: tokenize, extract noun phrases and named entities, match against a curated skill dictionary, normalize to canonical forms.",
      "**Graph Population:** Workers establish concurrent Neo4j connections via foreachPartition. For each job record, a (Job) node is created with REQUIRES relationships to (Skill) nodes. Course records create (Course) nodes with TEACHES relationships.",
      "**TF-IDF Indexing:** FastAPI builds a TF-IDF matrix from all extracted skills across all jobs. User-provided skills are vectorized against this matrix.",
      "**Similarity Matching:** Cosine similarity is computed between the user's TF-IDF vector and each job's vector. A dilution factor prevents score inflation.",
      "**Frontend Rendering:** Vis.js receives matched results and renders an interactive graph with physics simulation. Nodes represent jobs, skills, and courses.",
      "**What-If Simulation:** When a user clicks a \"missing\" skill, the frontend adds it to the user's skill set and re-queries the API, instantly showing new matches."
    ],
    modelDesign: `TF-IDF Matching Engine
- **Vectorizer:** TfidfVectorizer with max_features=5000, ngram_range=(1,2), stop_words='english'
- **Similarity:** Diluted cosine similarity: score = cos_sim / (1 + alpha * sparsity), alpha=0.3
- **Threshold:** Minimum 15% match score for display

Neo4j Graph Schema
Nodes:
  (Job)       {id, title, company, url, description, source}
  (Skill)     {id, name, category, canonical_form}
  (Course)    {id, title, provider, url, difficulty}
Relationships:
  (Job) -[:REQUIRES {importance, source}]-> (Skill)
  (Course) -[:TEACHES {relevance}]-> (Skill)

NLP Pipeline (spaCy)
Raw Text -> Tokenization -> POS Tagging -> NER -> Dependency Parse
  -> Noun Phrase Chunking -> Skill Dictionary Match
  -> Fuzzy Normalization -> Canonical Skill Name -> Dedup Check`,
    results: [
      { metric: "Jobs Ingested (Spark)", value: "1,200+" },
      { metric: "Skills Extracted", value: "4,500+" },
      { metric: "Courses Ingested", value: "800+" },
      { metric: "Ingestion Time (Spark)", value: "45 seconds" },
      { metric: "Ingestion Time (Sequential)", value: "18 minutes" },
      { metric: "Speedup", value: "24x" },
      { metric: "Precision@5", value: "0.87" },
      { metric: "Recall@10", value: "0.79" },
      { metric: "Avg Match Score", value: "62.3%" },
      { metric: "User Satisfaction", value: "4.3 / 5.0" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/JOB_NEXUS" },
      { label: "Run Ingestion", url: "https://github.com/Sahityabiswas/JOB_NEXUS?tab=readme-ov-file#3-run-ingestion-pipeline" },
      { label: "Setup Guide", url: "https://github.com/Sahityabiswas/JOB_NEXUS?tab=readme-ov-file#-setup--execution" }
    ]
  },
  {
    id: "aqi-prediction",
    title: "ML-Based AQI Prediction",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION",
    github: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION",
    tags: ["Regression", "Scikit-Learn", "Random Forest", "Python"],
    projectType: "Machine Learning / Data Science / Environmental Analytics",
    duration: "8 Weeks",
    teamSize: "Solo Project",
    tagline: "Predicting city-level air quality across India using comparative regression analysis to inform public health and environmental policy.",
    summary: "A systematic comparison of 4 regression models (Linear, Ridge, Lasso, Random Forest) for predicting Air Quality Index across 26 Indian cities using the Kaggle Indian Air Quality dataset (2015-2020). Random Forest achieves best-in-class R-squared of 0.909 with 19% RMSE reduction over linear models. The project includes city-wise missing value imputation, 5-fold cross-validation, feature importance analysis, and a comprehensive academic report.",
    overview: {
      problem: "Air pollution is a critical public health crisis in India, with 14 of the world's 20 most polluted cities. Accurate AQI prediction remains challenging due to complex interactions between multiple pollutants, seasonal variations, and missing data across monitoring stations.",
      importance: "Reliable AQI prediction enables early warnings for vulnerable populations, helps authorities implement targeted interventions, and supports long-term environmental policy planning.",
      targetUsers: "Environmental agencies (CPCB, state pollution control boards), public health officials, urban planners, researchers, and citizens in pollution-prone areas."
    },
    problemStatement: {
      opening: "Air pollution causes an estimated 1.67 million deaths annually in India. The Air Quality Index (AQI) is the standard metric, but predicting it accurately is difficult because:",
      points: [
        "**Multi-Pollutant Interactions:** AQI depends on PM2.5, PM10, NO2, SO2, CO, O3, and other pollutants with complex non-linear interactions.",
        "**Spatiotemporal Variability:** Pollution patterns vary dramatically across cities and seasons — Delhi's winter smog vs. Mumbai's moderate levels.",
        "**Data Quality Issues:** Monitoring stations frequently report ~25% missing values due to equipment failure and calibration gaps.",
        "**Limited Comparative Research:** Most studies evaluate a single model; limited rigorous comparison exists on Indian AQI data."
      ],
      closing: "The challenge was to systematically compare multiple regression paradigms on a real-world Indian AQI dataset."
    },
    solutionApproach: "We designed a rigorous comparative framework:\n\n1. **Standardized Preprocessing** — Consistent data cleaning, city-wise imputation, and train/test splitting (90/10) across all models.\n2. **Diverse Model Selection** — Models spanning different paradigms: linear (OLS), regularized (Ridge, Lasso), and non-linear ensemble (Random Forest).\n3. **Cross-Validation** — 5-fold CV on all models to assess generalization and overfitting.\n4. **Multi-Metric Evaluation** — Beyond R-squared, we analyze MAE, RMSE, residual distributions, and prediction scatter.\n5. **Hyperparameter Tuning** — Ridge and Lasso alphas optimized via CV; Random Forest trees and depth tuned for performance.",
    features: [
      "**Comparative Analysis of 4 Regression Models:** Linear Regression (baseline), Ridge Regression (L2 regularization), Lasso Regression (L1 regularization + feature selection), Random Forest Regression (ensemble method).",
      "**City-Wise Missing Value Imputation:** Group-mean imputation at the city level preserves local pollution patterns.",
      "**5-Fold Cross-Validation:** All models evaluated with consistent CV strategy for reliable performance comparison.",
      "**Comprehensive Evaluation Suite:** MAE, MSE, RMSE, and R-squared metrics with residual analysis and predicted-vs-actual plots.",
      "**Visual Diagnostic Toolkit:** Residual distribution plots, prediction scatter plots, feature importance analysis.",
      "**Reproducible Notebooks:** Self-contained Jupyter notebooks for each model enabling independent reproduction."
    ],
    architecture: `
┌─────────────────────────────────────────────┐
│  **Raw Dataset (city_day.csv — Kaggle)**    │
│  **~16,000 rows x 13 columns, 26 cities**   │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **Data Preprocessing**                     │
│  **→ City-wise group mean imputation**      │
│  **→ Train/Test split (90/10)**             │
│  **→ Save processed datasets**              │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **Model Training (5-Fold CV)**             │
│                                             │
│  ┌─────────┐ ┌────────┐ ┌───────────┐     │
│  │**Linear**│ │**Ridge**│ │ **Lasso**│     │
│  │**Reg.**  │ │(a=0.5) │ │ (a=0.5)  │     │
│  └─────────┘ └────────┘ └───────────┘     │
│                                             │
│  ┌─────────────────────────────┐           │
│  │ **Random Forest**           │           │
│  │ **(100 trees, max_depth=5)**│           │
│  └─────────────────────────────┘           │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **Evaluation (Test Set)**                  │
│  **→ MAE, MSE, RMSE, R-squared**            │
│  **→ Predicted vs Actual scatter plots**    │
│  **→ Residual distribution plots**          │
│  **→ Feature importance analysis**          │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  **Results & Interpretation**               │
│  **→ Best model identified**                │
│  **→ Feature importance ranking**           │
│  **→ Deployment recommendations**           │
└─────────────────────────────────────────────┘
    `.trim(),
    techStack: [
      { category: "Languages", tech: "Python 3.8+" },
      { category: "ML Framework", tech: "scikit-learn" },
      { category: "Data Processing", tech: "NumPy, Pandas" },
      { category: "Visualization", tech: "Matplotlib, Seaborn" },
      { category: "Development", tech: "Jupyter Notebook" },
      { category: "Documentation", tech: "LaTeX (PDF report)" }
    ],
    dataset: "**Dataset:** Indian Air Quality Data (2015-2020) from Kaggle — city_day.csv. ~16,000 rows x 13 columns spanning 26 Indian cities.\n\n**Features (12 predictors):** PM2.5, PM10, NO, NO2, NOx, NH3, CO, SO2, O3, Benzene, Toluene, Xylene\n**Target:** AQI (continuous numerical value)\n\nPreprocessing Steps:\n1. **Column Selection:** City and Date columns excluded from features\n2. **Missing Value Imputation:** City-wise group mean imputation — each missing value replaced with the mean of that pollutant for that specific city\n3. **Train/Test Split:** 90% training, 10% testing (random state fixed for reproducibility)\n4. **Data Splits Saved:** AQI_train.csv and AQI_test.csv for reproducible experimentation",
    methodology: [
      "**Data Loading and Exploration:** Load city_day.csv, inspect distributions, identify missing value patterns, calculate per-city statistics.",
      "**Preprocessing:** Drop City and Date columns. Apply city-wise group mean imputation. Split into train (90%) and test (10%).",
      "**Linear Regression (Baseline):** Train OLS model. Evaluate on test set. Record MAE, MSE, RMSE, R-squared. Generate residual plots.",
      "**Ridge Regression:** Train Ridge with a=0.5. L2 regularization handles multicollinearity among correlated pollutants.",
      "**Lasso Regression:** Train Lasso with a=0.5. L1 regularization performs automatic feature selection.",
      "**Random Forest Regression:** Train Random Forest with 100 trees, max_depth=5. Captures non-linear interactions. Extract feature importance.",
      "**Comparative Analysis:** All 4 models compared across MAE, MSE, RMSE, R-squared. Visual comparison of predicted vs. actual values.",
      "**Documentation:** Results compiled into academic PDF report with methodology, figures, and conclusions."
    ],
    modelDesign: `Linear Regression (OLS)
- **Formulation:** AQI = B0 + B1*PM2.5 + B2*PM10 + ... + B12*Xylene + e
- **Role:** Baseline model establishing minimum expected performance

Ridge Regression (L2)
- **Objective:** min ||y - XB||^2 + a*||B||^2, a=0.5
- **Role:** Handles multicollinearity among correlated pollutants

Lasso Regression (L1)
- **Objective:** min ||y - XB||^2 + a*||B||_1, a=0.5
- **Role:** Automatic feature selection — zeroes out unimportant coefficients

Random Forest Regression
- **Architecture:** 100 decision trees, max_depth=5, bootstrap aggregation
- **Role:** Captures non-linear interactions and complex pollutant synergies

Training Configuration (5-Fold CV for all models)
- **Linear:** Alpha N/A
- **Ridge:** Alpha=0.5
- **Lasso:** Alpha=0.5
- **Random Forest:** N Estimators=100, Max Depth=5`,
    results: [
      { metric: "Random Forest R-squared", value: "0.9090" },
      { metric: "Linear/Ridge/Lasso R-squared", value: "0.8616" },
      { metric: "Random Forest RMSE", value: "35.13 ug/m3" },
      { metric: "Linear/Ridge/Lasso RMSE", value: "43.32 ug/m3" },
      { metric: "Random Forest MAE", value: "18.42 ug/m3" },
      { metric: "Linear/Ridge/Lasso MAE", value: "24.18 ug/m3" },
      { metric: "RMSE Reduction (RF vs Linear)", value: "19%" },
      { metric: "Top Feature (PM2.5 Importance)", value: "0.324" },
      { metric: "RF Cross-Validation R-squared", value: "0.907 (+/-0.008)" },
      { metric: "Linear/Ridge/Lasso CV R-squared", value: "0.859 (+/-0.012)" }
    ],
    resources: [
      { label: "GitHub Repository", url: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION" },
      { label: "Academic Report", url: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION/blob/main/docs/ML_BASED_AQI_PREDICTION.pdf" },
      { label: "Notebooks", url: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION/tree/main/notebooks" }
    ]
  }
];

export default caseStudyData;
