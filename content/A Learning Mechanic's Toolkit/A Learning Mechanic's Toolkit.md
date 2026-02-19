---
title: A Learning Mechanic's Toolkit 🛠️
draft: false
tags:
---
A *learning mechanic* studies [learning mechanics](link here)—the precise mechanisms by which deep networks acquire, compress, and represent knowledge. This toolkit collects instruments for diagnosing, tuning, and understanding the engines of deep learning.
## 🔧 Deep Dives
*Step-by-step derivations, refined expositions*

- [[Deep Linear Networks; A deep dive into Saxe et al. and the role of depth in learning]]
	- *dynamics · linear algebra · exact solutions*
	- Deep linear networks are mathematically tractable yet retain some of the mysterious phenomena of deep learning. We derive the exact training dynamics of these toy models and prove that long plateaus and rapid transitions are inherent to depth.

## 🔨 Field Notes
*Quick insights, summaries of important phenomena and models*

- [[Maximal learning rate derivation]]
	- *vector calculus · linear algebra*
	- Given a well-behaved loss (constant Hessian), we analytically derive the maximal stable learning rate under gradient descent.
to-do.
- Rich vs. lazy feature learning: initialization scale and the gear ratio analogy 
- Muon derivation (Bernstein)
- QWEM: self-supervised contrastive learning as supervised matrix factorization; elementwise statistics, spectral geometry, and computation