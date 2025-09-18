---
title: Information
draft: false
tags:
  - math
  - computer-science
---
Suppose we are given some probability ensemble $(\Omega, P)$ where $\Omega$ is some sample space and $P$ is some probability measure. For simplicity, we only concern ourselves with discrete probability distributions.
### Definition.
Let $A \subset \Omega$ be an event. We define the *Shannon information* of $A$ as follows:
$$
I(A):=\log(1/P(A))=-\log P(A).
$$
---
The intuition here is that the more "surprising," or "improbable" the event, the more "information" we gain from observing it. A helpful example: suppose I asked someone about whether their birthday is today. If they say "no," I have not gained much information. However, if they say "yes," then I have gained a tremendous amount of information. Of course, the probability that they say "yes" as opposed to "no" is much smaller, but it is precisely for this reason that it provides more information.