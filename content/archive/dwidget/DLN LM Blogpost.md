---
title: DLN LM Blogpost
draft: true
tags:
---
# Why study matrix factorization and deep linear networks?
## Word2vec and matrix factorization

(QWEM widget)

We first motivate the study of matrix factorization and deep linear networks through Word2vec, one of the most influential models in natural language processing (NLP). Word2vec is a minimal language model that learns vector representations of words by modeling the probability of finding two given words co-occurring in natural text (Mikolov et al., 2013). Despite its simplicity—the model is essentially just a two-layer linear network—the resulting models succeed on a variety of semantic understanding tasks. One striking ability exhibited by these embeddings is analogy completion: most famously, man − woman $\approx$ king − queen, where man is the embedding for the word "man" and so on.

How does a model this simple learn something so structured? The connection between Word2vec and matrix factorization was made explicit in Karkada et al. (2025), where the authors showed that learning Word2vec embeddings is equivalent to factorizing a target matrix built from language co-occurrence statistics. Concretely, if $W$ is the matrix whose $i$th row is the learned embedding of the $i$th word, then 
$$ 
\begin{align*} \arg\min_W (\text{word2vec loss}) &\approx \arg\min_W (\text{quadratic approx. of word2vec loss}) \\ &= \underbrace{\arg\min_W \|WW^\top - M^*\|_F^2}_{\substack{\text{matrix factorization} \\ \text{loss}}} \end{align*} $$
where $M^*$ is some matrix where the $ij$th element measures how much the co-occurrence of the $i$th and $j$th word deviates from pure random chance. So, by studying matrix factorization, we can indirectly study how a simple language model learns semantically meaningful representations.
## Matrix factorization and linear networks
But matrix factorization is not confined to self-supervised models like Word2vec. Supervised learning with linear networks reduces to the same problem. Consider a network trained to map items to their properties: say, given "Canary" as a one-hot input $x^\mu$, predict a vector of features $y^\mu$ like "Can Fly," "Has Wings," or "Is Yellow." Under the assumption that input data is whitened (input covariance $\Sigma_{xx}=\sum_{\mu}x^\mu {x^\mu}^\top$ equals the identity), the gradient flow equations for the weight matrices drive the network toward a solution satisfying $W_L\dots W_1 \approx \Sigma_{yx}$, where $\Sigma_{yx} = \sum_{\mu} y^\mu {x^\mu}^\top$ is the input-output correlation matrix.

(input-output covariance matrix figure or maybe widget)

The learning problem is again matrix factorization: decompose the statistical structure of the data into a product of weight matrices. So, by studying the learning dynamics of deep linear networks we are effectively studying the learning dynamics of matrix factorization.
## Nonlinear learning phenomena in linear networks
Another reason that matrix factorization and deep linear networks deserve our attention is that they exhibit interesting nonlinear learning phenomena.

(linear vs nonlinear simulation widget)

Watch what happens when you train a depth-3 tanh network from small initialization: the loss _plateaus_ for long stretches, then _rapidly_ drops. To understand why, we can peek inside the network as it trains. Pick a weight matrix—here we'll use the first one—and decompose it into its principal components via the SVD. Each singular value measures how strongly the network has learned one independent mode of the input-output relationship. You'll see that they aren't learned all at once. Instead, they're learned _sequentially_: one singular value 'grows' from near-zero to its final magnitude while the others wait their turn. And there's an order to it: the largest singular values, corresponding to the most important modes of the data, are learned first. Crucially, these dynamics depend on initialization scale: all networks here are initialized with small random weights, which is what allows modes to emerge one at a time. With large initialization, all singular values grow simultaneously and the stepwise structure becomes harder to observe.

These are fascinating dynamics, and you might assume they emerge from the complexity of nonlinear activations. But here's the surprising part: switch to the left-hand panel and select a deep _linear_ network. You'll see the same stepwise loss (clearest in depth-3), the same sequential learning of singular values, the same largest-first ordering; in fact, these phenomena become even clearer. A depth-1 linear network shows none of this, so these phenomena are a signature of _depth_, not nonlinearity.

