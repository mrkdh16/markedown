---
title: Weierstrass Approximation Theorem
draft: false
tags:
  - math
---
 
### Theorem.
The set of polynomials is dense in $C^0([0,1],\mathbb{R})$, i.e. for any continuous $f:[0,1]\to \mathbb{R}$ and any $\varepsilon>0$, there exists a polynomial $p(x)$ such that $|f(x)-p(x)|<\varepsilon$ for all $x\in [0,1]$.
### Remark.
Proving this theorem with just the tools of analysis is possible, but quite cumbersome. Borrowing some ideas from probability makes the proof much simpler and provides better motivations for the seemingly arbitrary tools used. 
### Proof.
Let $f:[0,1]\to \mathbb{R}$ be some arbitrary continuous function. We start by observing that because $f$ is continuous function on a compact domain, it must be uniformly continuous ([[Continuous on compact domain implies uniformly continuous]]). Recall that $f$ is uniformly continuous if for all $\varepsilon>0$, there exists a universal $\delta>0$ such that for any two points in $[0,1]$ of distance less than $\delta$, their images are of distance less than $\varepsilon$, i.e. 
$$
|s-t|<\delta \implies |f(s)-f(t)|<\varepsilon.
$$
Uniform continuity is one of the main engines of the proof.

The first tool we borrow from probability is the binomial random variable. Let $X \sim \text{Binomial}(n,x)$ where $x$ is some arbitrary real number in $[0,1]$. Recall that $P(X=k)=\binom{n}{k}x^k(1-x)^{n-k}$ , $\mathbb{E}\left( \frac{X}{n} \right)=x$, $\text{Var}\left( \frac{X}{n} \right) = \frac{1}{n^2}\text{Var}(X) = \frac{nx(1-x)}{n^2} = \frac{x(1-x)}{n}$, and that Chebyshev's Inequality states that 
$$
P\left( \left|\frac{X}{n}-\mathbb{E}\left( \frac{X}{n} \right)\right| \geq l \sqrt{ \text{Var}\left( \frac{X}{n} \right) } \right)=P\left( \left|\frac{X}{n}-x\right| \geq l\sqrt{ \frac{x(1-x)}{n} } \right)\leq \frac{1}{l^2}.
$$
Chebyshev's Inequality is the second tool we borrow from probability and is the other main engine of the proof.

Let us define the following polynomial (a.k.a. the Bernstein polynomial): 
$$
b_{n}(x) := \sum^n_{k=0}P(X=k)f(\frac{k}{n})=\sum^n_{k=0} \frac{n!}{k!(n-k)!}x^k(1-x)^{n-k}f(\frac{k}{n}).
$$
Clearly this is in fact a polynomial with respect to $x$. We will show that for all $\varepsilon>0$, there exists $n$ large enough such that for all $x \in [0,1]$, $|f(x)-b_{n}(x)|<\varepsilon$.

We proceed by examining $|f(x)-b_{n}(x)| = |b_{n}(x)-f(x)|$: 
$$
|b_{n}(x)-f(x)|= \left |\sum^n_{k=0}P(X=k)f\left( \frac{k}{n} \right)-f(x)\sum^n_{k=0}P(X=k)\right|
$$
where we used the fact that $\sum^n_{k=0}P(X=k)=1$ (since probabilities are normalized). Then, 
$$
\left |\sum^n_{k=0}P(X=k)f(\frac{k}{n})-f(x)\sum^n_{k=0}P(X=k)\right| = \left|\sum^n_{k=0}P(X=k)f(\frac{k}{n})-f(x)\right|,
$$
and by $n$ applications of the Triangle Inequality,
$$
\left|\sum^n_{k=0}P(X=k)f(\frac{k}{n})-f(x)\right| \leq \sum^n_{k=0}P(X=k) \left|f(\frac{k}{n})-f(x)\right|.
$$

