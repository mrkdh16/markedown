---
title: Cross Entropy
draft: false
tags:
  - math
  - statistics
---
 
Suppose $p$, $q$ are two probability distributions over the same sample space $\Omega$.
### Definition.
The Cross Entropy of $p$ and $q$ is given by 
$$
H(p,q) = \mathbb{E}_{p}\left( \log{\frac{1}{q}} \right)=-\mathbb{E}_{p}(\log q).
$$

---
The KL Divergence is related to the Cross Entropy as such: $KL(p,q)=H(p,q)+H(p)$. Because $p$ is the empirical distribution while $q$ is the model, $H(p)$ is effectively a constant and minimizing the KL Divergence or the Cross Entropy is equivalent.