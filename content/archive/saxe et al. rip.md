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


# Why study matrix factorization and deep linear networks?

## Word2vec and matrix factorization

(QWEM widget)

We first motivate the study of matrix factorization and deep linear networks through Word2vec, one of the most influential models in NLP. Word2vec is a minimal language model that learns vector representations of words by modeling the probability of finding two given words co-occurring in natural text (Mikolov et al., 2013). Despite its simplicity—the model is just a two-layer linear network—the resulting models succeed on a variety of semantic understanding tasks. One striking ability exhibited by these embeddings is analogy completion: most famously, man − woman $\approx$ king − queen, where man is the embedding for the word "man" and so on.

How does a model this simple learn something so structured? The connection between Word2vec and matrix factorization was made explicit in Karkada et al. (2025), where the authors showed that learning Word2vec embeddings is equivalent to factorizing a target matrix built from language co-occurrence statistics. Concretely, if $W$ is the matrix whose $i$th row is the learned embedding of the $i$th word, then $$ \begin{align*} \arg\min_W (\text{word2vec loss}) &\approx \arg\min_W (\text{quadratic approx. of word2vec loss}) \ &= \underbrace{\arg\min_W |WW^\top - M^_|_F^2}_{\substack{\text{matrix factorization} \ \text{loss}}} \end{align_} $$ where $M^*$ is some matrix where the $ij$th element measures how much the co-occurrence of the $i$th and $j$th word deviates from pure random chance. So, by studying matrix factorization, we can indirectly study how a simple language model learns semantically meaningful representations.

## Matrix factorization and linear networks

But matrix factorization is not confined to self-supervised models like Word2vec. Supervised learning with linear networks reduces to the same problem. Consider a network trained to map items to their properties—say, given "Canary" as a one-hot input $x^\mu$, predict a vector of features $y^\mu$ like "Can Fly," "Has Wings," or "Is Yellow." Under the assumption that input data is whitened (input covariance $\Sigma_{xx}=\sum_{\mu}x^\mu {x^\mu}^\top$ equals the identity), the gradient flow equations for the weight matrices drive the network toward a solution satisfying $W_L\dots W_1 \approx \Sigma_{yx}$, where $\Sigma_{yx} = \sum_{\mu} y^\mu {x^\mu}^\top$ is the input-output correlation matrix.

(input-output covariance matrix figure or maybe widget)

The learning problem is again matrix factorization: decompose the statistical structure of the data into a product of weight matrices. So, by studying the learning dynamics of deep linear networks we are effectively studying the learning dynamics of matrix factorization.

## Nonlinear learning phenomena in linear networks

Another reason that matrix factorization and deep linear networks deserve our attention is that they exhibit interesting nonlinear learning phenomena.

(linear vs nonlinear simulation widget)

Watch what happens when you train a depth-3 tanh network from small initialization: the loss _plateaus_ for long stretches, then _rapidly_ drops. To understand why, we can peek inside the network as it trains. Pick a weight matrix—here we'll use the first one—and decompose it into its principal components via the SVD. Each singular value measures how strongly the network has learned one independent mode of the input-output relationship. You'll see that they aren't learned all at once. Instead, they're learned _sequentially_: one singular value 'grows' from near-zero to its final magnitude while the others wait their turn. And there's an order to it: the largest singular values, corresponding to the most important modes of the data, are learned first. Crucially, these dynamics depend on initialization scale: all networks here are initialized with small random weights, which is what allows modes to emerge one at a time. With large initialization, all singular values grow simultaneously and the stepwise structure becomes harder to observe.

These are fascinating dynamics, and you might assume they emerge from the complexity of nonlinear activations. But here's the surprising part: switch to the left-hand panel and select a deep _linear_ network. You'll see the same stepwise loss (clearest in depth-3), the same sequential learning of singular values, the same largest-first ordering; in fact, these phenomena become even clearer. A depth-1 linear network shows none of this—just smooth exponential decay—so these phenomena are a signature of _depth_, not nonlinearity.

Deep linear networks are a rare breed of highly mathematically tractable models that not only retain interesting nonlinear learning phenomena, but also underlie real-world systems like Word2vec—and unlike their nonlinear cousins, we can solve for their learning dynamics exactly.

---

# Solving for exact learning dynamics

