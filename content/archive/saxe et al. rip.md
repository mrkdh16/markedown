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

