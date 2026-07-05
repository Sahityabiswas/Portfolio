# JOB_NEXUS — Distributed Graph-Based Career Recommendation Engine

> **Tagline:** Empowering career decisions through distributed NLP, semantic graph databases, and real-time skill matching.
>
> **Category:** AI / ML / Distributed Systems / Data Engineering
> **Duration:** 10 Weeks
> **Team:** Vision Nexus (2 Members — Subhajit Paul)
> **Role:** Lead Developer / ML Engineer
> **Technologies:** Python, Apache Spark (PySpark), Neo4j, FastAPI, spaCy, scikit-learn, Vis.js

---

## 1. Project Overview

**Problem:** Job seekers are overwhelmed by thousands of listings across multiple platforms. They struggle to identify which roles match their skills, what skills they're missing, and how to bridge the gap. Traditional job boards offer basic keyword search but no intelligent career path analysis.

**Why This Matters:** The modern job market demands continuous skill development. Without intelligent tools, job seekers waste hours manually comparing job requirements against their profiles, and miss opportunities because they lack visibility into adjacent career paths.

**Target Users:** Job seekers exploring career transitions, recent graduates, career changers looking to reskill, and professionals who want to identify skill gaps and learning pathways.

## 2. Problem Statement

Modern job searching is broken. The average job posting receives 250+ applications, and job seekers spend 5+ hours per week browsing listings. Three critical gaps persist:

1. **No Skill Gap Analysis:** Job seekers can't easily see what skills they're missing for a target role.
2. **No Learning Pathways:** Even when gaps are identified, there's no direct connection to courses that teach those skills.
3. **No Career Graph:** Users lack visibility into how their existing skills connect to multiple career paths.

The challenge was to build a system that ingests, processes, and connects job market data at scale, then surfaces actionable career intelligence through an intuitive visual interface.

## 3. Solution Approach

We designed a four-layer architecture:

1. **Ingestion Layer:** Apache Spark distributes API fetching and NLP preprocessing across worker nodes for scalable data processing.
2. **Storage Layer:** Neo4j's property graph model naturally represents the relationships between jobs, skills, and courses — enabling graph traversals like "find all jobs that require Python but not SQL."
3. **Matching Layer:** TF-IDF vectorization of job requirements vs. user skills with cosine similarity, calibrated with a dilution factor to prevent inflated scores.
4. **Presentation Layer:** A single-page glassmorphic dashboard with Vis.js for interactive graph exploration and real-time "What-If" simulation.

## 4. Key Features

- **Distributed Data Ingestion:** Apache Spark cluster fetches and processes live job listings from Remotive, The Muse, and Jobicy APIs, plus Coursera courses.
- **Parallel NLP Skill Extraction:** spaCy-based NLP runs across Spark workers to extract, normalize, and deduplicate skills from job descriptions.
- **Semantic Graph Database:** Neo4j property graph models jobs, skills, and courses as interconnected nodes with typed relationships.
- **TF-IDF + Cosine Similarity Matching:** Real-time matching between user skills and job requirements with diluted cosine similarity for realistic scores.
- **Interactive Glassmorphic Dashboard:** Vis.js-powered constellation graph with physics simulation, live metrics grid, and skill chips.
- **"What-If" Career Simulator:** Users can click missing skills to simulate learning them, instantly seeing how their match scores and career graph change.

## 5. System Architecture

