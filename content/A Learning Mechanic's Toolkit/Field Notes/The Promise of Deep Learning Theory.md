---
title: The Promise of Deep Learning Theory
draft: true
tags:
---
## introduction
- the power of theory is in its capacity for generalization
	- we may start out with trying to explain one specific phenomenon, but by developing a coherent theoretical framework in the process, we can understand a much broader set of things
- a case study: grokking -> fourier features -> framework for understanding how structure in the data can affect what features are learned, which in turn enables certain kinds of computation (data statistics -> representation geometry -> computation)
## the discovery of grokking
- grokking is a phenomenon where models abruptly transition to a generalizing solution after a large number of training steps.
	- generalization happens long after the model has already overfitted the training data.
## mech interp: reverse engineering the model
- when analyzing small transformers trained on modular addition, researchers fully reverse engineered the learned algorithm, discovering that the models use discrete Fourier transforms and trigonometric identities
	- the model develops a specific 'circuit'
	- This learned algorithm converts the task of addition into rotation about a circle. 
	- The network accomplishes this by mapping inputs to sines and cosines at a sparse set of key frequencies.
- The Optimization Story (The "Why")
	- why did the optimizer choose this specific, highly-structured Fourier circuit over standard memorization?
	- **Phases of Learning:** The training dynamics behind grokking can actually be split into three continuous phases: memorization, circuit formation, and cleanup.
	- **The role of efficiency:** The sudden transition to a generalizing solution actually occurs during the cleanup phase, taking place after the generalizing mechanism has already been learned.
	- **The pressure of Weight Decay:** The completed Fourier multiplication circuit possesses lower weight than the memorized solution.
	- **The Catalyst:** Because of this efficiency, weight decay encourages the network to shed the memorized components in favor of the structured Fourier mechanism.
#### the power of theory – generalization and new discoveries
- what broader mathematical properties induced the development of a fourier circuit in the model?
- let's look at more cases of geometric structure in internal representations of models 
	- fourier features are an example of geometric structure in internal representations (also occurs in representation of days of the week, months of the year, hues of the color wheel)
		- Gurnee et al (https://arxiv.org/pdf/2310.02207)
		- Engels et al (https://arxiv.org/pdf/2405.14860)
	- linear structure for analogy completion
		-  Merullo et al (https://arxiv.org/pdf/2305.16130)
- what kind of structure in the data might induce such geometry?
	- circulant structure <-> fourier features
		- most apparent in modular addition tasks
		- somewhat surprisingly, circulant structure exists in co-occurrence of days of the week, months of the year due to the translational symmetry in their co-occurrence (co-occurrence probability of two items depends only on the interval between them)
- to focus on the structure of the data as the cause of producing the geometry in representations (as opposed to the architecture of the model or the optimization procedure inducing the geometry), we analyze a toy model (word2vec)
	- toy model is also more analytically tractable (QWEM)
	- word2vec is well approximated by matrix factorization
		- if the target matrices has circulant structure (which would be true given the translation symmetry assumption for time related words), then the learned representations would be fourier features, as we see empirically
- Once we understand that structure in the data induces specific internal geometries, we can predict and explain other capabilities.
	- Kronecker structure: Co-occurrence statistics can also be driven by weakly correlated discrete latent variables, which results in a Kronecker structure.
	- -> enables analogy completion: This Kronecker structure naturally gives rise to parallelogram-like geometries, which in turn enable models to perform analogy completion via simple vector addition.
#### conclusion
- weird plateau in a toy addition problem -> discovering a Fourier circuit -> recognizing the role of weight decay -> abstracting to data symmetry -> explaining the geometry of space, time, and analogies.
- Theory is the bridge between isolated empirical anomalies and a predictive, universal understanding of artificial intelligence.