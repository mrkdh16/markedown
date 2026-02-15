---
title: "Linear Models, Nonlinear Dynamics: A Toy Model for Deep Learning (Saxe et al.)"
draft: false
tags:
---
<center>
<img src="Screenshot 2026-02-14 at 12.23.24 AM.png" width="600">
</center>

## Introduction.
Understanding deep learning is a *very* hard problem. When tackling such hard problems with countless complicated interactions, it can be extremely helpful to analyze simpler toy models. Ideally, the toy models we choose to study will exhibit some of the same complex, nontrivial phenomena that we want to explain in the original system. By providing mathematically sound explanations for said phenomena in our toy models we can gain insight into our hard problem. It turns out that deep linear networks are great toy models. They are mathematically tractable yet retain some of the mysterious phenomena that we observe in deep nonlinear networks (i.e. neural networks). 

At first glance, deep linear networks seem quite uninteresting. Indeed, no expressiveness is gained from adding layers in linear networks as the input-output map can always be rewritten as a single shallow layer:
$$
\hat{y}= W^lW^{l-1} \ldots W^1x = W_{\text{total}}x.
$$
However, deep linear networks exhibit nonlinear training dynamics which arise from nonlinear gradients. From these dynamics emerge long plateaus and rapid transitions in the loss---a prime example of mysterious deep learning phenomena that we want to explain. 
## Setup.
#### A toy task for a toy model.
It will prove useful to keep in mind a simple example task. Imagine the network is presented with an item $i$ (e.g. a "Canary") represented as a one-hot input vector $x^\mu$. The network's objective is to predict a vector of features $y^\mu$, such as "Can Fly," "Has Wings," or "Is Yellow".

Throughout training, the network experiences many such examples $\{x^\mu, y^\mu\}$. The statistical structure of this environment is captured by the input-output correlation matrix $\Sigma^{31} \equiv \sum_{\mu}y^\mu {x^\mu}^\top \propto \mathbb{E}[y^\mu {x^\mu}^\top]$:

<center>
<img src="Screenshot 2026-02-12 at 9.48.02 PM.png" width="200">
<figcaption>Figure 1: Example of an input-output correlation matrix</figcaption>
</center>

This matrix represents how strongly specific items correlate with specific properties across the entire dataset and is critical to our analysis.
#### The toy model.
Consider a simple 3-layer linear network $\hat{y} = W^{32}W^{21}x$ with training data $\{ x^{\mu},y^\mu\}$ ($\mu=1,\dots,P$) and mean squared error $\mathcal{E} = \sum^P_{i=1}||y^\mu-W^{32}W^{21}x^\mu||^2_2$. Let's say that the input has dimension $N_1$, the hidden layer has dimension $N_{2}$ and the output has dimension $N_{3}$. So, $x^\mu \in \mathbb{R}^{N_{1}}$, $y^\mu \in \mathbb{R}^{N_{3}}$, $W^{21}$ is an $N_{2}\times N_{1}$ matrix and $W^{32}$ is an $N_{3}\times N_{2}$ matrix. In terms of our toy task, this means that we have $N_1$ items, $N_3$ possible features that the items can have and $P$ examples of items having features.

<center>
<img src="Screenshot 2026-02-14 at 12.39.03 AM.png" width="350">
<figcaption>Figure 2: A 3-layer network</figcaption>
</center>

#### Taking derivatives.
To run gradient descent on $\mathcal{E}$, we need to compute the partial derivatives for each of the weight matrices. The simplest way to do this is how a computer does it: with backpropagation (see [[3-layer linear network backprop]] for derivation). We get the following partial derivatives from backprop:
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
where we defined the input-output correlation matrix as $\Sigma^{31}\equiv \sum^P_{\mu=1}y^\mu {x^\mu}^\top \propto \mathbb{E}[yx^\top]$ and the input correlation matrix as $\Sigma^{11} \equiv \sum^P_{\mu=1} x^\mu {x^\mu}^\top \propto \mathbb{E}[x x^\top]$. Observe that $\Sigma^{31}$ and $\Sigma^{11}$ contain all the information from the dataset used in training.  

