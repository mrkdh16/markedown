---
title: Riesz Representation Theorem
draft: false
tags:
  - math
  - linear-algebra
---

### Theorem.
For any finite-dimensional inner product space $V$, there exists a bijective map $\alpha$ from $V$ to its dual $V'$ such that
$$
V \overset{\alpha}\cong V', \space v \mapsto \langle \cdot,v \rangle,
$$
i.e. for any linear functional $\varphi \in V'$, there exists unique $v \in V$ such that for any $u \in V$, $\varphi(u) = \langle u,v \rangle$.
### Proof.
To show the injectivity of $\alpha$, suppose $\alpha(v) = \varphi = 0$ such that for all $u \in V$, $\varphi(u) = \langle u,v \rangle = 0$. This implies that $\langle v,v \rangle = 0$, which in turn implies that $v = 0$ by the definition of the inner product.

To show the surjectivity of $\alpha$, suppose $\varphi \in V'$ is some linear functional. If $\varphi = 0$, then clearly $\alpha(0) = \varphi = 0$. Thus, assume $\varphi \neq 0$. In the finite-dimensional case, we are guaranteed that ${null(\varphi)}^{\perp} \neq 0$ if $\varphi \neq 0$. So, let $w$ be a nonzero unit vector in $null(\varphi)^\perp$. We proceed by conjuring a vector $v = \overline{\varphi(w)}w$ which we will use to show that for all $u \in V$, $\varphi(u) = \langle u,v \rangle$ and thus $\varphi = \alpha(v)$. Observe that $v \in null(\varphi)^\perp$ since $v$ is a scalar multiple of $w$. Suppose $u$ is any vector in $V$. We decompose $u$ as such:
$$
u = \bigg(u-\frac{\varphi(u)}{\varphi(v)}v\bigg)+\frac{\varphi(u)}{\varphi(v)}v.
$$
A few key observations: 
$$
\varphi(v) = \varphi(\overline{\varphi(w)}w) = \overline{\varphi(w)}\varphi(w) = \lvert\varphi(w)\rvert^2
\newline
|| v ||^2 = \langle v, v \rangle = \langle \overline{\varphi(w)}w, \overline{\varphi(w)}w \rangle =  \overline{\varphi(w)}\varphi(w) \langle w, w \rangle = \lvert\varphi(w)\rvert^2
$$
$$
\implies \varphi(v) = || v ||^2
$$
and
$$
\varphi \bigg(u-\frac{\varphi(u)}{\varphi(v)}v \bigg) = \varphi(u)-\frac{\varphi(u)}{\varphi(v)}\varphi(v) = 0
$$
$$
\implies \langle u-\frac{\varphi(u)}{\varphi(v)}v, v\rangle = 0
$$
where we used the fact that $v \in null(\varphi)^\perp$ and is thus orthogonal to any vector in the null space of $\varphi$. Then,
$$
\langle u, v \rangle = \langle u-\frac{\varphi(u)}{\varphi(v)}v, v \rangle + \langle \frac{\varphi(u)}{\varphi(v)}v, v \rangle = 0+\frac{\varphi(u)}{||v||^2}\langle v,v \rangle = \varphi(u),
$$
and therefore, $\varphi = \alpha(v)$. $\square$

---
As demonstrated in the linked resource, this proof can easily be extended to show the theorem holds for special infinite-dimensional inner product spaces called Hilbert Spaces.

It seems that this theorem serves as a bridge from linear algebra and algebra in general to analysis and measure theory.

Resources: [Hilbert Spaces and The Riesz Representation Theorem](https://math.uchicago.edu/~may/REU2021/REUPapers/Adler.pdf)