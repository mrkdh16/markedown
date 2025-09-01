---
title: Kernel Methods
draft: true
tags:
  - math
  - computer-science
---
## Linear Regression
Linear regression attempts to fit a line to the given data. Suppose we are given $m$ data points of the form $(x,y)$ with inputs $x \in \mathbb{R}^n$ and outputs (values) $y \in \mathbb{R}^p$. We want to find a weight matrix $W_{n \times p}$ and bias $b \in \mathbb{R}^p$ such that for all $y$, $y \approx W^{\intercal}x + b$. Here, the level of accuracy of the approximation is quantified by a loss function $\mathcal{L}(w,b) = \sum^m_{i=0} ||y-(W^\intercal x+b)||^2_2$. We frame the problem in terms of optimizing this loss function.

Note that we can get rid of the summation in the loss function by representing everything in terms of matrices. Suppose 
$$
Y_{m\times p} = \begin{bmatrix} \leftarrow & y_1^\intercal & \rightarrow \\ \leftarrow & y_2^\intercal & \rightarrow \\ & \vdots & \\ \leftarrow & y_m^\intercal & \rightarrow \end{bmatrix},
X_{m \times (n+1)} = \begin{bmatrix} 1 &\leftarrow & x_1^\intercal & \rightarrow \\ 1& \leftarrow & x_2^\intercal & \rightarrow \\ & \vdots & \\ 1&\leftarrow & x_m^\intercal & \rightarrow \end{bmatrix},
W_{(n+1) \times p} = \begin{bmatrix} b^\intercal \\ W\end{bmatrix}.
$$
Then, $\mathcal{L}(W) = ||Y-XW||^2_F = \sum^m_{i=0} ||y-(W^\intercal x+b)||^2_2$ where $|| \cdot ||_F$ is the Frobenius norm. Observe that the bias term was "absorbed" into the weight matrix here.  

The optimization is usually done using an algorithm called 
## Feature Maps and Kernel Methods
