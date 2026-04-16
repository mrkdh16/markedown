---
title: Learning Mechanics DeCal
draft: false
tags:
  - learning-mechanics
---
## Course Description
*Learning Mechanics* is the emerging discipline that treats deep learning the way physics treats the natural world: seeking compact mathematical principles, tight connections between theory and experiment, and simple, intuitive explanations for complex phenomena.

Deep learning is arguably one of the most powerful technologies humans have ever built. However, we have yet to build a comprehensive theory for how it works. The radical engineering success of deep learning has outpaced our scientific understanding of it, and the effort to close that gap may just constitute the founding of a genuinely new field of science, one whose implications for our understanding of intelligence, data, and learning extend far beyond the neural networks that motivated it. 

Drawing heavily from the whitepaper *There Will Be a Scientific Theory of Deep Learning (Simon et al., 2026)* and the primary literature it synthesizes, we will examine the theoretical tools, empirical regularities, and open questions that are laying the groundwork for a physics-like understanding of deep learning. The course is organized around five lines of evidence that a scientific theory is possible: 
1. analytically solvable settings exist,
2. insightful limits reveal fundamental behavior,
3. simple equations capture meaningful macroscopic statistics,
4. hyperparameters can be disentangled and understood, and
5. universal phenomena appear across settings and tasks.
## Learning Objectives
By the end of the course, students will be able to:
- Articulate what a scientific theory of deep learning would look like and why it matters.
- Derive and analyze learning dynamics in solvable settings (deep linear networks, kernel regression).
- Explain the lazy/rich dichotomy and its implications for feature learning.
- Critically evaluate empirical scaling laws and proposed explanations.
- Design and execute small-scale experiments that test theoretical predictions about neural network training.
## Prerequisites
- Linear algebra and multivariate calculus at the level of Math 53, 54/110
- Probability and statistics at the level of EECS 126 / Data 140 / Stat 134
- Working knowledge of neural networks and deep learning at the level of CS 189 / CS 182
It is highly recommended that you bring a *physicist's mindset* to the table. This means you should be comfortable with the scientific method: formulating testable hypotheses, checking theoretical predictions against empirical measurements, solving simplified cases first, and using educated guesses (ansatze) to solve equations. We care more about simple, intuitive insights and tight connections between theory and experiment than we do about technically true mathematics.
## Grading
- Attendance & Participation 10%
	- The liveliness of this course heavily depends on in-class participation. Please show up to class and ask questions! Two unexcused absences are allowed without penalty.
- Reading Questions 20%
	- For every paper we read, please generate 2-3 questions and submit them before class.
- Final Project 30%
	- The final project is the capstone of the course. Working individually or in pairs, you will:
		- **Identify a phenomenon** related to topics covered in class (or for the especially ambitious, a related open problem from the whitepaper).
		- **Formulate a testable hypothesis** about that phenomenon.
		- **Design and run an experiment** to test the hypothesis (computational experiments on small models are perfectly appropriate).
		- **Present and write up your findings**, including whether the hypothesis was supported, what you learned, and what questions remain.
- Homework Assignments 40%
	- Three to four problem sets will be distributed over the semester. These will mix analytical derivations with computational exercises. Collaboration is encouraged but each student must write up their own solutions.
#### Weekly Schedule
Each session is 2 hours long. A typical class includes a 50-60 minute lecture on the reading, a 10-minute break, and a 40-50 minute deep-dive on derivations, experiments, or open questions in the format of a discussion.
- week 1 (first week: no class)
- week 2 (intro to learn mech) (jamie guest lecture)
	- assignments
		- read the white paper
	- big idea: physicist's approach to studying deep learning
- week 3 (basics of gradient descent: least squares, DLNs of width 1, nonlinearities)
	- assignments
		- read [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/chap1.html) (chapter 1)
		- maybe 127 review
	- big idea(s): why is it hard to study deep learning? what is the role of depth, width, and nonlinearities in said difficulty? what are simple cases that we can study?
		- opacity vs complexity
		- setup DLNs: what does it mean to be linear in the data? what do the gradient flow equations look like?
- week 4 (analytically solvable settings 1: DLNs)
	- assignments
		- read [saxe et al](https://arxiv.org/pdf/1312.6120), [lm blog post](https://learningmechanics.pub/deep-linear-nets-tutorial)
		- dln hw
	- big idea: deep linear nets are highly mathematically tractable; we can solve exactly for their learning trajectories but they still exhibit interesting nonlinear learning phenomena
		- linearization in the data
		- setup NTK, kernel regression: what does it mean to be linear in the parameters? why might taking a limit simplify things?
- week 5 (analytically solvable settings 2: the NTK and kernel regression)
	- assignments
		- read [lee et al](https://arxiv.org/pdf/1902.06720) (optional: [jacot et al](https://arxiv.org/pdf/1806.07572))
	- big idea: kernel regression as a tractable, well-understood model for wide neural nets
		- linearization in the parameters
		- setup eigenlearning, HEA: 
- week 6 (analytically solvable settings 3: eigenlearning and the HEA) (jamie/joey guest lecture)
	- assignments
		- read [simon et al](https://arxiv.org/pdf/2110.03922), [karkada et al](https://arxiv.org/pdf/2510.14878)
	- big idea(s): predict expected generalization error of KRR by accounting for input data structure and apply the eigenframework to realistic data distributions with the HEA
		- real data distribution -> (eigenframework) -> predict generalization error
		- setup lazy/rich: in the NTK regime, models don't learn any structure, is there a regime where they do?
- week 7 (insightful limits and disentangling hyperparameters: lazy (NTK) vs. rich (muP) dichotomy)
	- assignments
		- read [karkada et al](https://arxiv.org/pdf/2404.19719) (optional: [yang et al](https://proceedings.mlr.press/v139/yang21c/yang21c.pdf))
		- lazy rich hw
	- big idea(s): derive the richness parameter in a simple 3-layer linear network and observe the lazy (NTK) and rich (muP) regimes in the thermodynamic limit
		- setup: are there toy models where we can exactly characterize a lazy/rich transition?
- week 8 (analytically solvable settings 4: exact solutions of lazy rich)
	- assignments
		- read [kunin et al](https://proceedings.neurips.cc/paper_files/paper/2024/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
		- balancedness hw
	- big idea: 
- week 9 (universality: the platonic representation hypothesis, fourier features in representations) (dhruva guest lecture)
	- read [huh et al](https://arxiv.org/pdf/2405.07987), [karkada et al](https://arxiv.org/pdf/2602.15029)
- week 10 (empirical laws: EoS and optimization phenomena)
	- read [damian et al](https://arxiv.org/pdf/2209.15594)
- week 11
- week 12
- week 13 (buffer)
- week 14 (final project hypothesis presentations)
- week 15 (final project OH) (maybe FLAB members could come and help out)
- week 16 (RRR week: no class)

ideas: 
- empirical laws: implicit regularization, simplicity bias
- empirical laws: neural scaling laws
- macroscopic regularities: neural collapse & the neural feature ansatz
- nonlinear toy models

---

#### advertising.
- ed post
**Learning Mechanics**

Deep learning is arguably one of the most powerful technologies humans have ever built — yet we have almost no idea why it works.

Engineers once built working steam engines long before anyone understood thermodynamics. The scientific effort to explain those engines ended up creating an entirely new branch of science.

Deep learning may be our generation's steam engine. _Learning mechanics_ is the emerging discipline that aims to understand it from first principles, treating deep learning the way physics treats the natural world: seeking compact mathematical principles, tight connections between theory and experiment, and simple, intuitive explanations for complex phenomena.

This course is for those who want to be part of building that new science.