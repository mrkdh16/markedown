---
title: blog post feedback by dhruva
draft: true
tags:
---
- incorporate plan of attack language into body
- mention upfront that the GF equations 1,2 already imply that if sigma11 = I, the problem reduces to matrix factorization of sigma31
	- i think the energy equation and the splitting into vector equations is still useful as it shows exactly what 'alignment' means here
- why alignment happens quickly (reference qwem paper argument)

Tell me that mu is a dataset index. Also the index i for canary isn’t used anywhere? Or maybe i should be mu. But either way I think you should still state that mu enumerates the samples.

On notation: I think one of the greatest weaknesses of the original Saxe et al paper is that they chose pretty terrible notation. If you want to keep the notation the same to match theirs, that wouldn’t be wrong, but I would spend a few minutes to consider whether you think it’d be helpful to use better notation. For example: W_2 and W_1 instead of W^32 and W^21. \Sigma_xy and \Sigma_xx instead of \Sigma^31 and \Sigma^11. U* S* V*^T for \Sigma_xy. Boldface rather than using superscripts/subscripts to differentiate vectors from scalars.

SVD equation: I’ve never loved the subscript/superscript notation for scalars/vectors… I think it’s kinda unclear. It’s up to you to decide whether you want to keep it. (But i like boldface for vectors and matrices!) You should explicitly state somewhere that alpha enumerates the modes.

"second column vector of U (u^2) pairs…" my brain automatically parses this as u squared, not u 2. Just a notation thing to consider.

"perform a change of variables" I think you can be even clearer here: we are simply rotating into the natural coordinate basis that we identified earlier. This is what we initially promised in the "plan of attack" section, it’s good to explicitly call back to that.

"we get new equations that can be thought of in terms of vector equations…. Thus, we have discovered exactly what our 3-layer linear network will learn"
This whole section is in the original paper, but it was actually never really clear to me what the point of it was. I could be misunderstanding! Let me know why you think it’s important to include. For me, I kinda think "ok, I can read from the gradient flow equation that the gradient is zero whenever \bar W_2\bar W_1 = S*, so that’s probably where the learning trajectory is headed." So I don’t think we need this analysis to argue where the matrix factorization problem comes from. Also, the separation of timescales between alignment and SV growth is not obvious from this analysis. So in the end I’m left wondering what we learned by rewriting the loss in this way (with the cooperative/competitive dynamics.)
If you think it was useful for you conceptually, feel free to keep it in! Otherwise, I would skip straight ahead to the analysis of the aligned initialization.

If you want to include it, I actually think the clearest way (with way less algebra) is to show that the energy equation (right after "gradient descent on the following loss:") is just the elementwise form of the original loss (in the rotated basis). Then you can differentiate it to get the gradient flow equation for the columns of W_1 and W_2 (your equations 5 and 6).

Actually, if you’re feeling up to it, I think it would be super useful to describe why we expect the alignment to happen quickly (much faster than SV growth) from small initialization. This is the argument that actually justifies the aligned init assumption. My favorite version of the argument is given in the discussion surrounding eq 50 in the qwem paper: https://arxiv.org/pdf/2502.09863. Then you can just directly jump and say "ok, since the alignment is fast, let’s just assume it happens in the first few steps before the SVs change too much, and then track the gradient flow dynamics starting from there." Keep in mind that my setting is symmetric (W_1 = W_2) but I’d imagine that there’s a general version that applies to the general asymmetric case. I think it’s fine if you just mention this in a footnote without showing the calculation.

Near Eq 7: A(t) and u(t) are maybe not the best notation, since you already have a and U which are unrelated variables. Maybe S(t) and s(t), if you use S* for the target SV?

"A similar caveat to footnote 5" -> "A similar caveat to footnote 4"

"These sigmoidal trajectories can be arbitrarily sharp" What do you mean by this? What parameters determine the sharpness of the trajectory?

"In a standard 1-layer regression, the error drops exponentially." What do you mean by this? If you are trying to contrast with ordinary least squares (OLS) regression, you are right that the loss decays exponentially, but you haven’t computed the loss curve for this deeper regression, so the comparison doesn’t work. It’s apples and oranges to compare the loss curve of one model with the SV curve of another

"but take much longer to fine-tune the subtle details" The term "fine tune" has a distinct ML meaning (e.g., "supervised fine tuning" as a post-training paradigm) so I’d use a different word. Maybe "internalize" is evocative?

"sudden phase transitions (rapid learning)" I would steer away from the term "phase transitions." Maybe it’s not technically wrong, but it means so many things in so many different contexts that it’s kinda become a meaningless overused term. just "sudden transitions of rapid learning" or something like that would be good, i think

Probably the appropriate paper to cite for the NP-hardness of arbitrary mfac is https://arxiv.org/abs/1012.0197.

Fig 4 caption: what are "linear curves" and "nonlinear curves?"

[^1]: From equations (1) and (2) follows a conservation law. Observe that $\tau \frac{dW^{21}}{dt}{W^{21}}^\top = {W^{32}}^\top \tau \frac{dW^{32}}{dt}$. This implies that $\frac{dW^{21}}{dt}{W^{21}}^\top - {W^{32}}^\top \frac{dW^{32}}{dt} = {W^{21}}\frac{dW^{21}}{dt}^\top - \frac{dW^{32}}{dt}^\top{W^{32}}  = 0$ where for the second equality we took the transpose of both sides. From this and the product rule, it follows that $\frac{d}{dt}(W^{21}{W^{21}}^\top - {W^{32}}^\top W^{32}) = 0$. So, the quantity $W^{21}{W^{21}}^\top - {W^{32}}^\top W^{32}$ is conserved throughout time.

[^2]: Observe that in figure 3, unlike the input modes, the output modes do not form a complete basis for the feature space. This is essentially because four categorical directions are enough to completely characterize the structure of the data. 

[^3]: Don't worry too much if this explanation is in fact not intuitive and seems to only complicate things. The important result from this change of variables is that the equations get much simpler.

[^4]: Here, $\delta_{\alpha \beta}=1$ if $\alpha=\beta$ and $\delta_{\alpha \beta}=0$ if $\alpha \neq \beta$.

[^5]: A slight caveat: usually the hidden layer acts as a sort of bottleneck in the sense that $N_{2} < N_{1},N_{3}$. This means that the rank of $W^{32}W^{21}$ will be constrained by the size of the hidden layer. In this case, the network will only be able to learn the top $N_{2}$ singular vectors of $\Sigma^{31}$.

[^6]: A similar caveat to footnote 5: if $N_{2}<N_{1},N_{3}$, i.e. the hidden layer serves as a bottleneck, then we assume $a^\alpha = a_{\alpha} r^\alpha, \space b^\alpha = b_{\alpha}r^\alpha$ for $\alpha=\{1,\dots,N_{2}\}$ and $a^\alpha=b^\alpha=0$ for $\alpha=\{N_{2}+1,\dots\}$.

[^7]: Similar to footnote 1, we can infer a conservation law from equations (8) and (9): $\frac{d}{dt}(a^2-b^2)=0$. This means that all possible trajectories of $a$ and $b$ must lie on hyperbolas of constant $a^2-b^2=k$ in the $(a,b)$ plane.

[^8]: Recall that a sigmoid function has the form: $\frac{1}{1+e^{-x}}$.