We follow the derivation of Saxe et al. (2014) while making some simplifications along the way.

## Setup

We want to use deep linear networks to solve a supervised learning problem. Concretely, we are presented with $P$ pairs of data points ${x^\mu, y^\mu}_{\mu=1}^P$, each consisting of an input point and an output point. We want to learn a function $\hat{f}$, i.e. a model, such that $\hat{f}(x^\mu) \approx y^\mu$ for all $\mu = 1, \dots, P$. Our model $\hat{f}$ is _linear_ because it is linear in its parameters and it is _deep_ because it consists of many layers of parameters: $$ \hat{f}(x) \equiv W_L \dots W_1 x. $$ The matrices $W_L, \dots, W_1$ are the parameters of the model, or the _weights_. To learn an appropriate set of weights, or to _train_ the model, we apply gradient descent to the mean squared error loss: $$ \mathcal{L}_{\text{mse}}(W_1, \dots, W_L) = \sum_{\mu=1}^{P} \frac{1}{2} |y^\mu - W_L \dots W_1 x^\mu|_2^2. $$

### Two-layer linear networks

In order to keep the math as simple as possible, we will solve for the dynamics of a 2-layer linear network $\hat{f}(x) = W_2 W_1 x$, though a similar procedure applies for deeper networks of arbitrary depth. For a 2-layer network, the mean squared error loss is: $$ \mathcal{L}_{\text{mse}}(W_1, W_2) = \sum_{\mu=1}^{P} \frac{1}{2} |y^\mu - W_2 W_1 x^\mu|_2^2. $$ We assume that $x^\mu \in \mathbb{R}^{N_1}$, $y^\mu \in \mathbb{R}^{N_3}$, $W_1$ is $N_2 \times N_1$, and $W_2$ is $N_3 \times N_2$, where $N_2$ is the hidden layer dimension.

To train the model, we run gradient descent: at each step, we compute the gradient of the loss with respect to each weight matrix using backpropagation, then update the weights by taking a small step in the negative gradient direction. For example, the update rule for $W_1$ is: $$ \Delta W_1 = -\lambda \frac{\partial \mathcal{L}}{\partial W_1} $$ where $\lambda$ is the learning rate — a small positive number controlling the step size. To make the resulting equations amenable to the tools of differential equations, we take the _continuous-time limit_: we imagine shrinking the learning rate to zero while taking infinitely many steps, so that the discrete updates become continuous time derivatives. This is called _gradient flow_, and it replaces the update rule above with: $$ \frac{dW_1}{dt} = -\frac{\partial \mathcal{L}}{\partial W_1}. $$ Computing the gradients via backpropagation (the reader is encouraged to verify this by applying the chain rule) and writing the result in terms of summary statistics of the data, we arrive at the gradient flow equations: $$ \begin{align} \frac{dW_1}{dt} &= W_2^\top(\Sigma_{yx} - W_2 W_1 \Sigma_{xx}) \ \frac{dW_2}{dt} &= (\Sigma_{yx} - W_2 W_1 \Sigma_{xx}) W_1^\top \end{align} $$ where $\Sigma_{yx} \equiv \sum_\mu y^\mu {x^\mu}^\top$ is the input-output correlation matrix and $\Sigma_{xx} \equiv \sum_\mu x^\mu {x^\mu}^\top$ is the input correlation matrix. Notice that all the information from the training data enters only through these two matrices.

(interactive widget: gradient flow derivation. Could let the reader toggle between the discrete gradient descent updates and the continuous-time limit, or step through the backpropagation chain rule to see how the gradients produce the $\Sigma_{yx}$ and $\Sigma_{xx}$ terms.)

A useful observation: from equations (1) and (2), one can show that $\frac{d}{dt}(W_2^\top W_2 - W_1 W_1^\top) = 0$, meaning the difference $W_2^\top W_2 - W_1 W_1^\top$ is a conserved quantity throughout training.

### Reading the gradient flow equations

Before we start simplifying, let's build some intuition for what equations (1) and (2) are telling us. The weights stop changing when $\frac{dW_1}{dt}, \frac{dW_2}{dt} \approx 0$, which requires $W_2 W_1 \Sigma_{xx} \approx \Sigma_{yx}$. So $\Sigma_{yx}$ is the target the network is chasing: it encodes the statistical structure of the input-output relationship. The term $\Sigma_{xx}$ plays a secondary role — it rescales the model's current guess $W_2 W_1$ but doesn't directly drive the gradient. This is easiest to see at small initialization: when the weights are tiny, $W_2 W_1 \Sigma_{xx} \approx 0$, and the gradient is almost entirely determined by $\Sigma_{yx}$.

