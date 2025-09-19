---
title: Khinchin Uniqueness Theorem
draft: false
tags:
  - math
  - computer-science
---
 
### Theorem.
There is a unique (up to scalar) function $H(\underline{p})$ over finite probability distributions $\underline{p} = \{p_{1},\dots,p_{n} \}$ such that it satisfies the following:
1. Continuity: For any fixed $n$, $H$ is continuous in the $p_i$
2. Increasing in the size of the uniform distribution: $H( \frac{1}{n}, \dots, \frac{1}{n})$ is increasing as a function of $n$
3. Decomposability: $H$ is such that $H(p_{1},\dots,p_{n})=H(p_{1},1-p_{1})+(1-p_{1})H\left( {\frac{p_2}{1-p_{1}}},\dots, \frac{p_{n}}{1-p_{1}} \right)$.
The unique function $H(\underline{p})$ satisfying the above conditions is equivalent to our definition of [[Entropy|entropy]].

---
The last condition seems arbitrary at first glance but is actually quite well-motivated. Suppose we sent the random variables $X_{1}$ and $X_{2}$ as part of one message to someone else. Intuitively, there should be no loss of information if instead we were to send $X_1$ first then $X_2$. We want our measure of information $I(\cdot)$ to be such that it obeys this intuition. 

To be more specific, once we accept that the information $I(\cdot)$ should be a function of probability we want the following to be true:
$$
I(P(X_{1},X_{2}))=I(P(X_{1}))+I(P(X_{2}|X_{1})).
$$
The decomposability condition in the above theorem is essentially a generalization of this intuition, but for entropy instead of information. We want entropy to be such that if we decompose a random variable into a sequence of random variables, it adds.