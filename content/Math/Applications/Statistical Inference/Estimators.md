---
title: Estimators
draft: false
tags:
  - math
  - statistics
---
 
### Definition.
Given random variables $X_{1},\dots,X_{n}$ a statistic is $W=f(X_{1},\dots,X_{n})$ for any function $f$.
### Definition.
An estimator (of $\theta$) is a statistic (for inference).
### Definition.
The bias of an estimator $W$ for $\theta$ is
$$
Bias_{\theta}(W) := \mathbb{E}_{\theta}[W]-\theta.
$$
We say $W$ is unbiased if $Bias_{\theta}(W)=0$.

---
The naive sample variance $\frac{1}{n}\sum^n_{i=1}(X_{i}-\bar{X})^2$ where $\bar{X}$ is the sample mean is a biased estimator of the real variance since the expected value of this naive sample variance is $\frac{{n-1}}{n}\sigma^2$. The actual sample variance which is an unbiased estimator of the real variance is $\frac{1}{n-1}\sum^n_{i=1}(X_{i}-\bar{X})^2$.