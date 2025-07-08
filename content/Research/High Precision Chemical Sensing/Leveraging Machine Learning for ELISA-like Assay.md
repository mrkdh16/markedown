---
title: Leveraging Machine Learning for ELISA-like Assay
draft: false
tags:
---
## Objective
Beat baseline classical classification/regression algorithms.
## Considerations
3-dimensional nature of microdroplets and integration of z-stack into model -> possible architectures to incorporate 3D spatial information:
- 3D CNNs
- 3D CNNs integrated with transformer-like architectures (hybrid models)
Read [[3D CNNs and Transformer Hybrid Architectures]] for more information.

Potential shortage of data and/or instrumental drift causing quality issues in data -> could mitigate with data augmentation and/or creation of synthetic data:
- GANs for data augmentation [Generative Adversarial Networks for Augmenting Training Data of Microscopic Cell Images](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2019.00010/full), [Generative adversarial networks in cell microscopy for image augmentation. A systematic review](https://www.biorxiv.org/content/10.1101/2023.08.25.554841v1.full)

Lack of interpretability in black-box-like deep learning models -> saliency methods for explainable models
- xAI for post-hoc interpretability [Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization](https://arxiv.org/abs/1610.02391)
	- evaluating different (post-hoc) saliency methods: [Saliency Cards](https://github.com/mitvis/saliency-cards?tab=readme-ov-file)
- xAI to check whether models 'cheat' by exploiting chemically irrelevant features [Grad-CAMO: Learning Interpretable Single-Cell Morphological Profiles from 3D Cell Painting Images](https://arxiv.org/pdf/2403.17615v1)
- S-xAI for incorporating explainability directly into training process [Self-eXplainable AI for Medical Image Analysis: A Survey and New Outlooks](https://arxiv.org/pdf/2410.02331v1)
