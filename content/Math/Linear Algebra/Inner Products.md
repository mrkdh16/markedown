---
title: Inner Products
draft: false
tags:
  - math
  - linear-algebra
---
 
### Definition.
An *inner product* on an $F$-vector space $V$ is a function that takes each ordered pair $(u,v)$ of vectors of $V$ to a number $\langle u,v \rangle \in F$ and has the following properties.
1. Positivity: $\langle v,v \rangle \geq 0$ for all $v\in V$.
2. Definiteness $\langle v,v\rangle =0$ if and only if $v=0$.
3. Additivity in the first slot: $\langle u+v,w \rangle = \langle u,w\rangle + \langle v,w\rangle$ for all $u,v,w\in V$.
4. Homogeneity in the first slot: $\langle \lambda u,v\rangle$ for all $\lambda \in F$ and all $u,v \in V$.
5. Conjugate symmetry: $\langle u,v \rangle = \overline{\langle v,u \rangle}$ for all $u,v\in V$.

Every inner product $\langle \cdot,\cdot \rangle$ induces a *norm* $|| \cdot ||$ on $V$. This induced norm is defined as such: for an inner product space $V$ and $v\in V$, the induced norm of $v$ is$$||v||=\sqrt{\langle v,v \rangle}.$$
Two vectors $u,v \in V$ are *orthogonal* if $\langle u,v \rangle = 0$.
### Remark(s).
Note that we need not specify additivity or homogeneity in the second slot as the additivity and homogeneity in the first slot and conjugate symmetry are enough to deduce additivity and homogeneity in the second slot. In general, mathematicians tend to opt for simpler and more bare-bones definitions when they can. This can be thought of both as a aesthetic endeavor and an application of Occam's razor as simpler definitions will likely be the most flexible.

The most straightforward inner product is of course the dot product. In the space of real random variables or random vectors, the expected value of the product of two random variables is an inner product: $\langle X,Y \rangle = \mathbb{E}[XY]$. This implies that the covariance, defined as $\mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]$ is an inner product for the space of real random variables with mean $0$. And for this covariance inner product space, variance is the induced norm. Thus, we can apply linear algebraic results to probability theory and statistics to gain a deeper understanding and perhaps some justification for certain definitions.

Inner products and norms introduce geometry into our vector spaces. The norm generalizes the notion of distance, the inner product generalizes the notion of an angle, and orthogonality generalizes the notion of perpendicularity to more abstract spaces. Intuitively, vectors with a larger inner product are more similar, while orthogonal vectors represent completely different things. 

---
Math people use the word orthogonal a lot when they talk about general ideas or concepts. Two concepts are *orthogonal* if they are completely unrelated or belong to different categories. It's a useful word to have on hand.

![[IMG_6A6AB271CC97-1.jpeg]]From LADR, Axler.

Resources: [The Vector Space of Random Variables](https://stats.libretexts.org/Bookshelves/Probability_Theory/Probability_Mathematical_Statistics_and_Stochastic_Processes_(Siegrist)/04%3A_Expected_Value/4.11%3A_Vector_Spaces_of_Random_Variables)