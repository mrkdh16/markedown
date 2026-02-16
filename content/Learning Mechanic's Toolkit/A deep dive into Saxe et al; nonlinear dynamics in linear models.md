---
title: "A deep dive into Saxe et al: nonlinear dynamics in linear models"
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
It will prove useful to keep in mind a simple toy task. Imagine the network is presented with an item $i$ (e.g. a "Canary") represented as a one-hot input vector $x^\mu$. The network's objective is to predict a vector of features $y^\mu$, such as "Can Fly," "Has Wings," or "Is Yellow".

Throughout training, the network experiences many such examples $\{x^\mu, y^\mu\}$. The statistical structure of this environment is captured by the input-output correlation matrix $\Sigma^{31} \equiv \sum_{\mu}y^\mu {x^\mu}^\top \propto \mathbb{E}[y^\mu {x^\mu}^\top]$:

<center>
<img src="Screenshot 2026-02-12 at 9.48.02 PM.png" width="200">
<figcaption>Figure 1: Example of an input-output correlation matrix</figcaption>
</center>

This matrix represents how strongly specific items correlate with specific properties across the entire dataset and is a key component of our analysis.
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
where $\lambda$ is some small positive number, i.e. the learning rate. Then, for sufficiently small $\lambda$, we can make the following approximation[^1]:
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
However, even after this simplifying assumption, we are left with matrix expressions. Might there be a way to get vector, or perhaps even scalar equations that represent the same thing? It turns out the answer is yes (with some more simplifying assumptions), but to get there, we first need to take a closer look at the input-output correlation matrix.
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

Using the SVD allows us to probe the data in terms of independent "modes." We refer to the columns of ${V^{11}}$ (i.e. the rows of ${V^{11}}^\top$) as *input-analyzing* vectors, or *input modes*. The $\alpha$th input mode determines the position of any given input item along an important 1-D semantic dimension. As a concrete example, consider the second row vector of $V^\top$ in figure 3. This vector, corresponding to the second input mode, acts as an "animal-plant" axis. Along this axis, animals (Canary, Salmon) have positive values while plants (Oak, Rose) have negative values. This animal-plant axis is a way of categorizing the data determined by mathematical structure.

We refer to the columns of $U^{33}$ as *output-analyzing* vectors, or *output modes*. Similar to input modes, the $\alpha$th output mode determines the position of any given output feature along an important 1-D semantic dimension. Every input mode has a corresponding output mode and vice versa. In figure 3, the second column vector of $U$ ($u^2$) pairs with the second row vector of $V^\top$ (${v^2}^\top$) to define a unified animal-plant axis. While the input mode determines which items belong to the category (animals v.s. plants in this case), the output mode determines which properties belong to the category. Along this second output mode axis, more animal-like properties will have higher values, while more plant-like properties will have lower values (roots < leaves, petals < fly, swim < move). The "categorizing power" of any given axis is quantified by its singular value $s_\alpha$. Larger singular values correspond to more important distinctions, while smaller singular values correspond to finer subordinate details.
#### From matrix to vector equations.
Using the input and output modes, we can perform a change of variables:
$$
\overline{W}^{21} \equiv W^{21}{V^{11}}, \space \overline{W}^{32} \equiv {U^{33}}^{\top}W^{32}.
$$
By rearranging, we can gain some intuition[^3] as to what these new matrices represent: $W^{21} = \overline{W}^{21} {V^{11}}^\top, \space W^{32}={U^{33}} \overline{W}^{32}$. The matrix $W^{21}$ takes inputs to the hidden layer. Since ${V^{11}}^\top$ ($={V^{11}}^{-1}$) can be thought of as a change of basis from input space to the space of input modes, $\overline{W}^{21}$ can be thought of as taking input modes to hidden neurons. Similarly, $W^{32}$ takes hidden neurons to outputs. Since $U^{33}$ can be thought of as a change of basis from the space of output modes to output space, $\overline{W}^{32}$ can be thought of as taking hidden neurons to output modes. We denote by $a^\alpha$ the $\alpha$th column vector of $\overline{W}^{21}$ and by $b^\alpha$ the $\alpha$th row vector of $\overline{W}^{32}$ (both $a^\alpha = a^\alpha(t)$ and $b^\alpha = b^\alpha(t)$ are time dependent). We refer to these vectors $a^\alpha$ and $b^\alpha$ as *connectivity modes* since they connect input and output modes to hidden neurons.

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
i.e. $\frac{da^\alpha}{dt}=-\frac{\partial E}{\partial a^\alpha}, \space \frac{db^\alpha}{dt}=-\frac{\partial E}{\partial b^\alpha}$. To minimize $E$, we need $a^\alpha \cdot b^\alpha \approx s_{\alpha} \delta_{\alpha \beta}$[^4]. So, if $E$ is minimal, it must be the case that connectivity modes of the same index point in similar directions since their inner product needs to approximately equal $s_{\alpha}$ (the strength of the $\alpha$th input-output mode). On the other hand, connectivity modes of distinct indices must be approximately orthogonal since their inner product needs to approximately equal 0. 

