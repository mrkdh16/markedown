---
title: Bayesian Estimation
draft: false
tags:
  - math
  - statistics
---
From a Bayesian perspective, we want to estimate a (posterior) distribution instead of simply generating a point estimate, i.e. we want $P(\theta|\mathcal{D})$. To do this, we rely on Bayes Rule, which necessitates the assertion of a prior distribution $P(\theta)$:
$$
P(\theta|\mathcal{D}) = \frac{P(\mathcal{D}|\theta)P(\theta)}{P(\mathcal{D})}.
$$