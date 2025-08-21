---
title: Discrete Time Markov Chains
draft: false
tags:
  - math
  - computer-science
---
 
### Definition.
$X_n$ is a discrete time Markov Chain with transition matrix $p(i,j)$ if for any $j,i_n,...,i_{n-1},i_0$, 
$$
P(X_{n+1}=j \mid X_n=i_n,X_{n-1}=i_{n-1},...,X_0=i_0) = p(i,j).
$$
Here, we restrict our attention to temporally homogenous discrete time Markov chains that obey the following transition probability independent on time $n$:
$$
p(i,j) = P(X_{n+1}=j \mid X_n = i_n).
$$
Naturally, the transition probabilities have the following constraints:
$$
(i) \space p(i,j) \geq 0, \\\\
(ii) \space \sum_{j} p(i,j) = 1
$$
The $(ii)$ constraint exists since if $X_n = i$, $X_{n+1}$ will be in some state $j$. Concretely, the two constraints mean that the entries of the transition matrix are nonnegative and that the rows add up to $1$.