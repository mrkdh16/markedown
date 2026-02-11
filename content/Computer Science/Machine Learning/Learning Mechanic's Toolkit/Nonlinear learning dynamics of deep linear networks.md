---
title: Nonlinear learning dynamics of deep linear networks
draft: false
tags:
  - computer-science
  - machine-learning
  - math
  - physics
  - linear-algebra
---
## Introduction.
Understanding deep learning is a *very* hard problem. When tackling such hard problems with complicated interactions, it can be extremely helpful to analyze simpler toy models. Ideally, the toy models we choose to study will exhibit some of the same complex, nontrivial phenomena that we want to explain in the original system. By providing mathematically sound explanations for said phenomena in our toy models we can gain insight into our hard problem. It turns out that deep linear networks are great toy models. They are mathematically tractable yet retain some of the mysterious phenomena that we observe in deep nonlinear networks (i.e. neural networks). 

At first glance, deep linear networks seem quite uninteresting. Indeed, no expressiveness is gained from adding layers in linear networks as the input-output map can always be rewritten as a single shallow layer:
$$
\hat{y}= W^lW^{l-1} \ldots W^1x = W_{\text{total}}x.
$$
However, deep linear networks have nonlinear training dynamics which arise from nonlinear gradients. Analyzing these training dynamics gives us an idea of the role of depth in deep learning in general.
## Setup.
Consider a simple 3-layer linear network $\hat{y} = W^{32}W^{21}x$ with training data $\{ x^{\mu},y^\mu\}$ ($\mu=1,\dots,P$) and mean squared error $\mathcal{E} = \sum^P_{i=1}||y^\mu-W^{32}W^{21}x^\mu||^2_2$. Let's say that the input has dimension $N_1$, the hidden layer has dimension $N_{2}$ and the output has dimension $N_{3}$. So, $x^\mu \in \mathbb{R}^{N_{1}}$, $y^\mu \in \mathbb{R}^{N_{3}}$, $W^{21}$ is an $N_{2}\times N_{1}$ matrix and $W^{32}$ is an $N_{3}\times N_{2}$ matrix.

<center>
<img src="Nonlinear Learning Dynamics in DLNs.png" width="200">
</center>

To run gradient descent on $\mathcal{E}$, we need to compute the gradients for each of the weight matrices. The simplest way to do this is how a computer does it: with backpropagation (see [[3-layer linear network backprop]] for derivation). We get the following gradients from backprop:
$$
\begin{align*}
\frac{\partial \mathcal{E}}{\partial W^{21}} &= \sum^P_{\mu=1} \frac{\partial}{\partial W^{21}} ||y^\mu - W^{32}W^{21}x^\mu||^2_{2}  \\
&= \sum^P_{\mu=1} -2{W^{32}}^\top (y^\mu {x^\mu}^\top - W^{32}W^{21}x^\mu {x^\mu}^\top) \\
&= -2{W^{32}}^\top \left( \sum^P_{\mu=1}y^\mu {x^\mu}^\top-W^{32}W^{21}\sum^P_{\mu=1}x^\mu {x^\mu}^\top \right) \\
&= -2{W^{32}}^\top (\Sigma^{31}-W^{32}W^{21}\Sigma^{11})
\end{align*}
$$
$$
\begin{align*}

\frac{\partial \mathcal{E}}{\partial W^{32}} &= \sum^P_{\mu=1} \frac{\partial}{\partial W^{32}} ||y^\mu - W^{32}W^{21}x^\mu||^2_{2} \\

&= \sum^P_{\mu=1} -2 (y^\mu {x^\mu}^\top - W^{32}W^{21}x^\mu {x^\mu}^\top){W^{21}}^\top \\

&= -2 \left( \sum^P_{\mu=1}y^\mu {x^\mu}^\top  - W^{32}W^{21}\sum^P_{\mu=1}x^\mu {x^\mu}^\top  \right){W^{21}}^\top \\

