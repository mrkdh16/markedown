---
title: saxe et al. rip
draft: true
tags:
---
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
Thus, we have discovered exactly what our 2-layer linear network will learn through gradient descent: the input-output correlation matrix. The problem has been reduced to matrix factorization[^5].

That distinct connectivity modes must become orthogonal (in order for gradient descent on $E$ to settle on a solution) is a crucial observation. This is the "alignment" mentioned in the Plan of Attack. Once distinct connectivity modes are orthogonal, equations (5) and (6) become much easier to analyze since the second term in both equations go to 0. Then, the dependence between distinct connectivity modes completely dissolves and we are left with decoupled, independent differential equations. Intuitively, this means the model can allocate entirely separate, non-interfering sub-networks within the hidden layer to process distinct modes. We can exploit this to extract even more information from our equations; namely, the time course of learning.