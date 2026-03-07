---
title: Quadratic word embedding model (QWEM)
draft: false
tags:
  - computer-science
  - learning-mechanics
  - linear-algebra
  - machine-learning
  - math
  - physics
---
#### definitions & setup
Let $P(i, j) := P(j|i)P(i)$ denote the co-occurrence probability of words $i$ and $j$. Let $W \in \mathbb{R}^{V \times d}$ (where vocabulary size $V \gg d$) be the embedding matrix composed of row vectors $w_i$.

The standard Word2Vec (w2v) loss is parameterized as:
$$
L_{\text{w2v}}(w, w') = \mathbb{E}_{i,j \sim P_{ij}} \left[ \Psi_{ij}^+ \log(1 + e^{-w_i^T w_j'}) \right] + \mathbb{E}_{\substack{i \sim P_i \\ j \sim P_j}} \left[ \Psi_{ij}^- \log(1 + e^{w_i^T w_j'}) \right]
$$
- $\Psi_{ij}^+$ and $\Psi_{ij}^-$ are w2v preprocessing hyperparameters (these two degrees of freedom allow the loss to encode many engineering tricks used in preprocessing)
- the first term encourages large $w_i^T w_j'$ for co-occurring pairs $(i, j)$
- the second term encourages small $w_i^T w_j'$ for random pairs $(i, j)$
- here, $\log(1+e^{-x}) = -\log (\text{sigmoid}(x))$
#### quadratic approximation (QWEM)
Using the second-order Maclaurin series approximation $\ln(1+e^x) \approx \ln 2 + \frac{1}{2}\left(x + \frac{x^2}{4}\right)$, we define the QWEM loss under symmetric factorization ($w = w'$):

$$
L_w := \mathbb{E}_{i,j \sim P_{ij}} \left[ \Psi_{ij}^+ \left( \frac{(w_i^T w_j)^2}{4} - w_i^T w_j \right) \right] + \mathbb{E}_{\substack{i \sim P_i \\ j \sim P_j}} \left[ \Psi_{ij}^- \left( \frac{(w_i^T w_j)^2}{4} + w_i^T w_j \right) \right]
$$

Define the optimization target for QWEM as $M_{ij}^*$:

$$
M_{ij}^* := \frac{\Psi_{ij}^+ P_{ij} - \Psi_{ij}^- P_i P_j}{\frac{1}{2}(\Psi_{ij}^+ P_{ij} + \Psi_{ij}^- P_i P_j)}
$$

Let the equivalence class under orthogonal transformation be:

$$
\text{REquiv}(W) := \{ WU \mid U \text{ is orthogonal} \}
$$
#### Thm. QWEM as matrix factorization
Define the weighting term $G_{ij} := \Psi_{ij}^+ P_{ij} + \Psi_{ij}^- P_i P_j$.
Assume:
1. Symmetry: $\Psi_{ij}^+ = \Psi_{ji}^+$ and $\Psi_{ij}^- = \Psi_{ji}^-$, which implies $M^{*T} = M^*$. Consequently, $M^*$ is diagonalizable: $M^* = V^* \Lambda V^{*T}$.
2. Constant weighting: $G_{ij} = g \in \mathbb{R}$.
Statement:
Under these assumptions, QWEM is equivalent to unweighted matrix factorization:

$$
L_w \equiv \frac{g}{4} \| WW^T - M^* \|_F^2 + \text{const}
$$
Furthermore, if the truncated eigenvalue matrix $\Lambda_{[:d, :d]}$ is positive semi-definite (psd), then by the Eckart-Young-Minsky Theorem:

$$
\arg\min_w L(w) = \text{REquiv}\left( V_{[:, :d]}^* \Lambda_{[:d, :d]}^{1/2} \right)
$$

**Proof:**

$$
\begin{align*}
L_w &= \sum_{i,j} \left\{ P_{ij}\Psi_{ij}^+\left( \frac{(w_{i}^Tw_{j})^2}{4}- w_{i}^Tw_{j}\right) +P_{i}P_{j}\Psi_{ij}^- \left(\frac{(w_{i}^Tw_{j})^2}{4}+w_{i}^Tw_{j}\right) \right\}
\\\\
&= \sum_{i,j} \left\{ \frac{(w_i^T w_j)^2}{4} g - w_i^T w_j (\Psi_{ij}^+ P_{ij} - \Psi_{ij}^- P_i P_j) \right\} \\\\
 &= \frac{g}{4} \sum_{i,j} \left( w_i^T w_j - \frac{\Psi_{ij}^+ P_{ij} - \Psi_{ij}^- P_i P_j}{\frac{1}{2}g} \right)^2 + \text{const}\\\\
 &= \frac{g}{4} \sum_{i,j} \left( (WW^T)_{ij} - M_{ij}^* \right)^2 + \text{const} \\\\
 &= \frac{g}{4} \| WW^T - M^* \|_F^2 + \text{const} \space \blacksquare
\end{align*}
$$
#### extensions & dynamics
- Relaxing Assumptions.
	- If we relax the constant $G_{ij}$ assumption, the loss becomes a weighted matrix factorization: $L(w) = \frac{1}{4} \sum_{i,j} G_{ij} \left( (WW^T)_{ij} - M_{ij}^* \right)^2 + \text{const}$
	- We can still find $\arg\min_w L(w)$ if $\Psi^+, \Psi^-$ are symmetric and $G$ is a rank-1 matrix
- Optimization Dynamics.
	- Minimizing $L_{\text{QWEM}}(w)$ under Gradient Descent follows [[Deep Linear Networks; A deep dive into Saxe et al. and the role of depth in learning|Saxe et al. dynamics]]. For an aligned initialization, the optimization problem reduces to growing the effective singular values
#### conclusions
- **Linguistic Punchline:** Natural language contains linear semantic structure within its co-occurrence statistics.
- **ML Punchline:** $\exists$ an explicit mathematical equivalence between self-supervised contrastive learning and supervised matrix factorization.

*disclaimer: this note was mostly transcribed by Gemini*
![[QWEM.png]]