---
title: Compressed Sensing
draft: false
tags:
  - math
  - computer-science
---
Most data compression schemes rely on the idea that most real world data is sparse in some basis. For example, for a 400x400 pixel image, it's almost always the case that we don't need all 160,000 pixel values to extract all the relevant information from it. This is because of the obscenely high-dimensional space that the image is in. The vast majority of images in a 160,000-dimension space are incomprehensible noise that contain virtually no information. Images that mean something to humans occupy a tiny fraction of the space of all possible 400x400 images. So, given a 400x400 pixel image, we might compress it into a few relevant singular vectors or represent it in a Fourier or wavelet basis in which it is sparse. However, all these compression schemes require that we first obtain the original 400x400 pixel image before we determine which pixels we can discard. What if we could only obtain a sparse version of the image, perhaps around 5~10% of the total number of pixels, and use that to reconstruct the original image? Shouldn't this be possible given that we know that the image is sparse in some basis? This is the idea behind compressed sensing.

>"*Compressed sensing can be summarized in a relatively simple statement: A given signal, if it is sufficiently sparse in a known basis, may be recovered (with high probability) using significantly fewer measurements than the signal length, if there are sufficiently many measurements and these measurements are sufficiently random*"
>
>-Brunton and Kutz, Data-Driven Science and Engineering

Suppose $x$ is the original dense signal that is sufficiently sparse in some known basis. If $y$ is a sparse measurement of $x$, we can represent the relationship between $x$ and $y$ with a measurement matrix $\Phi$:
$$
y = \Phi x.
$$
Typically, the measurement matrix $\Phi$ is a random matrix which dictates the level of sparsity of $y$. The goal is to reconstruct $x$ from $y$. 

Suppose $x \in \mathbb{R}^n$, $y \in \mathbb{R}^p$, and $\Phi$ has dimension $p \times n$. The assumption for real-world data is that $x$ is sparse in some basis $\Psi$. Let's say that we need $K$ basis vectors in $\Psi$ to represent $x$; that is, $x$ is $K$-sparse. We are interested in the case where $K \lt p \ll n$, i.e. although we necessarily require more measurements than the sparsity of $x$, we want the number of measurements to be substantially less than the dimensionality of the signal space. In terms of the image example, we want the number of (random) pixels that we must sample for reconstruction to be much less than the total number of pixels in the original image.

Observe that given $K \lt p \ll n$, there are infinitely many solutions to $y=\Phi x$ since there are much more variables than equations. However, recall that we have the condition that $x$ is sparse in some basis $\Psi$. The somewhat magical part is that given a "well-behaved" measurement matrix $\Phi$, a mathematical property called the *Restricted Isometry Property* (RIP) ensures that no two sparse signals produce the same measurement $y$. This means that we can almost think of there being one unique sparse solution, which must be $x$, since we know it to be sparse in $\Psi$.

Because $x$ is $K$-sparse in $\Psi$, it can be represented as a vector $s$ with $K$ nonzero entries such that $x = \Psi s$. The goal then is to find a sparse $\hat s$ that satisfies $y = \Phi \Psi \hat s = \Theta \hat s$. Again, the RIP ensures that there is unique such $\hat s$, or at least uniqueness with high probability. We formulate the following optimization problem to find $\hat s$:
$$
\hat s = \underset{s}{argmin} \space||s||_0 \space \space s.t. \space \space y = \Theta s
$$
where $||\cdot||_0$, or the $l_0$ pseudo-norm, gives the number of nonzero entries. However, because this problem is non-convex and intractable, we substitute the $l_0$ pseudo-norm for the $l_1$ norm. This turns the optimization into a tractable convex optimization. It's worth noting that "*[t]here are very specific conditions that must be met for the $l_1$-minimization in (3.5) to converge with high probability to the sparsest solution*." The conditions can be summarized as the following: the rows of $\Phi$ and the columns of $\Psi$ must be uncorrelated, and the number of measurements $p$ must be sufficiently large. 

Resources: [Data-Driven Science and Engineering](https://databookuw.com/databook.pdf)