---
title: Matrix of T'
draft: false
tags:
  - math
  - linear-algebra
---
### Remark.
We can show mechanically that the matrix of $T$ is the transpose of the matrix of $T'$. Suppose $e_1,...,e_n$ forms an orthonormal basis of $V$ and $\varphi_1,...\varphi_n$ forms the dual basis of $V'$ ([[Duality]]). We use the definition of a matrix: $M(T) = (a_{ij})$ if $Te_j=\sum_{i=1}^{n}{a_{ij}e_i}$. Observe that for any basis vector $e_j$,
$$
T'(\varphi_i(e_j))=\varphi_i\circ T(e_j) = \varphi_i (\sum_{k=1}^{n}{a_{kj}e_k}) = a_{ij}.
$$
The following linear combination of dual basis vectors acts the same way on the basis vectors of $V$:
$$
(\sum_{k=1}^{n}{a_{ik}\varphi_k})(e_j)=a_{ij}.
$$
Since linear maps are uniquely determined by how they act on a set of basis vectors, it must be true that $T'\varphi_i = \sum_{k=1}^{n}{a_{ik}\varphi_k}$. Equivalently, $T'\varphi_j = \sum_{i=1}^{n}{a_{ji}\varphi_i}$ where we simply replace $i$ with $j$ and $k$ with $i$. This implies that $M(T')=(a_{ji})$.

---
This result took me a while to wrap my head around and gain an intuition. For me, what made it click was the realization that $T'\varphi_i = \sum_{j=1}^{n}{a_{ji}\varphi_j}$ is simply a unique linear combination of the dual basis vectors.