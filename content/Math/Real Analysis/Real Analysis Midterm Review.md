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
## Chapter 2: A Taste of Topology
### Key Definitions (Chapter 2)

| Concept                                                | Definition/Description                                                                                                                                                                                                                                                       | Citation(s) |
| :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| **Metric Space**                                       | A set $M$ (points) together with a **metric** $d$ (distance function) $d(x, y)$, satisfying: (a) positive definiteness ($d(x, y) \geq 0$, and $d(x, y) = 0 \iff x = y$), (b) symmetry ($d(x, y) = d(y, x)$), and (c) triangle inequality ($d(x, z) \leq d(x, y) + d(y, z)$). |             |
| **Discrete Metric**                                    | On any set $M$, distance between distinct points is 1, distance between a point and itself is 0.                                                                                                                                                                             |             |
| **Convergence**                                        | A sequence $(p_n)$ converges to $p$ if $\forall \varepsilon > 0$, $\exists N$ such that for all $n \geq N$, $d(p_n, p) < \varepsilon$.                                                                                                                                       |             |
| **Continuous Function**                                | A function $f: M \to N$ is **continuous** if it preserves sequential convergence: $f$ sends convergent sequences in $M$ to convergent sequences in $N$, limits being sent to limits.                                                                                         |             |
| **Homeomorphism**                                      | A mapping that is a **bicontinuous bijection** ($f$ is a bijection, $f$ is continuous, and $f^{-1}$ is continuous). This is also called a topological equivalence.                                                                                                           |             |
| **$(\varepsilon, \delta)$-Condition (for Continuity)** | $\forall \varepsilon > 0$ and each $p \in M$, $\exists \delta > 0$ such that if $d_M(x, p) < \delta$, then $d_N(f x, f p) < \varepsilon$.                                                                                                                                    |             |
| **Limit of a Set**                                     | A point $p \in M$ is a **limit of $S$** if there exists a sequence $(p_n)$ in $S$ that converges to $p$.                                                                                                                                                                     |             |
| **Closed Set**                                         | A set $S$ is **closed** if it contains all its limits.                                                                                                                                                                                                                       |             |
| **Open Set**                                           | A set $S$ is **open** if for each $p \in S$, there exists $r > 0$ such that $M_r p = {q \in M : d(p, q) < r}$ is contained in $S$.                                                                                                                                           |             |
| **Neighborhood**                                       | Any open set $V$ that contains $p$.                                                                                                                                                                                                                                          |             |
| **Product Metrics**                                    | $d_E$ (Euclidean), $d_{\max}$ (Max metric), $d_{\text{sum}}$ (Manhattan/Taxicab metric) defined on the Cartesian product $M = X \times Y$.                                                                                                                                   |             |
| **Complete Metric Space**                              | A metric space $M$ in which every Cauchy sequence converges.                                                                                                                                                                                                                 |             |
| **Sequentially Compact**                               | A subset $A \subset M$ is **(sequentially) compact** if every sequence $(a_n)$ in $A$ has a subsequence $(a_{n_k})$ that converges to a limit in $A$.                                                                                                                        |             |
| **Connected**                                          | A metric space $M$ is **connected** if it has no separation, meaning $M$ cannot be written as the disjoint union of two proper, nonempty, clopen sets $A \sqcup B$.                                                                                                          |             |
| **Path/Path-connected**                                | A **path** is a continuous map $f: [a, b] \to M$. $M$ is **path-connected** if any two points can be joined by a path.                                                                                                                                                       |             |
| **Closure, Interior, Boundary**                        | $\overline{S}$: smallest closed subset containing $S$. $\text{int} S$: largest open subset contained in $S$. $\partial S$: difference between closure and interior ($\overline{S} \setminus \text{int} S$).                                                                  |             |
| **Cluster/Condensation Point**                         | $S$ **clusters** at $p$ if each $M_r p$ contains infinitely many points of $S$. $S$ **condenses** at $p$ if each $M_r p$ contains uncountably many points of $S$.                                                                                                            |             |
| **Perfect Space**                                      | A metric space $M$ is **perfect** if $M' = M$, meaning every point in $M$ is a cluster point of $M$.                                                                                                                                                                         |             |
| **Covering Compact**                                   | A set $A$ is **covering compact** if every open covering $\mathcal{U}$ of $A$ reduces to a finite subcovering $\mathcal{V} \subset \mathcal{U}$.                                                                                                                             |             |
| **Total Boundedness**                                  | A set $A$ is **totally bounded** if for each $\varepsilon > 0$, $A$ can be covered by a finite number of $\varepsilon$-neighborhoods.                                                                                                                                        |             |
| **Cantor Set**                                         | The **standard middle-thirds Cantor set** $C$ is the nested intersection $C = \bigcap_{n=0}^\infty C_n$, where $C_n$ is the union of $2^n$ closed intervals of length $1/3^n$.                                                                                               |             |
| **Cantor Space**                                       | A metric space $M$ that is compact, nonempty, perfect, and totally disconnected.                                                                                                                                                                                             |             |
| **Uniform Continuity**                                 | $f: M \to N$ is **uniformly continuous** if $\forall \varepsilon > 0$, $\exists \delta > 0$ such that $p, q \in M$ and $d_M(p, q) < \delta \implies d_N(f p, f q) < \varepsilon$.                                                                                            |             |
### Key Theorems, Corollaries, and Lemmas (Chapter 2)
#### Section 1: Preliminaries (Metric Spaces and Sequences)
- **Theorem 1:** If $(p_n) \to p$, then **every subsequence $(q_k) \to p$**. (Limits are unaffected when passing to a subsequence.)
#### Section 2: Continuity
- **Theorem 4 ($\varepsilon, \delta$ condition):** $f: M \to N$ is continuous **if and only if it satisfies the $(\varepsilon, \delta)$-condition**: For each $\varepsilon > 0$ and each $p \in M$, there exists $\delta > 0$ such that if $x \in M$ and $d_M(x, p) < \delta$ then $d_N(f x, f p) < \varepsilon$.
#### Section 3: The Topology of a Metric Space
- **Theorem 5 (Duality):** Openness is dual to closedness: **The complement of an open set is closed, and the complement of a closed set is open**.
- **Theorem 6:** The **union of any number of open sets is open**; the **intersection of a finite number of open sets is open**.
- **Corollary 7:** The **intersection of any number of closed sets is a closed set**; the **finite union of closed sets is a closed set**; $\emptyset$ and $M$ are closed sets.
- **Theorem 8 (Closure Property):** If $S \subset K$ and $K$ is closed then **$K$ must contain $\lim S$** (the limit set of $S$).
    - _Note: This theorem states that a closed set contains all its limits._
