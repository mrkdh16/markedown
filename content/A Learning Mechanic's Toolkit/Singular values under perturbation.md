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
|\sigma_{\text{max}}(A+B)-\sigma_{max}(A)| \leq \sigma_{max}(B).
$$
Similarly, 
$$
|\sigma_{\min}(A+B)-\sigma_{\min}(A)| \leq \sigma_{max}(B).
$$
### Proof.
Recall the well-known fact about spectral norm:
$$
||A||_{2} = \max_{||x||=1}||Ax||_{2}=\sigma_{\text{max}}(A).
$$
Then, using the fact that spectral norm is a well-defined norm, we can simply leverage the triangle inequality:
$$
\begin{align}
\sigma_{\max}(A+B) = ||A+B||_{2}  \leq ||A||_{2} + ||B||_{2} = \sigma_{\max}(A)+\sigma_{\max}(B).
\end{align}
$$
Let's define some new matrices: $C\equiv A+B$, $D \equiv -B$ such that $C+D = A$. Plugging these new matrices into our inequality (1),
$$
\begin{align*}
\sigma_{\max}(C+D) &\leq \sigma_{\max}(C)+\sigma_{\max}(D)
\\
\implies \sigma_{{\max}}(A) &\leq \sigma_{\max}(A+B)+\sigma_{\max}(-B)\\
\implies -\sigma_{\max}(-B) &\leq  \sigma_{\max}(A+B) - \sigma_{max}(A).
\end{align*}
$$
Then, we need only realize that $-\sigma_{\max}(-B) = -||-B||_{2}=-||B||_{2}=-\sigma_{\max}(B)$, which implies that
$$
\begin{align}
-\sigma_{\max}(B) \leq  \sigma_{\max}(A+B) - \sigma_{max}(A).
\end{align}
$$
Putting inequalities (1) and (2) together, we get that
$$
|\sigma_{\max}(A+B) - \sigma_{max}(A)| \leq \sigma_{\max}(B).
$$
The $\min$ case is similar, but we unfortunately can't use the triangle inequality directly as $\min_{||x||=1} ||Ax||_{2}$ is not a norm. But, we can use the triangle inequality indirectly in the following way:
$$
\min_{||x||=1} ||(A+B)x||_{2} \leq \min_{||x||=1}(||Ax||_{2}+||Bx||_{2}).
$$
This step is justified since $||(A+B)x||_{2} \leq ||Ax||_{2} +||Bx||_{2}$ for all $x$. Then,
$$
\begin{align*}
\min_{||x||=1}(||Ax||_{2}+||Bx||_{2}) &\leq \min_{||x||=1} ||Ax||_{2} +\max_{||x||=1} ||Bx||_{2} \\
\implies \sigma_{\min}(A+B) &\leq \sigma_{\min}(A) +\sigma_{\max}(B) \\
\implies \sigma_{\min}(A+B) -\sigma_{\min}(A)&\leq \sigma_{\max}(B).
\end{align*}
$$
We can use some clever substitutions as we did earlier for the $\max$ case to show that $-\sigma_{\max}(B)$ is a lower bound for $\sigma_{\min}(A+B)-\sigma_{\min}(A)$. $\blacksquare$

---
For Hermitian matrices $A$ and $B$, it is true that
$$
|\sigma_{k}(A+B)-\sigma_{k}(A)| \leq \sigma_{\max}(B),
$$
for all $k$. This is Weyl's Inequality. 

A particularly interesting application of these inequalities is in matrix perturbation: if $B$ is some small perturbation matrix $\Delta$ (with small singular values), then the maximum and minimum singular values of $A+\Delta$ cannot deviate much from the singular values of the original matrix $A$. For Hermitian matrices, since the inequality applies for all the singular values, we know that the entire spectrum must stay stable under perturbation. 

Resources: [Terry Tao's blog](https://terrytao.wordpress.com/2010/01/12/254a-notes-3a-eigenvalues-and-sums-of-hermitian-matrices/)