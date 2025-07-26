---
title: Euclidean Rings
draft: false
tags:
  - math
  - algebra
---
 
### Definition. (loose)
A *Euclidean Ring* is an integral domain (products of nonzero things are nonzero) endowed with a *Euclidean Function* which essentially allows for division with remainders. In the case of polynomials, the Euclidean Function is the degree of the polynomial. The important property of this function is that we can quantify that the remainder is somehow 'less than' the divisor in division. In the case of polynomials, we want the remainder to have degree less than the divisor.

### Remark.
Any Euclidean Ring is a *principal ideal domain*. Take the ring of polynomials $F[x]$ for example. Suppose $I$ is an ideal in $F[x]$ such that for any $f(x) \in I$ and $g(x) \in F[x]$, $f(x)g(x) \in I$. The claim that $I$ is principal is saying that there exists some minimal element $m$ of $I$ such that for any element $p \in I$, $m$ divides $p$.

Let $m(x)$ be the monic polynomial of least degree in $I$. Such a polynomial exists by the Well Ordering Principle. Then, by the [[division algorithm]], for any $p(x) \in I$, we can obtain $Q(x)$ and $R(x)$ such that
$$
p(x) = m(x)Q(x) + R(x)
$$
where $deg(R) < deg(m)$. Since $p(x) \in I$ and $m(x)\in I$, $R(x) \in I$ must be true. If $R(x)$ is nonzero, this contradicts the minimality of $m(x)$. Thus, $R(x)=0$ and $m(x) \vert p(x)$, which is the definition of a principal ideal domain.

The PID nature of any Euclidean Ring also implies that it is a unique factorization domain. This is proven by the fundamental theorem of algebra. In the context of polynomials, this means that every polynomial is uniquely factorized into irreducible factors. If $F=ℂ$, then these irreducible factors are simply the linear factors $x-\lambda$.

---
Understanding the field of polynomials unlocks deep insight into linear operators and their eigenvalues through [[The Minimal Polynomial]]. However, beyond this practical use of Euclidean Rings, I find this generalization of division to be quite beautiful.