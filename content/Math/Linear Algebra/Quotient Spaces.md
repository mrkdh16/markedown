---
title: Quotient Spaces
draft: false
tags:
  - math
  - linear-algebra
---
 
### Definition(s).
A *translate* of a subspace $X$ by $v \in V$, denoted $v+X$, is defined as follows:
$$
v+X := \{v+x \mid x \in X\}.
$$

The set of all translates $v+X$ forms a vector space called the *quotient space* and is denoted by $V/X$.

The canonical *quotient map* is defined as follows:
$$
\pi: V \rightarrow V/X,\space v \mapsto v+X.
$$
### Remark.
If we consider the equivalence relation on $V$ such that $v \sim v'$ if and only if $v-v' \in X$, then $v+X$ is the equivalence class of $v$.

With the observation that $\pi$ is surjective, [[The Rank Nullity Theorem|rank nullity]] shows that $dim(V)=dim(X)+dim(V/X)$, i.e. $dim(V/X)=dim(V)-dim(X)$. Thus $V/X$ has the same dimension as a complement of $X$. Equivalently, we can say that $V/X$ is isomorphic to any complement of $X$. It's worth noting that there is no choice involved in $V/X$. We don't need to choose any bases to span the space. Thus, the quotient space "behaves like a choice-free complement," as my professor liked to say.

Quotient spaces are a great alternative way to think about the [[The Rank Nullity Theorem|rank nullity]] theorem. The key idea is that for any $T \in \mathcal{L}(V,W)$, $V/null(T)$ is isomorphic to $range(T)$. Then, directly showing that $dim(V/X)=dim(V)-dim(X)$ is enough to show rank nullity. Since complements were used in our original proof for rank nullity, quotient spaces really do present themselves as a choice-free complement-alternative.