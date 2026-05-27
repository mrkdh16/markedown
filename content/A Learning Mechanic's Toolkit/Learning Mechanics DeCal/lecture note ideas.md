---
title: lecture note ideas
draft: true
tags:
---
**Lecture 1**. Introduction I: Learning Mechanics (potential guest lecture)
*What's the evidence for an emerging scientific theory of deep learning?*
- what is learning mechanics?
- why study learning mechanics?
- what is the evidence for the feasibility of learning mechanics as a field?

**Lecture 2**. Introduction II: Neural Networks
*What exactly are neural networks? Why are they hard to study? How will we study them anyways?*
- what are hidden representations?
- what are features?
	- what does it mean for a model to learn?
	- what kind of structure can a model learn? (stochastic parrots vs world model builders)
- what tools are in the learning mechanic's toolkit?

**Lecture 3**. Analytically Solvable Settings I: Deep Linear Networks
*What can we learn about deep learning from a highly mathematically tractable toy model in deep linear networks?* 
- what interesting folklore about deep learning can we gain insight into with deep linear nets?
	- saddle-to-saddle dynamics, sequential feature learning

**Lecture 4**. Analytically Solvable Settings II + Insightful Limits I: The Neural Tangent Kernel and Kernel Regression
*How do neural networks simplify in the infinite-width limit?* 

**Lecture 5**. Analytically Solvable Settings III: Eigenlearning and the HEA (potential guest lecture)
*How can we develop a mathematical framework to study kernel regression? Can we predict how kernel regression will perform on real data?*
- what interesting folklore about deep learning can we gain insight into with kernel regression?
	- neural nets learn real data easier than random noise
- how does kernel regression use data to learn?

**Lecture 6**. Disentangling Hyperparameters I + Insightful Limits II: The Lazy (NTK) and Rich (muP) Regimes
*In the lazy (NTK) regime, neural networks don't learn any structure. Is there a regime where they do?*


**Lecture 7**. Analytically Solvable Settings IV: Balancedness and Feature Learning
*Are there toy models where we can exactly characterize a lazy/rich phase transition?*
- grokking as a case study
	- grokking first discovered by mech interp
	- several hypotheses proposed to explain
	- https://arxiv.org/pdf/2205.10343 (grokking and representation learning)
	- https://openreview.net/pdf?id=vt5mnLVIVo (grokking as the transition from lazy to rich learning)
	- https://arxiv.org/pdf/2406.06158 (balancedness => feature learning)

**Lecture 8**. Universality I: The Platonic Representation Hypothesis
*Do deep learning models learn similar representations of data across diverse architectures?*


**Lecture 10**. Universality II: Fourier Features in Learned Representations
*What kind of features are learned by language models? How might we characterize where such features come from and how they're learned?*
- fourier features as a case study
	- a particular scenario in which we have (basically) an end-to-end theory from data to representation geometry to computation

**Lecture 11**. Empirical Laws I: The Edge of Stability
*Why do neural networks routinely train successfully while hovering on the very brink of numerical divergence?*

**Lecture 12**: (buffer)

**Lecture 13**: maybe final project OH