&= -2 (\Sigma^{31}-W^{32}W^{21}\Sigma^{11}){W^{21}}^\top

\end{align*}
$$
where we defined the input-output correlation matrix $\Sigma^{31}\equiv \sum^P_{\mu=1}y^\mu {x^\mu}^\top$ and the input correlation matrix $\Sigma^{11} = \sum^P_{\mu=1} x^\mu {x^\mu}^\top$. Observe that $\Sigma^{31}$ and $\Sigma^{11}$ contain all the information from the dataset used in training.  

To use tools from differential equations, we will have to find the 'gradient flow' of the weights. We start by examining how the weight matrices get updated:
$$
\begin{align*}
\Delta W^{21} = W^{21}_{\text{update}} &= \lambda{W^{32}}^\top (\Sigma^{31}-W^{32}W^{21}\Sigma^{11})
\\
\Delta W^{32}=W^{32}_{\text{update}} &= \lambda (\Sigma^{31}-W^{32}W^{21}\Sigma^{11}){W^{21}}^\top
\end{align*}
$$
where $\lambda$ is some small positive number, i.e. the learning rate. Then, for sufficiently small $\lambda$, we can make the following approximation:
$$
\begin{align}
\tau \frac{dW^{21}}{dt} &= {W^{32}}^\top (\Sigma^{31}-W^{32}W^{21}\Sigma^{11}) \\
\tau \frac{dW^{32}}{dt} &=  (\Sigma^{31}-W^{32}W^{21}\Sigma^{11}){W^{21}}^\top \\
\end{align}
$$
where we defined $\tau \equiv \frac{1}{\lambda}$.

Before we proceed, let's take a closer look at the input-output correlation matrix $\Sigma^{31}$. It's defined as the sum of $P$ rank-1 matrices each of the form $y^\mu {x^\mu}^\top$ (an outer product):
$$
\begin{bmatrix}
y_1^\mu \\
\vdots \\
y_{N_3}^\mu
\end{bmatrix}
\begin{bmatrix}
x_1^\mu & \cdots & x_{N_1}^\mu
\end{bmatrix}
=
\begin{bmatrix}
y_1^\mu x_1^\mu & y_1^\mu x_2^\mu & \cdots & y_1^\mu x_{N_1}^\mu \\
y_2^\mu x_1^\mu & y_2^\mu x_2^\mu & \cdots & y_2^\mu x_{N_1}^\mu \\
\vdots & \vdots & \ddots & \vdots \\
y_{N_3}^\mu x_1^\mu & y_{N_3}^\mu x_2^\mu & \cdots & y_{N_3}^\mu x_{N_1}^\mu
\end{bmatrix}
$$
$$
\begin{align*}
\implies \Sigma^{31} &= 
\begin{bmatrix}
\sum^P_{\mu=1} y_1^\mu x_1^\mu & \sum^P_{\mu=1}y_1^\mu x_2^\mu & \cdots & \sum^P_{\mu=1}y_1^\mu x_{N_1}^\mu \\
\sum^P_{\mu=1}y_2^\mu x_1^\mu & \sum^P_{\mu=1}y_2^\mu x_2^\mu & \cdots & \sum^P_{\mu=1}y_2^\mu x_{N_1}^\mu \\
\vdots & \vdots & \ddots & \vdots \\
\sum^P_{\mu=1}y_{N_3}^\mu x_1^\mu & \sum^P_{\mu=1}y_{N_3}^\mu x_2^\mu & \cdots & \sum^P_{\mu=1}y_{N_3}^\mu x_{N_1}^\mu
\end{bmatrix} 
\\\\
&= 
\begin{bmatrix}
\vert & & \vert \\
\sum_{\mu=1}^{P} x_1^\mu \vec{y}^\mu & \cdots & \sum_{\mu=1}^{P} x_{N_1}^\mu \vec{y}^\mu \\
\vert & & \vert
\end{bmatrix}
\\\\
&=
\begin{bmatrix}
\text{---} & \sum_{\mu=1}^{P} y_1^\mu {\vec{x}^\mu}^\top & \text{---}\\
 & \vdots & \\