Suppose after some training that $E$ has become minimal and that $a^\alpha \cdot b^\alpha \approx s_{\alpha} \delta_{\alpha \beta}$ such that
$$
\overline{W}^{32}\overline{W}^{21} \approx S^{31}.
$$
Changing variables back,
$$
\begin{align*}
{U^{33}}^{\top}W^{32}W^{21}{V^{11}} &\approx S^{31} \\
\implies W^{32}W^{21} &\approx U^{33}S^{31}{V^{11}}^\top = \Sigma^{31}.
\end{align*}
$$
Thus, we have discovered exactly what our 3-layer linear network will learn through gradient descent: the input-output correlation matrix. The problem has been reduced to matrix factorization[^5].

That distinct connectivity modes must become orthogonal (in order for gradient descent on $E$ to settle on a solution) is a crucial observation. Once distinct connectivity modes are orthogonal, equations (5) and (6) become much easier to analyze since the second term in both equations go to 0. Then, the dependence between distinct connectivity modes completely dissolves and we are left with decoupled, independent differential equations. We can exploit this to extract even more information from our equations; namely, the time course of learning.
## How the network learns.
#### More simplifying assumptions: from vector to scalar equations.
Although we inferred what the network will look like after it has reached a solution in the previous section, we failed to derive any expression with a time dependence. This is unfortunate since we want to understand how the model will evolve throughout training. However, solving equations (5) and (6) from scratch is difficult because all the differential equations are intertwined. This is where an orthogonality assumption can be useful. 

We know that eventually distinct connectivity modes must become orthogonal. What if we assumed that they were orthogonal from the start? Specifically, we will assume that 
$$
a^\alpha(t) = a_{\alpha}(t) r^\alpha, \space b^\alpha(t) = b_{\alpha}(t)r^\alpha
$$
where $a_{\alpha}(t),b_{\alpha}(t)$ are scalar variables with a time dependence and $r^\alpha$ are vector constants such that $r^\alpha \cdot r^\beta = \delta_{\alpha \beta}$[^6]. This means that $a^\alpha \cdot b^\alpha = a_{\alpha}b_{\alpha}\cdot\delta_{{\alpha \beta}}$. If we change variables back, then throughout training, 
$$
\begin{align}
W^{32}W^{21} = U^{33} \text{diag}(u_{1}(t),\dots,u_{N_{2}}(t)){V^{11}}^\top  = U^{33} A(t){V^{11}}^\top
\end{align}
$$
where $A(t)$ is a diagonal matrix with the values $a_{\alpha}b_{\alpha}$ on the diagonal. We define $u_{\alpha}(t) \equiv a_{\alpha}(t)b_{\alpha}(t)$ as the 'effective singular value' (equivalently, the 'effective mode strength') of the network at time $t$. In this decoupled (orthogonal connectivity modes) regime, gradient descent on the network reduces to growing the effective singular values $u_{\alpha}$ toward $s_{\alpha}$ assuming we start with small $a_{\alpha}$ and $b_{\alpha}$.