To use tools from differential equations, we'll have to find the 'gradient flow' of the weights. We start by examining how the weight matrices get updated:
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
where we defined $\tau \equiv \frac{1}{P\lambda}$. Here, $t$ measures time in units of learning epochs---meaning that as $t$ goes from $n$ to $n+1$, the network goes through the entire dataset (so, $P$ examples) 1 time.
#### The first simplifying assumption.
Solving equations (1) and (2) as is is difficult. So, let's make a simplifying assumption: that the input vectors $x^\mu$ are orthonormal, i.e. $\Sigma^{11} = I$. This is a reasonable assumption since training data is often whitened in practice. Once we assume that $\Sigma^{11}=I$, the input-output correlation matrix $\Sigma^{31}$ becomes the sole source of information about the training data that can be used in learning. This assumption simplifies equations (1) and (2):
$$
\begin{align}
\tau \frac{dW^{21}}{dt} &= {W^{32}}^\top (\Sigma^{31}-W^{32}W^{21}) \\
\tau \frac{dW^{32}}{dt} &=  (\Sigma^{31}-W^{32}W^{21}){W^{21}}^\top. \\
\end{align}
$$
However, it is still the case that we have to deal with matrix equations. Might there be a way to get vector, or perhaps even scalar, equations that represent the same thing? It turns out the answer is yes (with some more simplifying assumptions), but to get there, we first need to take a closer look at the input-output correlation matrix.
#### The input-output correlation matrix.
The input-output correlation matrix $\Sigma^{31}$ is defined as the sum of $P$ rank-1 matrices each of the form $y^\mu {x^\mu}^\top$ (an outer product):
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
\end{align*}
$$
In the second and third forms of $\Sigma^{31}$, I tried to show that the columns of $\Sigma^{31}$ are weighted sums of the output vectors while the rows of $\Sigma^{31}$ are weighted sums of the input vectors (transposed). 

In order to effectively explore the statistical structure in the data, we consider the (compact) [singular value decomposition (SVD)](https://www.cs.cmu.edu/~venkatg/teaching/CStheory-infoage/book-chapter-4.pdf) of $\Sigma^{31}$:
$$
\Sigma^{31} = U^{33}S^{31}{V^{11}}^\top = \sum_{\alpha=1}^{N_1} s_\alpha u^\alpha {v^{\alpha}}^\top.
$$

<center>
<img src="Screenshot 2026-02-12 at 10.04.20 PM.png" width=700>
<figcaption>Figure 3: Modes link a set of coherently covarying properties with a set of coherently covarying items</figcaption>
</center>

Using the SVD allows us to probe the data in terms of independent "modes." We refer to the columns of ${V^{11}}$ (i.e. the rows of ${V^{11}}^\top$) as *input-analyzing* vectors, or *input modes*. These vectors $v^\alpha$ reflect independent modes of variation in the inputs, effectively defining a *[canonical](https://math.stackexchange.com/questions/2152059/what-do-people-mean-by-canonical) coordinate system* for the input domain. As a concrete example, consider the second row vector of $V^\top$ in figure 3. This vector ${v^2}^\top$ acts as an "animal-plant" axis. Along this axis, animals (Canary, Salmon) have positive values while plants (Oak, Rose) have negative values. This animal-plant axis is a way of categorizing the data determined by mathematical structure.

We refer to the columns of $U^{33}$ as *output-analyzing* vectors, or *output modes*. Similar to input modes, these vectors $u^\alpha$ define a canonical coordinate system for the output domain. Observe that in figure 3, unlike the input modes, the output modes do not form a complete basis for the feature space. This is essentially because four categorical directions are enough to completely characterize the structure of the data. 

The second column vector of $U$ ($u^2$) pairs with the second row vector of $V^\top$ (${v^2}^\top$) to create a unified animal-plant axis. While $v^2$ determines which items belong to the category (animals v.s. plants in this case), $u^2$ determines which properties belong to the category. Along $u^2$, more animal-like properties will have higher values, while more plant-like properties will have lower values (roots < leaves, petals < fly, swim < move). The "categorizing power" of any given axis is quantified by its singular value $s_\alpha$. Larger singular values correspond to more important distinctions, while smaller singular values correspond to finer subordinate details.
#### From matrix to vector equations.
Using the input and output modes, we can perform a change of variables:
$$
\overline{W}^{21} \equiv W^{21}{V^{11}}, \space \overline{W}^{32} \equiv {U^{33}}^{\top}W^{32}.
$$
By rearranging, we can gain some intuition as to what these new matrices represent: $W^{21} = \overline{W}^{21} {V^{11}}^\top, \space W^{32}={U^{33}} \overline{W}^{32}$. The matrix $W^{21}$ takes inputs to the hidden layer. Since ${V^{11}}^\top$ ($={V^{11}}^{-1}$) can be thought of as a change of basis from input space to the space of input modes, $\overline{W}^{21}$ can be thought of as taking input modes to hidden neurons. Similarly, $W^{32}$ takes hidden neurons to outputs. Since $U^{33}$ can be thought of as a change of basis from the space of output modes to output space, $\overline{W}^{32}$ can be thought of as taking hidden neurons to output modes. We call the $\alpha$th column vector of $\overline{W}^{21}$, $a^\alpha$ and the $\alpha$th row vector of $\overline{W}^{32}$, $b^\alpha$.

Inserting our new matrices into equations (3) and (4),
$$
\begin{align*} \tau \frac{d W^{21}}{dt} &= {\overline{W}^{32}}^\top {U^{33}}^\top \left( U^{33} S^{31} {V^{11}}^\top - U^{33} \overline{W}^{32} \overline{W}^{21} {V^{11}}^\top \right) \\ 
&= {\overline{W}^{32}}^\top \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) {V^{11}}^\top \\ \\ 
\implies \tau \frac{d W^{21}}{dt} V^{11} = \tau \frac{d \overline{W}^{21}}{dt} &={\overline{W}^{32}}^\top \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) \\\\
\tau \frac{d\overline{W}^{32}}{dt} &= \left( U^{33} S^{31} {V^{11}}^\top - U^{33} \overline{W}^{32} \overline{W}^{21} {V^{11}}^\top \right) V^{11} {\overline{W}^{21}}^\top \\ 
&= U^{33} \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) {\overline{W}^{21}}^\top \\ \\ \implies \tau {U^{33}}^\top \frac{d W^{32}}{dt} 
= \tau \frac{d \overline{W}^{32}}{dt} &= \left( S^{31} - \overline{W}^{32} \overline{W}^{21} \right) {\overline{W}^{21}}^\top \end{align*}
$$
we get new equations that can be thought of in terms of vector equations. Let's first examine the time derivative of $\overline{W}^{21}$:
$$
\tau \frac{d}{dt} \overline{W}^{21} = \tau 
\underbrace{\begin{bmatrix} | & & | \\ \frac{da^1}{dt} & \cdots & \frac{da^{N_1}}{dt} \\ | & & | \end{bmatrix} }_{[N_{2} \times N_{1}]}