- **Corollary 9:** The interval $(a, b)$ is **open in $\mathbb{R}$** and so are $(-\infty, b)$, $(a, \infty)$, and $(-\infty, \infty)$. The interval $[a, b]$ is **closed in $\mathbb{R}$**.
- **Theorem 11 (Continuity Equivalences):** The following are equivalent for continuity of $f: M \to N$:
    - (i) The $(\varepsilon, \delta)$-condition.
    - (ii) The sequential convergence preservation condition.
    - (iii) The **closed set condition**: The preimage of each closed set in $N$ is closed in $M$.
    - (iv) The **open set condition**: The preimage of each open set in $N$ is open in $M$.
- **Corollary 12:** Homeomorphism is equivalent to topological equivalence: **$f: M \to N$ is a homeomorphism if and only if $f$ is a bijection that maps the open subsets of $M$ bijectively onto the open subsets of $N$**.
- **Proposition 16:** $d_{\max} \leq d_E \leq d_{\text{sum}} \leq 2 d_{\max}$.
- **Theorem 17 (Convergence in a Product Space):** The following are equivalent for a sequence $p_n = (p_n^1, p_n^2)$ in $M = M_1 \times M_2$:
    - (a) $(p_n)$ converges with respect to the metric $d_{\max}$.
    - (b) $(p_n)$ converges with respect to the metric $d_E$.
    - (c) $(p_n)$ converges with respect to the metric $d_{\text{sum}}$.
    - (d) $(p_n^1)$ and $(p_n^2)$ converge in $M_1$ and $M_2$ respectively.
