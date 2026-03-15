---
title: blog post feedback by dhruva
draft: true
tags:
---
- incorporate plan of attack language into body
- mention upfront that the GF equations 1,2 already imply that if sigma11 = I, the problem reduces to matrix factorization of sigma31
	- i think the energy equation and the splitting into vector equations is still useful as it shows exactly what 'alignment' means here
- why alignment happens quickly (reference qwem paper argument)
#### notation
Tell me that mu is a dataset index. Also the index i for canary isn’t used anywhere? Or maybe i should be mu. But either way I think you should still state that mu enumerates the samples.

On notation: I think one of the greatest weaknesses of the original Saxe et al paper is that they chose pretty terrible notation. If you want to keep the notation the same to match theirs, that wouldn’t be wrong, but I would spend a few minutes to consider whether you think it’d be helpful to use better notation. For example: W_2 and W_1 instead of W^32 and W^21. \Sigma_xy and \Sigma_xx instead of \Sigma^31 and \Sigma^11. U* S* V*^T for \Sigma_xy. Boldface rather than using superscripts/subscripts to differentiate vectors from scalars.

SVD equation: I’ve never loved the subscript/superscript notation for scalars/vectors… I think it’s kinda unclear. It’s up to you to decide whether you want to keep it. (But i like boldface for vectors and matrices!) You should explicitly state somewhere that alpha enumerates the modes.

"second column vector of U (u^2) pairs…" my brain automatically parses this as u squared, not u 2. Just a notation thing to consider.

Near Eq 7: A(t) and u(t) are maybe not the best notation, since you already have a and U which are unrelated variables. Maybe S(t) and s(t), if you use S* for the target SV?
#### more substantive stuff
Actually, if you’re feeling up to it, I think it would be super useful to describe why we expect the alignment to happen quickly (much faster than SV growth) from small initialization. This is the argument that actually justifies the aligned init assumption. My favorite version of the argument is given in the discussion surrounding eq 50 in the qwem paper: https://arxiv.org/pdf/2502.09863. Then you can just directly jump and say "ok, since the alignment is fast, let’s just assume it happens in the first few steps before the SVs change too much, and then track the gradient flow dynamics starting from there." Keep in mind that my setting is symmetric (W_1 = W_2) but I’d imagine that there’s a general version that applies to the general asymmetric case. I think it’s fine if you just mention this in a footnote without showing the calculation.

"A similar caveat to footnote 5" -> "A similar caveat to footnote 4"

"These sigmoidal trajectories can be arbitrarily sharp" What do you mean by this? What parameters determine the sharpness of the trajectory?

"In a standard 1-layer regression, the error drops exponentially." What do you mean by this? If you are trying to contrast with ordinary least squares (OLS) regression, you are right that the loss decays exponentially, but you haven’t computed the loss curve for this deeper regression, so the comparison doesn’t work. It’s apples and oranges to compare the loss curve of one model with the SV curve of another

"but take much longer to fine-tune the subtle details" The term "fine tune" has a distinct ML meaning (e.g., "supervised fine tuning" as a post-training paradigm) so I’d use a different word. Maybe "internalize" is evocative?

"sudden phase transitions (rapid learning)" I would steer away from the term "phase transitions." Maybe it’s not technically wrong, but it means so many things in so many different contexts that it’s kinda become a meaningless overused term. just "sudden transitions of rapid learning" or something like that would be good, i think

Fig 4 caption: what are "linear curves" and "nonlinear curves?"
