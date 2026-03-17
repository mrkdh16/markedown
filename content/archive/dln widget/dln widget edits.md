---
title: dln widget edits
draft: true
tags:
---
simplification, better organization, cleaner storytelling
- story telling
	- ~~better hook for the audience from the start~~
		- ~~will probably put some nonlinear phenomena plots at the top to draw attention and introduce the reader to what we're investigating~~
	- [x] ~~widget at the top~~
		- ~~have pre-set settings for observing various phenomenon (simplest case in which the 2-layer theory with analytic solutions takes place, simplest case with stepwise loss dynamics (2-layer), 1-layer case in which we see exponential curves)~~
			- ~~the point is we see qualitatively different behavior based on depth (with no nonlinearities)~~
		- ~~get the reader interested at the start with the widget and the cool phenomena~~
	- [ ] have a toggle for extra hyperparams
		- init scale, LR, depth are sufficient
		- make it simpler (ink to information ratio)
	- [x] less text larger font
- technical
	- [ ] fix theory curves (to do for the future)
feedback to incorporate
- ~~start by writing down a deep linear network!~~
- ~~your audience here is the entire audience of [learningmechanics.org](http://learningmechanics.org), which should frame how you tell your story here. to "...phenomena we see in real deep nonlinear networks: long plateaus in the loss, sudden rapid transitions, a preference for low-rank solutions..." many people would say: hang on, I've never seen those things in a deep net, and I've trained lots of em.~~
- I think you want a 1/P prefactor in your definitions of the `Sigma` matrices.
- w the GF equations, probs have an intermediate step where you write like `... = - dE / dW = ...`
- I'm skeptical of the NP-hardness claim. I would be v surprised if that paper were truly about your setting. no matter the `Sigma_xx`, you can write down the optimal sol in closed form, yes? what's NP about that?
- the `a, b` notation is a little confusing.
- I don't follow "This reveals that gradient descent has two subtasks..." --- how do you know that GD is actually _doing_ these two things? the causal argument is not clear. GD _could_ do these things, but why should it want to align?

- [ ] balancedness
- [ ] quick (silent) alignment
- [ ] stepwise loss dynamics
	- at depth=2, need exponentially small init
	- for depth>=3, only need polynomially small init (https://arxiv.org/pdf/1909.12051)
	- as depth increases, acceptable init size for stepwise learning increases