### Whitened inputs and the reduction to matrix factorization

Our first simplifying assumption is that the input data is _whitened_, meaning $\Sigma_{xx} = I$. Back when the original Saxe et al. (2014) paper was published, whitening the inputs was common practice. Today this is more of a tractability assumption — without it, the problem becomes NP-hard. With $\Sigma_{xx} = I$, equations (1) and (2) simplify to: $$ \begin{align} \frac{dW_1}{dt} &= W_2^\top(\Sigma_{yx} - W_2 W_1) \ \frac{dW_2}{dt} &= (\Sigma_{yx} - W_2 W_1) W_1^\top \end{align} $$ and the learning problem reduces cleanly to matrix factorization: the network must find $W_2$ and $W_1$ such that $W_2 W_1 \approx \Sigma_{yx}$.

## The natural coordinate system

Even after whitening, equations (3) and (4) are complicated: they are coupled and nonlinear (each weight's rate of change depends on every other weight). Our strategy is to find a coordinate system in which these dynamics _decouple_ into independent scalar equations — one per "mode" of the data — that we can solve one at a time.

The natural coordinate system comes from the SVD of the target matrix. Consider the compact singular value decomposition of $\Sigma_{yx}$: $$ \Sigma_{yx} = U S_* V^\top = \sum_{\alpha=1}^r s_\alpha , \mathbf{u}_\alpha \mathbf{v}_\alpha^\top $$ where $r$ is the rank of $\Sigma_{yx}$, $\mathbf{u}_\alpha$ and $\mathbf{v}_\alpha$ are the left and right singular vectors (columns of $U$ and $V$), and $s_1 \geq s_2 \geq \cdots \geq s_r > 0$ are the singular values.

(interactive widget: SVD explorer for $\Sigma_{yx}$. The reader could manipulate a small example input-output correlation matrix — say the canary/salmon/oak/rose toy task — and see how the SVD decomposes it into modes. Hovering over a mode highlights which items and which properties it groups together.)

Why is the SVD the right coordinate system? The SVD decomposes the data into independent "modes." Each mode $\alpha$ pairs an _input mode_ $\mathbf{v}_\alpha$ (a direction in input space) with an _output mode_ $\mathbf{u}_\alpha$ (a direction in output space) and a _strength_ $s_\alpha$ (how important that mode is). For example, one mode might act as an "animal vs. plant" axis: the input mode assigns positive values to animals and negative values to plants, while the output mode assigns positive values to animal-like properties (can fly, can swim) and negative values to plant-like properties (has roots, has petals). The singular value tells you how prominent this distinction is in the data. Larger singular values correspond to coarser, more important structure; smaller ones correspond to finer details.

## From matrix equations to scalar dynamics

### Rotating into the SVD basis

We rotate the weight matrices into the coordinate system defined by the SVD of $\Sigma_{yx}$: $$ \tilde{W}_1 \equiv W_1 V, \qquad \tilde{W}_2 \equiv U^\top W_2. $$ What does this rotation buy us? If we substitute these definitions into equations (3) and (4) and use $\Sigma_{yx} = U S_* V^\top$, we get (the reader is encouraged to verify this): $$ \begin{align} \frac{d\tilde{W}_1}{dt} &= \tilde{W}_2^\top (S_* - \tilde{W}_2 \tilde{W}_1) \ \frac{d\tilde{W}_2}{dt} &= (S_* - \tilde{W}_2 \tilde{W}_1) \tilde{W}_1^\top \end{align} $$

These equations have the same structure as before, but now the target matrix is $S_*$, which is _diagonal_. This is real progress: the diagonal structure of the target is what will eventually let us decouple the system. But we aren't there yet — the rotated weights $\tilde{W}_1$ and $\tilde{W}_2$ are still full matrices, so the dynamics are still coupled.

### Convergence vs. strong alignment

Here is a subtle but important distinction that will determine whether we can actually solve the dynamics.

At convergence, the _product_ $\tilde{W}_2 \tilde{W}_1$ must approximate $S_*$, which is diagonal. This is just the convergence condition — it says the network has found the right input-output map. This will be true at any minimum of the loss, _regardless_ of how we initialize the weights.

But the product being diagonal _at convergence_ is not enough to decouple the dynamics _during training_. To solve the system, we need the product $\tilde{W}_2 \tilde{W}_1$ to be diagonal at _every point in time_, not just at the end. This is a much stronger requirement, and it constrains how the weight matrices relate to the structure of the data. Let's work out exactly what it requires.

Write the SVD of each weight matrix as $W_2 = U_2 D_2 V_2^\top$ and $W_1 = U_1 D_1 V_1^\top$. Then the rotated weights are: $$ \tilde{W}_2 = U^\top W_2 = (U^\top U_2), D_2, V_2^\top, \qquad \tilde{W}_1 = W_1 V = U_1, D_1, (V_1^\top V) $$ and their product is: $$ \tilde{W}_2 \tilde{W}_1 = (U^\top U_2), D_2, (V_2^\top U_1), D_1, (V_1^\top V). $$

This product is diagonal (i.e. equal to $D_2 D_1$) when three orthogonality conditions are satisfied:

1. $U_2 = U$ — the left singular vectors of $W_2$ align with the output modes of the data.
2. $V_1 = V$ — the right singular vectors of $W_1$ align with the input modes of the data.
3. $V_2 = U_1$ — the right singular vectors of $W_2$ match the left singular vectors of $W_1$, i.e. the two weight matrices are coherent across the hidden layer.

When all three hold, the rotated weights simplify to $\tilde{W}_2 = D_2 V_2^\top$ and $\tilde{W}_1 = U_1 D_1$, and the product becomes $\tilde{W}_2 \tilde{W}_1 = D_2, V_2^\top U_1, D_1 = D_2 D_1$, which is diagonal. We call the conjunction of these three conditions **strong alignment**.

Notice that strong alignment does _not_ require $\tilde{W}_1$ and $\tilde{W}_2$ to each be diagonal individually — they can each still have a nontrivial orthogonal factor ($U_1$ and $V_2^\top$ respectively). What matters is that these factors cancel in the product. The special case where $\tilde{W}_1$ and $\tilde{W}_2$ are each individually diagonal corresponds to the additional condition $V_2 = U_1 = I$ — we will assume this simplest case going forward.

Why does strong alignment decouple the dynamics? When $\tilde{W}_2 \tilde{W}_1$ is diagonal throughout training, the error matrix $S_* - \tilde{W}_2 \tilde{W}_1$ is also diagonal. Look back at equations (5) and (6): the right-hand sides become products involving only diagonal matrices, so each diagonal entry evolves independently — mode $\alpha$ only talks to mode $\alpha$.

The distinction between the convergence condition and strong alignment is central to everything that follows:

- **Convergence condition** (product is diagonal _at the end_): $\tilde{W}_2 \tilde{W}_1 \approx S_*$. Holds at any minimum. Does not help us solve the dynamics.
- **Strong alignment** (product is diagonal _throughout training_): requires the three orthogonality conditions above. This is what decouples the dynamics and makes the system solvable.

Strong alignment is a feature of the **rich regime** — the regime where weights are initialized small and must grow substantially during training. In this regime, the growth process naturally produces weight matrices whose singular vectors satisfy the three conditions above. In the **lazy regime** (large initialization), the weights barely move from their random starting values. The product $\tilde{W}_2 \tilde{W}_1$ converges to $S_*$ through small perturbations, but the individual weight matrices never develop the aligned singular vector structure that strong alignment requires. No clean modal structure emerges inside the network, and the interesting phenomena we saw in the introduction (sequential learning, plateaus, sudden transitions) do not appear.

(interactive widget: visualize the distinction. Show two networks converging to the same input-output map. In the rich regime, the singular vectors of $W_1$ and $W_2$ align with the modes of the data — hidden neurons specialize. In the lazy regime, the product converges but the singular vectors of the individual weight matrices remain random. Sliders for initialization scale let the reader see the transition.)

Why should we expect strong alignment to hold in the rich regime? Two arguments. First, at small random initialization, high-dimensional random vectors are approximately orthogonal, so the weight matrices already start close to a configuration where distinct modes don't interfere. Second, empirically, alignment happens fast relative to growth — by the time the effective singular values begin their sigmoidal transitions, the three orthogonality conditions are already approximately satisfied. (For a more detailed argument, see [link to supplementary note on quick alignment].)

### The decoupled scalar equations

We now assume strong alignment in its simplest form: $\tilde{W}_1$ and $\tilde{W}_2$ are each diagonal, with diagonal entries $a_\alpha(t)$ and $b_\alpha(t)$ respectively. The $\alpha$th _effective singular value_ of the network is $\hat{s}_\alpha(t) = a_\alpha(t) , b_\alpha(t)$. Since $\tilde{W}_2 \tilde{W}_1$ is diagonal, all off-diagonal coupling in equations (5) and (6) vanishes, and each mode $\alpha$ evolves independently: $$ \begin{align} \frac{da_\alpha}{dt} &= b_\alpha(s_\alpha - a_\alpha b_\alpha) \ \frac{db_\alpha}{dt} &= a_\alpha(s_\alpha - a_\alpha b_\alpha) \end{align} $$

These are the decoupled scalar equations we were after. Each mode's dynamics depend only on its own state $(a_\alpha, b_\alpha)$ and its target singular value $s_\alpha$ — there is no interaction with other modes. We started with a complicated system of coupled matrix differential equations and reduced it, through a change of coordinates and the strong alignment assumption, to a collection of independent two-variable systems.

From equations (7) and (8), we can verify that $\frac{d}{dt}(a_\alpha^2 - b_\alpha^2) = 0$: the quantity $a_\alpha^2 - b_\alpha^2$ is conserved throughout training for each mode. This is the scalar analogue of the matrix-level conservation law $\frac{d}{dt}(W_2^\top W_2 - W_1 W_1^\top) = 0$ that we noted earlier. We make one final assumption: that $a_\alpha(0) \approx b_\alpha(0)$ at initialization. This is reasonable when both are initialized to small random values. Since $a_\alpha^2 - b_\alpha^2$ is conserved, starting with $a_\alpha \approx b_\alpha$ ensures they stay approximately equal throughout training.

## Solving the dynamics

We can now reduce each two-variable system to a single equation. Consider the effective singular value $\hat{s}_\alpha = a_\alpha b_\alpha$ and apply the product rule: $$ \frac{d\hat{s}_\alpha}{dt} = b_\alpha \frac{da_\alpha}{dt} + a_\alpha \frac{db_\alpha}{dt} = (a_\alpha^2 + b_\alpha^2)(s_\alpha - a_\alpha b_\alpha). $$ Using $a_\alpha \approx b_\alpha$, we have $a_\alpha^2 + b_\alpha^2 \approx 2 a_\alpha b_\alpha = 2\hat{s}_\alpha$, giving us: $$ \begin{align} \frac{d\hat{s}_\alpha}{dt} = 2\hat{s}_\alpha(s_\alpha - \hat{s}_\alpha). \end{align} $$

This is a logistic-type ODE. It is separable, meaning we can move all the $\hat{s}_\alpha$ terms to one side and the $t$ terms to the other and integrate directly. With initial condition $\hat{s}_\alpha(0) = \hat{s}_\alpha^0$, the solution is:

$$ \boxed{\hat{s}_\alpha(t) = \frac{s_\alpha}{1 + \left(\frac{s_\alpha}{\hat{s}_\alpha^0} - 1\right) e^{-2 s_\alpha t}}} $$

This is a sigmoid. Each effective singular value starts near its initial value $\hat{s}_\alpha^0$, stays there for a while (the plateau), then rapidly transitions to its target value $s_\alpha$ (the jump), then saturates.

(interactive widget: the reader should be able to play with this solution directly. Sliders for $s_\alpha$ (target singular value) and $\hat{s}_\alpha^0$ (initialization) let them see how the sigmoid trajectory changes. Multiple modes can be shown simultaneously to illustrate sequential learning. Bonus: overlay the analytical curves on a live simulation of gradient descent on a small linear network to reproduce the comparison in Saxe et al. Figure 4.)

### The full network trajectory

Under strong alignment, the full network map at time $t$ is completely characterized by the collection of sigmoids: $$ W_2(t), W_1(t) = U, \hat{S}(t), V^\top = \sum_\alpha \hat{s}_\alpha(t), \mathbf{u}_\alpha \mathbf{v}_\alpha^\top $$ where $\hat{S}(t) = \text{diag}(\hat{s}_1(t), \dots, \hat{s}_r(t))$. The network shares the same singular vectors as $\Sigma_{yx}$ throughout training — only the singular values change, each following its own sigmoidal trajectory.

## What the solution tells us

### Sequential learning and timescales

How long does it take for mode $\alpha$ to be learned? Starting from $\hat{s}_\alpha^0 = \varepsilon$ (small), the time to reach $\hat{s}_\alpha(t) \approx s_\alpha - \varepsilon$ scales as: $$ t_\alpha \sim \frac{1}{s_\alpha} \ln \frac{s_\alpha}{\varepsilon} = O!\left(\frac{1}{s_\alpha}\right). $$

The learning time is inversely proportional to the singular value. Modes with larger singular values — the coarse, dominant structure of the data — are learned first. Finer details (smaller $s_\alpha$) take longer. This is a concrete, testable prediction: the _order_ in which a deep linear network learns features of the data is determined by the singular value spectrum of $\Sigma_{yx}$.

### Sigmoidal transitions are a signature of depth

Each effective singular value follows a sigmoid: slow initial growth, a rapid transition, then saturation. The sharpness of the transition is controlled by the ratio $s_\alpha / \hat{s}_\alpha^0$ — a larger target relative to initialization produces a sharper jump.

Compare this to a depth-1 linear network ($\hat{y} = Wx$), where gradient flow on the same loss gives simple exponential convergence with no plateau-then-jump structure. The sigmoidal trajectory — and the plateaus and sudden transitions it produces in the loss curve — is a signature of _depth_, not nonlinearity.

(interactive widget: side-by-side comparison of depth-1 vs depth-2 learning dynamics for the same target matrix. The depth-1 case shows smooth exponential convergence; the depth-2 case shows the sigmoid cascade. Could reuse or link back to the simulation widget from the introduction, now with the analytical curves overlaid.)

### Plateaus and sudden drops in the loss

The sequential, sigmoidal learning of individual modes explains the staircase-like loss curves we observed in the introduction. Each plateau corresponds to a period where no new mode is transitioning; each sudden drop corresponds to a new mode "switching on." Since each mode transitions at a different time (set by $1/s_\alpha$), the loss curve — which is a sum over all modes — looks like a cascade of drops.

(interactive widget: show the loss as a function of time, decomposed into per-mode contributions. As each sigmoid transitions, the corresponding chunk of loss disappears. The reader could toggle individual modes on and off to see their contributions.)

## Conclusion

Let's take stock of the assumptions that got us here. We assumed whitened inputs ($\Sigma_{xx} = I$), strong alignment of the individual weight matrices with the SVD basis of $\Sigma_{yx}$ (a rich-regime phenomenon), and balanced initialization ($a_\alpha(0) \approx b_\alpha(0)$). These allowed us to reduce the coupled matrix dynamics all the way down to independent scalar ODEs — one per mode — each admitting an exact sigmoidal solution.

The ultimate validation is empirical: these analytical curves closely match both the full (non-decoupled) dynamics of deep linear networks _and_ the dynamics of nonlinear networks with tanh activations (see Saxe et al., 2014, Figure 4). The fact that our theory — which assumed strong alignment — approximates reality well provides indirect evidence that strong alignment is indeed a good description of what happens in the rich regime.

(interactive widget: the capstone widget could let the reader set up a full experiment — choose a target $\Sigma_{yx}$ (or pick a preset like the animal/plant example), select initialization scale, and watch the training dynamics unfold alongside the analytical predictions. This would tie together all the ideas in the post.)

This arc — making simplifying assumptions, deriving clean theory, generating predictions, and checking them against experiment — is the scientific method as applied to understanding neural networks.

---

**Sources:** [Exact solutions to the nonlinear dynamics of learning in deep linear neural networks](https://arxiv.org/pdf/1312.6120) (Saxe et al., 2014), [A mathematical theory of semantic development in deep neural networks](https://arxiv.org/pdf/1810.10531) (Saxe et al., 2018), [Emergent Analogical Reasoning in Large Language Models](https://arxiv.org/abs/2411.xxxxx) (Karkada et al., 2025)