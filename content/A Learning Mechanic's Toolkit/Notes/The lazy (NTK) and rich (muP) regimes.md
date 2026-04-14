---
title: The lazy (NTK) and rich (muP) regimes
draft: false
tags:
  - learning-mechanics
  - computer-science
  - machine-learning
  - physics
---
Karkada et al. (2024) [The lazy (NTK) and rich (µP) regimes: A gentle tutorial](https://arxiv.org/pdf/2404.19719)
### setup and definitions
We consider a simple 3-layer linear network (simple, but not too simple) given by 
$$
h_3(x) = g_3 W_3 g_2 W_2 g_1 W_1 x
$$such that at initialization, $W^{(ij)}_l \sim \mathcal{N}(0, \sigma_l^2)$ with a standard loss $\mathcal{L}(y,h_{3}(x))$.

The parameters $g_l$ act as fixed gradient multipliers. Increasing $g_l$ while holding $g_l \sigma_l$ constant scales up the gradient for $W_l$ without altering the feedforward signal. Effectively, each layer gets its own learning rate.

Hidden representations are defined recursively as 
$$
h_l(x) = g_l W_l h_{l-1}(x) \tag{1}
$$where the base input is $h_0(x) = x$. 

The dimension of each layer is denoted by $n_l = \dim h_l$. The network assumes a wide limit governed by a single scale $n \sim n_1 \sim n_2 \gg n_0 \sim n_3 \sim 1$.
### training criteria (constraints)
During training, the change in a layer's representation $\Delta h_l$ breaks down into three distinct parts:
$$
\Delta h_l = \underbrace{g_l \Delta W_l h_{l-1}}_{\text{layer}} + \underbrace{g_l W_l \Delta h_{l-1}}_{\text{passthrough}} + \underbrace{g_l \Delta W_l \Delta h_{l-1})}_{\text{interaction}} \tag{2}
$$These terms represent the layer contribution, the passthrough contribution, and the interaction contribution. 

We define well-behaved training as satisfying three core criteria:

1. Nontriviality (NTC): $||\Delta h_3|| \sim 1$. 
2. Useful Updates (UUC): $|\frac{\partial \mathcal{L}}{\partial h_l}^T \Delta h_l| \sim 1$ for $l \geq 1$. 
3. Maximality (MAX): $||g_l \Delta W_l h_{l-1}||\sim ||\Delta h_l||$ (this constraint ensures the layer contribution remains non-negligible).

The initialization scheme offers nine degrees of freedom:

- 3 $g_l$ variables, 
- 3 $\sigma_l$ variables, 
- and 3 $||\Delta h_l||$ variables. 

Satisfying the constraints will use 6 degrees of freedom:

- 1 from NTC,
- 3 from UUC,
- and 2 from MAX (since MAX is trivially satisfied for first layer).

This leaves three degrees of freedom. Two are used to fix the initial hidden activations $||h_1||$ and $||h_2||$ to be $\Theta(1)$. The single remaining degree of freedom controls the richness of the training regime. In other words, enforcing the NTC, UUC, MAX, and fixing the initial hidden activations to be $\Theta(1)$ will imply that **all the hyperparameters at initialization are completely determined by a single degree of freedom: the richness parameter.**
### derivation
We begin with an initial forward pass. We will enforce that the hidden activations satisfy $(h_l^{(i)})^2 \sim 1$ for $l=1, 2$; i.e. that $||h_{l}||^2 \sim n_{l}$ for $l=1,2$.

Assuming the input scales as $(h_0^{(i)})^2 \sim 1$ (which implies that $||h_{0}||^2 \sim n_{0}$),
$$
h^{(i)}_{1} = g_{1}\sum^{n_{0}}_{j=1}W^{(ij)}_{l}h^{(j)}_{0} \implies (h^{(i)}_{1})^2 \sim g^2_{1}\sigma^2_{1}n_{0}
$$
We want to enforce that $(h^{(i)}_{1})^2 \sim g^2_{1}\sigma^2_{1}n_{0} \sim 1$, which would imply that $||h_{1}||^2 \sim n_{1}$. We enforce the same constraint for $l=2$ such that
$$
(h^{(i)}_l)^2 \sim g_l^2 \sigma_l^2 n_{l-1} \sim 1 \quad \text{for $l=1,2$}. \tag{3}
$$Under the NTC, the final output cannot scale with width. This restricts the final layer to $g_3^2 \sigma_3^2 n_2 \lesssim 1$.