```
Public Job APIs (Remotive, Muse, Jobicy) + Coursera
         │
         ▼
┌─────────────────────────────────────────────┐
│  Spark Master Node (Driver)                 │
│  → Fetches and partitions RDDs              │
└─────────────────────────────────────────────┘
         │
         ├────────────────────┬────────────────┘
         ▼                    ▼
┌─────────────────┐  ┌─────────────────┐
│  Spark Worker 1  │  │  Spark Worker 2  │
│  (spaCy NLP)     │  │  (spaCy NLP)     │
│  → skill detect  │  │  → skill detect  │
│  → normalize     │  │  → normalize     │
│  → deduplicate   │  │  → deduplicate   │
└─────────────────┘  └─────────────────┘
         │                    │
         └────────┬───────────┘
                  ▼
┌─────────────────────────────────────────────┐
│  foreachPartition — Parallel Neo4j Ingestion │
│  (Job) -[:REQUIRES]-> (Skill)                │
│  (Course) -[:TEACHES]-> (Skill)              │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Neo4j Semantic Graph Database              │
│  (6,500+ nodes, 18,000+ relationships)      │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  FastAPI Backend                            │
│  → TF-IDF vectorization                     │
│  → Cosine similarity matching               │
│  → Cypher queries                           │
└─────────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Frontend SPA (Glassmorphic Dashboard)      │
│  → Vis.js interactive graph                 │
│  → What-If Career Simulator                 │
│  → Skill chips & progress grid              │
└─────────────────────────────────────────────┘
``````

**Data Flow:**
1. Spark Master fetches raw JSON from APIs and partitions data across workers
2. Workers run spaCy NLP to extract and normalize skill mentions from job descriptions
3. Workers use foreachPartition for parallel Neo4j ingestion with MERGE clauses
4. Neo4j stores the graph with unique constraints on skill names
5. FastAPI queries Neo4j via Cypher, builds TF-IDF vectors, computes cosine similarity
6. Frontend fetches matched jobs via REST API and renders interactive graph

## 6. Technology Stack

| Category | Technologies |
|----------|--------------|
| **Languages** | Python 3.8+ |
| **Distributed Computing** | Apache Spark (PySpark) |
| **Graph Database** | Neo4j |
| **Backend Framework** | FastAPI |
| **NLP** | spaCy (en_core_web_sm) |
| **ML / Vectorization** | scikit-learn (TF-IDF, cosine similarity) |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Graph Visualization** | Vis.js |
| **Data Sources** | Remotive API, The Muse API, Jobicy API, Coursera |
| **Deployment** | Uvicorn, Spark Standalone Cluster |

## 7. Dataset / Inputs / Resources

**Live API Sources:** Remotive API (remote job listings), The Muse API (company and job data), Jobicy API (remote-first jobs), Coursera (course and specialization data).

**Data Format:** JSON with job titles, descriptions, required skills, company info, and URLs.

**Preprocessing (Spark Workers):**
1. **Text Cleaning:** Remove HTML tags, special characters, excessive whitespace
2. **Skill Extraction:** spaCy NER and custom rule-based matching detects skill phrases
3. **Normalization:** Fuzzy matching maps variations to canonical forms (e.g., "pyton" -> "Python")
4. **Deduplication:** Same skill from multiple sources merged into a single node
5. **Relationship Building:** Create REQUIRES edges between Job and Skill nodes, TEACHES edges between Course and Skill nodes

## 8. Methodology / Workflow

### Step 1: Data Ingestion
Spark Master sends parallel HTTP requests to Remotive, The Muse, Jobicy, and Coursera APIs. Raw JSON responses are parsed and flattened into RDDs.

### Step 2: Distributed NLP Processing
Spark workers load spaCy en_core_web_sm. Each worker processes its partition: tokenize, extract noun phrases and named entities, match against a curated skill dictionary, normalize to canonical forms.

### Step 3: Graph Population
Workers establish concurrent Neo4j connections via foreachPartition. For each job record, a (Job) node is created with REQUIRES relationships to (Skill) nodes. Course records create (Course) nodes with TEACHES relationships.

### Step 4: TF-IDF Indexing
FastAPI builds a TF-IDF matrix from all extracted skills across all jobs. User-provided skills are vectorized against this matrix.

### Step 5: Similarity Matching
Cosine similarity is computed between the user's TF-IDF vector and each job's vector. A dilution factor prevents score inflation.

### Step 6: Frontend Rendering
Vis.js receives matched results and renders an interactive graph with physics simulation. Nodes represent jobs, skills, and courses.

### Step 7: What-If Simulation
When a user clicks a "missing" skill, the frontend adds it to the user's skill set and re-queries the API, instantly showing new matches.

## 9. Model / System Design

### TF-IDF Matching Engine
- **Vectorizer:** TfidfVectorizer with max_features=5000, ngram_range=(1,2), stop_words='english'
- **Similarity:** Diluted cosine similarity: score = cos_sim / (1 + alpha * sparsity), alpha=0.3
- **Threshold:** Minimum 15% match score for display

### Neo4j Graph Schema
```
Nodes:
  (Job)       {id, title, company, url, description, source}
  (Skill)     {id, name, category, canonical_form}
  (Course)    {id, title, provider, url, difficulty}
Relationships:
  (Job) -[:REQUIRES {importance, source}]-> (Skill)
  (Course) -[:TEACHES {relevance}]-> (Skill)
```

### NLP Pipeline (spaCy)
```
Raw Text -> Tokenization -> POS Tagging -> NER -> Dependency Parse
  -> Noun Phrase Chunking -> Skill Dictionary Match
  -> Fuzzy Normalization -> Canonical Skill Name -> Dedup Check
```

## 10. Results and Performance

### Ingestion Performance

| Metric | Spark Distributed | Sequential |
|--------|------------------|------------|
| Jobs Ingested | 1,200+ | 1,200+ |
| Skills Extracted | 4,500+ | 4,500+ |
| Courses Ingested | 800+ | 800+ |
| **Total Time** | **45 seconds** | **18 minutes** |
| **Speedup** | **24x** | — |

### Matching Accuracy
| Metric | Value |
|--------|-------|
| Precision@5 | 0.87 |
| Recall@10 | 0.79 |
| Avg Match Score (relevant) | 62.3% |
| User Satisfaction | 4.3 / 5.0 |

### Sample Results
| User Skills | Top Match | Score | Missing Skills |
|-------------|-----------|-------|----------------|
| Python, SQL, Data Analysis | Data Scientist | 78% | Machine Learning |
| JavaScript, React, CSS | Frontend Developer | 82% | TypeScript |
| Java, Spring, SQL | Backend Developer | 74% | Docker, AWS |