Inserting our new variables into equations (5) and (6),
$$
\begin{align*}
\tau \frac{d}{dt}a_{\alpha}r^\alpha &= b_{\alpha}r^\alpha (s_\alpha - b_{\alpha}r^\alpha \cdot a_{\alpha}r^\alpha) - \sum_{\gamma \neq \alpha} b_{\alpha}r^\gamma (b_{\alpha}r^\gamma \cdot a_{\alpha}r^\alpha) \\ 
&=b_{\alpha}(s_{\alpha} - b_{\alpha}a_{\alpha})r^\alpha \\
\implies \tau \frac{d}{dt}a_{\alpha} &= b_{\alpha}(s_{\alpha}-a_{\alpha}b_{\alpha}) 
\\\\
\tau \frac{d}{dt}b_{\alpha}r^\alpha &= (s_\alpha - b_{\alpha}r^\alpha \cdot a_{\alpha}r^\alpha) a_{\alpha}r^\alpha - \sum_{\gamma \neq \alpha} (b_{\alpha}r^\alpha \cdot a_{\alpha}r^\gamma)a_{\alpha}r^\gamma \\ 
&=(s_{\alpha} - b_{\alpha}a_{\alpha})a_{\alpha}r^\alpha \\
\implies \tau \frac{d}{dt}b_{\alpha} &= a_{\alpha}(s_{\alpha}-a_{\alpha}b_{\alpha}).
\end{align*}
$$
Thus, we have successfully turned our vector equations (5) and (6) into decoupled, independent scalar equations[^7] :
$$
\begin{align}
\tau \frac{d}{dt}a_{\alpha} &= b_{\alpha}(s_{\alpha}-a_{\alpha}b_{\alpha})  \\
\tau \frac{d}{dt}b_{\alpha} &= a_{\alpha}(s_{\alpha}-a_{\alpha}b_{\alpha}).
\end{align}
$$
We need to make one last assumption to create an easily solvable differential equation: that $a_{\alpha} \approx b_{\alpha}$ at initialization. This is a reasonable assumption if we assume $a_{\alpha},b_{\alpha}$ are both initialized with very small values (which is often the case in practice).
#### A differential equation we can solve.
Consider the derivative of the effective singular value $u_{\alpha}(t)=a_{\alpha}(t)b_{\alpha}(t)$ using the product rule:
$$
\begin{align*}
\tau \frac{du_{\alpha}}{dt} = \tau \left( b_{\alpha} \frac{da_{\alpha}}{dt} + a_{\alpha} \frac{db_{\alpha}}{dt} \right) &= b_{\alpha}^2(s_{\alpha}-a_{\alpha}b_{\alpha}) + a_{\alpha}^2(s_{\alpha}-a_{\alpha}b_{\alpha}) \\ 
&= (s_{\alpha}-a_{\alpha}b_{\alpha})(a_{\alpha}^2+b_{\alpha}^2) \\
&\approx 2a_{\alpha}b_{\alpha}(s_{\alpha}-a_{\alpha}b_{\alpha}) \\
&= 2u_{\alpha}(s_{\alpha}-u_{\alpha})
\end{align*}
$$
where we used the assumption that $a\approx b$ to get $a^2+b^2\approx 2ab$. Now,
$$
\begin{align}
\tau \frac{du_{\alpha}}{dt} = 2u_{\alpha}(s_{\alpha}-u_{\alpha})
\end{align}
$$
is a separable differential equation that we can easily solve:
$$
\begin{align*}
\int_{{u_{\alpha}}^0}^{u_{\alpha}(t)} \frac{\tau}{2u(s_{\alpha}-u)} du &= \int_{t_0}^{t} dt' \\\\

\implies \Delta t &= \tau \int_{{u_{\alpha}}^0}^{u_{\alpha}(t)} \frac{1}{-2u^2 + 2us_{\alpha}} du \\\\
&= \frac{\tau}{2s_{\alpha}} \ln \frac{u_{\alpha}(t)(s_{\alpha}-{u_{\alpha}}^0)}{{u_{\alpha}}^0(s_{\alpha}-u_\alpha(t))}.
\end{align*}
$$
Suppose $u_{\alpha}$ starts at a small value i.e. $u_{\alpha}^0 = u_{\alpha}(t_{0}) =\varepsilon$ and $t_{0}=0$ . How long does it take for $u_{\alpha}(t)$ to equal $s_{\alpha}-\varepsilon$? 
$$
\begin{align*}
t &= \frac{\tau}{2s_{\alpha}} \ln{\frac{(s_{\alpha}-\varepsilon)^2}{\varepsilon^2}} \\
&= \frac{\tau}{s_{\alpha}} \ln \frac{s_{\alpha}-\varepsilon}{\varepsilon} \\
&= O\left( \frac{1}{s_{\alpha}} \right)
\end{align*}
$$
Thus, the amount of time it takes for the effective singular value $u_{\alpha}$ to grow to $s_{\alpha}$ for small initialization is inversely proportional to $s_{\alpha}$. The network learns larger singular values corresponding to more significant input-output modes first.

