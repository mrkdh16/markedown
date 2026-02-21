---
title: Singular values under perturbation
draft: false
tags:
  - math
  - computer-science
  - linear-algebra
  - physics
---
 
### Proposition. (weak version of Weyl's Inequality)
For two square $n\times n$ matrices $A,B$, the following inequality is true:
$$
\sigma_{\text{max}}(A+B) \leq \sigma_{max}(A)+\sigma_{max}(B)
$$
### Proof.
Recall the well-known fact about spectral norm:
$$
||A||_{2} = \max_{||x||=1}||Ax||_{2}=\sigma_{\text{max}}(A).
$$
Then, using the fact that spectral norm is a well-defined norm, we can simply leverage the triangle inequality:
$$
\sigma_{\max}(A+B) = ||A+B||_{2}  \leq ||A||_{2} + ||B||_{2} = \sigma_{\max}(A)+\sigma_{\max}(B).
$$

Resources: [Terry Tao's blog](https://terrytao.wordpress.com/2010/01/12/254a-notes-3a-eigenvalues-and-sums-of-hermitian-matrices/)