---
title: Maximal learning rate derivation
draft: false
tags:
  - computer-science
  - linear-algebra
  - machine-learning
  - math
  - learning-mechanics
---
#### simple setup
Consider a simple quadratic loss function for a model parameterized by $\theta$, where $H$ is a symmetric positive semi-definite matrix (e.g., the Hessian):

$$
L(\theta) = \frac{1}{2} \theta^T H \theta
$$

Expanding this into summation notation:

$$
L(\theta) = \frac{1}{2} \theta^T \begin{bmatrix} \sum_i h_{1i} \theta_i \\ \vdots \end{bmatrix} = \frac{1}{2} \sum_j \sum_i h_{ji} \theta_i \theta_j
$$
#### the gradient
Taking the partial derivative with respect to $\theta_k$ using the Kronecker delta $\delta$ (and using the product rule):
$$
\begin{align*}
\frac{\partial L}{\partial \theta_k} &= \frac{1}{2} \sum_j \sum_i (h_{ji} \delta_{ik} \theta_j + h_{ji} \theta_i \delta_{jk})\\
&= \frac{1}{2} \left( \sum_j h_{jk} \theta_j + \sum_i h_{ki} \theta_i \right)
\end{align*}
$$
Because $H$ is symmetric ($H = H^T$), $h_{jk} = h_{kj}$, we can simplify the expression to:

$$
\frac{\partial L}{\partial \theta_k} = \sum_i h_{ki} \theta_i = (H\theta)_k
$$

Thus, the full gradient vector is:

$$
\nabla_{\theta}L = H\theta
$$
Taking the gradient of this expression, we can see that $\nabla^2_{\theta}L$, or the Hessian of $L$, is equal to $H$. 
#### maximal lr under GD
Applying the standard gradient descent update rule with learning rate $\eta$:
$$
\theta \to \theta - \eta H \theta
$$
Since $H$ is symmetric, we can decompose $H$ using its eigendecomposition $H = U \Sigma U^T$, where $U$ contains orthogonal eigenvectors and $\Sigma$ is a diagonal matrix of eigenvalues $\sigma_i$. Substituting this into the update:
$$
\theta \to (I - \eta U \Sigma U^T) \theta
$$
Since $UU^T = I$, we can rewrite the identity matrix:
$$
\theta \to (UU^T - \eta U \Sigma U^T) \theta
$$
Extracting the $U$ and $U^T$ terms,
$$
\theta \to U(I - \eta \Sigma)U^T \theta
$$
The matrices $U$ and $U^T$ are isometries (orthogonal matrices), meaning they only rotate the space and do not change the norm of $\theta$. Therefore, the change in the norm of $\theta$ during the update depends entirely on the diagonal matrix $(I - \eta \Sigma)$.

For the model to converge, the scaling factor applied to each eigen-direction must not expand the magnitude of the vector. Thus, for every eigenvalue $\sigma_i$:
$$
|1 - \eta \sigma_i| \le 1
$$
Solving this inequality for $\eta$:
$$
-1 \le 1 - \eta \sigma_i \le 1
\implies 0 \le \eta \le \frac{2}{\sigma_i}
$$
To ensure stability across all dimensions, the learning rate $\eta$ is bounded by the steepest direction (the largest eigenvalue, $\sigma_{max}$). The maximal stable learning rate is:
$$
\eta_{max} = \frac{2}{\sigma_{max}}
$$
The maximal eigenvalue of $H$, which is the Hessian of the loss, is equivalent to the sharpness of the loss. So, the punchline here is that the maximal stable learning rate is inversely proportional to the sharpness of the loss. This punchline holds as long as the Hessian of the loss is constant. However, clearly, for complex nonlinear models, this will not be the case. For neural networks, the ["Edge of Stability" (EoS)](https://arxiv.org/pdf/2103.00065) phenomena in deep learning suggests that during training, the sharpness of the loss hovers just around the value $\frac{2}{\eta_{\text{max}}}$, the largest it can get without causing instability in training. This can be thought of as a kind of self-correcting, self-regulating behavior in neural nets.

*disclaimer: this note was mostly transcribed by Gemini*
![[Maximal LR.png]]