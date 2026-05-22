---
title: Paper Outline
draft: true
tags:
---
Tentative Abstract.
We aim to understand mechanistically how the behavior of the Muon optimizer is qualitatively different from standard Gradient Descent (GD) in the matrix factorization setting and use that knowledge to create principled learning rate schedules.

Problem Setting.
In matrix factorization, the objective is to learn weight matrices $P,Q$ that minimize the loss $\mathcal{L}(P,Q) = \frac{1}{2}||M^*-PQ||^2_F$ for some fixed target matrix $M^*$. 

Plan of Attack.
Concretely we will show that 
\begin{enumerate}
    \item Muon does not exhibit the saddle-to-saddle behavior seen in standard GD.
    \item The training dynamics of Muon split into 3 phases: weight alignment, uniform singular value growth and singular value convergence.
    \item In the weight alignment phase, there exist oscillatory zones that the optimizer must escape.
    \item A large learning rate can be used in the uniform singular value growth phase.
    \item There exists an approximately conserved quantity $|P|_F-|Q|_F$. This implies that Muon learns the balanced solution from small initialization.
\end{enumerate}

Body.
- notation
- uniform growth phase (poa 2,4)
	- explain alignment with target and alignment w/ each other
	- excluding alignment, what does the picture look like?
		- very simple decoupled uniform growth picture (already in literature)
- the three settings of weight alignment (poa 1,3,5)
	- assume alignment w/ target and w/ each other (scalar factorization w/ scalar factors)
		- hamiltonian dynamics
		- flow map
			- compare to GD: different conserved quantity, no saddle point at origin, uniform flows
			- there exist dead zones where parameters oscillate forever
	- assume alignment w/ target but not w/ each other (scalar factorization w/ vector factors and overparameterized matrix factorization as a generalization)
		- scalar factorization w/ vector factors
			- in high dimensions, parameter vectors are approximately orthogonal
				- LR >> init scale => alignment in two steps (the only upper bound on the learning rate is the scale of the target)
				- LR << init scale (GF) => gradual alignment
				- there are no dead zones because in the high dimensional limit, there are no bad initializations
			- even with adversarial init, as long as the parameter vectors are not exactly antiparallel, alignment will eventually happen
			- hamiltonian dynamics & same conserved quantity as scalar factorization w/ scalar factors
		- overparameterized matrix factorization
			- in the V << d regime, at early time, the dynamics decouple into parallel scalar factorizations w/ vector factors
				- if LR >> init scale, we can take advantage of this early time approximation to align the row vectors of P, Q super fast(empirically supported)
					- the first update is identical to a scalar factorization w/ vector factors update (p_1 = p_0 + eta * hat(q_0)
						- this is because PP^T, QQ^T are both approximately scaled identity, i.e. the rows of P and Q are mutually (approximately) orthogonal
					- after the first update, the rows of P and Q stay mutually (approximately) orthogonal => the second update is also identical to a scalar factorization w/ vector factors update (p_2 = p_1 + eta * hat(q_1))
						- the first update approximately replaces the rows of P with eta-scaled rows of Q, so must stay mutually (approximately) orthogonal
					- thus, p_i and q_i align in exactly two steps
					- once p_i and q_i are aligned, we have that p^T_i q_j = p^T_i p_j, so as long as the rows of P and Q stay mutually (approximately) orthogonal through the first two steps, the loss will completely decouple and the decoupling will persist throughout training
						- the second update adds to each row in P an orthogonal vector. in the V << d limit, because there are so many extra dimensions, the new rows will still be mutually (approximately) orthogonal. this is not the case for the exactly parameterized case.
				- the intuition here provides justification for hamiltonian dynamics in overparameterized matrix factorization
	- assume neither alignment w/ target nor alignment w/ each other (underparameterized and exactly parameterized matrix factorization)
- a justification for the WSD learning rate schedule
	- in the overparameterized setting, we don't even need a warmup since we get alignment for free from two big first steps
	- in the exactly-parameterized and underparameterized setting, we need some time to "warm up" and get the vectors aligned properly
		- warm up with LR < init scale
			- the p_i, q_i pairs will get aligned quickly due to optimization pressure (large contribution to the loss)
			- the rows of P and Q will become mutually orthogonal over time, once they are "sufficiently mutually orthogonal," this "triggers" the decoupling
				- it helps to initialize P and Q to be orthogonal since the rows will deviate less from mutual orthogonality
		- once the decoupling happens (at time t) we are good to spike the learning rate to get to the minimum target singular value in one big step
			- the spiked update vectors will be approximately mutually orthogonal and because they're so much bigger than the rows of P at time t, the rows of P at time t+1 will stay mutually orthogonal (so, we can get to the min sv without breaking alignment)
		- decrease the learning rate after the one big step to converge to all the target singular values