In order to use our two inequalities (one from uniform continuity and the other from Chebyshev), we split the sum into two. We do this by splitting the indices $\{0,1,\dots,n\}$ into two sets based on some parameter $\eta>0$ that we will set later: 
$$
S_{l}=\left\{ k\in\{0,1,\dots,n\}: \left|\frac{k}{n} - x\right|<\eta \right\}
$$
and 
$$
S_{g}=\left\{ k\in\{0,1,\dots,n\}: \left|\frac{k}{n} - x\right|\geq\eta \right\}.
$$
Then, by the triangle inequality, 
$$
\sum^n_{k=0}P(X=k)\left|f(\frac{k}{n})-f(x)\right|\leq 
\sum_{k\in S_{l}}P(X=k)\left|f(\frac{k}{n})-f(x)\right|+
\sum_{k\in S_{g}}P(X=k)\left|f(\frac{k}{n})-f(x)\right|.
$$
We will bound both terms above by $\frac{\varepsilon}{2}$.

For the first term, we leverage uniform continuity. We know that given $\frac{\varepsilon}{2}>0$, there exists $\delta>0$ such that for any $x\in[0,1]$ and any $k\in\{0,1,\dots,n\}$ (which means $\frac{k}{n}\in [0,1]$), $|\frac{k}{n}-x|<\delta \implies |f\left( \frac{k}{n} \right)-f(x)|< \frac{\varepsilon}{2}$. We will set our parameter $\eta$ to the $\delta$ obtained here. Then, 
$$
\sum_{k\in S_{l}}P(X=k)\left|f\left( \frac{k}{n} \right)-f(x)\right|< \frac{\varepsilon}{2} \sum_{k\in S_{l}}P(X=k) \leq \frac{\varepsilon}{2},
$$
where we used the fact that $\sum_{k\in S_{l}}P(X=k) \leq 1$.

For the second term, we will leverage Chebyshev's Inequality. We first observe that since $f$ is continuous on a compact domain, it will have a compact image. This means its image will be bounded, i.e. there exists $M\in \mathbb{R}$ such that for all $x \in [0,1]$, $f(x)\leq M$. Thus, 
$$
\sum_{k\in S_{g}}P(X=k)\left|f(\frac{k}{n})-f(x)\right| \leq 2M\sum_{k\in S_{g}}P(X=k).
$$
We then observe that $\sum_{k\in S_{g}}P(X=k) = P\left( |\frac{X}{n} - x| \geq \eta \right)$. This is because $S_{g}$ is exactly the set of elements $k$ in the sample space such that $|\frac{k}{n}-x| \geq \eta$. If $\eta = l \sqrt{  \text{Var}\left( \frac{X}{n} \right)}$, then $\frac{1}{l^2} = \frac{\text{Var}\left( \frac{X}{n} \right)}{\eta^2}$. So, by Chebyshev, 
$$
2M\sum_{k\in S_{g}}P(X=k)=2M \cdot P\left( \left|\frac{X}{n} - x\right| \geq \eta \right) \leq 2M \cdot\frac{1}{l^2} = 2M\cdot\frac{\text{Var}\left( \frac{X}{n} \right)}{\eta^2} = 2M \cdot\frac{x(1-x)}{n\eta^2}.
$$
Observe that $\frac{x(1-x)}{n\eta^2} \to 0$ as $n \to \infty$. So, for large enough $n$, $\frac{x(1-x)}{n\eta^2} < \frac{\varepsilon}{4M}$ is true such that 
$$
\sum_{k\in S_{g}}P(X=k)\left|f\left( \frac{k}{n} \right)-f(x)\right| < 2M \cdot \frac{\varepsilon}{4M} =\frac{\varepsilon}{2}.
$$

We have successfully bounded both terms we had set out to bound. Thus, we have obtained our desired bound: 
$$
\sum^n_{k=0}P(X=k)\left|f\left( \frac{k}{n} \right)-f(x)\right| < \frac{\varepsilon}{2}+\frac{\varepsilon}{2} = \varepsilon. \space \square
$$

References: [Koralov, L.; Sinai, Y. (2007). ""Probabilistic proof of the Weierstrass theorem"". _Theory of probability and random processes_ (2nd ed.). Springer. p. 29.](https://nzdr.ru/data/media/biblio/kolxoz/M/MV/Koralov%20L.,%20Sinai%20Ya.%20Theory%20of%20probability%20and%20random%20processes%20(2ed.,%20Springer,%202007)(ISBN%203540254846)(349s)_MV_.pdf)