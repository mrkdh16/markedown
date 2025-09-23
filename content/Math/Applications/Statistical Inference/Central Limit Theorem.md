---
title: Central Limit Theorem
draft: false
tags:
  - math
  - statistics
---
 
### Theorem.
Let $X_{1},\dots,X_{n}$ be i.i.d. random variables with finite mean $\mu$. Then, the (weak) Law of Large Numbers says that for any fixed $\epsilon>0$, $P(|\bar{X_{n}}-\mu|>\epsilon)$ goes to 0 as $n\to \infty$. The Central Limit Theorem says that if $X_{i}$ have finite variance $\sigma^2$, then $\sqrt{ n }(\bar{X_{n}}-\mu)\to N(0,\sigma^2)$ where $\sqrt{ n }(\bar{X_{n}}-\mu)=\frac{1}{\sqrt{ n }}\sum^n_{i=1}(X_{i}-\mu)$.
### Remark.
$N(0,\sigma^2)$ maximizes the entropy among all distributions with variance $\sigma^2$.