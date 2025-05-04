---
title: Column rank = row rank
draft: false
tags: []
---
#### Theorem.
Suppose $T:V\rightarrow V$ is a linear operator. If $A$ is the matrix of $T$, the column rank and row rank of $A$ are equal. Equivalently, $rank(A) = rank (A^T)$.
#### Proof Sketch.
Recall that the matrix of $T$ is equal to the transpose of the matrix of the dual map $T'$. We need only show that $dim(Im(T)) = dim(Im(T'))$. The important observation here is that $range(T')=(null(T)^0)$ (shown in [[Duality]]). Then, we need only use a dimension argument to show that this implies our theorem:
$$
dim(range(T'))=dim(null(T)^0) = dim(V) - dim(null(T)) = dim(range(T))
$$
where the second equality is by the [[Dim(ann(U))|dimension of the annihilator]] of $null(T)$ and the third equality is by [[The Rank Nullity Theorem|rank nullity]].

---
This theorem is surprisingly hard to prove without the use of duality. However, when looked at through the perspective of duality, the statement boils down to a fairly simple property of dual maps.

The first step is to recognize that we need only show $rank(A) = rank (A^T)$. Then, the existence of a transpose is a signal that duality is lurking in the background.