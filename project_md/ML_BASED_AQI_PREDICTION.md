# ML_BASED_AQI_PREDICTION — Air Quality Index Forecasting with Regression Models

> **Tagline:** Predicting city-level air quality across India using comparative regression analysis to inform public health and environmental policy.
>
> **Category:** Machine Learning / Data Science / Environmental Analytics
> **Duration:** 8 Weeks
> **Team:** Individual
> **Role:** Data Scientist / ML Engineer
> **Technologies:** Python, scikit-learn, NumPy, Pandas, Matplotlib, Seaborn, Jupyter

---

## 1. Project Overview

**Problem:** Air pollution is a critical public health crisis in India, with 14 of the world's 20 most polluted cities. Accurate AQI prediction remains challenging due to complex interactions between multiple pollutants, seasonal variations, and missing data across monitoring stations.

**Why This Matters:** Reliable AQI prediction enables early warnings for vulnerable populations, helps authorities implement targeted interventions, and supports long-term environmental policy planning.

**Target Users:** Environmental agencies (CPCB, state pollution control boards), public health officials, urban planners, researchers, and citizens in pollution-prone areas.

## 2. Problem Statement

Air pollution causes an estimated 1.67 million deaths annually in India. The Air Quality Index (AQI) is the standard metric, but predicting it accurately is difficult because:

1. **Multi-Pollutant Interactions:** AQI depends on PM2.5, PM10, NO2, SO2, CO, O3, and other pollutants with complex non-linear interactions.
2. **Spatiotemporal Variability:** Pollution patterns vary dramatically across cities and seasons — Delhi's winter smog vs. Mumbai's moderate levels.
3. **Data Quality Issues:** Monitoring stations frequently report ~25% missing values due to equipment failure and calibration gaps.
4. **Limited Comparative Research:** Most studies evaluate a single model; limited rigorous comparison exists on Indian AQI data.

The challenge was to systematically compare multiple regression paradigms on a real-world Indian AQI dataset.

## 3. Solution Approach

We designed a rigorous comparative framework:

1. **Standardized Preprocessing** — Consistent data cleaning, city-wise imputation, and train/test splitting (90/10) across all models.
2. **Diverse Model Selection** — Models spanning different paradigms: linear (OLS), regularized (Ridge, Lasso), and non-linear ensemble (Random Forest).
3. **Cross-Validation** — 5-fold CV on all models to assess generalization and overfitting.
4. **Multi-Metric Evaluation** — Beyond R-squared, we analyze MAE, RMSE, residual distributions, and prediction scatter.
5. **Hyperparameter Tuning** — Ridge and Lasso alphas optimized via CV; Random Forest trees and depth tuned for performance.

## 4. Key Features

- **Comparative Analysis of 4 Regression Models:** Linear Regression (baseline), Ridge Regression (L2 regularization), Lasso Regression (L1 regularization + feature selection), Random Forest Regression (ensemble method).
- **City-Wise Missing Value Imputation:** Group-mean imputation at the city level preserves local pollution patterns.
- **5-Fold Cross-Validation:** All models evaluated with consistent CV strategy for reliable performance comparison.
- **Comprehensive Evaluation Suite:** MAE, MSE, RMSE, and R-squared metrics with residual analysis and predicted-vs-actual plots.
- **Visual Diagnostic Toolkit:** Residual distribution plots, prediction scatter plots, feature importance analysis.
- **Reproducible Notebooks:** Self-contained Jupyter notebooks for each model enabling independent reproduction.

## 5. System Architecture

