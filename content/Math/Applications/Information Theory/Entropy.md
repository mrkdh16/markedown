---
title: Entropy
draft: false
tags:
  - math
  - computer-science
---
### Definition.
Let $X:\Omega \to \bf{R}$ be a random variable. Then the *entropy* of $X$ is:
$$
H(X):=\mathbb{E}[I(X)]=\mathbb{E}[-\log{P(X)}]= -\sum_{x}P(X=x)\log{P(X=x)}.
$$

---
Essentially, the entropy of a random variable captures the expected amount of [[Information|information]] in it. 