Deep linear networks are a rare breed of highly mathematically tractable models that not only retain interesting nonlinear learning phenomena, but also underlie real-world systems like Word2vec—and unlike their nonlinear cousins, we can solve for their learning dynamics exactly.
# Solving for exact learning dynamics
We follow the derivation of Saxe et al. (2014) while making some simplifications and clarifications along the way.
## Setup
We want to use deep linear networks to solve a supervised learning problem. Concretely, we are presented with $P$ pairs of data points $\{ x^\mu, y^\mu\}_{\mu=1}^P$, each consisting of an input point and an output point. We want to learn a function $\hat{f}$, i.e. a model, such that $\hat{f}(x^\mu) \approx y^\mu$ for all $\mu = 1, \dots, P$. Our model $\hat{f}$ is _linear_ because it is linear in its parameters and it is _deep_ because it consists of many layers of parameters: $$ \hat{f}(x) \equiv W_L \dots W_1 x. $$The matrices $W_L, \dots, W_1$ are the parameters of the model, or the _weights_. To learn an appropriate set of weights, or to _train_ the model, we apply gradient descent to the mean squared error loss: 
$$ \mathcal{L}_{\text{mse}}(W_1, \dots, W_L) = \sum_{\mu=1}^{P} \frac{1}{2} ||y^\mu - W_L \dots W_1 x^\mu||_2^2. 
$$
### Two-layer linear networks
In order to keep the math as simple as possible, we will solve for the dynamics of a minimally deep network: a 2-layer linear network $\hat{f}(x) = W_2 W_1 x$. A similar procedure applies for deeper networks of arbitrary depth. For a 2-layer network, the mean squared error loss is: $$ \mathcal{L}_{\text{mse}}(W_1, W_2) = \sum_{\mu=1}^{P} \frac{1}{2} ||y^\mu - W_2 W_1 x^\mu||_2^2. $$We assume that $x^\mu \in \mathbb{R}^{N_1}$, $y^\mu \in \mathbb{R}^{N_3}$, $W_1$ is $N_2 \times N_1$, and $W_2$ is $N_3 \times N_2$, where $N_2$ is the hidden layer dimension. To train the model, we run gradient descent: at each step, we compute the gradient of the loss with respect to each weight matrix using backpropagation, then update the weights by taking a small step in the negative gradient direction. For example, the update rule for $W_1$ is:
$$
\Delta W_1 = -\lambda \frac{\partial \mathcal{L}}{\partial W_1}
$$
where $\lambda$ is the learning rate, a small positive number controlling the step size. To make the resulting equations amenable to the tools of differential equations, we take the *continuous-time limit*: we imagine shrinking the learning rate to zero while taking infinitely many steps, so that the discrete updates become continuous time derivatives. This is called *gradient flow*, and it replaces the update rule above with:
$$
\frac{dW_1}{dt} = -\frac{\partial \mathcal{L}}{\partial W_1}.
$$
Computing the gradients via backpropagation and writing the result in terms of summary statistics of the data, we arrive at the gradient flow equations:
$$
\begin{align*}
\frac{dW_1}{dt} &= W_2^\top(\Sigma_{yx} - W_2 W_1 \Sigma_{xx}) \tag{1}\\
\frac{dW_2}{dt} &= (\Sigma_{yx} - W_2 W_1 \Sigma_{xx}) W_1^\top \tag{2}
\end{align*}
$$
where $\Sigma_{yx} \equiv \sum_\mu y^\mu {x^\mu}^\top$ is the input-output correlation matrix and $\Sigma_{xx} \equiv \sum_\mu x^\mu {x^\mu}^\top$ is the input correlation matrix. Observe that all the information from the training data enters only through these two matrices.