= \underbrace{\begin{bmatrix} | & & | \\ b^1 & \cdots & b^{N_3} \\ | & & | \end{bmatrix}}_{[N_{2} \times N_{3}]}
\left( 
\underbrace{\begin{bmatrix} s_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & s_{N_1} \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{bmatrix}}_{[N_{3}\times N_{1}]}
- 
\underbrace{\begin{bmatrix} \text{---} & b^1 & \text{---} \\ & \vdots & \\ \text{---} & b^{N_3} & \text{---} \end{bmatrix}}_{[N_{3}\times N_{2}]} 
\underbrace{\begin{bmatrix} | & & | \\ a^1 & \cdots & a^{N_1} \\ | & & | \end{bmatrix}}_{[N_{2}\times N_{1}]} \right).
$$
Looking at a single column vector $a^\alpha$ of $\overline{W}^{21}$,
$$
\tau \frac{d}{dt}a^\alpha =

\tau \underbrace{\begin{bmatrix} | \\ \frac{da^\alpha}{dt} \\ | \end{bmatrix}}_{[N_{2}\times 1]} =  
\underbrace{\begin{bmatrix} | & & | \\ b^1 & \cdots & b^{N_3} \\ | & & | \end{bmatrix}}_{{\overline{W}^{32}}^\top}
\left( \underbrace{ \begin{bmatrix} 0 \\ \vdots \\ s_\alpha \\ \vdots \\ 0 \end{bmatrix} }_{\text{Column } \alpha \text{ of } S} - \underbrace{ \begin{bmatrix} \text{---} & b^1 & \text{---} \\ & \vdots & \\ \text{---} & b^{N_3} & \text{---} \end{bmatrix} \begin{bmatrix} | \\ a^\alpha \\ | \end{bmatrix} }_{\text{Column } \alpha \text{ of } \overline{W}^{32}\overline{W}^{21}} \right)
$$
<details markdown="1"> <summary> Detailed derivation  </summary> 

