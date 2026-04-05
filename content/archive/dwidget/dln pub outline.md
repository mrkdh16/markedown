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

pitch for alignment section and some stuff on lazy/rich.
- we want this blog post to be the one-stop shop for DLNs, the premier resource on DLNs on the internet
- DLNs are great because they are a toy model amenable to rigorous mathematical analysis
	- therefore, we should explore anything and everything we can in DLNs
- alignment and lazy/rich are very important concepts in learning mechanics and we should explore them when we can.
# Conclusion draft
Let's take stock of the assumptions that got us here. We assumed whitened inputs ($\Sigma_{xx} = I$), strong alignment of the individual weight matrices with the SVD basis of $\Sigma_{yx}$ (a rich-regime phenomenon), and balanced initialization ($a_\alpha(0) \approx b_\alpha(0)$). These allowed us to reduce the coupled matrix dynamics all the way down to independent scalar ODEs each admitting an exact sigmoidal solution.

The ultimate validation is empirical: these analytical curves closely match both the full (non-decoupled) dynamics of deep linear networks _and_ the dynamics of nonlinear networks with tanh activations (see Saxe et al., 2014, Figure 4). The fact that our theory — which assumed strong alignment — approximates reality well provides indirect evidence that strong alignment is indeed a good description of what happens in the rich regime.

(full dln widget)

This arc of making simplifying assumptions, deriving clean theory, generating predictions, and checking them against experiment is the scientific method as applied to understanding neural networks.


meeting notes
- want to understand large, deep models
	- w2v as the simplest possible language model (2 birds)
	- DLNs exhibit nonlinear learning phenomena
		- toy model that captures interesting complex stuff
		- weight alignment, stepwise learning dynamics (quanta => reduction of complexity)
- no linear vs nonlinear widget
	- reference nonlinear learning phenomena also seen in dlns (footnote/sidenote)
- all in one widget: 
	- sv curves (empirical vs theory)
	- loss plot
	- 3d saddle plot

tell to dhruva.
- im not sure how to add the prompt for the 3d saddle widget you were talking about
- need to create full widget that comes after deriving the exact solutions
	- depth 1, 2, 3; large, intermediate, small init; aligned, random init
- need references for nonlinear learning phenomena
- not sure if we need exposition on svd
- need to make collapsable section actually collapsable
- still need to write conclusion