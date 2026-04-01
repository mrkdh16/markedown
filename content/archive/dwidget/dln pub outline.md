---
title: dln pub outline
draft: true
tags:
---
outline.
1. qwem motivation
	- note qwem = mfac
2. But it’s not just mfac: supervised learning w linear nets under assumption sigma_xx is identity is the same. Show canary example
	- also, DLN learning dynamics contain nontrivial nonlinear learning phenomena
3. state DLN learning problem
	- setup; start with deep net (arbitrary depth)
		- $\mathcal L(W_1, \dots,W_L) = \| \Sigma_{yx} - W_L\dots W_1 \|^2_F$
math notes.
- stay in matrix land
stuff to include.
- conserved quantity (footnote)
- flow map
- dynamical alignment

$$ 
\begin{align*} \arg\min_W (\text{word2vec loss}) &\approx \arg\min_W (\text{quadratic approx. of word2vec loss}) \\ &= \underbrace{\arg\min_W \|WW^\top - M^*\|_F^2}_{\substack{\text{matrix factorization} \\ \text{loss}}} \end{align*} $$

interactive elements
- qwem widget
- linear vs nonlinear sim
- lazy/rich widget
- broken up dln widget
	- theory curves match empirical curves
	- sequential mode learning sv curves
	- depth 1 vs depth 3 sv curves
	- plateau, sharp drop loss curves
- full dln widget

Let's take stock of the assumptions that got us here. We assumed whitened inputs ($\Sigma_{xx} = I$), strong alignment of the individual weight matrices with the SVD basis of $\Sigma_{yx}$ (a rich-regime phenomenon), and balanced initialization ($a_\alpha(0) \approx b_\alpha(0)$). These allowed us to reduce the coupled matrix dynamics all the way down to independent scalar ODEs each admitting an exact sigmoidal solution.

The ultimate validation is empirical: these analytical curves closely match both the full (non-decoupled) dynamics of deep linear networks _and_ the dynamics of nonlinear networks with tanh activations (see Saxe et al., 2014, Figure 4). The fact that our theory — which assumed strong alignment — approximates reality well provides indirect evidence that strong alignment is indeed a good description of what happens in the rich regime.

(full dln widget)

This arc of making simplifying assumptions, deriving clean theory, generating predictions, and checking them against experiment is the scientific method as applied to understanding neural networks.