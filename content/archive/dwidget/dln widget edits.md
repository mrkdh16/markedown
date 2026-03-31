---
title: dln widget edits
draft: true
tags:
---
nonlinear target fn to try: f*(x) = g(Ux) where g is some nonlinear function, x \in R^d, U \in R^{r \times d}

staircase fns: f*(x) = x1 +x1x2 + x1x2x3

- [ ] balancedness
- [ ] quick (silent) alignment
- [ ] stepwise loss dynamics
	- at depth=2, need exponentially small init
	- for depth>=3, only need polynomially small init (https://arxiv.org/pdf/1909.12051)
	- as depth increases, acceptable init size for stepwise learning increases

findings.
- the nice dynamics with sin(Ux) were because of the small scale of U (sin x \approx x)
- student teacher dynamics look alright; tanh looks nicer, probably also because for small x tanh x \approx x

So, somewhat disappointingly, I realized that the super nice sin(Ux) dynamics were because of the init scale of U. Since U was initialized small, I think sin x \approx x meant that we were essentially seeing linear target dynamics. I changed the target fn for nonlinear nets to a teacher network (outputs of a nonlinear net of the same architecture with random inputs) (Q: is it bad that im using the same inputs to generate the teacher net as am using to train the simulation nets?) 

I'm seeing that with teacher nets as the target fn, tanh nets have cleaner dynamics so i made that the default nonlinear net. (maybe it's better to still go with relu since they're more standard (?) not sure) 

For consistency, I plotted the SVs of W_1 for both linear and nonlinear nets. This could potentially be confusing since we actually solve for the singular values of W_total in the article; not sure which consistency is more important tho.

Not sure what to do about the whitened input covariance and aligned init toggles. 

