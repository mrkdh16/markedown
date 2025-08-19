---
title: Project Ideas
draft: true
tags:
---
-  fine-tuning with high dropout generalization
- LTH
	- Do lottery tickets generalize better?
		- Generate different types of data to show OOD generalization
	- Do ensembles of lottery tickets generalize better?
		- Quantify diversity/variance across models
	- Do lottery tickets utilize spatial locality similar to CNNs?
		- Use progressive spatial scrambling
		- Direct structural comparison
		- Analyze receptive field
- Interpretability
	- Maybe try protopnet / SENNs
- Scalable oversight
	- “Create an extremely noisy or corrupted version of the MNIST-1D dataset where a human expert is only 70% accurate. Then, you could test whether alignment techniques (like using AI to assist with supervision or reward modeling) can be used to train a model that reliably surpasses the performance of the flawed human supervisor. You'd be testing the _mechanism_ of scalable oversight in a controlled setting.”