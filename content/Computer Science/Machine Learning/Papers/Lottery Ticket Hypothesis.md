---
title: Lottery Ticket Hypothesis
draft: false
tags:
  - computer-science
  - machine-learning
---
 
### Hypothesis.
>A randomly-initialized, dense neural network contains a subnetwork that is initialized such that—when trained in isolation—it can match the test accuracy of the original network after training for at most the same number of iterations.
>
>More formally, consider a dense feed-forward neural network $f(x;\theta)$ with initial parameters $\theta = \theta_0 \sim \mathcal{D}_{\theta}$. When optimizing with stochastic gradient descent (SGD) on a training set, $f$ reaches minimum validation loss $l$ at iteration $j$ with test accuracy $a$ . In addition, consider training $f(x;m \odot \theta)$ with a mask $m \in \{ 0,1 \}^{|{\theta}|}$ on its parameters such that its initialization is $m \odot \theta_0$. When optimizing with SGD on the same training set (with $m$ fixed), $f$ reaches minimum validation loss $l'$ at iteration $j'$ with test accuracy $a'$. The lottery ticket hypothesis predicts that $\exists m$ for which $j' \leq j$ (commensurate training time), $a' \geq a$ (commensurate accuracy), and $\vert \vert m \vert \vert_0 \ll |\theta|$ (fewer parameters).
### Discussion (i.e. nuggets of wisdom)
>Baldi & Sadowski (2013) ==characterize dropout as simultaneously training the ensemble of all subnetworks==. Since the lottery ticket hypothesis suggests that one of these subnetworks comprises a winning ticket, it is natural to ask whether dropout and our strategy for finding winning tickets interact.
>
>(...) our iterative pruning strategy interacts with dropout in a complementary way. Srivastava et al. (2014) observe that dropout induces sparse activations in the final network; it is possible that dropout-induced sparsity primes a network to be pruned. If so, dropout techniques that target weights (Wan et al., 2013) or learn per-weight dropout probabilities (Molchanov et al., 2017; Louizos et al., 2018) could make winning tickets even easier to find.

This characterization of dropout makes it seem much less arbitrary than I thought it to be upon first learning about it. It makes a lot of sense and perhaps is connected/related to the LTH in ways we are not aware about.

>The importance of winning ticket initialization. 
>
>When randomly reinitialized, a winning ticket learns more slowly and achieves lower test accuracy, suggesting that initialization is important to its success. One possible explanation for this behavior is these initial weights are close to their final values after training—that in the most extreme case, they are already trained. However, experiments in Appendix F show the opposite—that the ==winning ticket weights move further than other weights. This suggests that the benefit of the initialization is connected to the optimization algorithm, dataset, and model==. For example, the winning ticket initialization might land in a region of the loss landscape that is particularly amenable to optimization by the chosen optimization algorithm.

Researchers have suggested a Strong Lottery Ticket Hypothesis that suggests that for sufficiently overparameterized network, there exist strong winning tickets that require no training at all. This could mean that in theory model training could consist entirely of pruning/dropping weights. The problem of figuring out which weights to prune/drop seems to be unsolved and perhaps unsolvable.

>The importance of winning ticket structure. 
>
>The initialization that gives rise to a winning ticket is arranged in a particular sparse architecture. ==Since we uncover winning tickets through heavy use of training data, we hypothesize that the structure of our winning tickets encodes an inductive bias customized to the learning task at hand.== Cohen & Shashua (2016) show that the inductive bias embedded in the structure of a deep network determines the kinds of data that it can separate more parameter-efficiently than can a shallow network; although Cohen & Shashua (2016) focus on the pooling geometry of convolutional networks, a similar effect may be at play with the structure of winning tickets, allowing them to learn even when heavily pruned.

>The improved generalization of winning tickets. 
>
>We reliably find winning tickets that generalize better, exceeding the test accuracy of the original network while matching its training accuracy. Test accuracy increases and then decreases as we prune, forming an Occam’s Hill (Rasmussen & Ghahramani, 2001) where the original, overparameterized model has too much complexity (perhaps overfitting) and the extremely pruned model has too little. The conventional view of the relationship between compression and generalization is that ==compact hypotheses can better generalize== (Rissanen, 1986). Recent theoretical work shows a similar link for neural networks, proving tighter generalization bounds for networks that can be compressed further (Zhou et al. (2018) for pruning/quantization and Arora et al. (2018) for noise robustness). The lottery ticket hypothesis offers a complementary perspective on this relationship—that ==larger networks might explicitly contain simpler representations.==

>Implications for neural network optimization. 
>
>Winning tickets can reach accuracy equivalent to that of the original, unpruned network, but with significantly fewer parameters. This observation connects to recent work on the role of overparameterization in neural network training. For example, Du et al. (2019) prove that sufficiently overparameterized two-layer relu networks (with fixed-size second layers) trained with SGD converge to global optima. A key question, then, is whether the presence of a winning ticket is necessary or sufficient for SGD to optimize a neural network to a particular test accuracy. ==We conjecture (but do not empirically show) that SGD seeks out and trains a well-initialized subnetwork. By this logic, overparameterized networks are easier to train because they have more combinations of subnetworks that are potential winning tickets.==

Resources: [The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks](https://arxiv.org/pdf/1803.03635), [A Survey of Lottery Ticket Hypothesis](https://arxiv.org/pdf/2403.04861) - a more recent survey of the developments of the LTH