---
title: Occam's Razor as a bridge from Linear to Kernel Regression
draft: false
tags:
  - math
  - computer-science
  - machine-learning
  - statistics
---
## Linear Regression
Suppose we are given $m$ data points of the form $(x,y)$ with inputs $x \in \mathbb{R}^n$ and outputs (values) $y \in \mathbb{R}^p$ ($p=1$ can be true for the simplest case). We want to find a weight matrix (vector if $p=1$) $W \in \mathbb{R}_{n\times p}$ and bias $b \in \mathbb{R}^p$ such that for all $y$, $y \approx W^{\intercal}x + b$. Here, the level of accuracy of the approximation is quantified by a loss function $\mathcal{L}(w,b) = \sum^m_{i=1} ||y-(W^\intercal x+b)||^2_2$. We frame the problem in terms of optimizing this loss function. Intuitively, the loss can only be small if it is actually the case that there exists some $W \in \mathbb{R}_{n\times p}$ and $b \in \mathbb{R}^p$ such that for all $y$, $y \approx W^{\intercal}x + b$, i.e. by using a linear model, we are assuming there exists an affine transformation from the inputs to the outputs.

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
#### Advantages & limitations
With linear regression, we forcefully integrate an [[Competing views on Occam's Razor|Occam's Razor]] into the model by heavily restricting the range of possible data it could fit to. We do this by assuming the data is linearly generated, i.e. the relationship between the inputs $x$ and the outputs $y$ is linear (technically affine). We enforce simplicity by having a small, predetermined number of parameters ($p\times(n+1)$ parameters to be exact) regardless of what the data looks like. This type of aggressive Occam's Razor certainly has some advantages: it's [[Self-Explaining Neural Networks|interpretable]], computationally efficient and less prone to overfitting. However, clearly, the vast majority of data that we want to model is not going to be linear. So, we need something more expressive. How might we build on and potentially improve the ideas behind linear regression?
## Feature Maps and Kernel Methods
Kernel methods are a type of non-parametric model, meaning they have an infinite number of parameters. They are great examples of models that have reasonable inductive biases completely unrelated to the number of parameters. 