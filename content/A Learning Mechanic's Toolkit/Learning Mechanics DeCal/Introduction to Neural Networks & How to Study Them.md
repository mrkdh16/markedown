---
title: Introduction to Neural Networks & How to Study Them
draft: false
tags:
  - learning-mechanics
  - machine-learning
---
How can we develop a first-principles understanding of Artificial Intelligence (AI)? *What* does AI learn? *How* does AI learn? To begin to answer these big questions, we start with *deep neural networks*.
## The first (giant) step: deep neural networks
At the heart of modern machine learning are *deep neural networks*. Nearly every headline-grabbing AI system of the past decade (AlphaGo, GPT, AlphaFold, Stable Diffusion, etc) is, at its core, a deep neural network trained by gradient descent on a large dataset---or some other similar architecture that heavily relies on deep neural networks. If we want a scientific theory of modern AI, we need a scientific theory of DNNs.

Consider a standard supervised learning task. We are presented with $P$ pairs of data points $\{ \mathbf{x}_{i}, \mathbf{y}_{i}\}_{i=1}^P$, each consisting of a sample vector $\mathbf{x} \in \mathbb{R}^{d_{\text{in}}}$ and a target vector $\mathbf{y} \in \mathbb{R}^{d_{\text{out}}}$. We want to learn a function $\hat{f}$, i.e. a model, such that $\hat{f}(\mathbf{x}_{i}) \approx \mathbf{y}_{i}$ for all $i = 1, \dots, P$. A deep neural network is a particularly powerful model of the form:

$$
\hat{f}(\mathbf{x})=W_{L}(\sigma(W_{L-1}\sigma(\dots \sigma(W_{1}\mathbf{x}))))
$$

where $\sigma$ is a *nonlinearity* such as the ReLU or sigmoid. 

<center>
<img src="Screenshot 2026-04-15 at 8.11.24 PM.png" width="600">
</center>

Training consists of minimizing a *loss function*, eg. mean squared error (MSE):

$$
\mathcal{L}_{\text{MSE}}(\mathbf{\theta}) = \sum^P_{i=1}||\mathbf{y}_{i}-\hat{f}(\mathbf{x}_{i})||
$$

by updating the weights through Gradient Descent (GD):

$$
W_{l} \leftarrow W_{l}-\eta \nabla_{W_{l}} \mathcal{L}
$$

where $\eta$ is some small positive number called the *learning rate*.

That's it. That's the whole setup. Four things: an **architecture**, some **data**, a **loss**, and a **learning rule**. Seems straightforward enough. Why then, are these deep neural networks so difficult to study?
## Why is it hard to study deep learning? 
Usually, the first and primary hurdle to studying complex systems is _opacity_. Consider a biological cell: to understand the relevant internal variables, we must painstakingly infer its inner workings from a limited, noisy set of observations each giving us a partial, indirect view. The "equations of motion" are not handed to us; we must guess at them. The same is true of the brain, of the economy, of the climate: the systems are partially hidden and highly opaque, so much of science consists of figuring out what the variables even look like.

Deep neural networks are different. Every weight, every activation, every gradient, every loss value is exactly knowable at every step of training. The "laws of motion," i.e. gradient descent, are written down explicitly in three lines of math. We can freeze training, perturb any weight, and watch exactly what happens. In the history of science, we have rarely been handed a complex system this transparent.

(MAYBE: deep learning is often referred to as 'black box.' but, again, the use of the word it is a black box because of complexity, not opacity. )

So why are deep neural networks hard to study? The difficulty is not opacity, but **complexity**, and it comes in a few distinct flavors:

- **Coupled dynamics (depth).** Gradient descent on a deep network is a coupled nonlinear dynamical system in millions to trillions of variables. The update to any given weight depends, through backpropagation, on the current values of many other weights across the network. Layers talk to each other. Change one weight in layer 3 and the gradients flowing through layer 17 change too.
- **Pointwise nonlinearities.** The nonlinearity $\sigma$ is what gives deep networks their expressive power but it is also what makes them analytically painful. A ReLU or sigmoid ... (UNFINISHED)
- **Data complexity.** Even if we fully understood the network, we'd still have to reckon with the data. Real datasets—natural images, natural language, protein sequences—have rich, high-dimensional, poorly-characterized structure. A theory that only works on Gaussian data may miss what's actually going on.

The depth, width, nonlinearity and data of a deep neural network form axes of complexity that all interact with each other. The art of learning mechanics is figuring out which axes we can turn off, simplify, or take to a limit, so that the remaining problem becomes tractable without throwing away the phenomenon we wanted to understand.
## So, how do we study deep neural networks?
A non-exhaustive list of tools beloved by physicists is: **simplify, take limits, find the right variables, and look for universality.** Let's start by looking at what simplifying and taking limits can look like.
### Simplify: get rid of nonlinearities
Surprisingly, there is a lot to learn from linear models. The key insight is that even if the model is linear in the *data*, it need not be linear in the *parameters*. A deep linear network

$$
\hat{f}(\mathbf{x}) = W_L W_{L-1} \cdots W_1 \mathbf{x}\
$$

computes a linear function of $\mathbf{x}$ (it's just a product of matrices), but gradient descent on the individual $W_{l}$ matrices is a genuinely nonlinear dynamical system. One can observe real deep learning phenomena such as low-rank bias, saddle points, stage-wise learning, and sigmoidal learning curves in a setting simple enough to solve exactly. This is the subject of **week 4**. For now, let's look at two even simpler cases:
#### Depth = 1
When $\text{depth} = 1$,  

$$
\hat{f}(\mathbf{x}) = A\mathbf{x}
$$

and the model reduces to linear regression.
#### Width = 1 (and $d_{\text{in}}=d_{\text{out}}=1$)
When $\text{width} = d_{\text{in}}=d_{\text{out}}= 1$, 

$$
\hat{f}(x)=w_{l}\dots w_{1}x
$$

and the model reduces to a scalar product of weights. The learning problem is then just factorizing a number. Observe that already in this highly simplified setting, we get coupled gradient descent dynamics.
### Take a limit (Gradient Flow): $\eta \to 0$

### Take another limit: width $\to \infty$



- simplified cases: toy models, taking limits
	- $\sigma(x) = x$, i.e. no nonlinearities
		- Surprisingly, there is a lot to learn from linear models; mainly because even if the model is linear in the data, it may not be linear in the parameters. In fact, we can get highly nonlinear dynamics during training.
		- depth = 1
			- $f(x) = Ax$, linear regression (least squares)
		- width = 1
			- $f(x)=w_{l}\dots w_{1}x$, scalar factorization
		- continuous time limit
			- gradient flow; get differential equations w.r.t. time
	- width $\to \infty$
		- The NTK and the lazy training regime: a case where a simple first-order Taylor approximation is highly accurate, and in the limit, exactly right.
			- Intuition: if there are obscenely many weights in each layer, then the weights need not move far from initialization to lower the loss.