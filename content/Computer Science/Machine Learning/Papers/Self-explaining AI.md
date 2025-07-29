---
title: Self-explaining AI
draft: true
tags:
  - computer-science
  - machine-learning
  - paper
---
## The Problem
The new paradigm of [[Deep Learning|deep learning]] is inherently black-box. By leaving feature engineering to the model, we lose insight into the decision-making processes of the models. Despite the efforts to combat our lack of understanding, all interpretability techniques have flaws. 
>More troubling, though, is that a new understanding is emerging that deep neural networks function through the brute-force local interpolation of data points, rather than global fitting procedures (Hasson et al., 2020). This calls into question longheld narratives that deep neural networks “extract” high level features and rules. It also means that neural networks have no hope of extrapolating outside their training distribution. If not properly understood, current interpretability methods can lead to over optimistic projections about the generalization ability of a neural network.

Current interpretability methods such as saliency maps do not show the underlying decision processes of the model and leave too much room for subjective interpretation of the model's generalization capabilities.

Some researchers assert that we need not sacrifice accuracy for interpretability and that the "interpretability-accuracy" trade-off is an illusion. They suggest inherently interpretable models (eg. [[Self-Explaining Neural Networks]]) that could theoretically have similar capabilities as state-of-the art (SOTA) models. However, the author of this paper is skeptical that these inherently interpretable models will ever match the SOTA. He lists two reasons for his skepticism:
1. "*most state-of-art AI systems for computer vision are not interpretable in the sense required by Rudin. Even highly distilled and/or compressed models which achieve good performance on ImageNet require at least 100,000 free parameters (Lillicrap & Kording, 2019).*"
2. "*If evolution settled on a model (the brain) which contains uninterpretable components, then we expect advanced AIs to also be of that type.*"
Building on the second bullet point, the author asserts that "*If the world is messy and complex, then neural networks trained on real world data will also be messy and complex.*" Perhaps adhering to inherently human-understandable architectures will overly constrain the space of possible models. It is entirely possible that to competently model our "messy and complex" world, we need "messy and complex" architectures.

References: [Self-explaining AI as an alternative to interpretable AI](https://arxiv.org/pdf/2002.05149)