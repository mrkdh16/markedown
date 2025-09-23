---
title: Maximum Likelihood Estimation
draft: false
tags:
  - math
  - statistics
---
 
The probability $P_{\theta}(x)=P(x|\theta)$ is the probability of the outcome $x$ given parameter $\theta$. The likelihood $L(\theta|x)=P(x|\theta)$ is the likelihood of $\theta$ given $x$, i.e. the likelihood of some outcome given parameter $\theta$. In the former, we view $\theta$ as fixed and $x$ as variable while in the latter we view $x$ as fixed and $\theta$ as variable. The use of likelihood is to infer a model given some outcome.
### Definition.
The Maximum Likelihood Estimation of $\theta$ is defined as follows:
$$
MLE_{x}(\theta)=\arg\max_{\theta}L(\theta|x).
$$

---
- The MLE of a parameter may be biased or unbiased.
- A convenient trick is that maximizing the likelihood is equivalent to maximizing the log-likelihood by the monotonicity of log.
- For i.i.d. random variables taken from a normal distribution, the maximum likelihood estimators for the mean and variance are the sample mean and naive sample variance (which is biased).
- A weakness of MLE is that it is highly unstable, i.e. small changes in data may cause wild fluctuations in the estimation.