\text{---} &  \sum_{\mu=1}^{P} y_{N_3}^\mu {\vec{x}^\mu}^\top & \text{---}
\end{bmatrix}
\end{align*}.
$$
In the second and third forms of $\Sigma^{31}$, I tried to show that the columns of $\Sigma^{31}$ are weighted sums of the output vectors while the rows of $\Sigma^{31}$ are weighted sums of the input vectors (transposed). 

$$
\begin{align*} \tau \frac{d W^{21}}{dt} &= \overline{W}^{32 T} U^{33 T} \left( U^{33} S^{31} V^{11 T} - U^{33} \overline{W}^{32} \overline{W}^{21} V^{11 T} \right) \\ &= \overline{W}^{32 T} \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) V^{11 T} \\ \\ \implies \tau \frac{d W^{21}}{dt} V^{11} &= \overline{W}^{32 T} \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) \\ &= \tau \frac{d \overline{W}^{21}}{dt} \end{align*}
$$
$$
\begin{align*} \tau \frac{d\overline{W}^{32}}{dt} &= \left( U^{33} S^{31} V^{11 T} - U^{33} \overline{W}^{32} \overline{W}^{21} V^{11 T} \right) V^{11} \overline{W}^{21 T} \\ &= U^{33} \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) \overline{W}^{21 T} \\ \\ \implies \tau U^{33 T} \frac{d W^{32}}{dt} &= \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) \overline{W}^{21 T} \\ &= \tau \frac{d \overline{W}^{32}}{dt} \end{align*}
$$
$$
\tau \frac{d}{dt} \overline{W}^{21} = \tau 
\underbrace{\begin{bmatrix} | & & | \\ \frac{da^1}{dt} & \cdots & \frac{da^{N_1}}{dt} \\ | & & | \end{bmatrix} }_{[N_{2} \times N_{1}]}

= \underbrace{\begin{bmatrix} | & & | \\ b^1 & \cdots & b^{N_3} \\ | & & | \end{bmatrix}}_{[N_{2} \times N_{3}]}
\left( 
\underbrace{\begin{bmatrix} s_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & s_{N_1} \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{bmatrix}}_{[N_{3}\times N_{1}]}
- 
\underbrace{\begin{bmatrix} \text{---} & b^1 & \text{---} \\ & \vdots & \\ \text{---} & b^{N_3} & \text{---} \end{bmatrix}}_{[N_{3}\times N_{2}]} 
\underbrace{\begin{bmatrix} | & & | \\ a^1 & \cdots & a^{N_1} \\ | & & | \end{bmatrix}}_{[N_{2}\times N_{1}]} \right)
$$
$$
\begin{align*}
\tau \frac{d}{dt}a^\alpha =

