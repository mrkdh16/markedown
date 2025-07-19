---
title: Deep Learning
draft: false
tags:
  - computer-science
  - machine-learning
---
>Deep-learning methods are representation-learning methods with multiple levels of representation, obtained by composing simple but non-linear modules that each transform the representation at one level (starting with the raw input) into a representation at a higher, slightly more abstract level. With the composition of enough such transformations, very complex functions can be learned. For classification tasks, higher layers of representation amplify aspects of the input that are important for discrimination and suppress irrelevant variations.

>In practice, poor local minima are rarely a problem with large networks. Regardless of the initial conditions, the system nearly always reaches solutions of very similar quality. Recent theoretical and empirical results strongly suggest that local minima are not a serious issue in general. Instead, the landscape is packed with a combinatorially large number of saddle points where the gradient is zero, and the surface curves up in most dimensions and curves down in the remainder. The analysis seems to show that saddle points with only a few downward curving directions are present in very large numbers, but almost all of them have very similar values of the objective function. Hence, it does not much matter which of these saddle points the algorithm gets stuck at.

It's worth noting that this article was written ten years ago. We have more empirical evidence for the fact that "local minima are not a serious issue." Bigger and bigger models have been developed with ungodly amounts of parameters and their performance has scaled incredibly well. However, we still lack a mathematical framework for understanding why overparameterized deep networks are able to generalize so well without overfitting to their training data.

References: [LeCun, Y., Bengio, Y. & Hinton, G. Deep learning. _Nature_ **521**, 436–444 (2015)](https://www.nature.com/articles/nature14539#citeas)