---
title: Mean Squared Error
draft: true
tags:
  - math
  - statistics
---
 
### Definition.
We define the mean squared error of a statistic $W$ as such: $MSE(W)=\mathbb{E}_{\theta}[(W-\theta)^2]$, a function of $\theta$. Expanding this definition, we get that $MSE(W)=\mathbb{E}_{\theta}[(W-\mathbb{E}[W])^2]+Bias_{\theta}(W)^2 = Var_{\theta}(W)+Bias_{\theta}(W)^2$, where the variance can be thought of as quantifying the noisiness and the bias can be thought of as quantifying the accuracy.

---
remark.