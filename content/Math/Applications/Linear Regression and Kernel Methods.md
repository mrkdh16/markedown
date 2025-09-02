---
title: Linear Regression and Kernel Methods
draft: true
tags:
  - math
  - computer-science
---
## Linear Regression
Suppose we are given $m$ data points of the form $(x,y)$ with inputs $x \in \mathbb{R}^n$ and outputs (values) $y \in \mathbb{R}^p$ ($p=1$ can be true for the simplest case). We want to find a weight matrix (vector if $p=1$) $W_{n \times p}$ and bias $b \in \mathbb{R}^p$ such that for all $y$, $y \approx W^{\intercal}x + b$. Here, the level of accuracy of the approximation is quantified by a loss function $\mathcal{L}(w,b) = \sum^m_{i=1} ||y-(W^\intercal x+b)||^2_2$. We frame the problem in terms of optimizing this loss function.

Note that we can get rid of the summation in the loss function by representing everything in terms of matrices. Suppose 
$$
Y_{m\times p} = \begin{bmatrix} — & y_1^\intercal & — \\ — & y_2^\intercal & — \\ & \vdots & \\ — & y_m^\intercal & — \end{bmatrix},
\quad \tilde{X}_{m \times (n+1)} = \begin{bmatrix} 1 & — & x_1^\intercal & — \\ 1 & — & x_2^\intercal & — \\ \vdots & & \vdots & \\ 1 & — & x_m^\intercal & — \end{bmatrix},
\quad \tilde{W}_{(n+1) \times p} = \begin{bmatrix} b^\intercal \\ W \end{bmatrix}.
$$
Then, $\mathcal{L}(W) = ||Y-\tilde X \tilde W||^2_F = \sum^m_{i=1} ||y-(W^\intercal x+b)||^2_2$ where $|| \cdot ||_F$ is the Frobenius norm for matrices. Observe that the bias term was "absorbed" into the weight matrix here. This is why both the input and weight matrices have been augmented. Representing the summation in terms of matrix operations allows us to take advantage of the powerful hardware that is already optimized for such matrix operations.

Also note that we have generalized beyond the traditional notion of finding the "best-fit line" with linear regression. By allowing the input $x$ to be multidimensional, we moved from the best-fit line to the best-fit hyperplane. And by allowing the output $y$ to be multidimensional as well, we pretty much destroyed whatever geometric intuition we had. However, the fact remains that the model is linear in the parameters and that we are finding the best-fit affine transformation for the given data.

The actual optimization is usually done using an algorithm called gradient descent. The idea is to take "steps" (change the weight matrix) in the direction that makes the loss smaller. We do this by taking the gradient of the loss function with respect to the weight matrix. 
## Feature Maps and Kernel Methods
