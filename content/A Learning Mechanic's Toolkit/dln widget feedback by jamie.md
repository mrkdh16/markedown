---
title: dln widget feedback by jamie
draft: true
tags:
---
- use mathjax or katex or similar to get proper LaTeX notation here. I don't want to have to read things like `Σ xx^T = I`.
    - while you're at it, I think that you can come up with a better name than `W_e2e`. maybe you write `W_{total} = W_L ... W_1`
- add some text that explains to the user what is going on, mathematically. i.e., what is the problem setup? what is the loss function? which tensors are random? I don't even know!
- the theory curves don't always show? see screenshot:

tell a clearer story here, and teach the reader what is happening. but the backend + measurements seem great!

one thing we will want to do eventually: when going to higher depths, it's a pain in the ass to set the learning rate. the user doesn't really care about the learning rate... so we should probably set it for them (choosing it so the dynamics get moving in roughly the same number of steps in all cases), or at least offer them the option to have us choose it for them.

so see if you can use what you know about DLNs to come up with a heuristic for how the lr should scale with everything else.