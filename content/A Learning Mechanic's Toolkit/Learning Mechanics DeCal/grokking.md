---
title: grokking
draft: true
tags:
---
- grokking discovered by mech interp community
	- initial discovery: [Power et al. (2022)](https://arxiv.org/pdf/2201.02177)
	- mechanistic explanation: [Nanda et al. (2023)](https://arxiv.org/pdf/2301.05217)
- many explanations proposed: weight decay, implicit regularization, anomaly in adaptive optimizers, delayed learning of structured representation
	- physics style effective theory: grokking is delayed learning of representational geometry [Liu et al. (2022)](https://arxiv.org/pdf/2205.10343)
	- more precise, general (less task-specific) dynamical theory: grokking as the transition from lazy to rich training (emphasize sufficient but not necessary) [Kumar et al. (2024)](https://arxiv.org/pdf/2310.06110)
		- grokking occurs when: 
			1) the kernel at init is somewhat aligned with the task such that the model trains "lazily" for a while
			2) the hyperparameters 
	- analytically solvable model: balancedness, constrained curvature caused by conservation laws affect the transition from lazy to rich training [Kunin et al. (2024)](https://arxiv.org/pdf/2406.06158)