```
┌─────────────────────────────────────────────┐
│  Raw Dataset (city_day.csv — Kaggle)        │
│  ~16,000 rows × 13 columns, 26 cities       │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  Data Preprocessing                         │
│  → City-wise group mean imputation          │
│  → Train/Test split (90/10)                 │
│  → Save processed datasets                  │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  Model Training (5-Fold CV)                  │
│                                             │
│  ┌─────────┐ ┌────────┐ ┌───────────┐     │
│  │ Linear  │ │ Ridge  │ │  Lasso    │     │
│  │ Reg.    │ │(α=0.5) │ │ (α=0.5)   │     │
│  └─────────┘ └────────┘ └───────────┘     │
│                                             │
│  ┌─────────────────────────────┐           │
│  │ Random Forest               │           │
│  │ (100 trees, max_depth=5)    │           │
│  └─────────────────────────────┘           │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  Evaluation (Test Set)                      │
│  → MAE, MSE, RMSE, R²                      │
│  → Predicted vs Actual scatter plots        │
│  → Residual distribution plots              │
│  → Feature importance analysis              │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  Results & Interpretation                   │
│  → Best model identified                    │
│  → Feature importance ranking               │
│  → Deployment recommendations               │
└─────────────────────────────────────────────┘
``````

**Data Flow:**
1. Raw CSV loaded with 13 columns across ~16,000 rows
2. Non-predictive features dropped; missing values imputed by city-wise group means
3. Dataset split 90/10 into training and test sets
4. Each of the 4 models trained with 5-fold cross-validation
5. Best hyperparameters selected (Ridge a=0.5, Lasso a=0.5, RF trees=100, depth=5)
6. Final models evaluated on held-out test set using all 4 metrics
7. Diagnostic plots generated for visual interpretation

## 6. Technology Stack

| Category | Technologies |
|----------|--------------|
| **Languages** | Python 3.8+ |
| **ML Framework** | scikit-learn |
| **Data Processing** | NumPy, Pandas |
| **Visualization** | Matplotlib, Seaborn |
| **Development** | Jupyter Notebook |
| **Documentation** | LaTeX (PDF report) |

## 7. Dataset / Inputs / Resources

**Dataset:** Indian Air Quality Data (2015-2020) from Kaggle — city_day.csv. ~16,000 rows x 13 columns spanning 26 Indian cities.

**Features (12 predictors):** PM2.5, PM10, NO, NO2, NOx, NH3, CO, SO2, O3, Benzene, Toluene, Xylene
**Target:** AQI (continuous numerical value)

**Preprocessing Steps:**
1. **Column Selection:** City and Date columns excluded from features
2. **Missing Value Imputation:** City-wise group mean imputation — each missing value replaced with the mean of that pollutant for that specific city
3. **Train/Test Split:** 90% training, 10% testing (random state fixed for reproducibility)
4. **Data Splits Saved:** AQI_train.csv and AQI_test.csv for reproducible experimentation

## 8. Methodology / Workflow

### Step 1: Data Loading and Exploration
Load city_day.csv, inspect distributions, identify missing value patterns, calculate per-city statistics.

### Step 2: Preprocessing
Drop City and Date columns. Apply city-wise group mean imputation. Split into train (90%) and test (10%).

### Step 3: Linear Regression (Baseline)
Train OLS model. Evaluate on test set. Record MAE, MSE, RMSE, R-squared. Generate residual plots.

### Step 4: Ridge Regression
Train Ridge with a=0.5. L2 regularization handles multicollinearity among correlated pollutants.

### Step 5: Lasso Regression
Train Lasso with a=0.5. L1 regularization performs automatic feature selection.

### Step 6: Random Forest Regression
Train Random Forest with 100 trees, max_depth=5. Captures non-linear interactions. Extract feature importance.

### Step 7: Comparative Analysis
All 4 models compared across MAE, MSE, RMSE, R-squared. Visual comparison of predicted vs. actual values.

### Step 8: Documentation
Results compiled into academic PDF report with methodology, figures, and conclusions.

## 9. Model / System Design

### Linear Regression (OLS)
- Formulation: AQI = B0 + B1*PM2.5 + B2*PM10 + ... + B12*Xylene + e
- Role: Baseline model establishing minimum expected performance

### Ridge Regression (L2)
- Objective: min ||y - XB||^2 + a*||B||^2, a=0.5
- Role: Handles multicollinearity among correlated pollutants

### Lasso Regression (L1)
- Objective: min ||y - XB||^2 + a*||B||_1, a=0.5
- Role: Automatic feature selection — zeroes out unimportant coefficients

### Random Forest Regression
- Architecture: 100 decision trees, max_depth=5, bootstrap aggregation
- Role: Captures non-linear interactions and complex pollutant synergies

### Training Configuration

| Parameter | Linear | Ridge | Lasso | RF |
|-----------|--------|-------|-------|-----|
| CV Folds | 5 | 5 | 5 | 5 |
| Alpha | — | 0.5 | 0.5 | — |
| N Estimators | — | — | — | 100 |
| Max Depth | — | — | — | 5 |

## 10. Results and Performance

### Test Set Results

| Model | MAE | MSE | RMSE | R-squared |
|-------|-----|-----|------|-----------|
| Linear Regression | 24.18 | 1,876.5 | 43.32 | 0.8616 |
| Ridge (a=0.5) | 24.18 | 1,876.6 | 43.32 | 0.8616 |
| Lasso (a=0.5) | 24.09 | 1,876.4 | 43.32 | 0.8616 |
| **Random Forest** | **18.42** | **1,234.1** | **35.13** | **0.9090** |

### Key Insights
- Random Forest outperforms all linear models (R-squared 0.909 vs 0.862)
- 19% RMSE reduction with Random Forest (43.32 -> 35.13)
- Linear models perform nearly identically (regularization has minimal effect)
- Non-linear pollutant interactions captured by RF are critical for accuracy

### Feature Importance (Random Forest Top 5)
| Pollutant | Importance |
|-----------|-----------|
| PM2.5 | 0.324 |
| PM10 | 0.218 |
| NO2 | 0.112 |
| CO | 0.098 |
| O3 | 0.084 |

### Cross-Validation (5-Fold R-squared)
- Linear/Ridge/Lasso: ~0.859 (+/-0.012)
- Random Forest: 0.907 (+/-0.008)
