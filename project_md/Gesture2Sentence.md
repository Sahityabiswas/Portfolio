# Gesture2Sentence — Sign Language Detection & Sentence Generation

> **Tagline:** Bridging the communication gap by translating sign language gestures into natural language sentences using hierarchical deep learning.
>
> **Category:** AI / ML / Assistive Technology
> **Duration:** 12 Weeks
> **Team:** Vision Nexus (2 Members — Subhajit Paul)
> **Role:** Lead ML Engineer / Developer
> **Technologies:** Python, PyTorch, T5 Transformers, MediaPipe, OpenCV, scikit-learn

---

## 1. Project Overview

**Problem:** Sign language is the primary mode of communication for millions of deaf and hard-of-hearing individuals worldwide, yet most hearing people do not understand it. Existing sign language recognition systems are limited to small vocabularies (50-100 signs) and fail to convert recognized gestures into coherent, grammatically correct sentences.

**Why This Matters:** Communication barriers lead to social isolation, limited educational access, and reduced employment opportunities for the deaf community. A scalable, high-vocabulary sign-to-text system with natural language generation can dramatically improve accessibility.

**Target Users:** Deaf and hard-of-hearing individuals, sign language interpreters, educators in special education, accessibility organizations, and general users who wish to communicate across the language barrier.

## 2. Problem Statement

Sign language recognition is a challenging computer vision and sequence modeling problem. Existing solutions face three critical limitations:

1. **Vocabulary Size:** Most systems recognize only 50-100 signs, far short of the ~2,000+ signs needed for practical communication.
2. **Scalability:** Training a flat classifier across thousands of classes suffers from class imbalance, vanishing gradients, and poor generalization.
3. **No Language Generation:** Even when signs are recognized, systems output isolated keywords rather than coherent sentences, requiring the user to mentally reconstruct grammar and context.

The core challenge was to design a system that can scale to a large vocabulary while maintaining high accuracy, and then bridge the gap from isolated sign recognition to natural language generation.

## 3. Solution Approach

We addressed the vocabulary scalability problem through **hierarchical classification**. Instead of training one massive 2,000-class classifier, we:

1. **Grouped semantically similar signs** using KMeans clustering on learned feature embeddings (72 groups).
2. **Trained a group predictor** (Stage 1) to identify which group a gesture belongs to.
3. **Trained group-specific sub-models** (Stage 2) — one per group — for fine-grained sign classification.

This divide-and-conquer approach reduces each sub-problem to ~28 classes on average, dramatically improving accuracy and training efficiency.

For the language gap, we fine-tuned a **T5 sequence-to-sequence model** on sign-keyword-to-sentence pairs, enabling the system to output grammatically correct, contextually appropriate sentences from a sliding window of 3 predicted signs.

## 4. Key Features

- **Hierarchical Classification Pipeline:** Reduces a ~2,000-class classification problem into a two-stage prediction (group -> specific sign), dramatically improving accuracy and inference speed.
- **Sign-to-Sentence Generation:** Fine-tuned T5 transformer converts sequences of predicted sign keywords into grammatically correct English sentences.
- **Raw Video Inference:** End-to-end pipeline from raw video input (webcam or file) to final sentence output using MediaPipe for keypoint extraction.
- **Dual Model Architecture:** Configurable between Transformer encoder and BiLSTM with residual connections.
- **Data Augmentation Pipeline:** Noise injection, frame dropout, time masking, scale jitter, and shift for robust real-world performance.
- **Ensemble Inference:** Supports loading multiple trained models for ensemble predictions.
- **CTRGCN Experimental Workspace:** Optional spatial-temporal graph convolution for skeleton-based sign recognition research.

## 5. System Architecture

