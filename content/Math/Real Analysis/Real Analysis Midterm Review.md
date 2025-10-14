---
title: Real Analysis Midterm Review
draft: true
tags:
  - math
---
## Chapter 1: Real Numbers
### Key Definitions (Chapter 1)

| Concept                                         | Definition/Description                                                                                                                                                                                                                        | Citation(s)   |
| :---------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| **Standard Sets**                               | $\mathbb{N}$: Natural numbers ($1, 2, 3, \ldots$); $\mathbb{Z}$: Integers (from _Zahlen_); $\mathbb{Q}$: Rational numbers (from "quotient").                                                                                                  |               |
| **Set Theory Notation**                         | $x \in A$ ($x$ is a member of $A$); $y \notin B$ ($y$ is not a member of $B$); $\emptyset$: the empty set; ${x}$: singleton set.                                                                                                              |               |
| **Subsets and Set Operations**                  | $A \subset B$: $A$ is a subset of $B$; $A \cup B$: union; $A \cap B$: intersection; Disjoint: $A \cap B = \emptyset$; $A \setminus B$: difference.                                                                                            |               |
| **Equivalence Relation**                        | A relation $\sim$ on $S$ satisfying reflexivity ($s \sim s$), symmetry ($s \sim s' \implies s' \sim s$), and transitivity ($s \sim s' \sim s'' \implies s \sim s''$). This breaks $S$ into disjoint equivalence classes.                      |               |
| **Cut in $\mathbb{Q}$**                         | A pair of subsets $A, B \subset \mathbb{Q}$ such that: (a) $A \cup B = \mathbb{Q}$, $A \neq \emptyset$, $B \neq \emptyset$, $A \cap B = \emptyset$. (b) If $a \in A$ and $b \in B$ then $a < b$. (c) $A$ contains no largest element. $x = A  | B$.           |
| **Real Number ($\mathbb{R}$)**                  | **A real number is a cut in $\mathbb{Q}$**.                                                                                                                                                                                                   |               |
| **Order Relation on Cuts**                      | If $x = A                                                                                                                                                                                                                                     | B$ and $y = C |
| **Upper Bound & L.U.B.**                        | $M \in \mathbb{R}$ is an upper bound for $S \subset \mathbb{R}$ if $s \leq M$ for all $s \in S$. The least upper bound (l.u.b. or $\sup S$) is the smallest of all upper bounds.                                                              |               |
| **Ordered Field**                               | A system satisfying the algebraic properties of a field (commutativity, associativity, inverses, etc.) and order properties (transitivity, trichotomy, translation).                                                                          |               |
| **Convergent Sequence (in $\mathbb{R}$)**       | A sequence $(a_n)$ converges to the limit $b \in \mathbb{R}$ if for each $\varepsilon > 0$, there exists $N \in \mathbb{N}$ such that for all $n \geq N$, $                                                                                   | a_n - b       |
| **Cauchy Condition**                            | A sequence $(a_n)$ obeys a Cauchy condition if for each $\varepsilon > 0$, there exists $N \in \mathbb{N}$ such that if $n, k \geq N$, then $                                                                                                 | a_n - a_k     |
| **Euclidean Space**                             | The Cartesian product $A \times B$ is the set of all ordered pairs $(a, b)$ with $a \in A, b \in B$. Euclidean $m$-space is $\mathbb{R}^m$.                                                                                                   |               |
| **Box/Cube/Ball/Sphere**                        | A box is $[a_1, b_1] \times \cdots \times [a_m, b_m]$ in $\mathbb{R}^m$. The unit cube is $^m$. The unit ball is $B^m = {x \in \mathbb{R}^m :                                                                                                 | x             |
| **Convexity**                                   | A set $E \subset \mathbb{R}^m$ is **convex** if for each pair of points $x, y \in E$, the straight line segment (convex combinations $sx + ty$ where $s+t=1, 0 \leq s, t \leq 1$) between $x$ and $y$ is also contained in $E$.               |               |
| **Functions & Cardinality**                     | $f: A \to B$ is a function. $A$ is the domain, $B$ is the target/codomain, and the range is the set of outputs. A function is an **injection** (one-to-one), a **surjection** (onto), or a **bijection** (both).                              |               |
| **Denumerable & Uncountable**                   | Sets $A$ and $B$ have equal cardinality ($A \sim B$) if there is a bijection between them. A set is **denumerable** if it has the same cardinality as $\mathbb{N}$ (i.e., it is listable). A set is **uncountable** if it is not denumerable. |               |
| **Continuous Function (on $[a, b]$)**           | $f: [a, b] \to \mathbb{R}$ is continuous if $\forall \varepsilon > 0$ and $x \in [a, b]$, $\exists \delta > 0$ such that $t \in [a, b]$ and $                                                                                                 | t - x         |
| **Uniformly Continuous Function (on $[a, b]$)** | Defined in Theorem 25, meaning the $\delta$ choice can be independent of $x$.                                                                                                                                                                 |               |

### Key Theorems, Corollaries, and Lemmas (Chapter 1)

- **Theorem 1:** No number $r$ in $\mathbb{Q}$ has square equal to 2 (i.e., $\sqrt{2} \notin \mathbb{Q}$).
- **Theorem 3:** The set $\mathbb{R}$ of all cuts in $\mathbb{Q}$ is a **complete ordered field** that contains $\mathbb{Q}$. (The existence of a unique least upper bound for every nonempty set bounded above is a key property of $\mathbb{R}$ derived from the cut construction).
- **Theorem 5:** $\mathbb{R}$ is complete with respect to Cauchy sequences. (If $(a_n)$ is a Cauchy sequence in $\mathbb{R}$, it converges to a limit in $\mathbb{R}$.)
- **Theorem 10:** $\mathbb{R}$ is uncountable. (Proved using Cantor's diagonalization method).
- **Theorem 12:** Each infinite set $S$ contains a denumerable subset.
- **Theorem 15:** $\mathbb{N} \times \mathbb{N}$ is denumerable.
    - **Corollary 16:** The Cartesian product of denumerable sets is denumerable.
    - **Corollary 19:** $\mathbb{Q}$ is denumerable.
    - **Corollary 20:** For each $m \in \mathbb{N}$, the set $\mathbb{Q}^m$ is denumerable.
- **Theorem 21 (Schroeder-Bernstein Theorem):** If $A, B$ are sets and $f: A \to B, g: B \to A$ are injections then there exists a bijection $h: A \to B$.
- **Theorem 22:** The values of a continuous function defined on an interval $[a, b]$ form a bounded subset of $\mathbb{R}$.
- **Theorem 23:** A continuous function $f$ defined on an interval $[a, b]$ takes on absolute minimum and absolute maximum values.
- **Theorem 24 (Intermediate Value Theorem):** A continuous function defined on an interval $[a, b]$ takes on all intermediate values.
- **Theorem 25 (Fundamental Theorem of Continuous Functions):** Every continuous real valued function of a real variable $x \in [a, b]$ is bounded, achieves minimum, intermediate, and maximum values, and is uniformly continuous.

---

## Chapter 2: A Taste of Topology

Chapter 2 introduces the abstract setting of metric spaces, which allows for the generalization of continuity and convergence concepts from $\mathbb{R}$ to higher dimensions and abstract spaces.

### Key Definitions (Chapter 2)

|Concept|Definition/Description|Citation(s)|
|:--|:--|:--|
|**Metric Space**|A set $M$ (points) together with a **metric** $d$ (distance function) $d(x, y)$, satisfying: (a) positive definiteness ($d(x, y) \geq 0$, and $d(x, y) = 0 \iff x = y$), (b) symmetry ($d(x, y) = d(y, x)$), and (c) triangle inequality ($d(x, z) \leq d(x, y) + d(y, z)$).||
|**Discrete Metric**|On any set $M$, distance between distinct points is 1, distance between a point and itself is 0.||
|**Convergence**|A sequence $(p_n)$ converges to $p$ if $\forall \varepsilon > 0$, $\exists N$ such that for all $n \geq N$, $d(p_n, p) < \varepsilon$.||
|**Continuous Function**|A function $f: M \to N$ is **continuous** if it preserves sequential convergence: $f$ sends convergent sequences in $M$ to convergent sequences in $N$, limits being sent to limits.||
|**Homeomorphism**|A mapping that is a **bicontinuous bijection** ($f$ is a bijection, $f$ is continuous, and $f^{-1}$ is continuous). This is also called a topological equivalence.||
|**$(\varepsilon, \delta)$-Condition (for Continuity)**|$\forall \varepsilon > 0$ and each $p \in M$, $\exists \delta > 0$ such that if $d_M(x, p) < \delta$, then $d_N(f x, f p) < \varepsilon$.||
|**Limit of a Set**|A point $p \in M$ is a **limit of $S$** if there exists a sequence $(p_n)$ in $S$ that converges to $p$.||
|**Closed Set**|A set $S$ is **closed** if it contains all its limits.||
|**Open Set**|A set $S$ is **open** if for each $p \in S$, there exists $r > 0$ such that $M_r p = {q \in M : d(p, q) < r}$ is contained in $S$.||
|**Neighborhood**|Any open set $V$ that contains $p$.||
|**Product Metrics**|$d_E$ (Euclidean), $d_{\max}$ (Max metric), $d_{\text{sum}}$ (Manhattan/Taxicab metric) defined on the Cartesian product $M = X \times Y$.||
|**Complete Metric Space**|A metric space $M$ in which every Cauchy sequence converges.||
|**Sequentially Compact**|A subset $A \subset M$ is **(sequentially) compact** if every sequence $(a_n)$ in $A$ has a subsequence $(a_{n_k})$ that converges to a limit in $A$.||
|**Connected**|A metric space $M$ is **connected** if it has no separation, meaning $M$ cannot be written as the disjoint union of two proper, nonempty, clopen sets $A \sqcup B$.||
|**Path/Path-connected**|A **path** is a continuous map $f: [a, b] \to M$. $M$ is **path-connected** if any two points can be joined by a path.||
|**Closure, Interior, Boundary**|$\overline{S}$: smallest closed subset containing $S$. $\text{int} S$: largest open subset contained in $S$. $\partial S$: difference between closure and interior ($\overline{S} \setminus \text{int} S$).||
|**Cluster/Condensation Point**|$S$ **clusters** at $p$ if each $M_r p$ contains infinitely many points of $S$. $S$ **condenses** at $p$ if each $M_r p$ contains uncountably many points of $S$.||
|**Perfect Space**|A metric space $M$ is **perfect** if $M' = M$, meaning every point in $M$ is a cluster point of $M$.||
|**Covering Compact**|A set $A$ is **covering compact** if every open covering $\mathcal{U}$ of $A$ reduces to a finite subcovering $\mathcal{V} \subset \mathcal{U}$.||
|**Total Boundedness**|A set $A$ is **totally bounded** if for each $\varepsilon > 0$, $A$ can be covered by a finite number of $\varepsilon$-neighborhoods.||
|**Cantor Set**|The **standard middle-thirds Cantor set** $C$ is the nested intersection $C = \bigcap_{n=0}^\infty C_n$, where $C_n$ is the union of $2^n$ closed intervals of length $1/3^n$.||
|**Cantor Space**|A metric space $M$ that is compact, nonempty, perfect, and totally disconnected.||
|**Uniform Continuity**|$f: M \to N$ is **uniformly continuous** if $\forall \varepsilon > 0$, $\exists \delta > 0$ such that $p, q \in M$ and $d_M(p, q) < \delta \implies d_N(f p, f q) < \varepsilon$.||

### Key Theorems, Corollaries, and Lemmas (Chapter 2)

- **Theorem 1:** If $(p_n) \to p$, then every subsequence $(q_k) \to p$.
- **Theorem 4 ($\varepsilon, \delta$ condition):** $f: M \to N$ is continuous $\iff$ it satisfies the $(\varepsilon, \delta)$-condition.
- **Theorem 5 (Duality):** Openness is dual to closedness: the complement of an open set is closed, and vice versa.
- **Theorem 6:** The union of _any_ number of open sets is open; the intersection of a _finite_ number of open sets is open.
- **Corollary 7:** The intersection of _any_ number of closed sets is closed; the union of a _finite_ number of closed sets is closed.
- **Theorem 11 (Continuity Equivalences):** The sequential convergence condition $\iff$ the $(\varepsilon, \delta)$-condition $\iff$ the closed set condition (preimage of closed is closed) $\iff$ the open set condition (preimage of open is open).
- **Theorem 17 (Convergence in a Product Space):** Convergence in $M_1 \times M_2$ (using $d_{\max}, d_E,$ or $d_{\text{sum}}$) is equivalent to the convergence of the component sequences in $M_1$ and $M_2$ respectively.
- **Theorem 20:** Every metric $d: M \times M \to \mathbb{R}$ is continuous.
- **Theorem 24 (Completeness of $\mathbb{R}^m$):** $\mathbb{R}^m$ is a complete metric space.
- **Theorem 26 (Necessary condition for Compactness):** Every compact set is closed and bounded.
- **Theorem 31 (Bolzano-Weierstrass Theorem):** Every bounded sequence in $\mathbb{R}^m$ has a convergent subsequence.
- **Theorem 32:** Every closed subset of a compact set is compact.
- **Theorem 33 (Heine-Borel Theorem):** Every closed and bounded subset of $\mathbb{R}^m$ is compact. (Note: This is only true in $\mathbb{R}^m$, not general metric spaces).
- **Theorem 35 (Nested Compacts):** The nested intersection of a sequence of nonempty compact sets ($K_1 \supset K_2 \supset \cdots$) is nonempty.
- **Theorem 36:** The continuous image of a compact set is compact.
- **Theorem 37 (Extreme Value Theorem in MS):** A continuous function defined on a compact set assumes maximum and minimum values.
- **Theorem 38:** Compactness is a topological property.
- **Theorem 40 (Inverse Function for Compact Spaces):** If $M$ is compact, a continuous bijection $f: M \to N$ is a homeomorphism (i.e., $f^{-1}$ is automatically continuous).
- **Theorem 42 (Continuity implies Uniform Continuity):** Every continuous function defined on a compact set is uniformly continuous.
- **Theorem 44 (Generalized Intermediate Value Theorem):** If $f: M \to \mathbb{R}$ is continuous and $M$ is connected, then the range $f(M)$ is an interval.
- **Theorem 46:** $\mathbb{R}$ is connected.
- **Corollary 47:** The continuous image of a connected set is connected.
- **Theorem 49:** The closure of a connected set is connected.
- **Theorem 51:** Path-connected implies connected.
- **Theorem 56:** Every nonempty, **perfect, complete** metric space is **uncountable**.
- **Theorem 63 (Compactness Equivalences):** A set $A$ is covering compact $\iff$ it is sequentially compact.
- **Theorem 65 (Alternative Compactness Criterion):** A metric space $M$ is compact $\iff$ it is complete and totally bounded.
- **Theorem 70 (Cantor Surjection Theorem):** Given a compact nonempty metric space $M$, there is a continuous surjection of the Cantor set $C$ onto $M$.
- **Theorem 80 (Completion Theorem):** Every metric space can be completed.