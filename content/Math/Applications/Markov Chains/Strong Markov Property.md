---
title: Strong Markov Property
draft: true
tags:
  - math
  - computer-science
---
 
### Theorem.
Suppose $T$ is a stopping time. Given that $T=n$ and $X_T = y$, any other information about $X_0,...,X_T$ is irrelevant for predicting the future, and $X_{T+k}$, $k \geq 0$ behaves like the Markov chain with initial state $k$.
### Proof. (weak)
We will show a weak version of the theorem, that $P(X_{T+1}=z \mid X_T = y, T=n) = p(y,z) = P(X_{n+1} = z \mid X_n = y)$.   

---
remark.