$$
\begin{align*}
&=
\begin{bmatrix} | & & | \\ b^1 & \cdots & b^{N_3} \\ | & & | \end{bmatrix} \left( \begin{bmatrix} 0 \\ \vdots \\ s_\alpha \\ \vdots \\ 0 \end{bmatrix} - \begin{bmatrix} b^1 \cdot a^\alpha \\ \vdots \\ b^\alpha \cdot a^\alpha \\ \vdots \\ b^{N_3} \cdot a^\alpha \end{bmatrix} \right)
\\\\
&=
\underbrace{\begin{bmatrix} \vert & &\vert && | \\ b^1 & \cdots & b^\alpha & \cdots & b^{N_3} \\ | & &  | & & | \end{bmatrix}}_{[N_{2} \times N_{3}]} \underbrace{\begin{bmatrix} - (b^1 \cdot a^\alpha) \\ \vdots \\ (s_\alpha - b^\alpha \cdot a^\alpha) \\ \vdots \\ - (b^{N_3} \cdot a^\alpha) \end{bmatrix}}_{[N_{3}\times 1]}
\end{align*}
$$
</details>

$$
=
b^\alpha (s_\alpha - b^\alpha \cdot a^\alpha) - \sum_{\gamma \neq \alpha} b^\gamma (b^\gamma \cdot a^\alpha).
$$

Now turning to the time derivative of $\overline{W}^{32}$,
$$
\tau \frac{d}{dt} \overline W^{32} =  \tau \underbrace{\begin{bmatrix} \text{---} & db^1/dt & \text{---} \\ & \vdots & \\ \text{---} & db^{N_3}/dt & \text{---} \end{bmatrix}}_{[N_{3}\times N_{2}]} = 
\left( 
\underbrace{\begin{bmatrix} s_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & s_{N_1} \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{bmatrix}}_{[N_{3}\times N_{1}]}
- \underbrace{ \begin{bmatrix} \text{---} & b^1 & \text{---} \\ & \vdots & \\ \text{---} & b^{N_3} & \text{---} \end{bmatrix} }_{[N_3 \times N_2]} \underbrace{ \begin{bmatrix} | & & | \\ a^1 & \cdots & a^{N_1} \\ | & & | \end{bmatrix} }_{[N_2 \times N_1]} \right) \underbrace{ \begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix} }_{[N_1 \times N_2]}
$$
This time looking at a single row vector $b^\alpha$ of $\overline{W}^{32}$,
$$
\tau \frac{d}{dt} b^\alpha=
\tau\underbrace{ \begin{bmatrix} \text{---} \frac{db^\alpha}{dt} \text{---} \end{bmatrix} }_{[1 \times N_{{2}}]}
=    
\left( \underbrace{ \begin{bmatrix} 0 & \cdots  & s_\alpha & \cdots & 0\end{bmatrix} }_{\text{Row } \alpha \text{ of } S} - 
\underbrace{ \begin{bmatrix} \text{---} & b^\alpha & \text{---}  \end{bmatrix} \begin{bmatrix} | & & | \\ a^1 & \cdots & a^{N_1} \\ | & & | \end{bmatrix} }_{\text{Row } \alpha \text{ of } \overline{W}^{32}\overline{W}^{21}} \right) 
\underbrace{ \begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix}}_{{\overline{W}^{21}}^\top}
$$
<details markdown="1"> <summary>Detailed derivation</summary>

$$
\begin{align*}
&=
\left( \begin{bmatrix} 0 & \cdots  & s_\alpha & \cdots & 0\end{bmatrix} - \begin{bmatrix} b^\alpha \cdot a^1 & \cdots  & b^\alpha \cdot a^\alpha & \cdots & b^\alpha \cdot a^{N_{1}}\end{bmatrix}
\right)\begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix}
\\\\
&=
\underbrace{\begin{bmatrix} -(b^\alpha \cdot a^1) & \cdots  & (s^\alpha-b^\alpha \cdot a^\alpha) & \cdots & -(b^\alpha \cdot a^{N_{1}})\end{bmatrix}}_{1 \times N_{1}} 
\underbrace{\begin{bmatrix} \text{---} & a^1 & \text{---} \\ & \vdots & \\ \text{---} & a^{\alpha} & \text{---} \\ & \vdots & \\ \text{---} & a^{N_1} & \text{---} \end{bmatrix}}_{[N_{1}\times N_{2}]}
\end{align*}
$$

</details>

