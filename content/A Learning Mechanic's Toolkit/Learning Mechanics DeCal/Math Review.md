---
title: Math Review
draft: true
tags:
  - learning-mechanics
  - math
---
# Math Toolkit for Learning Mechanics
This note reviews the important tools of math that every Learning Mechanic should have in their toolkit.
## Multivariable Calculus
### Gradients, Jacobians, Hessians
For a scalar loss $L(\theta)$ with $\theta \in \mathbb{R}^p$:
- **Gradient**: $\nabla_\theta L \in \mathbb{R}^p$, with $(\nabla_\theta L)_i = \partial L / \partial \theta_i$. Points in the direction of steepest ascent.
- **Hessian**: $H_{ij} = \partial^2 L / \partial \theta_i \partial \theta_j$. Symmetric; its eigenvalues tell you about local curvature.
- **Jacobian**: for vector-valued $f : \mathbb{R}^n \to \mathbb{R}^m$, $J_{ij} = \partial f_i / \partial x_j$.
### Matrix calculus shortcuts to memorize
- $\nabla_W , \mathrm{tr}(AW) = A^\top$
- $\nabla_W , \mathrm{tr}(W^\top A W) = (A + A^\top) W$
- $\nabla_W , |Y - WX|_F^2 = -2(Y - WX)X^\top$

That last one is the workhorse of linear regression and the first step in any deep linear network derivation.
### Chain rule (for backprop)
If $z = f(y)$ and $y = g(x)$, then $\partial z / \partial x = (\partial z / \partial y)(\partial y / \partial x)$. Backprop is just this rule applied systematically through a computation graph.
### Gradient flow
The continuous-time limit of gradient descent: $\dot{\theta} = -\nabla_\theta L$. Replacing the discrete step $\theta_{t+1} = \theta_t - \eta \nabla L$ with an ODE is almost always the first simplification in a dynamics calculation.
## Taylor Approximation
### The formula
Around a point $\theta_0$: 
$$
L(\theta_0 + \delta) \approx L(\theta_0) + \nabla L(\theta_0)^\top \delta + \tfrac{1}{2} \delta^\top H(\theta_0) \delta + \ldots
$$
### Why you care
- **Near a minimum**: gradient vanishes, so the loss is locally quadratic — fully characterized by $H$. Eigenvalues of $H$ set the local learning-rate constraints and the basin geometry.
- **Near a saddle**: $H$ has both positive and negative eigenvalues. Along the negative directions, gradient flow escapes; along the positive ones, it's attracted. This is exactly what governs the "saddle-to-saddle" dynamics of deep linear networks.
- **Linearization of nonlinear ODEs**: to understand a nonlinear system near a fixed point, Taylor-expand the RHS and analyze the linear system. This is how you derive timescales near saddles.
### Rule of thumb
If something is "slow," you're probably near a stationary point and the dynamics are governed by the smallest eigenvalue of $H$ in the relevant subspace.
## Matrix Algebra

### Eigendecomposition (symmetric case)

Any symmetric $A \in \mathbb{R}^{n \times n}$ can be written $A = Q \Lambda Q^\top$, where $Q$ is orthogonal and $\Lambda$ is diagonal real. Used for Hessians, covariance matrices, kernels.

### Key identities

- **Trace cyclic property**: $\mathrm{tr}(ABC) = \mathrm{tr}(BCA) = \mathrm{tr}(CAB)$. Essential for computing loss derivatives.
- **Frobenius norm**: $|A|_F^2 = \mathrm{tr}(A^\top A) = \sum_{ij} A_{ij}^2 = \sum_\mu \sigma_\mu^2$.
- **Commuting matrices share an eigenbasis**: if $AB = BA$ and both are diagonalizable, there's a basis in which both are diagonal. This is why "whitening the input data" ($\Sigma_{xx} = I$) simplifies deep linear network dynamics — $I$ commutes with everything, removing a basis conflict.

### Orthogonal / rotation matrices

$U^\top U = I$. Changes of basis that preserve lengths and angles. Used constantly to "rotate into a privileged basis" — e.g., rotating into the SVD basis of the target.

### Block / low-rank structure

A matrix of rank $r$ can be written as a sum of $r$ rank-1 outer products: $A = \sum_{\mu=1}^r \sigma_\mu u_\mu v_\mu^\top$. This decomposition is the bridge between matrix algebra and the SVD.

---

## 4. The Singular Value Decomposition (SVD)

### The statement

Any $A \in \mathbb{R}^{m \times n}$ can be written as $$A = U \Sigma V^\top = \sum_\mu \sigma_\mu u_\mu v_\mu^\top$$ where $U \in \mathbb{R}^{m \times m}$ and $V \in \mathbb{R}^{n \times n}$ are orthogonal, and $\Sigma$ is $m \times n$ diagonal with non-negative entries $\sigma_1 \geq \sigma_2 \geq \ldots \geq 0$.

### Interpretation

- Right singular vectors $v_\mu$ are **input directions**.
- Left singular vectors $u_\mu$ are **output directions**.
- Singular values $\sigma_\mu$ are the **gain** along each mode.
- $A$ decomposes into independent, orthogonal rank-1 modes.

### Why it's the centerpiece of Learning Mechanics

