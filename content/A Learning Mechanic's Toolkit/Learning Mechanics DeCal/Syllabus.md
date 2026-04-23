---
layout: default
title: Syllabus
nav_order: 2
---
# Syllabus
- **Course Title**: Physics 198: (Deep) Learning Mechanics
- **Units**: 2
- **Instructor**: Mark Rhee
- **Email**: mrkdh@berkeley.edu
- **Faculty Sponsor**: Michael DeWeese
- **Location**: TBD
- **Time**: TBD

## Course Description
*Learning Mechanics* is the emerging discipline that treats deep learning the way physics treats the natural world: seeking compact mathematical principles[^1], tight connections between theory and experiment, and simple, intuitive explanations for complex phenomena. Pieces of a scientific theory for deep learning are beginning to fit together, and in this course, we will examine what has been assembled so far, what remains contested, and where the field is heading.

Deep learning is among the most powerful technologies humans have ever built, and understanding it promises to be one of the defining intellectual challenges of the early 21st century. As of 2026, the engineering success of deep learning has dramatically outpaced our scientific understanding of it. Closing that gap may amount to founding a genuinely new field of science—one whose implications for our understanding of intelligence, data, and learning extend well beyond the neural networks that motivated it.

Readings draw heavily from the whitepaper _There Will Be a Scientific Theory of Deep Learning_ (Simon et al., 2026) and the primary literature it synthesizes.

