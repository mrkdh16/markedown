---
title: A Learning Mechanic's Toolkit 🛠️
draft: false
tags:
  - learning-mechanics
---
A *learning mechanic* studies [learning mechanics](learningmechanics.org)—the precise mechanisms by which deep networks acquire, compress, and represent knowledge. This toolkit collects instruments for diagnosing, tuning, and understanding the engines of deep learning.
## 🔧 Deep Dives
*Step-by-step derivations, refined expositions*

- [[Deep Linear Networks; A deep dive into Saxe et al. and the role of depth in learning]]
	- *deep linear networks · dynamics · exact solutions*
	- Deep linear networks are mathematically tractable yet retain some of the mysterious phenomena of deep learning. We derive the exact training dynamics of these toy models and prove that long plateaus and rapid transitions are inherent to depth.

## 🔨 Field Notes
*Quick insights, summaries of important phenomena and models*

- [[Maximal stable learning rate derivation]]
	- *edge of stability · optimization*
	- Given a well-behaved loss (constant Hessian), we analytically derive the maximal stable learning rate under gradient descent.
- [[Quadratic word embedding model (QWEM)]]
	- *word embeddings · exact solutions*
	- The second-order approximation of the Word2Vec loss yields an equivalent supervised matrix factorization loss.
- [[When (wide) neural networks become linear]]
	- *infinite limits · neural tangent kernel*
	- As the widths of the layers in a neural network become large, the network becomes approximately equal to its first-order (linear) approximation.

## 🪚 Scraps
*Small proofs, useful intuitions*

- [[Singular values under perturbation]]
	- $\sigma_{\text{max}}(A+B) \leq \sigma_{max}(A)+\sigma_{max}(B)$