$$
=
(s_\alpha - b^\alpha \cdot a^\alpha)a^{\alpha} - \sum_{\gamma \neq \alpha} (b^\alpha \cdot a^\gamma)a^\gamma.
$$
Thus, we have successfully turned our matrix equations (3) and (4) into vector equations:
$$
\begin{align}
\tau \frac{d}{dt}a^\alpha &= b^\alpha (s_\alpha - b^\alpha \cdot a^\alpha) - \sum_{\gamma \neq \alpha} b^\gamma (b^\gamma \cdot a^\alpha) \\ 
\tau \frac{d}{dt} b^\alpha &= (s_\alpha - b^\alpha \cdot a^\alpha)a^{\alpha} - \sum_{\gamma \neq \alpha} (b^\alpha \cdot a^\gamma)a^\gamma.
\end{align}
$$
## What the network learns.
Because our toy model is so simple, we can analytically derive exactly what the model will end up learning. We first observe that equations (5) and (6) would result from gradient descent on the following loss:
$$
E = \frac{1}{2\tau}\sum_{\alpha}(s_{\alpha}-a^\alpha \cdot b^\alpha)^2+\frac{1}{2\tau}\sum_{\alpha \neq \beta}(a^\alpha \cdot b^\beta)^2,
$$
i.e. $\frac{da^\alpha}{dt}=-\frac{\partial E}{\partial a^\alpha}, \space \frac{db^\alpha}{dt}=-\frac{\partial E}{\partial b^\alpha}$. To minimize $E$, the input and output modes $a^\alpha$ and $b^\alpha$ of the same index 
## How the network learns.
We've figured out exactly what the network will learn, but there is yet more information that we can extract from our equations. 
#### More simplifying assumptions: from vectors to scalar equations.

#### A differential equation we can solve.
$$
\begin{align*}
\tau \frac{d a^\alpha}{dt} = (s^\alpha - a^\alpha b^\alpha) b^\alpha &\implies \tau \frac{d}{dt} (a(t) r^\alpha) = (s - a(t)b(t))b(t)r^\alpha \\

&\implies \tau \frac{d}{dt} a = b(s - ab)
\end{align*}
$$
$$
\begin{align*}
\tau \frac{d b^\alpha}{dt} = (s^\alpha - a^\alpha b^\alpha) a^\alpha &\implies \tau \frac{d}{dt} (b(t) r^\alpha) = (s - a(t)b(t))a(t)r^\alpha \\

&\implies \tau \frac{d}{dt} b = a(s - ab)
\end{align*}
$$
$$
\begin{align*}
\tau \frac{du}{dt} = \tau \left( b \frac{da}{dt} + a \frac{db}{dt} \right) &= b^2(s-ab) + a^2(s-ab) \\ 
&= (s-ab)(a^2+b^2) \\
&= 2ab(s-ab) \\
&= 2u(s-u)
\end{align*}
$$
where we used the assumption that $a=b$ to get $a^2+b^2=2ab$. Now,
$$
\tau \frac{du}{dt} = 2u(s-u)
$$
is a differential equation that we can solve as it is separable:
$$
\begin{align*}
\int_{u_0}^{u_f} \frac{\tau}{2u(s-u)} du &= \int_{t_0}^{t_f} dt \\\\

\implies \Delta t &= \tau \int_{u_0}^{u_f} \frac{1}{-2u^2 + 2us} du \\\\
&= \frac{\tau}{s} \ln \frac{u_f(s-u_0)}{u_0(s-u_f)}
\end{align*}
$$

<center>
<img src="Screenshot 2026-02-11 at 12.29.19 AM.png" width="400">
<figcaption>Figure 1 (from the original Saxe et al. paper)</figcaption>
</center>

Recall the assumptions we made to get to this point: that $\Sigma^{11}=I$, that the initial conditions were decoupled and that $a = a^\alpha \cdot r^\alpha = b = b^\alpha \cdot r^\alpha$ initially. We justified these assumptions as we made them in various ways. However, ultimately, all our assumptions are vindicated by the fact that the results we ended up with approximate the real thing well (see figure 1). And they are of course also justified by the fact that they make the math easier and arguably more elegant.

Recall why we sought to analyze deep linear networks in the first place: by analyzing the simple toy model in deep linear networks, we wanted to elucidate mysterious nonlinear learning phenomena typically seen in deep neural networks. So, what kind of phenomena were we able to elucidate?
- Plateaus and Rapid Transitions: It explains the "stage-like" transitions in learning, where a network experiences long periods of little improvement (plateaus) followed by sudden, rapid drops in error. This is the main 
- Depth-Independent Learning Times ...
- dynamical isometry (?)