---
title: Emergent Geometric Representations in Word Embeddings
draft: true
tags:
  - computer-science
  - learning-mechanics
  - linear-algebra
  - machine-learning
  - math
---
In [[Quadratic word embedding model (QWEM)|Karkada et al.]], the authors showed that Word2Vec-like word embeddings are well-approximated by solutions to a matrix factorization problem. This finding means that we can probe the semantic structure in word embeddings by analyzing the co-occurrence matrix $M^*$.
## Symmetry in Data Statistics Shapes Representation Geometry

#### Methodological Flow

- Observe geometric structure in the internal representations of language models.
    
- Assume and justify translation symmetry in language statistics.
    
- Derive geometric manifold structure from this symmetry assumption.
    
- Compare and match with empirical results to test the hypothesis.
    

**QWEM for Analysis**

- The normalized co-occurrence matrix is defined as $M_{ij}^* := \frac{P_{ij} - P_i P_j}{\frac{1}{2}(P_{ij} + P_i P_j)} \approx \log(\frac{P_{ij}}{P_i P_j})$.
    
- QWEM provides an analytical link between co-occurrence statistics and embedding geometry.
    
- By the Spectral Theorem, $M^* = \Psi \Lambda^* \Psi^T$, implying $WW^T \approx M^* \implies W \approx \Psi \sqrt{|\Lambda^*|}$.
    
- Consequently, the $y$-th principal component of the embeddings encodes the $y$-th largest eigenmode of $M^*$.
    

**Predicting Embedding Geometry**

- Let $D$ be the dimension of the semantic continuum, which can have periodic or open boundary conditions (BC).
    
- Let $S$ be a subset of the vocabulary representing a given concept.
    
- **Assumption**: The co-occurrence probability of any two words in $S$ depends only on their distance on the semantic continuum.
    
- Using centered embeddings $W_S := P W_{[S, :]}$, we find $W_S W_S^T = P M_S^* P^T$.
    
- When rotated into the PCA basis, $W_S U = \Phi \Lambda^{1/2}$ possesses the scaled eigenmodes of $P M_S^* P^T$ as its columns.
    

**Periodic Boundary Conditions** * Under periodic BC, $M^*$ is circulant-like.

- The eigenmodes of $M$ (and thus the word embeddings) are Fourier modes.
    
- The centering projection $P$ projects vectors to the subspace orthogonal to $\mathbf{1}$.
    
- Because $\mathbf{1}$ is already an eigenvector of $M_S^*$ due to its circulant structure, $P M_S^* P^T$ does not alter the other eigenmodes.
    
- Therefore, the columns of $W_S$ are literally Fourier modes. Similar analyses apply for open boundary conditions.