A useful observation: from equations (1) and (2), one can show that $\frac{d}{dt}(W_2^\top W_2 - W_1 W_1^\top) = 0$, meaning the difference $W_2^\top W_2 - W_1 W_1^\top$ is a conserved quantity throughout training.
### Reading the gradient flow equations
Before we start simplifying, let's build some intuition for what equations (1) and (2) are telling us. The weights stop changing when $\frac{dW_1}{dt}, \frac{dW_2}{dt} \approx 0$, which requires $W_2 W_1 \Sigma_{xx} \approx \Sigma_{yx}$. So $\Sigma_{yx}$, the matrix that encodes the statistical structure of the input-output relationship, is the target the network is chasing and thus drives the learning. The term $\Sigma_{xx}$ plays a secondary role; it rescales the model's current guess $W_2 W_1$ but doesn't directly drive the gradient. This is easiest to see at small initialization: when the weights are tiny, $W_2 W_1 \Sigma_{xx} \approx 0$, and the gradient is almost entirely determined by $\Sigma_{yx}$.
### Whitened inputs and the reduction to matrix factorization
A necessary assumption to reduce deep linear network training to matrix factorization is to assume that the input data is _whitened_, meaning $\Sigma_{xx} = I$. Back when the original Saxe et al. (2014) paper was published, whitening the inputs was common practice. Today this is more of a tractability assumption. With $\Sigma_{xx} = I$, equations (1) and (2) simplify to: 
$$ 
\begin{align*}
\frac{dW_1}{dt} &= W_2^\top(\Sigma_{yx} - W_2 W_1) \tag{3}\\ \frac{dW_2}{dt} &= (\Sigma_{yx} - W_2 W_1) W_1^\top \tag{4}
\end{align*} 
$$and the learning problem reduces cleanly to matrix factorization: the network must find $W_2$ and $W_1$ such that $W_2 W_1 \approx \Sigma_{yx}$.
## The natural coordinate system
While the learning problem has become clear by whitening the input, equations (3) and (4) are still quite complicated: they are coupled and nonlinear (each weight's rate of change depends on every other weight). Our strategy of attacking these equations is to find a coordinate system in which these dynamics _decouple_ into independent scalar equations—one per "mode" of the data—that we can solve one at a time.

The natural coordinate system comes from the SVD of the target matrix. Consider the compact singular value decomposition of $\Sigma_{yx}$: 
$$ 
\Sigma_{yx} = U S_* V^\top = \sum_{\alpha=1}^r s_\alpha \mathbf{u}_\alpha \mathbf{v}_\alpha^\top 
$$where $r$ is the rank of $\Sigma_{yx}$, $\mathbf{u}_\alpha$ and $\mathbf{v}_\alpha$ are the left and right singular vectors (columns of $U$ and $V$), and $s_1 \geq s_2 \geq \cdots \geq s_r > 0$ are the singular values.

(interactive widget/figure for SVD. im thinking something like the svd figure from saxe et al 2018)

Why does the SVD give the right coordinate system? The SVD decomposes the data into independent "modes." Each mode $\alpha$ pairs an _input mode_ $\mathbf{v}_\alpha$ (a direction in input space) with an _output mode_ $\mathbf{u}_\alpha$ (a direction in output space) and a _strength_ $s_\alpha$ (how important that mode is). For example, one mode might act as an "animal vs. plant" axis: the input mode assigns positive values to animals and negative values to plants, while the output mode assigns positive values to animal-like properties (can fly, can swim) and negative values to plant-like properties (has roots, has petals). The singular value tells you how prominent this distinction is in the data. Larger singular values correspond to coarser, more important structure; smaller ones correspond to finer details.
## From matrix equations to scalar dynamics
### Rotating into the SVD basis
We rotate the weight matrices into the coordinate system defined by the SVD of $\Sigma_{yx}$: 
$$ 
\tilde{W}_1 \equiv W_1 V, \quad \tilde{W}_2 \equiv U^\top W_2. 
$$What does this rotation buy us? If we substitute these definitions into equations (3) and (4) and use $\Sigma_{yx} = U S_* V^\top$, we get: 
$$ 
\begin{align*} 
\frac{d\tilde{W}_1}{dt} &= \tilde{W}_2^\top (S_* - \tilde{W}_2 \tilde{W}_1) \tag{5}
\\ \frac{d\tilde{W}_2}{dt} &= (S_* - \tilde{W}_2 \tilde{W}_1) \tilde{W}_1^\top \tag{6} 
\end{align*} 
$$
These equations have the same structure as before, but now the target matrix $S_*$ is _diagonal_. The diagonal structure of the target is what will eventually let us decouple the system. But we aren't there yet. The rotated weights $\tilde{W}_1$ and $\tilde{W}_2$ are still full matrices, so the dynamics are still coupled.
### Convergence vs. strong alignment
Here is a subtle but important distinction that will determine whether we can actually solve the dynamics.

At convergence, the _product_ $\tilde{W}_2 \tilde{W}_1$ must approximate $S_*$, which is diagonal. This is just the convergence condition; it says the network has found the right input-output map. This will be true at any minimum of the loss, _regardless_ of what the individual weight matrices look like.

But the product being diagonal at convergence is not enough to decouple the dynamics during training. To see what we actually need, it helps to think about what each weight matrix is doing. Any matrix can be decomposed via the SVD into _directions_ (the singular vectors) and _magnitudes_ (the singular values). Learning, in general, involves both: the network must figure out the right directions _and_ grow them to the right magnitudes. Decoupled dynamics arise when the directional structure has already been resolved, i.e. when all the singular vectors are in the right place, so that the only thing left to evolve is the magnitudes.

Let's make this precise. Write the SVD of each weight matrix as $W_2 = U_2 S_2 V_2^\top$ and $W_1 = U_1 S_1 V_1^\top$. Then the rotated weights are: $$ \begin{align*} \tilde{W}_2 &= U^\top W_2 = (U^\top U_2) S_2 V_2^\top \\ \tilde{W}_1 &= W_1 V = U_1 S_1 (V_1^\top V) \end{align*} $$and their product is: 
$$
\tilde{W}_2 \tilde{W}_1 = (U^\top U_2) S_2 (V_2^\top U_1) S_1 (V_1^\top V). 
$$
This product reduces to a product of only the magnitude matrices $S_2 S_1$, with all the directional factors gone, when three orthogonality conditions are satisfied:

1. $U_2 = U$ — the left singular vectors of $W_2$ align with the output modes of the data.
2. $V_1 = V$ — the right singular vectors of $W_1$ align with the input modes of the data.
3. $V_2 = U_1$ — the right singular vectors of $W_2$ match the left singular vectors of $W_1$, i.e. the two weight matrices are coherent across the hidden layer.

We call the conjunction of these three conditions **strong alignment**. The key idea is that these conditions make the product diagonal because every directional factor has been absorbed by alignment, leaving only the singular values $S_2$ and $S_1$ to evolve.

To summarize:

- **Convergence condition**: $\tilde{W}_2 \tilde{W}_1 \approx S_*$ at the end of training. The product has the right value, but the individual factors can have arbitrary directional structure. Holds at any minimum regardless of initialization.
- **Strong alignment**: the singular vectors of $W_1$ and $W_2$ have locked onto the data's modes, so $\tilde{W}_2 \tilde{W}_1 = S_2 S_1$ and only magnitudes remain. This is what decouples the dynamics.
### The balanced and unbalanced regimes
Strong alignment is a feature of the **balanced regime** (small initialization): the regime where the weight matrices learn the spectral structure of the target, i.e. the singular vectors of the weight matrices satisfy the conditions above. In this regime, the weights are initialized small and must grow substantially during training. Intuitively, this is what allows the weight matrices to encode structure. In the **unbalanced regime** (large initialization), the weights barely move from their random starting values and thus the weight matrices do not learn any structure. The product $\tilde{W}_2 \tilde{W}_1$ converges to $S_*$ through small perturbations, but the individual weight matrices never develop the aligned singular vector structure that strong alignment requires. No clean modal structure emerges inside the network, and the interesting phenomena we saw in the introduction (sequential learning, plateaus, sudden transitions) do not appear.

For real-world systems like Word2vec, it is critical that we work in the balanced regime. We don't just want the model to minimize the loss, we want its _internal representations_ to be meaningful. The whole point of Word2vec is that the learned weight matrices contain semantically structured embeddings: directions in the embedding space correspond to meaningful relationships like gender or royalty. This kind of structure is exactly what strong alignment provides, where each mode of the weight matrix corresponds to a mode of the data. In the unbalanced regime, the network might produce correct predictions, but the weights themselves would be a meaningless mess. The balanced regime is where the network understands the task in a way that is reflected in its parameters.

(lazy/rich widget showing W2, W1 becoming diagonal in rich and staying dense in lazy)

(collapsable section)
Why should we expect strong alignment to hold in the balanced regime?
- balancedness argument for inner alignment
- power iteration argument for outer alignment
### The decoupled scalar equations
Let's assume strong alignment as defined above. Under strong alignment, we get:
$$
\begin{align*}
\frac{dS_1}{dt} &= S_2 (S_* - S_{2}S_{1}) \tag{7}
\\ \frac{dS_2}{dt} &= (S_* - S_{2}S_{1}) S_{1} \tag{8}
\end{align*} 
$$
Observe that each diagonal entry evolves independently and we naturally get decoupled scalar dynamics. Write the diagonal entries of $\tilde{W_{1}}$ and $\tilde{W_{2}}$ as $a_\alpha(t)$ and $b_\alpha(t)$ respectively, so that the $\alpha$th _effective singular value_ of the network is $\hat{s}_\alpha(t) = a_\alpha(t) b_\alpha(t)$. Since both rotated weight matrices are diagonal, all off-diagonal coupling in equations (5) and (6) vanishes, and each mode $\alpha$ evolves independently: 
$$
\begin{align*} 
\frac{da_\alpha}{dt} &= b_\alpha(s_\alpha - a_\alpha b_\alpha) \tag{7}
\\ \frac{db_\alpha}{dt} &= a_\alpha(s_\alpha - a_\alpha b_\alpha) \tag{8} \\
\end{align*} 
$$

(flow map)

These are the decoupled scalar equations we were after. Each mode's dynamics are independent of other modes and depend only on its own state $(a_\alpha, b_\alpha)$ and its target singular value $s_\alpha$. We started with a complicated system of coupled matrix differential equations and reduced it, through a change of coordinates and the strong alignment assumption, to a collection of independent two-variable systems.

From equations (7) and (8), we can verify that $\frac{d}{dt}(a_\alpha^2 - b_\alpha^2) = 0$: the quantity $a_\alpha^2 - b_\alpha^2$ is conserved throughout training for each mode. This is the scalar analogue of the matrix-level conservation law $\frac{d}{dt}(W_2^\top W_2 - W_1 W_1^\top) = 0$ that we noted earlier. 

We make one final assumption: that $a_\alpha(0) \approx b_\alpha(0)$ at initialization. This is reasonable when both are initialized to small random values. Since $a_\alpha^2 - b_\alpha^2$ is conserved, starting with $a_\alpha \approx b_\alpha$ ensures they stay approximately equal throughout training.
## Solving the dynamics
We can now reduce each two-variable system to a single equation. Consider the effective singular value $\hat{s}_\alpha = a_\alpha b_\alpha$ and apply the product rule: 
$$ 
\frac{d\hat{s}_\alpha}{dt} = b_\alpha \frac{da_\alpha}{dt} + a_\alpha \frac{db_\alpha}{dt} = (a_\alpha^2 + b_\alpha^2)(s_\alpha - a_\alpha b_\alpha). 
$$Using $a_\alpha \approx b_\alpha$, we have $a_\alpha^2 + b_\alpha^2 \approx 2 a_\alpha b_\alpha = 2\hat{s}_\alpha$, giving us: 
$$ 
\begin{align*}
\frac{d\hat{s}_\alpha}{dt} = 2\hat{s}_\alpha(s_\alpha - \hat{s}_\alpha). \tag{9} \end{align*} 
$$
This is a logistic-type ODE. It is separable, meaning we can move all the $\hat{s}_\alpha$ terms to one side and the $t$ terms to the other and integrate directly. With initial condition $\hat{s}_\alpha(0) = \hat{s}_\alpha^0$, the solution is:
$$ 
\begin{align*}
\boxed{\hat{s}_\alpha(t) = \frac{s_\alpha}{1 + \left(\frac{s_\alpha}{\hat{s}_\alpha^0} - 1\right) e^{-2 s_\alpha t}}} \tag{10}
\end{align*}
$$
This is a sigmoid. Each effective singular value starts near its initial value $\hat{s}_\alpha^0$, stays there for a while (the plateau), then rapidly transitions to its target value $s_\alpha$ (the jump), then saturates.
### Deeper Networks
While our derivation was done for a 2-layer network, the same framework extends naturally to networks of arbitrary depth $L$. In a network with $L$ weight matrices $W_1, \ldots, W_{L}$, the same decoupling into independent connectivity modes applies under the analogous initial conditions. Each mode is then described not by two scalars $(p_\alpha, q_\alpha)$ but by $L$ scalars $a^1_\alpha, \ldots, a^{L}_\alpha$, one per weight matrix, and the effective singular value becomes the product $\hat{s}_\alpha = \prod_{i=1}^{L} a^i_\alpha$.

On the symmetric submanifold where all per-layer amplitudes are equal ($a^i_\alpha = a_\alpha$ for all $i$), the ODE for the overall mode strength generalizes from Equation (9) to
$$
\begin{align*}
\boxed{\frac{d\hat{s}_\alpha}{dt} = L\,\hat{s}_\alpha^{\,2 - 2/L}(s_\alpha - \hat{s}_\alpha)} \tag{11}
\end{align*}
$$
The structure is recognizably similar: the same $(s_\alpha - \hat{s}_\alpha)$ driving term appears, and learning is still ordered by singular value strength. What changes is the power of $\hat{s}_\alpha$ multiplying this term. For $L=2$, the exponent $2 - 2/L$ equals 1 and we recover $2\hat{s}_\alpha(s_\alpha - \hat{s}_\alpha)$, which is the separable logistic equation we solved in closed form above. But for any deeper network, the exponent is nonzero and the ODE becomes much more complicated. To obtain the time course of learning in deeper networks, it's easiest to numerically integrate Equation (11). The simulator below does exactly this, letting you vary network depth and observe how the sigmoid transitions sharpen and the learning dynamics change.
### The full network trajectory
Under strong alignment, the full network map at time $t$ is completely characterized by the collection of sigmoids: 
$$
W_2(t), W_1(t) = U, \hat{S}(t), V^\top = \sum_\alpha \hat{s}_\alpha(t), \mathbf{u}_\alpha \mathbf{v}_\alpha^\top 
$$where $\hat{S}(t) = \text{diag}(\hat{s}_1(t), \dots, \hat{s}_r(t))$. The network shares the same singular vectors as $\Sigma_{yx}$ throughout training. Only the singular values change, each following its own sigmoidal trajectory.

(theory curves + empirical curves widget)

## What the solution tells us
### Sequential learning and timescales
How long does it take for mode $\alpha$ to be learned? Starting from $\hat{s}_\alpha^0 = \varepsilon$ (small), the time to reach $\hat{s}_\alpha(t) \approx s_\alpha - \varepsilon$ scales as: 
$$ 
t_\alpha \sim \frac{1}{s_\alpha} \ln \frac{s_\alpha}{\varepsilon} = O\left(\frac{1}{s_\alpha}\right). 
$$
The learning time is inversely proportional to the singular value. The coarse, dominant structure of the data, i.e. modes with larger singular values, is learned first. Finer details, i.e. modes with smaller singular values, take longer. This is a concrete, testable prediction: the _order_ in which a deep linear network learns features of the data is determined by the singular value spectrum of $\Sigma_{yx}$.

(sequential mode learning widget sv curves)
### Sigmoidal transitions are a signature of depth
Each effective singular value follows a sigmoid: slow initial growth, a rapid transition, then saturation. The sharpness of the transition is controlled by the ratio $s_\alpha / \hat{s}_\alpha^0$: a larger target relative to initialization produces a sharper jump.

Compare this to a depth-1 linear network ($\hat{y} = Wx$), where gradient flow on the same loss gives simple exponential convergence with no plateau-then-jump structure. The sigmoidal trajectory (and the plateaus and sudden transitions it produces in the loss curve) is a signature of _depth_, not nonlinearity.

(depth 1 vs depth 3 sv curves)
### Plateaus and sudden drops in the loss
The sequential, sigmoidal learning of individual modes explains the staircase-like loss curves we observed in the introduction. Each plateau corresponds to a period where no new mode is transitioning; each sudden drop corresponds to a new mode "switching on." Since each mode transitions at a different time (set by $1/s_\alpha$), the loss curve—which is a sum over all modes—looks like a cascade of drops.

(loss curves widget)
## Conclusion
(not sure how to do this)

(full dln widget)