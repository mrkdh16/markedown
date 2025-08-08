---
title: Shallower, more transparent ProtoPNet
draft: false
tags:
  - computer-science
  - machine-learning
  - paper
---
>To classify an input image, the model finds the Euclidean distance between each latent patch of the input image and the learned prototypes of images from different classes. The maximum of the inverted distances between a prototype and the patches of the input image is called the similarity score of the prototype. Note that the smaller the distance, the larger the reciprocal, and there will be only one similarity score for each prototype. Then the vector of similarity scores is multiplied with the weight matrix associated with the dense layer _f_ to obtain logitis, which are normalized using Softmax to determine the class of the input image.

>Other ProtoPNet models compare a prototype with a _latent_ patch of _x_ instead of a patch of _x_, where a latent patch is a part of the output of a baseline of the other ProtoPNet models. Therefore, Shallow-ProtoPNet does not lose any information between _x_ and _p_ due to the convolutional layers or pooling layers of any baseline.
### Optimization Problem:
![[Screenshot 2025-08-05 at 10.11.00 AM.png]]
![[Screenshot 2025-08-05 at 10.11.17 AM.png]]
### Architecture
![[Screenshot 2025-08-05 at 10.10.24 AM.png]]

References: 
- [The shallowest transparent and interpretable deep neural network for image recognition](https://www.nature.com/articles/s41598-025-92945-2)
- [[This looks like That|ProtoPNet]]