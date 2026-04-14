---
title: Learning Mechanics DeCal
draft: true
tags:
---
#### tentative schedule
- week 1 (first week: no class)
- week 2 (intro to learn mech)
	- read the white paper
	- big idea: physicist's approach to studying deep learning
- week 3 (analytically solvable settings 1: DLNs)
	- read [saxe et al](https://arxiv.org/pdf/1312.6120), [lm blog post](https://learningmechanics.pub/deep-linear-nets-tutorial)
	- big idea: deep linear nets are highly mathematically tractable; we can solve exactly for their learning trajectories but they still exhibit interesting nonlinear learning phenomena
		- linearization in the data
- week 4 (analytically solvable settings 2: the NTK and kernel regression)
	- read [lee et al](https://arxiv.org/pdf/1902.06720) (optional: [jacot et al](https://arxiv.org/pdf/1806.07572))
	- big idea: kernel regression as a tractable, well-understood model for wide neural nets
		- linearization in the parameters
- week 5 (analytically solvable settings 3: eigenlearning and the HEA) (jamie/joey guest lecture)
	- read [simon et al](https://arxiv.org/pdf/2110.03922), [karkada et al](https://arxiv.org/pdf/2510.14878)
	- big idea(s): predict expected generalization error of KRR by accounting for input data structure and apply the eigenframework to realistic data distributions with the HEA
		- real data distribution -> (eigenframework) -> predict generalization error
- week 6 (insightful limits: lazy vs. rich dichotomy and muP)
	- read [karkada et al](https://arxiv.org/pdf/2404.19719) (optional: [yang et al](https://proceedings.mlr.press/v139/yang21c/yang21c.pdf))
	- big idea(s): what is the richness parameter?
- week 7 (analytically solvable settings 4: exact solutions of lazy rich)
	- read [kunin et al](https://proceedings.neurips.cc/paper_files/paper/2024/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
	- big idea: 
- week 8 (universality: the platonic representation hypothesis, fourier features in representations) (dhruva guest lecture)
	- read [huh et al](https://arxiv.org/pdf/2405.07987), [karkada et al](https://arxiv.org/pdf/2602.15029)
- week 9 (empirical laws: EoS and optimization phenomena)
	- read [damian et al](https://arxiv.org/pdf/2209.15594)
- week 10
- week 11
- week 12
- week 13
- week 14 (final project hypothesis presentations)
- week 15 (final project OH) (maybe FLAB members could come and help out)
- week 16 (RRR week: no class)

ideas: 
- empirical laws: implicit regularization, simplicity bias
- empirical laws: neural scaling laws)
- macroscopic regularities: neural collapse & the neural feature ansatz
- nonlinear toy models

---

#### advertising.
- ed post
**Learning Mechanics**

Deep learning is arguably one of the most powerful technologies humans have ever built — yet we have almost no idea why it works.

Engineers once built working steam engines long before anyone understood thermodynamics. The scientific effort to explain those engines didn't just improve them; it created an entirely new branch of science.

Deep learning may be our generation's steam engine. _Learning mechanics_ is the emerging discipline that aims to understand it from first principles—treating deep learning the way physics treats the natural world: seeking compact mathematical principles, tight connections between theory and experiment, and simple, intuitive explanations for complex phenomena.

This course is for those who want to be part of building that new science.