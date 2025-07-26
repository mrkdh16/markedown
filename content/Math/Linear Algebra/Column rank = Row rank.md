---
title: Column Rank = Row Rank
draft: false
tags:
  - math
  - linear-algebra
---
### Theorem.
Suppose $T:V\rightarrow V$ is a linear operator. If $A$ is the matrix of $T$, the column rank and row rank of $A$ are equal. Equivalently, $rank(A) = rank (A^T)$.
### Proof.
Recall that the matrix of $T$ is equal to the transpose of the matrix of the dual map $T'$ ([[Matrix of T']]). 
We need only show that $dim(range(T)) = dim(range(T'))$. The important observation here is that 
$$
null(T') = \{\, \psi \in W' \mid \psi \circ T=0 \,\} = range(T)^0.
$$
We need only use a dimension argument with [[The Rank Nullity Theorem|rank nullity]] to show that this implies our theorem:
$$
dim(range(T'))= dim(V)-dim(null(T'))=dim(V)-dim(range(T)^0),
$$
and using the [[Dim(ann(U))|dimension of the annihilator]],

$$
dim(range(T)^0) = dim(V)-dim(range(T)) \implies dim(range(T')) = dim(range(T)) \space \square.
$$

---
This theorem is surprisingly hard to prove without the use of duality. However, when looked at through the perspective of duality, the statement boils down to a fairly simple property of dual maps.

One key takeaway from this theorem is that the transpose operation is deeply intertwined with duality. This interpretation of the transpose is enlightening and justifies the seemingly inconsequential operation of 'reflection across the diagonal of a matrix.'