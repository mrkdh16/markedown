---
title: muon rip
draft: true
tags:
---
- if LR >> init scale, we can take advantage of this early time approximation to align the row vectors of P, Q super fast(empirically supported)
	- the first update is identical to a scalar factorization w/ vector factors update (p_1 = p_0 + eta * hat(q_0)
		- this is because PP^T, QQ^T are both approximately scaled identity, i.e. the rows of P and Q are mutually (approximately) orthogonal
	- after the first update, the rows of P and Q stay mutually (approximately) orthogonal => the second update is also identical to a scalar factorization w/ vector factors update (p_2 = p_1 + eta * hat(q_1))
		- the first update approximately replaces the rows of P with eta-scaled rows of Q, so must stay mutually (approximately) orthogonal
	- thus, p_i and q_i align in exactly two steps
	- once p_i and q_i are aligned, we have that p^T_i q_j = p^T_i p_j, so as long as the rows of P and Q stay mutually (approximately) orthogonal through the first two steps, the loss will completely decouple and the decoupling will persist throughout training
		- the second update adds to each row in P an orthogonal vector. in the V << d limit, because there are so many extra dimensions, the new rows will still be mutually (approximately) orthogonal. this is not the case for the exactly parameterized case.

- in the overparameterized setting, we don't even need a warmup since we get alignment for free from two big first steps
- in the exactly-parameterized and underparameterized setting, we need some time to "warm up" and get the vectors aligned properly
	- warm up with LR < init scale
		- the p_i, q_i pairs will get aligned quickly due to optimization pressure (large contribution to the loss)
		- the rows of P and Q will become mutually orthogonal over time, once they are "sufficiently mutually orthogonal," this "triggers" the decoupling
			- it helps to initialize P and Q to be orthogonal since the rows will deviate less from mutual orthogonality
	- once the decoupling happens (at time t) we are good to spike the learning rate to get to the minimum target singular value in one big step
		- the spiked update vectors will be approximately mutually orthogonal and because they're so much bigger than the rows of P at time t, the rows of P at time t+1 will stay mutually orthogonal (so, we can get to the min sv without breaking alignment)
	- decrease the learning rate after the one big step to converge to all the target singular values