---
title: 3D CNNs
draft: true
tags:
---
## CNN Basics
Resources: [CNN Textbook Chapter](https://cs231n.github.io/convolutional-networks/) + [ResNet Paper](https://arxiv.org/abs/1512.03385)

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
---
## 3D CNNs
Resources: 
[Sparse 3D convolutional neural networks](https://arxiv.org/pdf/1505.02890), [meta implementation](https://github.com/facebookresearch/SparseConvNet?tab=readme-ov-file), [nvidia implementation](https://github.com/NVIDIA/MinkowskiEngine?tab=readme-ov-file)
[V-Net: Fully Convolutional Neural Networks for Volumetric Medical Image Segmentation](https://arxiv.org/abs/1606.04797)
[Learning Spatio-Temporal Features with 3D Residual Networks for Action Recognition](https://arxiv.org/abs/1708.07632)

I'm not sure how important the z-stack information will be for our data. Depending on how much information is gained by analyzing the z-stack information, our implementation should exploit the z-stack in different ways. If there isn't much information to be gained by considering the z-stack context, it may be beneficial to optimize for inference time and utilize a simpler 2D CNN + RNN architecture. However, if there is a lot of information to be gained, a 3D CNN approach seems reasonable. 

Because of the implementation complexity of sparse CNN architectures, we should try implementing a dense resnet-like architecture first.

Gemini Summary + my edits:
### The Core Problem: The Curse of Dimensionality in 3D CNNs
The central issue we discussed is that moving from 2D to 3D convolutions causes an ==exponential increase in computational cost and memory usage==. A standard 3D CNN is inherently "dense," meaning it performs calculations on every single voxel, which is incredibly inefficient if the data is sparse or can be compressed.
- ==I'm not sure how our data is going to look, but I imagine it will be fairly sparse. I believe our models will greatly benefit from clever techniques that exploit this sparsity.==

Different architectures have been developed to tackle this problem in unique ways.
### 1. Sparse 3D CNNs
- **How it Handles Dimensionality:** This approach directly attacks the problem of wasted computation. Instead of operating on a dense grid, it only performs convolutions on "active" (non-zero) voxels and their immediate neighbors. It intelligently skips the empty space.
	- "*Sparsity decreases with each convolution and pooling operation. However, a CNN spends most of its time processing the lower layers, so sparsity can still be useful*"
- **Pros:**
    - **Highly Efficient:** For data that is naturally sparse (e.g., LiDAR point clouds, 3D model surfaces), this method offers massive savings in computation and memory.
    - **Maintains Precision:** It doesn't need to downsample the data to be efficient, thus preserving high-resolution spatial details.
- **Cons:**
    - ==**Data Dependent==:** Its benefits diminish significantly on dense data (like a photograph where every pixel has a value).
    - **Implementation Complexity:** Requires more complex data structures (like hash tables to store active sites) than standard dense convolutions.
    - ==important!: if a matrix is only slightly sparse (e.g., 10% non-zero), the overhead of the special sparse data structure can be slower than a highly optimized dense multiplication on a GPU==
### 2. V-Net (U-Net Family)
==This may be overkill for our purposes as it was intended for dense medical scans.==
- **How it Handles Dimensionality:** V-Net uses an encoder-decoder (or compression-expansion) structure. The key technique is **systematic downsampling** in the compression path. As seen in the paper, it uses strided convolutions (e.g., a 2×2×2 kernel with a stride of 2) to halve the feature map dimensions at each stage, making computations in deeper layers much more manageable.
- **Pros:**
    - **Efficient for Dense Data:** Effectively reduces computational load even on dense volumes like medical scans.
    - **Global Context:** The downsampling allows deeper layers to have a large receptive field, enabling them to learn global features.
    - **Detail Preservation:** Skip connections from the compression path to the expansion path help recover fine-grained details for the final segmentation.
- **Cons:**
    - **Loss of Information:** The aggressive downsampling can lead to a loss of spatial information, which the skip connections work to mitigate.
### 3. 3D ResNet (and Standard Dense CNNs)
- **How it Handles Dimensionality:** Standard architectures like ResNet don't use a fundamentally different computational model like sparse CNNs. Instead, they **manage** the high cost through clever architectural choices and rely on hardware acceleration.
    - ==**Residual Connections==:** The core innovation of ResNet is not about dimensionality reduction, but about enabling the training of much deeper networks without performance degradation.
    - **Bottleneck Blocks:** A key efficiency technique used within ResNet, where a 1x1x1 convolution first reduces the number of channels ("depth" of the volume), then an expensive 3x3x3 convolution is applied, followed by another 1x1x1 convolution to restore the channel count. This is far cheaper than a single large convolution.
    - **Downsampling:** Like V-Net, it uses strided convolutions or pooling layers to reduce dimensions as data flows through the network.
- **Pros:**
    - ==**Hardware Optimization==:** Its dense operations are perfectly suited for the massively parallel architecture of GPUs, making them extremely fast with libraries like cuDNN.
    - **Proven Power:** Deep residual networks are extremely powerful and have achieved state-of-the-art results on many benchmarks.
- **Cons:**
    - **Computationally Heavy:** Can be very slow and memory-hungry without careful design (like bottlenecks).
    - **Inefficient on Sparse Data:** Suffers from the same "wasted computation" problem as any dense CNN when applied to sparse inputs.
### Summary Table

| Architecture      | Primary Method for Handling Dimensionality                                       | Pros                                                                                     | Cons                                                               |
| ----------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Sparse 3D CNN** | Computes only on non-zero voxels and their neighbors.                            | Highly efficient on sparse data; preserves detail.                                       | Less efficient on dense data; more complex implementation.         |
| **V-Net**         | Systematic downsampling via strided convolutions in a compression path.          | Efficient on dense data; captures global context; recovers detail with skip connections. | Downsampling can cause information loss.                           |
| **3D ResNet**     | Manages cost with efficient blocks (bottlenecks) and relies on GPU acceleration. | Extremely fast on GPUs; allows for very deep, powerful models.                           | Inefficient on sparse data; can be computationally very expensive. |

---
## CNN Transformer Hybrid Model 
Resources: [MedNeXt: Transformer-driven Scaling of ConvNets for Medical Image Segmentation](https://arxiv.org/abs/2303.09975)
This could be overkill for our application. Transformer hybrid models such as MedNeXt were developed for complex 3D imagery such as those obtained from medical scans. We should try 3D CNNs first and see how much room there is for improvement.