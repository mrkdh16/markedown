---
title: Diagonalizability
draft: false
tags:
---
 
### Definition.
A linear operator $T \in \mathcal{L}(V,V)$ is *diagonalizable* if its matrix $M(T)$ is diagonal in some basis. 

Equivalently, $T$ is diagonalizable if there exist a basis comprised entirely of eigenvectors of $T$; or, $V$ is the direct sum of every eigenspace of $T$; or, the dimension of $V$ is the sum of the dimensions of the eigenspaces.
### Theorem.
A linear operator $T$ is diagonalizable if and only if its minimal polynomial $m(x)$ splits into distinct linear factors such that $m(x) = (x-\lambda_1)...(x-\lambda_k)$ for distinct values $\lambda_1,...,\lambda_k$.
### Proof Sketch.
Suppose $T$ is diagonalizable. Then, there exists a basis $v_1,...,v_n$ of eigenvectors of $T$. Each $v_i$ corresponds to a (not necessarily unique) eigenvalue $\lambda_i$. Even if we take just the distinct eigenvalues, 
$$
(T-\lambda_1 I)...(T-\lambda_k I)v=0
$$
for all $v\in V$ must be true. Since every eigenvalue must be a root of the minimal polynomial, $(x-\lambda_1)...(x-\lambda_k)$ must be the minimal polynomial.

Conversely, suppose $m(x)=(x-\lambda_1)...(x-\lambda_k)$. This direction is a little more tricky and requires induction on $dim(V)$. The general idea is to show that $V=null(m(T))$ is equal to a direct sum of eigenspaces. We take $p(x)=x-\lambda_1$ and $q=m(x)/p(x)$. Then, we use the fact that $gcd(p(x),q(x))=1$ to show that $null(m(T))=null(p(T))\bigoplus null(q(T))$ ([[Coprime Polynomials]]). Lastly, we use our induction hypothesis to show that $null(q(T))$ is also the direct sum of eigenspaces since $q(x)$ is the minimal polynomial of $T$ restricted to $null(q(T))$--a subspace of lower dimension.