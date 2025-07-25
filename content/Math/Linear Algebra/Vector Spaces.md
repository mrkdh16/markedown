---
title: Vector Spaces
draft: false
tags: []
---
#### Definition.
For a [[Fields|field]] $F$, an *F-vector space* is an abelian group $V$ furnished with a scalar multiplication
$$
F \times V \rightarrow V, \space (\lambda,v) \mapsto \lambda v
$$
and satisfying some axioms:
- $\forall \lambda \in V$, the map $m_{\lambda}: v \mapsto \lambda v$ is a homomorphism form $V$ to $V$ (1)
- $\lambda \mapsto m_{\lambda}$ is a homomorphism of rings from $F$ to the ring of homomorphisms from $V$ to $V$ (2)
---
This long-winded definition of a vector space shows that they are essentially fancy abelian groups. The fact that $F$ is an abelian group implies a commutative addition operation for which $V$ is closed under. The additional axioms regarding scalar multiplication simply assert the distributivity (1) and associativity (2) of scalar multiplication. 

Mathematical jargon aside, vector spaces are powerful because of the level of abstraction they operate at. Part of the reason linear algebra is so widely applicable is because a very wide range of things can be represented as vectors. Such vector representations in turn form a vector space, the collection of all possible forms of said thing. 

One example of a useful vector space from mathematics is the space of all real-valued continuous functions defined on a closed interval. Clearly, this set is closed under addition and scalar multiplication, and the other axioms also hold. Thus, we can apply any linear algebraic result to this set. For example, we can apply the [[Inequalities|Cauchy Shwartz Inequality]] which holds for abstract vector spaces in general, to obtain the following highly non-trivial inequality for any two real-valued continuous functions $f(x)$ and $g(x)$ defined on a closed interval $[a,b]$:
$$ \left(\int_{a}^{b} f(t)g(t)dt\right)^2 \le \left(\int_{a}^{b} (f(t))^2 dt\right) \left(\int_{a}^{b} (g(t))^2 dt\right). $$

Another example of a useful vector space, this time from computer science, is the space of [[Word Embeddings|word embeddings]]. This vector space forms the backbone of large language models such as ChatGPT.

Resources: [3Blue1Brown video on vector spaces](https://youtu.be/TgKwz5Ikpc8?feature=shared)
