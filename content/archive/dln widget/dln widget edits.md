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