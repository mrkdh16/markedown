---
title: Linear Regression and Kernel Methods
draft: true
tags:
  - math
  - computer-science
---
## (Generalized) Linear Regression
Suppose we are given $m$ data points of the form $(x,y)$ with inputs $x \in \mathbb{R}^n$ and outputs (values) $y \in \mathbb{R}^p$ ($p=1$ can be true for the simplest case). We want to find a weight matrix (vector if $p=1$) $W_{n \times p}$ and bias $b \in \mathbb{R}^p$ such that for all $y$, $y \approx W^{\intercal}x + b$. Here, the level of accuracy of the approximation is quantified by a loss function $\mathcal{L}(w,b) = \sum^m_{i=1} ||y-(W^\intercal x+b)||^2_2$. We frame the problem in terms of optimizing this loss function. 

Note that we can get rid of the summation in the loss function by representing everything in terms of matrices. Suppose 
$$
Y_{m\times p} = \begin{bmatrix} — & y_1^\intercal & — \\ — & y_2^\intercal & — \\ & \vdots & \\ — & y_m^\intercal & — \end{bmatrix},
\quad \tilde{X}_{m \times (n+1)} = \begin{bmatrix} 1 & — & x_1^\intercal & — \\ 1 & — & x_2^\intercal & — \\ \vdots & & \vdots & \\ 1 & — & x_m^\intercal & — \end{bmatrix},
\quad \tilde{W}_{(n+1) \times p} = \begin{bmatrix} b^\intercal \\ W \end{bmatrix}.
$$
Then, $\mathcal{L}(W) = \frac{1}{n}||Y-\tilde X \tilde W||^2_F = \frac{1}{n}\sum^m_{i=1} ||y-(W^\intercal x+b)||^2_2$ where $|| \cdot ||_F$ is the Frobenius norm for matrices. Observe that the bias term was "absorbed" into the weight matrix here. This is why both the input and weight matrices have been augmented. Representing the summation in terms of matrix operations allows us to take advantage of the powerful hardware (GPUs) that is already optimized for such matrix operations.

Also note that we have generalized beyond the traditional notion of finding the "best-fit line" with linear regression. By allowing the input $x$ to be multidimensional, we moved from the best-fit line to the best-fit hyperplane. And by allowing the output $y$ to be multidimensional as well, we pretty much destroyed whatever geometric intuition we had. However, the fact remains that the model is linear in the parameters and that we are finding the best-fit affine transformation for the given data.
#### The Optimization Problem
The optimization problem we want to solve is the following:
$$
\text{argmin}_{\tilde{W}} ||Y-\tilde X \tilde W||^2_F.
$$
To minimize the loss with respect to the weights, it's natural to utilize the gradient of the loss with respect to the weights--colloquially, the direction of steepest ascent in the function landscape. Recall our loss function: $\mathcal{L}(W) = \frac{1}{n}||Y-\tilde X \tilde W||^2_F$. The squared Frobenius norm can be expressed using the trace of the matrix product: 
$$
\mathcal{L}(\tilde{W}) = \text{Tr}((Y-\tilde{X}\tilde{W})^{\intercal}(Y-\tilde{X}\tilde{W})).
$$
With some fancy matrix algebra and leveraging some nice properties of the trace, we can find the gradient of the loss with respect to the augmented weight matrix:
$$
\nabla_{\tilde{W}}\mathcal{L}(\tilde{W}) = 2\tilde{X}^{\intercal}(\tilde{X}\tilde{W}-Y).
$$
The gradient of the loss function for linear regression turns out to be so nice that we can even compute the analytical solution for our optimization problem: 
$$
2\tilde{X}^{\intercal}(\tilde{X}\tilde{W}-Y) = 0 \implies \tilde{W}=\left( \tilde{X}^{\intercal}X \right)^{-1}\tilde{X}Y.
$$
However, computing inverse matrices turns out to be quite expensive, so we opt for the next best option: Gradient Descent. Essentially, we randomly initialize $\tilde{W}$ and iteratively apply the following update:
$$
\tilde{W}_{t+1}=\tilde{W}_{t} - \eta \nabla_{\tilde{W}}\mathcal{L}(\tilde{W}_{t})
$$
where $\eta$ is some small positive number called the learning rate. Because the loss function is convex, gradient descent is actually guaranteed to find the optimal solution in finite time.
#### Occam's Razor
With linear regression, we forcefully integrate an Occam's Razor into the model by heavily restricting the range of possible data it could fit to. We do this by having a small number of parameters, only a few for every input feature (dimension of the output multiplied by the dimension of the inputs plus one). 

- iterative algorithm w/ gradient descent / analytic solution using matrix algebra
	- gradient descent is much more computationally feasible
	- for convex loss functions, guaranteed to find optimal solution
- linear regression 
	- essentially restricts the types of functions the model can fit to (linear ones)
		- 2 problems: underlying function may not be linear, increasing flexibility of class of functions representable risks overfitting
	- kernel regression (linear regression in infinite-dimensional space) instead implicitly assigns probabilities to every possible function but has a bias for simple/nice/generalizable functions (likelier to actually represent the underlying function)
## Feature Maps and Kernel Methods
