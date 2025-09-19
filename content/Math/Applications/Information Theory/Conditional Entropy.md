---
title: Conditional Entropy
draft: false
tags:
  - math
  - computer-science
---
 
### Definition.
Let $(\Omega, P)$ be a probability ensemble and let $X, Y$ be discrete random variables on $\Omega$. Then, we define the *conditional entropy* $H(X|Y)$ of $X$ given $Y$ as:
$$
H(X|Y) = \sum_{y} P(Y=y)H(X|Y=y)
$$
where 
$$
H(X|Y=y) = -\sum_{x} P(X=x|Y=y)\log{P(X=x|Y=y)},
$$
consistent with the definition of [[Entropy|entropy]].

---
Intuitively, conditional entropy quantifies the amount of "new information" we can expect to gain from $X$ after having already observed the information in $Y$.