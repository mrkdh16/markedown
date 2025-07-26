---
title: The Minimal Polynomial
draft: false
tags:
  - math
  - linear-algebra
---
 
### Definition.
The *minimal polynomial* of $T\in \mathcal{L}(V,V)$, denoted $m(x) \in \mathcal{P}(F)$, is the unique monic polynomial of least degree such that $m(T) = 0$. 

### Theorem.
If $m(x)$ is the minimal polynomial of $T\in \mathcal{L}(V,W)$, then $m(\lambda)=0$ if and only if $\lambda$ is an eigenvalue of $T$.
### Proof.
Suppose $m(\lambda)$ = 0. Use the division algorithm to show that there exist $Q(x)$ and $R(x)$ with such that $deg(R(x)) < deg(x-\lambda) = 1$:
$$
m(x) = (x-\lambda)Q(x) + R(x).
$$
Since $deg(R(x)) = 0$ by the division algorithm and $R(\lambda)=0$, $R(x)=0$ must be true. Thus, $(x-\lambda) \vert m(x)$. By definition, $m(T)=(T-\lambda I)Q(T)=0$. Assume for contradiction that $(T-\lambda)$ is injective. Since $(T-\lambda I)$ is an operator in $\mathcal{L}(V,V)$, injectivity implies bijectivity and thus invertibility. This implies that $Q(T)=0$, which violates the minimality of $m(x)$. Thus, $(T-\lambda I)$ is not injective, which is the exact condition for $\lambda$ being an eigenvalue of $T$.

Conversely, suppose $\lambda$ is an eigenvalue of $T$ such that $Tv=\lambda v$ for some $v\in V$. Observe that we can repeatedly apply $T$ to both sides to obtain $T^{i}v=\lambda^{i}v$. Taking linear combinations of both sides, $p(T)v=p(\lambda)v$ for any polynomial $p(x)$. Thus, since $m(T) = 0$, $m(\lambda)v=0$, which implies that $m(\lambda)=0$ since $m(\lambda)$ is a scalar. $\square$

---
Axler leverages the minimal polynomial to avoid talking about determinants. He argues that proofs using determinants end up being purely mechanical without providing much insight or intuition. I don't have a strong opinion about determinants but I think the idea of the minimal polynomial is fairly elegant and serves as a nice bridge from the land of polynomials (and more traditional algebra) to linear algebra and eigenstuff. 