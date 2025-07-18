---
title: CNNs
draft: true
tags:
---
## CNN Basics
Resources: [CNN Textbook Chapter](https://cs231n.github.io/convolutional-networks/)

Gemini Summary + my edits
### Core Architectural Components:
A typical CNN architecture is a sequence of layers. The most common layers are:
- **Convolutional Layer (CONV):** This is the core building block that performs most of the computational work. It uses a set of learnable filters that detect features like edges, corners, and other textures. Key characteristics include:
    - ==**Local Connectivity:** Neurons are connected only to a small local region of the input.==
    - ==**Parameter Sharing:** The same filter (set of weights) is used across different spatial locations in the input, drastically reducing the number of parameters.==
    - These characteristics are what allow CNNs to incorporate inherent ==**spatial inductive bias**==, i.e. the assumption that for image data, pixels closer together are more strongly related than pixels far apart. This inductive bias is what makes CNNs easier to train (small amount of training data, fast training, small number of parameters which requires less compute).
- **Activation Layer (RELU):** This layer applies a non-linear activation function, like max(0,x), element-wise. It doesn't change the size of the volume. (no parameters)
- **Pooling Layer (POOL):** Its purpose is to progressively reduce the spatial size (width and height) of the representation. This helps to decrease the number of parameters and computation in the network, and also control overfitting. The most common type is max pooling. (no parameters)
	- ==More recent trends point to reducing or getting rid pooling layers entirely as they are considered to be unnecessary and inefficient.==
- **Fully-Connected Layer (FC):** This is a standard neural network layer where each neuron is connected to all activations from the previous layer. FC layers are typically found at the end of a CNN to compute the final class scores.
### Common Architecture Pattern:
A frequently used pattern for stacking these layers is:
`INPUT -> [[CONV -> RELU]*N -> POOL?]*M -> [FC -> RELU]*K -> FC`

A key design principle is that stacking multiple `CONV` layers with small filters (e.g., three 3x3 `CONV` layers) is more powerful and has fewer parameters than a single `CONV` layer with a large filter (e.g., one 7x7 `CONV` layer).
### Key Hyperparameters for Layer Sizing:
Properly sizing your layers is crucial. Here are some rules of thumb:
- **Convolutional Layer (CONV):**
    - Use small filters, typically 3x3 or at most 5x5.
    - Use a stride (S) of 1.
    - Use zero-padding (P) to preserve the spatial dimensions of the input. For a filter of size F, setting padding to P=(F−1)/2 maintains the input size. The output width/height can be calculated as W2​=(W1​−F+2P)/S+1.
- **Pooling Layer (POOL):**
    - The most common setup is max pooling with 2x2 filters and a stride of 2. This effectively downsamples the input by a factor of 2 and discards 75% of the activations.