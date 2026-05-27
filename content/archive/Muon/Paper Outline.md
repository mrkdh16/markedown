---
title: Paper Outline
draft: true
tags:
---
Tentative Abstract.
We aim to understand mechanistically how the behavior of the Muon optimizer is qualitatively different from standard Gradient Descent (GD) in the matrix factorization setting and use that knowledge to create principled learning rate schedules for the overparameterized and exactly-parameterized case.

Problem Setting.
In matrix factorization, the objective is to learn weight matrices $P,Q$ that minimize the loss $\mathcal{L}(P,Q) = \frac{1}{2}||M^*-PQ||^2_F$ for some fixed target matrix $M^*$. 

Plan of Attack.
Concretely we will show that 
\begin{enumerate}
    \item Muon does not exhibit the saddle-to-saddle behavior seen in standard GD.
    \item The training dynamics of Muon split into 3 phases: weight alignment, uniform singular value growth and singular value convergence.
    \item A large learning rate can be used in the uniform singular value growth phase.
	\item In the overparameterized and exactly-parameterized setting, we can force weight alignment in exactly two steps.
    \item There exists an approximately conserved quantity $|P|_F-|Q|_F$. This implies that Muon learns the balanced solution from small initialization.
\end{enumerate}

GD vs. Muon (in matrix factorization)
- the main/most general difference (all the other qualitative distinctions are downstream of this central distinction): GD goes from saddle point to saddle point in the loss landscape, learning one singular direction at a time in a greedy manner; on the other hand, Muon learns all the singular directions simultaneously early in training, then uniformly grows the singular values until convergence
	- hamiltonian dynamics (approximate in some, exact in others)
		- conserved quantity (=> muon learns balanced solution for different reason from GD which has a different conserved quantity)
	- in GD, the max stable learning rate is bounded by the local sharpness of the loss; this is not true for Muon---once the weights are aligned, we may grow the singular values at any speed we desire
- another difference is that the overparameterized and underparameterized settings are qualitatively different when using Muon (consequently, we will treat them differently in this paper.)
	- essentially, the reason is that we are orthogonalizing (M*-PQ^T)P = RP, where R is always full rank but P can only be either full row-rank or full column-rank dependent on whether it's over or under parameterized 

Body.
- notation
- uniform growth phase
	- this is the special property of Muon that is quite different from GD
	- explain alignment with target and alignment w/ each other
	- excluding alignment, what does the picture look like?
		- very simple decoupled uniform growth picture (already in literature)
	- if we could force alignment to happen quickly, we are free to fiddle with the learning rate to make the singular value growth and convergence happen as quickly as possible
- the three settings of weight alignment
	- assume alignment w/ target and w/ each other (scalar factorization w/ scalar factors)
		- hamiltonian dynamics
		- flow map
			- compare to GD: different conserved quantity, no saddle point at origin, uniform flows
	- assume alignment w/ target but not w/ each other (scalar factorization w/ vector factors and overparameterized matrix factorization as a generalization)
		- scalar factorization w/ vector factors
			- in high dimensions, parameter vectors are approximately orthogonal
				- LR >> init scale => alignment in two steps (the only upper bound on the learning rate is the scale of the target)
				- LR = init scale = alignment in one step
				- LR << init scale (GF) => gradual alignment
			- hamiltonian dynamics & same conserved quantity as scalar factorization w/ scalar factors
		- overparameterized matrix factorization
			- in the V << d regime, at early time, the dynamics decouple into parallel scalar factorizations w/ vector factors (we need M* >> PQ^T and PP^T, QQ^T \approx alpha * id; the former is true in any (over/exact/under parameterized) setting, but the latter is a special property of the overparameterized case)
				- if we get alignment between the row vectors of P and Q (i.e. alignment happens in all the decoupled parallel scalar factorizations w/ vector factors), then P=Q (inner alignment). then, if PP^T = QQ^T \approx alpha * id, we get target alignment and we enter the uniform growth phase
			- the intuition here provides justification for hamiltonian dynamics in overparameterized matrix factorization
	- assume neither alignment w/ target nor alignment w/ each other (underparameterized and exactly parameterized matrix factorization)
- a justification for the WSD learning rate schedule
	- in the over and exactly parameterized regime, we can force inner alignment in 1 step if we set LR = init scale. so, after one step, P=Q
		- once P=Q, we can spike the learning rate to get the rows of P, Q to be mutually orthogonal. thus, we have perfect weight alignment in exactly two steps
		- we can take one big step to get to min sv or many small steps to get to max sv while controlling the smaller sv oscillations