Next, we evaluate the backward pass. An omitted computation shows that
$$
\Delta W_{l} = g_{l} \frac{\partial\mathcal{L}}{\partial h_{l}}h^T_{{l-1}}. \tag{4}
$$
The chain rule yields $\frac{\partial \mathcal{L}}{\partial h_{l-1}} = g_l W_l^T \frac{\partial \mathcal{L}}{\partial h_l}$. Taking the squared norm results in 
$$
||\frac{\partial \mathcal{L}}{\partial h_{l-1}}||^2  \sim g_l^2 \sigma_l^2 n_{l-1} ||\frac{\partial \mathcal{L}}{\partial h_l}||^2. \tag{5}
$$
Using equations (4) and (5), we can simplify the hidden representation updates significantly:
$$
\begin{align*}
\Delta h_l &= \underbrace{-g^2_{l}||h_{l-1}||^2 \frac{\partial\mathcal{L}}{\partial h_{l}}}_{\text{layer}} - \underbrace{g^2_{l}g^2_{l-1}||h_{l-2}||^2W_{l}W^T_{l} \frac{\partial\mathcal{L}}{\partial h_{l}}}_{\text{passthrough}} + \underbrace{\dots}_{\text{higher order terms}} \\
&\approx -g_l^2 (||h_{l-1}||^2 + g_{l-1}^2 ||h_{l-2}||^2 W_l W_l^T) \frac{\partial \mathcal{L}}{\partial h_l}. \tag{6}
\end{align*}
$$
The MAX condition dictates that the layer term must not be dominated by the passthrough term. Thus, since the layer term aligns with $\frac{\partial \mathcal{L}}{\partial h_l}$, the update $\Delta h_l$ must also share this alignment. This simplifies the UUC to 
$$
||\frac{\partial \mathcal{L}}{\partial h_l}|| \cdot||\Delta h_l|| \sim 1. \tag{7}
$$Applying equation (7) to equation (5) gives 
$$
||\Delta h_l||^2 \sim g_l^2 \sigma_l^2 n_{l-1} ||\Delta h_{l-1}||^2 \quad \text{for $l=2,3$} \tag{8}
$$We already know $g_l^2 \sigma_l^2 n_{l-1} \sim 1$ for the hidden layers. Thus, the updates share a unified scale 
$$
||\Delta h_1|| \sim ||\Delta h_2|| \triangleq ||\Delta h||. \tag{9}
$$

Finally, we have all the equations we need to derive the scaling for all the hyperparameters at initialization. Enforcing the UUC,
$$
\frac{\partial\mathcal{L}}{\partial h_{l}}^T \Delta h_{l} \sim 1 \implies \frac{g_l^2}{||\Delta h_l||^2} (||h_{l-1}||^2 + g_{l-1}^2 ||h_{l-2}||^2 \sigma_l^2 n_{l-1}) \sim 1. \tag{10}
$$

Enforcing the MAX constraint on equation (7), we see that
$$
\frac{g_l^2}{||\Delta h_l||^2}||h_{l-1}||^2 \sim 1 \implies g^2_{l} \sim \frac{||\Delta h_l||^2}{||h_{l-1}||^2}.
$$
Recall that for all $l$, $||h_{l-1}||^2 \sim n_{l-1}$ and that by the NTC, $||\Delta h_{3}||^2 \sim 1$. This gives a piecewise scaling of $g_l$:
$$
g_\ell \sim \frac{\|\Delta \boldsymbol{h}_\ell\|}{\sqrt{n_{\ell-1}}} \sim \begin{cases} 1/\sqrt{n_2} & \text{if } \ell = 3 \\ \|\Delta \boldsymbol{h}\|/\sqrt{n_{\ell-1}} & \text{if } \ell = 1, 2 \end{cases}. \tag{11}
$$
We can then substitute these results back into our activation constraint $g_l^2 \sigma_l^2 n_{l-1} \sim 1$ from equation (3) and $g^2_{3}\sigma^2_{3}n_{2} ||\Delta h_{2}||^2 \sim ||\Delta h_{3}||^2$ from equation (8). Doing so reveals 
$$
\sigma_l \sim \frac{1}{||\Delta h||} \quad \text{for all $l$}. \tag{12}
$$Thus, all initial hyperparameters are completely determined by the single degree of freedom $||\Delta h||$, as desired.

<center>
<img src="Screenshot 2026-04-14 at 1.53.59 PM.png" width="600">
</center>

This defines the richness parameter $r$, where $||\Delta h|| \sim n^r$ and $0 \leq r \leq \frac{1}{2}$. The lower bound for $r$ comes from equation (3) while the upper bound is a reasonable heuristic. Theoretically and empirically, setting $r > \frac{1}{2}$ results in unstable training due to gradient instability.

*disclaimer: this note was mostly transcribed by Gemini*