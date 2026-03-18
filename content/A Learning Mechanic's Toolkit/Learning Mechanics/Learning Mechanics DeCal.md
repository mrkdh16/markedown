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
	- read saxe et al (+mark's blog post)
	- big idea: analyzing models that are linear in the data; f is a linear function of x
		- gain insight into the role of depth
- week 4 (analytically solvable settings 2: the NTK and kernel regression)
	- read lee et al or jacot et al (+lil log blog post)
	- big idea: analyzing models that are linear in the parameters: f_lin is a linear function of the parameters of f; f_lin \approx f for large width
		- kernel regression as a tractable model for wide neural nets
- week 5 (analytically solvable settings 3: eigenlearning and the HEA) (jamie / joey guest lecture (?))
	- read simon et al (eigenlearning) and karkada et al (HEA)
	- big idea(s): predict expected generalization error of KRR by accounting for input data structure and apply the eigenframework to realistic data distributions with the HEA
		- real data distribution -> (eigenframework) -> predict generalization error
- week 6 (insightful limits: lazy vs. rich dichotomy and muP)
	- read karkada et al and yang et al
	- big idea(s): when/why does feature learning happen? 
- week 7 (macroscopic regularities: neural collapse & the neural feature ansatz)
- week 8 (Universality: the platonic representation hypothesis, fourier features in representations) (dhruva guest lecture (?))
- week 9 (learning mechanics <-> mech interp)
	- watch welch labs video on grokking (how does this connect to dhruva's translational symmetry => fourier features idea?)
- week 10 (empirical laws: EoS and optimization phenomena)
- week 11 (empirical laws: implicit regularization, simplicity bias)
- week 12 (empirical laws: neural scaling laws)
- week 13 (nonlinear toy models)
- week 14 (final project hypothesis presentations)
- week 15 (final project OH) (maybe FLAB members could come and help out)
- week 16 (RRR week: no class)

---

#### advertising.
- ed post
**Learning Mechanics**

Deep learning is arguably one of the most powerful technologies humans have ever built — yet we have almost no idea why it works.

Engineers once built working steam engines long before anyone understood thermodynamics. The scientific effort to explain those engines didn't just improve them; it created an entirely new branch of science.

Deep learning may be our generation's steam engine. _Learning mechanics_ is the emerging discipline that aims to understand it from first principles — treating deep learning the way physics treats the natural world: seeking compact mathematical principles, tight connections between theory and experiment, and simple, intuitive explanations for complex phenomena.

This course is for those who want to be part of building that new science.