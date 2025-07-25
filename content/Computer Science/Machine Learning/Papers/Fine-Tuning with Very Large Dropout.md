---
title: Fine-Tuning with Very Large Dropout
draft: false
tags:
  - computer-science
  - machine-learning
---
The authors attempt to solve the problem that models often fail to generalize with out of distribution (OOD) data. They note that methods such as ensemble learning (training multiple smaller networks) can help, they are computationally expensive. 

The authors build on the idea that dropout is essentially equivalent to training an ensemble of subnetworks. Since training a deep network from scratch with high dropout is infeasible, they attempt to fine-tune a large model for a simpler task with very high (~90%) dropout. They show empirically that this yields better OOD results on domain adaptation datasets. They claim that a high dropout rate forces the model to learn a more redundant and robust combination of these existing features, making it less sensitive to minor shifts in data distribution.
## From OpenReview:
>While the observation in this paper is simple, interesting, and potentially of broad interest to the community, the paper falls short in both practicality and theoretical insights.
> - Practicality: multiple reviewers raised the concern that the experiments are restricted to image classification, leaving open questions about the method’s applicability to other tasks (e.g., segmentation, NLP). The authors acknowledged this limitation but did not address it experimentally. In addition, multiple reviewers raised concerns about the method's drop in IID performance, which may limit its practicality in scenarios requiring both IID and OOD generalization.
> - The paper lacks a rigorous theoretical explanation of the observed phenomenon. For example, the authors resort to the notion of "richer representations" as an explanation but this does not have a quantitative definition.

"Empirically, ensembles tend to yield better results when there is a significant diversity among the models." ([Wikipedia](https://en.wikipedia.org/wiki/Ensemble_learning)) It would seem to me that fine-tuning a pre-trained model with high dropout is insufficient to generate the "significant diversity" necessary to benefit from an ensemble learning approach. 

References: [Fine-Tuning with Very Large Dropout](https://arxiv.org/pdf/2403.00946v1)