---
title: The Rank Nullity Theorem
draft: false
tags: 
aliases:
  - rank nullity
---
 
#### Theorem.
If $T \in \mathcal{L}(V,W)$, then $dim(V)$ is the sum of $dim(null(T))$ and $dim(range(T))$.
#### Proof.
Suppose $X=null(T)$. Since [[Every Subspace has a Complement|every subspace of V has a complement]], there exists a vector space $Y \subseteq V$ such that $V=X \bigoplus Y$. The directness of the sum implies that $dim(V)=dim(X)+dim(Y)$. Thus, we need only show that $dim(Y)=dim(range(T))$. To this end, we conjure a linear map $U: Y \rightarrow range(T),\space u \mapsto Tu$ which we will argue is bijective. Injectivity is shown by the fact that $Y \cap null(T)=\{0\}$ since $Y$ is the complement of $null(T)$. For surjectivity, suppose that $Tu \neq 0$. Since $V=X \bigoplus Y$, $u$ can be represented as a unique sum of some $x \in X$ and some $y \in Y$, i.e.
$$
Tu = T(x+y)=Tx+Ty=0+Ty \implies u=y \in Y,
$$
where we used the fact that $T$ is injective. Thus, $U(y) = Tu$ for some $y$ and $U$ is surjective $\square$.

---
A nice thing about this proof is that we never had to invoke any bases. We simply asserted the existence of a complement of $X$ without ever constructing it. The crux of this argument is of course the existence of complements. Zorn's Lemma implies the existence of complements in the infinite-dimensional case, so this proof scales nicely.