If we assume that $t_{0}=0$, then by rearranging terms,
$$
\begin{align*}
\frac{2ts_{\alpha}}{\tau} &= \ln{\frac{u_\alpha(t)(s_{\alpha}-{u_{\alpha}}^0)}{{u_{\alpha}}^0(s_{\alpha}-u_{f})}}\\
\implies e^{2ts_{\alpha}/\tau}&= \frac{u_\alpha(t)(s_{\alpha}-{u_{\alpha}}^0)}{{u_{\alpha}}^0(s_{\alpha}-u_\alpha(t))} \\
\implies u_\alpha(t)(s_{\alpha}-{u_{\alpha}}^0+{u_{\alpha}}^0e^{2s_{\alpha}t/\tau}) &={u_{\alpha}}^0s_{\alpha}e^{2s_{\alpha}t/\tau}\\\\
\implies u_\alpha(t) = a_{\alpha}(t)b_{\alpha}(t)&= \frac{s_{\alpha}e^{2s_{\alpha}t/\tau}}{e^{2s_{\alpha}t/\tau}-1+\frac{s_{\alpha}}{{u_{\alpha}}^0}} \\
&=\frac{s_{\alpha}}{1+\left( \frac{s_{\alpha}}{{u_{\alpha}}^0}-1 \right){e^{-2s_{\alpha}t/\tau}}}.
\end{align*}
$$
Thus, we have found an expression for how the effective singular values will evolve throughout training. This is a significant result since through equation (7), we were able to characterize the evolution of all the parameters of the network $W^{32}W^{21}$ using only the effective singular values $u_{\alpha}(t)$ (this characterization was derived from the assumption of initially decoupled connectivity modes).
## Findings.
The form of the expression for $u_{\alpha}(t)$ suggests that the effective singular values, or effective mode strengths, should follow a sigmoidal trajectory[^8]. These sigmoidal trajectories can be sharp and represent rapid transitions from unlearned to learned.

<center>
<img src="Screenshot 2026-02-11 at 12.29.19 AM.png" width="400">
<figcaption>Figure 4 Red represents analytical curves, blue represents linear curves and green represents nonlinear curves</figcaption>
</center>

We made a few assumptions to get to this point; the main one being that initially the connectivity modes were decoupled. These assumptions allowed us to simplify the problem from many intertwined matrix equations all the way down to decoupled scalar equations. Ultimately, all our assumptions are vindicated by the fact that the results we ended up with approximate the real thing well (see figure 4). And they are of course also justified by the fact that they make the math easier and arguably more elegant.

[^1]: From equations (1) and (2) follows a conservation law. Observe that $\tau \frac{dW^{21}}{dt}{W^{21}}^\top = {W^{32}}^\top \tau \frac{dW^{32}}{dt}$. This implies that $\frac{dW^{21}}{dt}{W^{21}}^\top - {W^{32}}^\top \frac{dW^{32}}{dt} = {W^{21}}\frac{dW^{21}}{dt}^\top - \frac{dW^{32}}{dt}^\top{W^{32}}  = 0$ where for the second equality we took the transpose of both sides. From this and the product rule, it follows that $\frac{d}{dt}(W^{21}{W^{21}}^\top - {W^{32}}^\top W^{32}) = 0$. So, the quantity $W^{21}{W^{21}}^\top - {W^{32}}^\top W^{32}$ is conserved throughout time.

[^2]: Observe that in figure 3, unlike the input modes, the output modes do not form a complete basis for the feature space. This is essentially because four categorical directions are enough to completely characterize the structure of the data. 

[^3]: Don't worry too much if this explanation is in fact not intuitive and seems to only complicate things. The important result from this change of variables is that the equations get much simpler.

[^4]: Here, $\delta_{\alpha \beta}=1$ if $\alpha=\beta$ and $\delta_{\alpha \beta}=0$ if $\alpha \neq \beta$.

[^5]: A slight caveat: usually the hidden layer acts as a sort of bottleneck in the sense that $N_{2} < N_{1},N_{3}$. This means that the rank of $W^{32}W^{21}$ will be constrained by the size of the hidden layer. In this case, the network will only be able to learn the top $N_{2}$ singular vectors of $\Sigma^{31}$.

[^6]: A similar caveat to footnote 5: if $N_{2}<N_{1},N_{3}$, i.e. the hidden layer serves as a bottleneck, then we assume $a^\alpha = a_{\alpha} r^\alpha, \space b^\alpha = b_{\alpha}r^\alpha$ for $\alpha=\{1,\dots,N_{2}\}$ and $a^\alpha=b^\alpha=0$ for $\alpha=\{N_{2}+1,\dots\}$.

[^7]: Similar to footnote 1, we can infer a conservation law from equations (8) and (9): $\frac{d}{dt}(a^2-b^2)=0$. This means that all possible trajectories of $a$ and $b$ must lie on hyperbolas of constant $a^2-b^2=k$ in the $(a,b)$ plane.

[^8]: Recall that a sigmoid function has the form: $\frac{1}{1+e^{-x}}$.
