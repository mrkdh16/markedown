---
title: 2-layer linear network backprop
draft: false
tags:
---
#### problem definition & forward pass
We aim to compute the gradients for the loss function $\mathcal{L} = \|y - W^{32}W^{21}x\|^2_2$. The network consists of an input $x$, a hidden layer $h$, and an output $\hat{y}$.

We define the following intermediate variables for the forward pass:
- loss: $\mathcal{L} := \|e\|^2 = e^T e$    
- error: $e := y - \hat{y}$
- output: $\hat{y} := W^{32}h$
- hidden state: $h := W^{21}x$
#### intermediate derivatives (chain rule)
To perform backpropagation, we first compute the partial derivatives for each step of the computational graph.
1. derivative of loss w.r.t. error:
$$
\frac{\partial \mathcal{L}}{\partial e} = \frac{\partial}{\partial e}[e^T e] = 2e \quad \text{(Equation 1)}
$$
2. derivative of error w.r.t. output:
$$
\frac{\partial e}{\partial \hat{y}} = \frac{\partial}{\partial \hat{y}}[y - \hat{y}] = -1 \quad \text{(Equation 2)}
$$
_(Note: In matrix calculus context, this represents $-I$)_

3. derivative of output w.r.t. hidden state:
$$
\frac{\partial \hat{y}}{\partial h} = \frac{\partial}{\partial h}[W^{32}h] = W^{32} \quad \text{(Equation 3)}
$$
#### backpropagation derivation
Gradient w.r.t output ($\hat{y}$): combining Equations (1) and (2) via the chain rule,
$$
\frac{\partial \mathcal{L}}{\partial \hat{y}} = \frac{\partial \mathcal{L}}{\partial e} \cdot \frac{\partial e}{\partial \hat{y}} = 2e \cdot (-1) = -2e = -2(y - \hat{y})
$$
Gradient w.r.t Hidden Layer ($h$): combining the previous result with Equation (3),
$$
\frac{\partial \mathcal{L}}{\partial h} = \left( \frac{\partial \hat{y}}{\partial h} \right)^T \left( \frac{\partial \mathcal{L}}{\partial \hat{y}} \right)
$$
Substituting the known terms:
$$
\frac{\partial \mathcal{L}}{\partial h} = (W^{32})^T (-2e) = -2(W^{32})^T(y - W^{32}h)
$$
#### parameter gradients
(a) Gradient w.r.t Inner Weights ($W^{21}$)

The gradient for the first layer weights is derived using the gradient of the hidden layer and the input $x$:
$$
\frac{\partial \mathcal{L}}{\partial W^{21}} = \frac{\partial \mathcal{L}}{\partial h} \cdot x^T
$$
Substitute $\frac{\partial \mathcal{L}}{\partial h}$:
$$
\frac{\partial \mathcal{L}}{\partial W^{21}} = \left[ -2(W^{32})^T (y - \hat{y}) \right] x^T
$$
Expand $\hat{y} = W^{32}W^{21}x$:
$$
= -2 (W^{32})^T (y - W^{32}W^{21}x) x^T
$$
Distribute $x^T$:
$$
= -2 (W^{32})^T (yx^T - W^{32}W^{21}xx^T)
$$

(b) Gradient w.r.t Outer Weights ($W^{32}$)

The gradient for the second layer weights is derived using the gradient of the output and the hidden state $h$:
$$
\frac{\partial \mathcal{L}}{\partial W^{32}} = \frac{\partial \mathcal{L}}{\partial \hat{y}} \cdot h^T
$$
Substitute $\frac{\partial \mathcal{L}}{\partial \hat{y}} = -2(y - \hat{y})$ and $h = W^{21}x$:
$$
\frac{\partial \mathcal{L}}{\partial W^{32}} = -2(y - W^{32}W^{21}x) (W^{21}x)^T
$$
Apply transpose rule $(AB)^T = B^T A^T$:
$$
= -2(y - W^{32}W^{21}x) x^T (W^{21})^T
$$
Distribute $x^T$ and factor out $(W^{21})^T$:
$$
= -2(yx^T - W^{32}W^{21}xx^T) (W^{21})^T
$$

*disclaimer: this note was mostly transcribed by Gemini*
![[Nonlinear Learning Dynamics in DLNs 2.png]]