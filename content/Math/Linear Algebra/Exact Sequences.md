---
title: Exact Sequences
draft: false
tags:
  - math
  - linear-algebra
---
 
### Observation.
We use [[The Rank Nullity Theorem|rank nullity]] to show that for a short exact sequence of vector spaces,
$$
0 \xrightarrow{} U \xrightarrow{T} V \xrightarrow{S} W \xrightarrow{} 0
$$
the alternating sum of the dimensions of the spaces is 0, i.e. $-dim(U)+dim(V)-dim(w)=0$. The exactness of the sequence implies that $T$ is injective and $S$ is surjective. The former implies that $dim(U) = dim(range(T))$. The latter implies that $dim(V)=dim(null(S))+dim(W))$. Again, the exactness of the sequence implies that $range(T) = null(S)$. Thus, $dim(U)=dim(V)-dim(W)$, as desired.

---
It can be shown in general that the alternating sum of the dimensions of spaces in an exact sequence is 0. I've been told this is useful when dealing with infinite-dimensions.