## Prerequisites
- Linear algebra and multivariate calculus at the level of Math 53, 54 / 110
- Probability and statistics at the level of EECS 126 / Data 140 / Stat 134
- Working knowledge of neural networks and deep learning (see ch. 1 from [Nielson (2019)](http://neuralnetworksanddeeplearning.com))

It is highly recommended that you bring a *physicist's mindset* to the table. This means you should be comfortable with the scientific method: formulating testable hypotheses, checking theoretical predictions against empirical measurements, solving simplified cases first, and using educated guesses (ansatze) to solve equations. We care more about simple, intuitive insights and tight connections between theory and experiment than we do about technically true mathematics.

## Learning Objectives
By the end of the course, students will be able to:
- Articulate what a scientific theory of deep learning would look like and why it matters.
- Derive and analyze learning dynamics in solvable settings (deep linear networks, kernel regression).
- Explain the lazy/rich dichotomy and its implications for feature learning.
- Critically evaluate empirical scaling laws and proposed explanations.
- Design and execute small-scale experiments that test theoretical predictions about neural network training.

## Course Content
The course is structured around five lines of evidence that a scientific theory of deep learning is within reach:
1. **Analytically solvable settings** (toy models) that exhibit nontrivial learning phenomena exist.
2. **Insightful limits** reveal fundamental behavior.
3. **Meaningful macroscopic statistics** are captured by simple equations.
4. **Hyperparameters can be disentangled** and understood.
5. **Universal phenomena** appear across settings and tasks.

The following is a non-exhaustive list of content we will cover:
- Deep Linear Networks (DLNs)
- The Neural Tangent Kernel (NTK)
- Kernel Ridge Regression (KRR)
- Eigenlearning
- The Hermite Eigenstructure Ansatz (HEA)
- The Lazy (NTK) and Rich (muP) Regimes
- Balancedness
- Feature Learning
- The Platonic Representation Hypothesis
- The Edge of Stability (EoS)

## Grading
Grading will be done on an absolute scale, with any grade above 70 points receiving a Pass.
- **Attendance & Participation 10 points**
	- The liveliness of this course heavily depends on in-class participation. Please show up to class and ask questions! Two unexcused absences are allowed without penalty.
- **Reading Questions 20 points**
	- For every paper we read, please generate 2-3 questions and submit them before class.
- **Final Project 30 points**
	- The final project is the capstone of the course. Working individually or in pairs, you will:
		- **Identify a phenomenon** related to topics covered in class (or for the especially ambitious, a related open problem from the whitepaper).
		- **Formulate a testable hypothesis** about that phenomenon.
		- **Design and run an experiment** to test the hypothesis (computational experiments on small models are perfectly appropriate).
		- **Present and write up your findings**, including whether the hypothesis was supported, what you learned, and what questions remain.
- **Homework Assignments 40 points**
	- Three to four problem sets will be distributed over the semester. These will mix analytical derivations with computational exercises. Collaboration is encouraged but each student must write up their own solutions.

## Weekly Schedule
Each session is 2 hours long. A typical class includes a 50-60 minute lecture on the reading, a 10-minute break, and a 40-50 minute deep-dive on derivations, experiments, or open questions in the format of a discussion.

### Week 1 
(First Week: No Class)

### Week 2 
**Lecture 1**. Introduction I: Learning Mechanics (potential guest lecture)

*What's the evidence for an emerging scientific theory of deep learning?*
- Readings: Simon et al. (2026)

### Week 3 
**Lecture 2**. Introduction II: Neural Networks

*What exactly are neural networks? Why are they hard to study? How will we study them anyways?*
- Readings: ch. 1 from [Nielson (2019)](http://neuralnetworksanddeeplearning.com) 
- Lecture Notes: link
- Homework: MAYBE, optional math review

### Week 4
**Lecture 3**. Analytically Solvable Settings I: Deep Linear Networks

*What can we learn about deep learning from a highly mathematically tractable toy model in deep linear networks?* 
- Readings: [Saxe et al. (2014)](https://arxiv.org/pdf/1312.6120)
- Lecture Notes: link
- Homework: link

### Week 5 
**Lecture 4**. Analytically Solvable Settings II + Insightful Limits I: The Neural Tangent Kernel and Kernel Regression

*How do neural networks simplify in the infinite-width limit?* 
- Readings: [Lee et al. (2019)](https://arxiv.org/pdf/1902.06720) (optional: [Jacot et al. (2020)](https://arxiv.org/pdf/1806.07572))
- Lecture Notes: link

### Week 6 
**Lecture 5**. Analytically Solvable Settings III: Eigenlearning and the HEA (potential guest lecture)

*How can we develop a mathematical framework to study kernel regression? Can we predict how kernel regression will perform on real data?*
- Readings: [Simon et al. (2023)](https://arxiv.org/pdf/2110.03922), [Karkada et al. (2026)](https://arxiv.org/pdf/2510.14878)
- Lecture Notes: link

### Week 7 
**Lecture 6**. Disentangling Hyperparameters I + Insightful Limits II: The Lazy (NTK) and Rich (muP) Regimes

*In the lazy (NTK) regime, neural networks don't learn any structure. Is there a regime where they do?*
- Readings: [Karkada et al. (2024)](https://arxiv.org/pdf/2404.19719) (optional: [Yang et al. (2021)](https://proceedings.mlr.press/v139/yang21c/yang21c.pdf))
- Lecture Notes: link
- Homework: link

### Week 8 
**Lecture 7**. Analytically Solvable Settings IV: Balancedness and Feature Learning

*Are there toy models where we can exactly characterize a lazy/rich phase transition?*
- Readings: [Kunin et al. (2024)](https://proceedings.neurips.cc/paper_files/paper/2024/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- Lecture Notes: link
- Homework: link

### Week 9 
**Lecture 8**. Universality I: The Platonic Representation Hypothesis

*Do deep learning models learn similar representations of data across diverse architectures?*
- Readings: [Huh et al. (2024)](https://arxiv.org/pdf/2405.07987)
- Lecture Notes: link

### Week 10 
(Thanksgiving Break: No Class)

### Week 11
**Lecture 10**. Universality II: Fourier Features in Learned Representations

*What kind of features are learned by language models? How might we characterize where such features come from and how they're learned?*
- Readings: [Karkada et al. (2026)](https://arxiv.org/pdf/2602.15029)
- Lecture Notes: link
- Homework: link

### Week 12
**Lecture 11**. Empirical Laws I: The Edge of Stability

*Why do neural networks routinely train successfully while hovering on the very brink of numerical divergence?*
- Readings: [Damian et al. (2023)](https://arxiv.org/pdf/2209.15594)
- Lecture Notes:

### Week 13
(buffer)

### Week 14
**Lecture 13**. Final Project Hypothesis Presentations 

### Week 15
**Lecture 14**. Final Project Office Hours

### Week 16 
(RRR Week: No Class)

---

[^1]: From [Wikipedia](https://en.wikipedia.org/wiki/First_principle): "*In physics and other sciences, theoretical work is said to be from first principles, or ab initio, if it starts directly at the level of established science and does not make assumptions such as empirical model and parameter fitting. "First principles thinking" consists of decomposing things down to the fundamental axioms in the given arena, before reasoning up by asking which ones are relevant to the question at hand, then cross referencing conclusions based on chosen axioms and making sure conclusions do not violate any fundamental laws.*"
