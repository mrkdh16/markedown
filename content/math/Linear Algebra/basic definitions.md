---
title: basic definitions
draft: false
tags:
  - math
  - linear-algebra
---
#### Definition.
An F-vector space is defined to be an abelian group $V$ that is furnished with a scalar multiplication
$$
F \times V \rightarrow V, \space (\lambda,v) \mapsto \lambda v
$$
and satisfies some axioms:
- $\forall \lambda \in V$, the map $m_{\lambda}: v \mapsto \lambda v$ is a homomorphism form $V$ to $V$ (1)
- $\lambda \mapsto m_{\lambda}$ is a homomorphism of rings from $F$ to the ring of homomorphisms from $V$ to $V$ (2)
---
This long-winded definition of a vector space is a nice way of summarizing the properties of a vector space. The fact that $F$ is an abelian group implies a commutative addition operation for which $V$ is closed under. The additional axioms regarding scalar multiplication simply assert the distributivity and associativity of scalar multiplication.
