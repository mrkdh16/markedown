---
title: KL Divergence
draft: false
tags:
  - math
  - computer-science
---
 
### Definition.
For two probability distributions $P$ and $Q$ on a common sample space, the *Kullback-Leibler (KL) Divergence* is defined as:
$$
KL(P||Q)=\sum_{x \in \Omega}P(x)\log{\frac{P(x)}{Q(x)}}.
$$
### Theorem. (Gibbs' Inequality)
Let $P$, $Q$ be two discrete probability distributions on a discrete sample space $\Omega$. Then, $KL(P||Q) \geq 0$, with equality if and only if $P=Q$. 

---
Gibbs' Inequality allows us to think of KL Divergence as a notion of "distance" between probability spaces. Note that KL Divergence isn't an actual metric in the traditional mathematical sense. It is not symmetric and does not satisfy the triangle inequality.