- **Corollary 18:** If $f: M \to N$ and $g: X \to Y$ are continuous then **so is their Cartesian product $f \times g$** which sends $(p, x) \in M \times X$ to $(f p, g x) \in N \times Y$.
- **Corollary 19 (Convergence in $\mathbb{R}^m$):** A sequence of vectors $(v_n)$ in $\mathbb{R}^m$ converges in $\mathbb{R}^m$ **if and only if each of its component sequences $(v_n^i)$ converges, $1 \leq i \leq m$**.
- **Theorem 20:** **Every metric $d: M \times M \to \mathbb{R}$ is continuous**.
- **Corollary 21:** The metrics $d_{\max}, d_E$, and $d_{\text{sum}}$ are continuous.
- **Corollary 22:** The **absolute value is a continuous mapping $\mathbb{R} \to \mathbb{R}$**. In fact, the norm is a continuous mapping from any normed space to $\mathbb{R}$.
- **Theorem 23:** $\mathbb{R}^m$ **is complete**.
- **Corollary 24:** Every **closed subset of $\mathbb{R}^m$ is complete**.
#### Section 4: Compactness
- **Theorem 26 (Necessary condition for Compactness):** Every **compact set is closed and bounded**.
- **Theorem 27:** The **Cartesian product of compact sets is compact**.
- **Theorem 28 (Alternative to Theorem 27):** If $A$ and $B$ are compact subsets of $M$ and $N$ respectively, then **$A \times B$ is a compact subset of $M \times N$** (with the product metric).
- **Corollary 30:** Every box $[a_1, b_1] \times \cdots \times [a_m, b_m]$ in $\mathbb{R}^m$ **is compact**.
- **Theorem 31 (Bolzano-Weierstrass Theorem):** Every **bounded sequence in $\mathbb{R}^m$ has a convergent subsequence**.
- **Theorem 32:** Every **closed subset of a compact is compact**.
- **Theorem 33 (Heine-Borel Theorem):** Every **closed and bounded subset of $\mathbb{R}^m$ is compact**.
- **Theorem 34 (Nested Compacts):** The **intersection of a nested sequence of compact nonempty sets is compact and nonempty**.
- **Theorem 36:** The **continuous image of a compact set is compact**.
- **Theorem 37 (Extreme Value Theorem in MS):** A **continuous function defined on a compact set assumes maximum and minimum values**.
- **Theorem 38:** If $M$ is compact and $M$ is homeomorphic to $N$ then **$N$ is compact**. **Compactness is a topological property**.
- **Corollary 39:**  and $\mathbb{R}$ are **not homeomorphic**.
- **Theorem 40 (Inverse Function for Compact Spaces):** If $M$ is compact then a continuous bijection $f: M \to N$ is a homeomorphism – **its inverse bijection $f^{-1}: N \to M$ is automatically continuous**.
- **Theorem 41:** A **compact is absolutely closed and absolutely bounded**.
- **Theorem 42 (Continuity implies Uniform Continuity):** Every **continuous function defined on a compact is uniformly continuous**.
#### Section 5: Connectedness
- **Theorem 44 (Generalized Intermediate Value Theorem):** If $f: M \to \mathbb{R}$ is continuous and $M$ is connected, then the **range $f(M)$ is an interval**.
- **Theorem 46:** $\mathbb{R}$ **is connected**.
- **Corollary 47:** The **continuous image of a connected set is connected**.
- **Corollary 48:** The following metric spaces are connected: The intervals $(a, b)$, $[a, b]$, the circle, and all capital letters of the Roman alphabet.
- **Theorem 49:** The **closure of a connected set is connected**. More generally, if $S \subset M$ is connected and $S \subset T \subset \overline{S}$ then $T$ is connected.
- **Theorem 50:** The **union of connected sets sharing a common point $p$ is connected**.
- **Theorem 51:** **Path-connected implies connected**.
#### Section 6: Other Metric Space Concepts
- **Theorem 55 (Alternative definition of Continuity):** $f: M \to N$ is continuous **if and only if for each open subset $V \subset N$, the preimage $f_{\text{pre}}(V)$ is open in $M$**.
- **Theorem 56:** Every nonempty, **perfect, complete metric space is uncountable**.
- **Corollary 58:** Every nonempty perfect complete metric space is **everywhere uncountable** in the sense that each $r$-neighborhood is uncountable.
- **Proposition 59:** Let $M$ be a metric space:
    - (a) The **closure of a perfect set is perfect**.
    - (b) The **Cartesian product of perfect spaces is perfect**.
    - (c) Every **perfect subset of $\mathbb{R}$ is uncountable**.
