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
Then, $\mathcal{L}(W) = \frac{1}{n}||Y-\tilde X \tilde W||^2_F = \frac{1}{n}\sum^m_{i=1} ||y-(W^\intercal x+b)||^2_2$ where $|| \cdot ||_F$ is the Frobenius norm for matrices. Observe that the bias term was "absorbed" into the weight matrix here. This is why both the input and weight matrices have been augmented. Representing the summation in terms of matrix operations allows us to take advantage of the powerful hardware that is already optimized for such matrix operations.

Also note that we have generalized beyond the traditional notion of finding the "best-fit line" with linear regression. By allowing the input $x$ to be multidimensional, we moved from the best-fit line to the best-fit hyperplane. And by allowing the output $y$ to be multidimensional as well, we pretty much destroyed whatever geometric intuition we had. However, the fact remains that the model is linear in the parameters and that we are finding the best-fit affine transformation for the given data.

The actual optimization is usually done using an algorithm called gradient descent. The idea is to initialize the weights $\tilde W$ randomly and then iteratively take small "steps" in the direction that most rapidly decreases the loss. This direction is precisely the negative of the gradient (direction of steepest descent) of the loss function with respect to the weights, −∇W~​L(W~).

Let's compute this gradient. Recall our loss function:

L(W~)=∥Y−X~W~∥F2​

The squared Frobenius norm can be expressed using the trace of the matrix product:

L(W~)=tr((Y−X~W~)⊺(Y−X~W~))

Expanding this gives:

L(W~)=tr(Y⊺Y−Y⊺X~W~−W~⊺X~⊺Y+W~⊺X~⊺X~W~)

Using the linearity and cyclic properties of the trace, we can differentiate with respect to W~ to find the gradient:

∇W~​L(W~)=∂W~∂L​=2X~⊺(X~W~−Y)

With the gradient in hand, the update rule for gradient descent at each step t is:

W~t+1​=W~t​−η∇W~​L(W~t​)

Here, η is a small positive number called the **learning rate**, which controls the size of each step. By repeatedly applying this update, the weights W~ will converge to a value that minimizes the loss function.

- iterative algorithm w/ gradient descent / analytic solution using matrix algebra
	- gradient descent is much more computationally feasible
	- for convex loss functions, guaranteed to find optimal solution
- linear regression 
	- essentially restricts the types of functions the model can fit to (linear ones)
		- 2 problems: underlying function may not be linear, increasing flexibility of class of functions representable risks overfitting
	- kernel regression (linear regression in infinite-dimensional space) instead implicitly assigns probabilities to every possible function but has a bias for simple/nice/generalizable functions (likelier to actually represent the underlying function)
## Feature Maps and Kernel Methods
