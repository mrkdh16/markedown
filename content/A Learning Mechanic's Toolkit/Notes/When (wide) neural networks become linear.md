---
title: When (wide) neural networks become linear
draft: false
tags:
  - computer-science
  - learning-mechanics
  - linear-algebra
  - machine-learning
  - math
  - physics
---
Lee et al. (2019) [Wide Neural Networks of Any Depth Evolve as Linear Models Under Gradient Descent](https://arxiv.org/pdf/1902.06720)
#### definitions
- The training dataset is defined as $\mathcal{D} \subseteq \mathbb{R}^{n_0} \times \mathbb{R}^k$. The collection of all inputs is denoted as $\mathcal{X}$ and the labels as $\mathcal{Y}$.
- The vector $\theta$ represents the collection of all trainable network parameters (weights and biases) concatenated together. The parameters at a specific training time $t$ are $\theta_t$, and the initial parameters are $\theta_0$.
- The output (logits) of the neural network for an input $x$ at time $t$ is denoted as $f_t(x) \in \mathbb{R}^k$.
- The empirical Neural Tangent Kernel at time $t$ is an evolving matrix defined as $\hat{\Theta}_t(\mathcal{X}, \mathcal{X}) = \nabla_\theta f_t(\mathcal{X}) \nabla_\theta f_t(\mathcal{X})^T$.
#### setup
- The model is a feed-forward neural network with hidden layers of width $n$. The weights are drawn from a standard normal distribution and scaled using the "NTK parameterization" (e.g., scaled by a factor of $\frac{1}{\sqrt{n}}$).
- The network is optimized using Mean Squared Error (MSE) loss, defined as $\mathcal{L} = \frac{1}{2} ||f_t(\mathcal{X}) - \mathcal{Y}||_2^2$.
Under continuous-time gradient descent (gradient flow) with a learning rate $\eta$, the parameters evolve according to 

$$
\frac{d\theta}{dt} = -\eta \nabla_\theta \mathcal{L} \space \text{(parameter space dynamics)}.
$$

By applying the chain rule, the evolution of the network's predictions can be perfectly described using the tangent kernel: 

$$
\frac{df_t(\mathcal{X})}{dt} = -\eta \hat{\Theta}_t(\mathcal{X}, \mathcal{X}) \nabla_{f_t(\mathcal{X})} \mathcal{L} \space \text{(function space dynamics)}.
$$

We can define a simplified, linearized version of the network using a first-order Taylor expansion around its initial parameters: 

$$
f_t^{lin}(x) = f_0(x) + \nabla_\theta f_0(x)|_{\theta=\theta_0} (\theta_t - \theta_0)
$$

Because $\nabla_\theta f_0(x)$ is constant, this linearized model's dynamics rely on a fixed NTK $\hat{\Theta}_0$.
#### Thm. 2.1 (informal)
For a network with identically sized hidden layers of width $n$, trained with gradient descent at a learning rate $\eta < \eta_{critical}$ (where $\eta_{critical}$ depends on $\Theta$'s, the analytic NTK, eigenvalues; $\eta_{critical} = \frac{2}{\lambda_{\min}(\Theta)+\lambda_{\max}(\Theta)}$; stronger than the condition for [[Maximal stable learning rate derivation|max stable learning rate for linear models]]), the network's behavior converges to that of its linearized model as $n \rightarrow \infty$.

Specifically, with probability arbitrarily close to 1 over the random initialization, the maximum difference between the real network's output and the linearized network's output over all time $t \ge 0$ is bounded:

$$
\sup_{t \ge 0} ||f_t(x) - f_t^{lin}(x)||_2 = \mathcal{O}\left(\frac{1}{\sqrt{n}}\right).
$$

Similarly, the change in the weights $\frac{||\theta_t - \theta_0||_2}{\sqrt{n}}$ and the shift in the empirical kernel $||\hat{\Theta}_t - \hat{\Theta}_0||_F$ are also bounded by $\mathcal{O}(\frac{1}{\sqrt{n}})$.
#### intuition.
As the network width $n$ becomes massive, we enter the "lazy regime," where the updates to individual weights during training become vanishingly small. Intuitively, if there are millions, or even billions of parameters, one individual weight does not have to change much for the output of the network to change significantly. Even though a single weight barely moves, the microscopic individual updates collectively combine (or "conspire") to produce a significant, finite change in the network's final output.

The strategy for the proof of theorem 2.1 is as follows: First, we need to show that the empirical NTK stays approximately constant ($\hat{\Theta}_t \approx \hat{\Theta}_0$). Because the individual weights need only travel a tiny distance ($\mathcal{O}(\frac{1}{\sqrt{ n }})$) from initialization in order to reach optima, the gradient of the output with respect to the weights barely changes. This guarantees that the empirical tangent kernel stays effectively constant throughout the entire training process.

The next and final step is to show that $\hat{\Theta}_t \approx \hat{\Theta}_0 \implies f_{t} \approx f^{\text{lin}}_{t}$. Recall that

$$
\dot{f_{t}} = -\eta \hat{\Theta}_{t} \nabla \mathcal{L}, \space \dot{f^{\text{lin}}_{t}} = -\eta \hat{\Theta}_{0} \nabla \mathcal{L}
$$

The actual network's training trajectory can be viewed as the linearized network's trajectory plus some fluctuation caused by the slight shifting of the NTK $||\hat{\Theta}_t - \hat{\Theta}_0||_F$. By applying (the integral form of) Grönwall's Inequality, we can strictly bound this compounding error integral to mathematically prove that the models stay aligned.

*disclaimer: this note was mostly transcribed by Gemini*
![[Easy NTK 2.pdf]]