---
title: Minkowski Engine
draft: true
tags:
---
Resources:
[Minkowski Engine Documentation](https://nvidia.github.io/MinkowskiEngine/)
[4D Spatio-Temporal ConvNets: Minkowski Convolutional Neural Networks](https://arxiv.org/pdf/1904.08755)

Gemini Summaries + my edits
## Introduction
Minkowski Engine is an open-source library that provides tools to build sparse high-dimensional CNNs. It is well integrated with Nvidia GPUs, highly optimized, and wrapped by PyTorch.
## Sparse Tensors
A sparse tensor is a data structure designed to efficiently represent high-dimensional data (like 3D scans) where most of the space is empty.

Instead of using a dense grid (like a multi-dimensional array) that stores a value for every single point, a sparse tensor only stores the non-empty points. It does this using two main components:

1. **Coordinates (C):** A list of the coordinates for every non-empty data point. For 3D data, this would be a list of `(x, y, z)` locations. (in a regular dense tensor this coordinate data is implicitly stored in the location of each data point in the tensor)
2. **Features (F):** A corresponding list of the actual data values (or feature vectors) at each of those coordinates. This could be color, intensity, or other sensor measurements.

==Essentially, the **`C`** matrix tells you **where** the data is, and the **`F`** matrix tells you **what** the data is.== (It's worth noting that the convolution operations will use a hash map to quickly look up whether certain coordinate points are in **`C`**)
## Generalized Sparse Convolutions
A generalized sparse convolution is a mathematical operation, similar to a standard convolution in an image network, but adapted to work directly on sparse tensors.

A standard convolution slides a kernel (e.g., a 3x3 square) over every pixel of a dense grid. A sparse convolution is more selective:

1. **Defined Output Locations:** ==It only calculates output values for a predefined set of coordinates (`C^out`).== A special case mentioned in the paper is when the output coordinates are the same as the input coordinates, which preserves the data's sparsity.
2. **Targeted Computation:** For each output location, it gathers only the _existing_ input features from its neighborhood. It doesn't waste time looking for neighbors in empty space.
3. **Arbitrary Kernel Shapes:** Unlike standard convolutions that use a solid hypercube (square, cube, etc.), this generalized version allows for any kernel shape, such as a cross-shape. This is used to create more efficient and effective high-dimensional networks.
## Technical Details
Resources: 
[Documentation for Training Pipeline](https://nvidia.github.io/MinkowskiEngine/demo/training.html)
[4D Spatio-Temporal ConvNets: Minkowski Convolutional Neural Networks](https://arxiv.org/pdf/1904.08755)
#### Quantization ('Sparse Tensorification')
Quantization is the process of converting high resolution, real-world data points (often represented as high-precision floating-point numbers) into a discrete grid of voxels. Its main purpose is to generate a **sparse tensor** from the raw input data. We can control the computational cost by adjusting the quantization step size at the cost of resolution. The quantization process involves identifying which voxels in the grid are occupied and what features and labels are associated with them.
![[Screenshot 2025-07-01 at 10.21.12 AM.png]]
**Algorithm 1** in the paper outlines the process for a GPU, which can be broken down into a few key steps:

1. **Voxelization**: The first step, $C_{p}^{\prime}\leftarrow floor(C_{p}/v_{l})$, takes the raw input coordinates ($C_p$) and divides them by a quantization step size ($v_l$), then rounds the result down to the nearest integer. ==This effectively groups a small region of continuous space into a single discrete voxel.== The larger the $v_l$, the larger the voxels and the more coarse the representation.
2. **Hashing**: Each of these new discrete voxel coordinates ($C_p$) is then converted into a single unique number, or a **hash key**, using a hash function. This is a very efficient way to identify and look up voxels. 
3. (another important step is to deal with hash collisions which is what SortByKey, UniqueByKey and ReduceByKey are doing, but this isn't important for understanding the big picture)
4. **Final Output**: The process returns the final unique voxel coordinates, the features associated with those coordinates (often by taking the features of the first point that fell into that voxel), and the clean set of labels. This forms the sparse tensor that is fed into the convolutional network.
#### Generalized Convolutions
###### 1. Create Output Coordinates ($C^{out}$) given the input coordinates ($C^{in}$)
The first step is to determine the exact locations where the convolution will produce an output.
- **For a standard convolution (stride = 1):** The process is simple. The output coordinates are the same as the input coordinates (`C^out = C^in`). The convolution will be calculated at every existing point, preserving the sparsity pattern. This is what the paper calls a **"sparse submanifold convolution."**
- **For a strided convolution (stride > 1):** The goal is to create a new, coarser set of coordinates. The algorithm (described in the supplementary material) essentially performs a quantization step. For each input coordinate, it divides by the stride and rounds down, effectively "snapping" it to a coarser grid. It then collects all these new, unique coordinates to form the output coordinate set `C^out`.
###### 2. Create Kernel Map (`M`)
This is the most critical step that makes sparse convolution possible. Since the input and output coordinates are just scattered lists of points, the system can't assume a regular grid. It must pre-compute a **"kernel map"** that explicitly links which inputs affect which outputs. The algorithm:

1. Iterate through every defined **output coordinate `u`** from `C^out`.
2. For each `u`, it considers its neighborhood as defined by the kernel's shape (e.g., for a 3x3x3 kernel, it checks the 27 relative positions around `u`).
3. For each potential neighbor location, it performs a fast lookup (probably using a hash map) to check if a point actually **exists** at that coordinate in the input list `C^in`. 
4. If a neighbor is found, it records a link: "The input point at **index `j`** in the input list influences the output point at **index `k`** in the output list."

The final map `M` is a highly efficient lookup table. It doesn't store coordinates, but rather the _indices_ of the feature vectors in the input and output matrices. (this is a little unintuitive but ultimately very efficient)
###### 3. Compute Convolution
With the kernel map `M` ready, the actual convolution (**Algorithm 2**) becomes a direct and efficient computation, with no searching involved.

![[Screenshot 2025-07-01 at 10.27.55 AM.png]]

1. An output feature matrix `F^o` is created and filled with zeros.
2. The algorithm iterates through the pre-computed **kernel map `M`**.
3. For each entry in the map, it performs a three-part operation:
    - **Gather:** It uses the _input indices_ from the map to instantly grab the correct feature vectors from the input `F^in`.
    - **Multiply:** It multiplies these gathered features by the corresponding kernel weights `W`.
    - **Scatter-Add:** It uses the _output indices_ from the map to add these results to the correct locations in the output feature matrix `F^o`.

This process repeats for all entries in the map. By the end, `F^o` contains the final convolved features, having only performed calculations on the non-empty parts of the data.
## TorchSparse++
Resources: 
[Official Documentation](https://torchsparse-docs.github.io/)
[TorchSparse: Efficient Point Cloud Inference Engine](https://arxiv.org/pdf/2204.10319)

A newer, faster alternative to Minkowski Engine that I unfortunately discovered after writing all this stuff is TorchSparse++. It operates very similarly to Minkowski Engine. The pipeline still consists of quantization and generalized sparse convolutions. TorchSparse++ is also open source, highly optimized, and well integrated with PyTorch.