- **Theorem 60:** Let $f: M \to \mathbb{R}$ and $g: M \to \mathbb{R}$ be continuous. Then:
    - (a) $f + g$ is continuous.
    - (b) $f \cdot g$ is continuous.
    - (c) $\max(f, g)$ and $\min(f, g)$ are continuous.
    - (d) If $g(x) \neq 0$ for all $x$, then $f/g$ is continuous.
- **Corollary 61:** Polynomials are continuous functions.
#### Section 7: Coverings
- **Theorem 63 (Compactness Equivalences):** A set $A$ is **covering compact if and only if it is sequentially compact**.
- **Theorem 64 (Lebesgue Number Lemma):** Every open covering $\mathcal{U}$ of a compact set $A$ has a **Lebesgue number $\lambda > 0$**.
- **Theorem 65 (Generalized Heine-Borel Theorem):** A subset of a complete metric space is compact **if and only if it is closed and totally bounded**.
#### Section 8: Cantor Sets
- **Theorem 70 (Cantor Surjection Theorem):** Given a **compact nonempty metric space $M$, there is a continuous surjection of the Cantor set $C$ onto $M$**.
- **Lemma 71:** If $M$ is a nonempty compact metric space and $\varepsilon > 0$ is given then **$M$ can be expressed as the finite union of pieces, each of diameter $\leq \varepsilon$**.
- **Theorem 72:** The standard Cantor set $C$ is **not path-connected**.
#### Section 9: Cantor Set Lore
- **Theorem 73 (Moore-Kline Theorem):** Every **Cantor space $M$ is homeomorphic to the standard middle-thirds Cantor set $C$**.
- **Lemma 74 (Cantor Partition Lemma):** Given a Cantor piece $L$ and a dyadic number $d=2n$, **$L$ can be partitioned into $d$ Cantor pieces of diameter $\leq \varepsilon$**.
- **Corollary 75:** Every two Cantor spaces are homeomorphic.
- **Corollary 76:** The **fat Cantor set is homeomorphic to the standard Cantor set**.
- **Corollary 77:** A Cantor set is homeomorphic to its own Cartesian square; that is, **$C \cong C \times C$**.
- **Theorem 78:** Every two **Cantor spaces in $\mathbb{R}$ are ambiently homeomorphic**.
- **Lemma 79:** A Cantor space $M \subset \mathbb{R}$ can be divided into **two Cantor pieces whose convex hulls are disjoint**.
#### Section 10: Completion
- **Theorem 80 (Completion Theorem):** Every **metric space can be completed**.
- **Lemma 81:** Given four points $p, q, x, y \in M$, we have **$|d(p, q) - d(x, y)| \leq d(p, x) + d(q, y)$**.