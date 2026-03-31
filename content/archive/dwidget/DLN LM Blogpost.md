---
title: DLN LM Blogpost
draft: true
tags:
---
# Why study matrix factorization and deep linear networks?

(QWEM widget)

We first motivate the study of matrix factorization and deep linear networks through Word2vec, one of the most influential models in NLP. Word2vec is a minimal language model that learns vector representations of words by modeling the probability of finding two given words co-occurring in natural text (Mikolov et al., 2013). Despite its simplicity—the model is just a two-layer linear network—the resulting models succeed on a variety of semantic understanding tasks. One striking ability exhibited by these embeddings is analogy completion: most famously, man − woman $\approx$ king − queen, where man is the embedding for the word “man” and so on. 

How does a model this simple learn something so structured? The connection between Word2vec and matrix factorization was made explicit in Karkada et al. (2025), where the authors showed that learning Word2vec embeddings is equivalent to factorizing a target matrix built from language co-occurrence statistics. Concretely, if $W$ is the matrix whose $i$th row is the learned embedding of the $i$th word, then
$$
\begin{align*}
\arg\min_W (\text{word2vec loss}) &\approx \arg\min_W (\text{quadratic approx. of word2vec loss}) \\
&= \underbrace{\arg\min_W \|WW^\top - M^*\|_F^2}_{\substack{\text{matrix factorization} \\ \text{loss}}}
\end{align*}
$$
where $M^*$ is some matrix where the $ij$th element measures how much the co-occurrence of the $i$th and $j$th word deviates from pure random chance. So, by studying matrix factorization, we can indirectly study how a simple language model learns semantically meaningful representations. 

But matrix factorization is not confined to self-supervised models like Word2vec. Supervised learning with linear networks reduces to the same problem. Consider a network trained to map items to their properties—say, given "Canary" as a one-hot input $x^\mu$, predict a vector of features $y^\mu$ like "Can Fly," "Has Wings," or "Is Yellow." Under the assumption that input data is whitened (input covariance $\Sigma_{xx}=\sum_{\mu}x^\mu {x^\mu}^\top$ equals the identity), the gradient flow equations for the weight matrices drive the network toward a solution satisfying $W_L\dots W_1 \approx \Sigma_{yx}$, where $\Sigma_{yx} = \sum_{\mu} y^\mu {x^\mu}^\top$ is the input-output correlation matrix. 

<center>
<img src="Screenshot 2026-02-12 at 9.48.02 PM.png" width="200">
<figcaption>Figure 1: Example of an input-output correlation matrix</figcaption>
</center>

The learning problem is again matrix factorization: decompose the statistical structure of the data into a product of weight matrices. So, by studying the learning dynamics of deep linear networks we are effectively studying the learning dynamics of matrix factorization. 

Another reason that matrix factorization and deep linear networks deserve our attention is that they exhibit interesting nonlinear learning phenomena. 

(linear vs nonlinear simulation widget)

Watch what happens when you train a depth-3 tanh network from small initialization: the loss _plateaus_ for long stretches, then *rapidly* drops. To understand why, we can peek inside the network as it trains. Pick a weight matrix—here we'll use the first one—and decompose it into its principal components via the SVD. Each singular value measures how strongly the network has learned one independent mode of the input-output relationship. You'll see that they aren't learned all at once. Instead, they're learned _sequentially_: one singular value 'grows' from near-zero to its final magnitude while the others wait their turn. And there's an order to it: the largest singular values, corresponding to the most important modes of the data, are learned first. Crucially, these dynamics depend on initialization scale: all networks here are initialized with small random weights, which is what allows modes to emerge one at a time. With large initialization, all singular values grow simultaneously and the stepwise structure becomes harder to observe.

These are fascinating dynamics, and you might assume they emerge from the complexity of nonlinear activations. But here's the surprising part: switch to the left-hand panel and select a deep _linear_ network. You'll see the same stepwise loss (clearest in depth-3), the same sequential learning of singular values, the same largest-first ordering; in fact, these phenomena become even clearer. A depth-1 linear network shows none of this—just smooth exponential decay—so these phenomena are a signature of _depth_, not nonlinearity.

Deep linear networks are a rare breed of highly mathematically tractable models that not only retain interesting nonlinear learning phenomena, but also underlie real-world systems like Word2vec that learn rich semantic representations.