- The target matrix $\Sigma_{yx}$ has an SVD $U^\star \Lambda^\star V^{\star\top}$. Each mode pairs an input direction with an output direction and carries a "strength" $\lambda_\mu^\star$.
- Once weights align with this basis, the matrix ODEs decouple into scalar ODEs per mode.
- Larger singular values are learned first → implicit bias toward low-rank, "coarse-before-fine" learning.
- Low-rank truncation ($A_r = \sum_{\mu=1}^r \sigma_\mu u_\mu v_\mu^\top$) is the optimal rank-$r$ approximation in Frobenius norm (Eckart–Young). This is why "stop training early" ≈ "truncate the SVD."

### Related: polar decomposition

$A = UP$ where $U$ is orthogonal ("direction part") and $P$ is symmetric PSD ("magnitude part"). Useful when thinking of weight alignment as separating _where_ a matrix points from _how big_ it is.

---

## 5. Differential Equations

### Types you'll meet

- **Linear ODEs**: $\dot{x} = Ax$. Solution: $x(t) = e^{At} x(0)$. Eigenvalues of $A$ determine growth/decay rates.
- **Separable ODEs**: $\dot{x} = f(x) g(t)$. Integrate $\int dx / f(x) = \int g(t) dt$. The mode-wise equation in deep linear nets, $\dot{s} = s(\lambda^\star - s^2)$, is separable; its solution is the logistic curve.
- **Matrix ODEs**: e.g., $\dot{W} = -\nabla_W L$. Often too hard in general, but become tractable when a symmetry or conservation law reduces them to scalar equations.

### Fixed points and stability

A fixed point $x^*$ satisfies $\dot{x} = 0$. Stability is read off from the eigenvalues of the Jacobian there:

- All negative real parts → stable (attractor, e.g. a minimum).
- Some positive → unstable (saddle or source).

### Conservation laws

A quantity $Q(x)$ is conserved if $\dot{Q} = 0$ along trajectories. In deep linear nets, $W_2^\top W_2 - W_1 W_1^\top$ is conserved under gradient flow. Conservation laws foliate the phase space and pin down trajectories.

### Logistic dynamics

$\dot{s} = r s (1 - s/K)$ has solution $s(t) = K / (1 + (K/s_0 - 1) e^{-rt})$. A sigmoid. This is the canonical shape of "a mode being learned" in deep linear nets.

---

## 6. Decoupling Coupled Equations

A central technique in Learning Mechanics: take a coupled matrix/vector ODE system and show it reduces to independent scalar equations.

### The recipe

1. **Find the right basis.** Usually the eigenbasis or SVD of some relevant matrix (e.g., the target $\Sigma_{yx}$, the input covariance $\Sigma_{xx}$, or the Hessian at init).
2. **Rotate variables into that basis.** If $\tilde{W} = U^\top W V$, then the ODE for $\tilde{W}$ often has diagonal structure.
3. **Check that the diagonal structure is preserved.** Off-diagonal entries shouldn't grow. This usually requires a symmetry, a conservation law, or an alignment assumption.
4. **Read off the scalar ODEs.** Each diagonal entry evolves independently.

### Why it works

Decoupling works when all the matrices in the dynamics _share an eigenbasis_. When they don't, the bases "fight" and the problem stays coupled. This is why whitening the inputs ($\Sigma_{xx} = I$) is so useful — $I$ doesn't introduce a conflicting basis.

### Alignment as a prerequisite

Even with a shared basis for the data, the _weights_ also need to be in that basis for the dynamics to fully decouple. In deep linear nets this is "weight alignment": $U_2 = U^\star$, $V_1 = V^\star$, $V_2 = U_1$. Small initialization is what drives this alignment to happen quickly.

---

## 7. High Dimensional Statistics

### High-dimensional random vectors are approximately orthogonal

Let $u, v \in \mathbb{R}^d$ be i.i.d. with entries $\sim \mathcal{N}(0, 1/d)$. Then:

- $|u|^2 \to 1$ as $d \to \infty$ (concentration of norm).
- $u^\top v \to 0$ as $d \to \infty$, with fluctuations of size $\sim 1/\sqrt{d}$.

This is the "blessing of dimensionality": in high dimensions, random directions are nearly orthogonal. Random features span the space efficiently; small-init weight matrices behave like rescaled orthogonal matrices.

### Concentration of measure

Smooth functions of many independent random variables concentrate tightly around their means. Empirical averages over a dataset behave like expectations, up to $O(1/\sqrt{n})$ fluctuations. This is why dataset-level quantities like $\Sigma_{xx}$ and $\Sigma_{yx}$ are the "right" objects to track.

### Random matrices

- **Marchenko–Pastur**: eigenvalue distribution of sample covariance $\frac{1}{n} X X^\top$ when $X$ has i.i.d. entries.
- **Semicircle law**: eigenvalues of symmetric random matrices with i.i.d. entries.
- Singular values of a random Gaussian matrix $W \in \mathbb{R}^{m \times n}$ (with entries $\sim \mathcal{N}(0, 1/n)$) concentrate around $1 \pm \sqrt{m/n}$.

### Power iteration

Repeated multiplication by a matrix $A$ amplifies its top eigenvector: starting from random $v_0$, $A^k v_0 / |A^k v_0|$ converges to the top eigenvector at rate $(\lambda_2 / \lambda_1)^k$. This mechanism underlies "outer alignment" in deep linear networks — the weights get pulled toward the top singular directions of the target.