```
┌─────────────────────────────────────┐
│  VideoKeypointExtractor             │
│  (MediaPipe Holistic)               │
│  → 29 keypoints per frame           │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Feature Normalization              │
│  (Global mean/std fitted on train)  │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Hierarchical Inference Pipeline    │
│                                     │
│  Stage 1: Group Model               │
│  → Predicts among 72 sign groups    │
│                                     │
│  Stage 2: Group-Specific Submodel   │
│  → Predicts final sign class        │
│    (avg ~28 classes per model)      │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Keyword Mapping                    │
│  (class_map_FDMSE-ISL.csv)          │
│  → Converts class ID → sign word    │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  T5 Sentence Generator              │
│  (Sliding window of 3 sign words)   │
│  → Generates grammatical sentence   │
└─────────────────────────────────────┘
         │
         ▼
  Final Sentence Output
``````

**Data Flow:**
1. Video frames are streamed through MediaPipe to extract skeletal keypoints
2. Keypoint sequences are normalized using pre-computed global statistics
3. The normalized sequence passes through the Group Classifier (Stage 1)
4. Based on the predicted group, the corresponding sub-model is loaded and run (Stage 2)
5. The class ID is mapped to a sign keyword via the CSV lookup table
6. A sliding buffer of the last 3 predicted keywords is fed to the T5 model
7. The T5 model generates a grammatically correct English sentence

## 6. Technology Stack

| Category | Technologies |
|----------|--------------|
| **Languages** | Python 3.8+ |
| **Deep Learning** | PyTorch, TorchVision, Hugging Face Transformers |
| **Computer Vision** | MediaPipe Holistic, OpenCV |
| **ML / Data** | scikit-learn, NumPy, Pandas |
| **Language Model** | T5 (Text-To-Text Transfer Transformer) |
| **Graph-Based** | CTRGCN (Spatial-Temporal Graph Convolution) |
| **Visualization** | Matplotlib |
| **Hardware** | CUDA-compatible GPU (optional) |

## 7. Dataset / Inputs / Resources

**Dataset:** FDMSE-ISL (Indian Sign Language dataset) containing ~2,000 sign classes with multiple video samples per class.

**Input Format:** Raw video files (.mp4, .avi) or live webcam stream at 30 FPS.

**Preprocessing Pipeline:**
1. **Keypoint Extraction:** MediaPipe Holistic extracts 29 keypoints per frame (11 upper body pose + 9 left hand + 9 right hand landmarks)
2. **Temporal Alignment:** Videos are sampled to a fixed number of frames for batch consistency
3. **Normalization:** Global mean and standard deviation are computed across the entire training set and applied to all samples
4. **Data Augmentation** (during training): Gaussian noise injection (+/-0.01), random frame dropout (10% probability), time masking (mask 5 consecutive frames), scale jitter (0.9x-1.1x), shift augmentation (+/-2 frames)

## 8. Methodology / Workflow

### Step 1: Data Preparation
Raw sign language videos are processed through MediaPipe Holistic to extract spatiotemporal keypoint sequences. Sequences are normalized and split into train/validation sets (80/20).

### Step 2: Hierarchical Clustering
A feature extractor encodes each sign sample into an embedding vector. KMeans clustering groups semantically similar signs into 72 clusters.

### Step 3: Group Model Training
A Transformer encoder (4 layers, 384 hidden size, 8 attention heads) is trained to classify which of the 72 groups a gesture belongs to. 5-fold cross-validation ensures robustness.

### Step 4: Sub-Model Training
For each of the 72 groups, a dedicated sub-model is trained to classify among the signs within that group (average ~28 classes per sub-model).

### Step 5: Sign-to-Sentence Fine-Tuning
A T5-small transformer is fine-tuned on keyword-sequence-to-sentence pairs with a sliding window of 3 predicted sign keywords.

### Step 6: Inference
Raw video is processed through the full pipeline: keypoint extraction, normalization, group prediction, sub-model prediction, keyword mapping, T5 sentence generation.

### Step 7: Ensemble (Optional)
Multiple trained models can be loaded simultaneously for ensemble predictions via averaging or voting.

## 9. Model / System Design

### Hierarchical Classifier Architecture

**Stage 1 — Group Model:**
- Input: Normalized keypoint sequence (T x 29)
- Encoder: Transformer encoder with 4 layers, hidden size 384, 8 attention heads (or BiLSTM with residual connections)
- Output: 72-class softmax distribution over sign groups
- Loss: Cross-entropy with label smoothing

**Stage 2 — Sub-Models:**
- Same architecture as group model, each handling ~28 classes within its group
- 73 models total (1 group + 72 sub-models), keeping each lightweight

### T5 Sentence Generator
- Base model: t5-small from Hugging Face
- Input format: "generate sentence: <kw1> <kw2> <kw3>"
- Generation: Beam search with beam size 4, max length 20 tokens

### Training Configuration

| Parameter | Value |
|-----------|-------|
| Optimizer | Adam (lr=1e-3) |
| Batch Size | 64 |
| Epochs | 100 (early stopping, patience=10) |
| Scheduler | ReduceLROnPlateau (factor=0.5, patience=5) |
| Loss Function | Cross-Entropy (label smoothing e=0.1) |
| Dropout | 0.2 |
| Weight Decay | 1e-4 |

## 10. Results and Performance

### Hierarchical Classification

| Metric | Full Pipeline |
|--------|---------------|
| Top-1 Accuracy | 84.7% |
| Top-5 Accuracy | 93.4% |
| Inference Time | 28ms total |

### Sentence Generation (T5)

| Metric | Score |
|--------|-------|
| BLEU-4 | 0.742 |
| ROUGE-L | 0.815 |
| METEOR | 0.693 |
| Human Fluency | 4.2 / 5.0 |

### Comparison: Flat vs Hierarchical

| Approach | Top-1 Accuracy | Training Time | Model Size |
|----------|---------------|---------------|------------|
| Flat 2000-class classifier | 72.3% | 48 hours | 2.1 GB |
| **Hierarchical (ours)** | **84.7%** | **12 hours** | **0.4 GB** |

### Sample Outputs

| Input Gestures | Generated Sentence |
|----------------|-------------------|
| [HELLO, HOW, YOU] | "Hello, how are you?" |
| [I, FINE] | "I am fine." |
| [THANK, YOU] | "Thank you." |
| [WHAT, YOUR, NAME] | "What is your name?" |
