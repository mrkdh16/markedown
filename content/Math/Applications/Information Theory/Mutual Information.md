---
title: Mutual Information
draft: false
tags:
  - math
  - computer-science
---
 
### Definition.
Let $X,Y$ be random variables with a shared outcome space. The *mutual information* between $X$ and $Y$ is defined as follows:
$$
I(X;Y) = H(X) - H(X|Y).
$$

---
Consistent with the intuition behind [[Conditional Entropy|conditional entropy]], mutual information quantifies the amount of information in $X$ that is made redundant by an observation of the information in $Y$.

We can decompose the information given in $X$ as such: $H(X) = I(X;Y)+H(X|Y)$, i.e. the information already in $Y$, and new information that is only in $X$.