\tau \underbrace{\begin{bmatrix} | \\ \frac{da^\alpha}{dt} \\ | \end{bmatrix}}_{[N_{2}\times 1]} &=  \begin{bmatrix} | & & | \\ b^1 & \cdots & b^{N_3} \\ | & & | \end{bmatrix}  \left( \underbrace{ \begin{bmatrix} 0 \\ \vdots \\ s_\alpha \\ \vdots \\ 0 \end{bmatrix} }_{\text{Column } \alpha \text{ of } S} - \underbrace{ \begin{bmatrix} \text{---} & b^1 & \text{---} \\ & \vdots & \\ \text{---} & b^{N_3} & \text{---} \end{bmatrix} \begin{bmatrix} | \\ a^\alpha \\ | \end{bmatrix} }_{\text{Column } \alpha \text{ of } \overline{W}^{32}\overline{W}^{21}} \right)
\\\\
&=
\begin{bmatrix} | & & | \\ b^1 & \cdots & b^{N_3} \\ | & & | \end{bmatrix} \left( \begin{bmatrix} 0 \\ \vdots \\ s_\alpha \\ \vdots \\ 0 \end{bmatrix} - \begin{bmatrix} b^1 \cdot a^\alpha \\ \vdots \\ b^\alpha \cdot a^\alpha \\ \vdots \\ b^{N_3} \cdot a^\alpha \end{bmatrix} \right)
\\\\
&=
\underbrace{\begin{bmatrix} \vert & &\vert && | \\ b^1 & \cdots & b^\alpha & \cdots & b^{N_3} \\ | & &  | & & | \end{bmatrix}}_{[N_{2} \times N_{3}]} \underbrace{\begin{bmatrix} - (b^1 \cdot a^\alpha) \\ \vdots \\ (s_\alpha - b^\alpha \cdot a^\alpha) \\ \vdots \\ - (b^{N_3} \cdot a^\alpha) \end{bmatrix}}_{[N_{3}\times 1]}
\\\\
&=
b^\alpha (s_\alpha - b^\alpha \cdot a^\alpha) - \sum_{\gamma \neq \alpha} b^\gamma (b^\gamma \cdot a^\alpha)
\end{align*}
$$
$$
\tau \frac{d}{dt} \overline W^{32} =  \tau \underbrace{\begin{bmatrix} \text{---} & db^1/dt & \text{---} \\ & \vdots & \\ \text{---} & db^{N_3}/dt & \text{---} \end{bmatrix}}_{[N_{3}\times N_{2}]} = 
\left( 
\underbrace{\begin{bmatrix} s_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & s_{N_1} \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{bmatrix}}_{[N_{3}\times N_{1}]}
- \underbrace{ \begin{bmatrix} \text{---} & b^1 & \text{---} \\ & \vdots & \\ \text{---} & b^{N_3} & \text{---} \end{bmatrix} }_{[N_3 \times N_2]} \underbrace{ \begin{bmatrix} | & & | \\ a^1 & \cdots & a^{N_1} \\ | & & | \end{bmatrix} }_{[N_2 \times N_1]} \right) \underbrace{ \begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix} }_{[N_1 \times N_2]}
$$
$$
\begin{align*}
\tau \frac{d}{dt} b^\alpha=
\tau\underbrace{ \begin{bmatrix} \text{---} \frac{db^\alpha}{dt} \text{---} \end{bmatrix} }_{[1 \times N_{{2}}]}
&=    
\left( \underbrace{ \begin{bmatrix} 0 & \cdots  & s_\alpha & \cdots & 0\end{bmatrix} }_{\text{Row } \alpha \text{ of } S} - 
\underbrace{ \begin{bmatrix} \text{---} & b^\alpha & \text{---}  \end{bmatrix} \begin{bmatrix} | & & | \\ a^1 & \cdots & a^{N_1} \\ | & & | \end{bmatrix} }_{\text{Row } \alpha \text{ of } \overline{W}^{32}\overline{W}^{21}} \right) 
\begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix}
\\\\
&=
\left( \begin{bmatrix} 0 & \cdots  & s_\alpha & \cdots & 0\end{bmatrix} - \begin{bmatrix} b^\alpha \cdot a^1 & \cdots  & b^\alpha \cdot a^\alpha & \cdots & b^\alpha \cdot a^{N_{1}}\end{bmatrix}
\right)\begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix}
\\\\
&=
\underbrace{\begin{bmatrix} -(b^\alpha \cdot a^1) & \cdots  & (s^\alpha-b^\alpha \cdot a^\alpha) & \cdots & -(b^\alpha \cdot a^{N_{1}})\end{bmatrix}}_{1 \times N_{1}} 
\underbrace{\begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{\alpha} & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix}}_{[N_{1}\times N_{2}]}
\\\\
&=
(s_\alpha - b^\alpha \cdot a^\alpha)a^{\alpha} - \sum_{\gamma \neq \alpha} (b^\alpha \cdot a^\gamma)a^\gamma
\end{align*}
$$
