---
title: Debugging CBMs
draft: false
tags:
  - computer-science
  - machine-learning
  - paper
---
>Definition 1. A set of concepts $c$ is high-quality for a decision $(\mathbf x, y)$ if: 
>- C1. The set of concepts is sufficient to fully determine the ground-truth label $y^∗$ from $\mathbf x$. 
>- C2. The various concepts are (approximately) independent from each other. 
>- C3. Each concept is semantically meaningful. 
>- C4. Each concept is easy to interpret (e.g., simple enough). 
>Given high-quality concepts $c$, a set of weights $w^{(y)}(\mathbf x)$ is high quality for a decision $(\mathbf x, y)$ if: 
>- W1. It ranks all concepts in $c(x)$ compatibly with their relevance for the prediction task. 
>- W2. It associates (near-)zero weight to concepts in $c(x)$ that are task-irrelevant. 
>An explanation $\mathcal{E}(\mathbf x, y)$ is high-quality for a decision $(\mathbf x, y)$ if both $c$ and $w^{(y)} (\mathbf x)$ are.

Here, an explanation is defined as such: $$\mathcal{E}(x, y) := \{ (w^{(y)}_j (x), c_j (x)) : j \in [k] \},$$where $k$ is the total number of concepts. Intuitively, the explanation is showing how important each concept was in the final classification.

If such an explanation is not high quality, then the authors suggest the following systematic debugging procedure:
>- Step 1 Evaluating concept quality: Determine if $\mathcal{E}(\mathbf x)$ contains a high-quality subset $c' \subseteq c$ that is sufficient to produce a correct prediction $y^∗$ for the target instance $\mathbf x$.
>- Step 2 Correcting the aggregation weights: If so, then it is enough to fix how the model combines the available concepts by supplying corrective supervision for the aggregation weights $w$.
>- Step 3 Correcting the learned concepts: Otherwise, it is necessary to create a high-quality subset $c'$ by supplying appropriate supervision on the concepts $c$ themselves.

>Now, let $c_j$ be a low-quality concept. Our key insight is that there is no substantial difference between the models’ output $f(x)$ and a specific concept $c_j (x)$ appearing in it. This means that work on understanding and correcting predictions of black-box models can be applied for understanding and correcting concepts in CBMs – with some differences, see below. For instance, the work of (Nauta et al. 2020) can be viewed as a concept-level version of LIME (Ribeiro, Singh, and Guestrin 2016). To the best of our knowledge, this useful analogy has never been pointed out before.

References: [Toward a Unified Framework for Debugging Concept-based Models](https://arxiv.org/pdf/2109.11160)