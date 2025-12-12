---
title: Real Analysis Final Review
draft: true
tags:
  - math
---
The following lists all theorems, lemmas, and corollaries identified in Chapters 1, 2, 3, and 4 of the provided source material, _Real Mathematical Analysis_.

### Chapter 1: Real Numbers

|Type|Number|Name|Citation|
|:--|:--|:--|:--|
|**Theorem**|1|No number $r$ in Q has square equal to 2; i.e., $\sqrt{2} \notin Q$.||
|**Theorem**|2|R satisfies the Least Upper Bound Property.||
|**Theorem**|3|The set R of all cuts in Q is a complete ordered field that contains Q as an ordered subfield.||
|**Theorem**|4|Triangle Inequality: $|x+y|
|**Theorem**|5|R is complete with respect to Cauchy sequences.||
|**Theorem**|6|Cauchy Convergence Criterion.|,|
|**Theorem**|7|Every interval $(a, b)$ contains infinitely many rational and irrational numbers.|,|
|**Theorem**|8|$\varepsilon$-principle.|,|
|**Theorem**|9|Cauchy-Schwarz Inequality: $\langle x, y \rangle \leq|x|
|**Theorem**|10|R is uncountable.||
|**Corollary**|11|$[a, b]$ and $(a, b)$ are uncountable.|,|
|**Theorem**|12|Each infinite set $S$ contains a denumerable subset.|,|
|**Theorem**|13|An infinite subset $A$ of a denumerable set $B$ is denumerable.||
|**Corollary**|14|The sets of even integers and of prime integers are denumerable.||
|**Theorem**|15|$N \times N$ is denumerable.||
|**Corollary**|16|The Cartesian product of denumerable sets $A$ and $B$ is denumerable.||
|**Theorem**|17|If $f: N \rightarrow B$ is a surjection and $B$ is infinite then $B$ is denumerable.||
|**Corollary**|18|The denumerable union of denumerable sets is denumerable.||
|**Corollary**|19|Q is denumerable.||
|**Corollary**|20|For each $m \in N$ the set $Q^m$ is denumerable.||
|**Theorem**|21|Schroeder-Bernstein Theorem.||
|**Theorem**|22|The values of a continuous function defined on an interval $[a, b]$ form a bounded subset of R.||
|**Theorem**|23|A continuous function $f$ defined on an interval $[a, b]$ takes on absolute minimum and absolute maximum values.||
|**Theorem**|24|Intermediate Value Theorem.||
|**Theorem**|25|Fundamental Theorem of Continuous Functions.||

### Chapter 2: A Taste of Topology

|Type|Number|Name|Citation|
|:--|:--|:--|:--|
|**Theorem**|1|Every subsequence of a convergent sequence in $M$ converges and it converges to the same limit as does the mother sequence.||
|**Theorem**|2|The composite of continuous functions is continuous.||
|**Proposition**|3|The identity map and every constant function are continuous.|,|
|**Theorem**|4|$f: M \rightarrow N$ is continuous if and only if it satisfies the **$(\varepsilon, \delta)$-condition**.||
|**Theorem**|5|Openness is dual to closedness.||
|**Theorem**|6|The collection T of open sets is closed under union, finite intersection, and contains $\emptyset, M$.||
|**Corollary**|7|The intersection of any number of closed sets is a closed set; the finite union of closed sets is a closed set; $\emptyset$ and $M$ are closed sets.||
|**Theorem**|8|$\lim S$ is a closed set and $M_r p$ is an open set.||
|**Corollary**|9|Open and closed intervals in R.||
|**Corollary**|10|$\lim S$ is the “smallest” closed set that contains $S$.||
|**Theorem**|11|Equivalence of continuity conditions (Epsilon-delta, Sequential, Closed Set, Open Set).|,|
|**Corollary**|12|A homeomorphism bijects the topologies.|,|
|**Theorem**|13|Inheritance Principle: Every metric subspace $N$ of $M$ **inherits its topology** from $M$.|,|
|**Corollary**|14|Every metric subspace of $M$ inherits its closed sets from $M$.||
|**Corollary**|15|Closure/openness preservation if $N$ is closed/open in $M$.|,|
|**Proposition**|16|$d_{max} \leq d_E \leq d_{sum} \leq 2d_{max}$.||
|**Theorem**|17|Convergence in a Product Space (Equivalence of $d_{max}, d_E, d_{sum}$ and component convergence).|,|
|**Corollary**|18|The Cartesian product of continuous functions is continuous.||
|**Corollary**|19|Convergence in $R^m$ is equivalent to component convergence.|,|
|**Theorem**|20|$d$ is continuous.||
|**Corollary**|21|The metrics $d_{max}, d_E,$ and $d_{sum}$ are continuous.||
|**Corollary**|22|The absolute value/norm is a continuous mapping.||
|**Theorem**|23|$R^m$ is complete.||
|**Theorem**|24|Every closed subset of a complete metric space is a complete metric subspace.||
|**Corollary**|25|Every closed subset of Euclidean space is a complete metric space.||
|**Theorem**|26|Every compact set is closed and bounded.||
|**Theorem**|27|The closed interval $[a, b] \subset R$ is compact.|,|
|**Theorem**|28|The Cartesian product of two compact sets is compact.|,|
|**Corollary**|29|The Cartesian product of $m$ compact sets is compact.||
|**Corollary**|30|Every box in $R^m$ is compact.||
|**Theorem**|31|Bolzano-Weierstrass Theorem: Every bounded sequence in $R^m$ has a convergent subsequence.||
|**Theorem**|32|Every closed subset of a compact is compact.||
|**Theorem**|33|Heine-Borel Theorem: Every closed and bounded subset of $R^m$ is compact.|,|
|**Theorem**|34|The intersection of a nested sequence of compact nonempty sets is compact and nonempty.||
|**Corollary**|35|If nested, nonempty, and compact sets $A_n$ have diameter tending to 0, then $\cap A_n$ is a single point.|,|
|**Theorem**|36|The continuous image of a compact is compact.|,|
|**Corollary**|37|A continuous real-valued function defined on a compact set is bounded; it assumes maximum and minimum values.|,|
|**Theorem**|38|Compactness is a topological property.||
|**Corollary**|39|$$ and R are not homeomorphic.||
|**Theorem**|40|If $M$ is compact then a continuous bijection $f: M \rightarrow N$ is a homeomorphism.|-|
|**Theorem**|41|A compact is absolutely closed and absolutely bounded.|,|
|**Theorem**|42|Every continuous function defined on a compact is uniformly continuous.|-|
|**Theorem**|43|The continuous image of a connected is connected.|,|
|**Corollary**|44|Connectedness is a topological property.||
|**Corollary**|45|Generalized Intermediate Value Theorem.||
|**Theorem**|46|R is connected.|,|
|**Corollary**|47|Intermediate Value Theorem for R.||
|**Corollary**|48|Connected metric spaces (intervals, circle, Roman alphabet).||
|**Theorem**|49|The closure of a connected set is connected.|,|
|**Theorem**|50|The union of connected sets sharing a common point $p$ is connected.||
|**Theorem**|51|Path-connected implies connected.|,|
|**Theorem**|52|Equivalent conditions to $S$ clustering at $p$.|,|
|**Proposition**|53|$S \cup S' = \bar{S}$.||
|**Corollary**|54|$S$ is closed if and only if $S' \subset S$.||
|**Corollary**|55|The least upper bound and greatest lower bound of a nonempty bounded set $S \subset R$ belong to the closure of $S$.||
|**Theorem**|56|Every nonempty, perfect, complete metric space is uncountable.|-|
|**Corollary**|57|R and $[a, b]$ are uncountable.||
|**Corollary**|58|Every nonempty perfect complete metric space is everywhere uncountable.|,|
|**Theorem**|59|The arithmetic operations of R are continuous.|,,|
|**Lemma**|60|For each real number $c$ the function $Mult_c: R \rightarrow R$ that sends $x$ to $cx$ is continuous.|,|
|**Corollary**|61|Arithmetic operations on continuous functions preserve continuity.|,|
|**Corollary**|62|Polynomials are continuous functions.||
|**Theorem**|63|Equivalence of covering compactness and sequential compactness.||
|**Lemma**|64|Lebesgue Number Lemma: Every open covering of a sequentially compact set has a Lebesgue number $\lambda > 0$.|,|
|**Theorem**|65|Generalized Heine-Borel Theorem: A subset of a complete metric space is compact if and only if it is closed and totally bounded.|-|
|**Corollary**|66|A metric space is compact if and only if it is complete and totally bounded.|,|
|**Theorem**|67|The Cantor set is a compact, nonempty, perfect, and totally disconnected metric space.|-|
|**Corollary**|68|The Cantor set is uncountable.||
|**Theorem**|69|The Cantor set contains no interval and is nowhere dense in R.||
|**Theorem**|70|Cantor Surjection Theorem: Given a compact nonempty metric space $M$, there is a continuous surjection of $C$ onto $M$.||
|**Lemma**|71|If $M$ is a nonempty compact metric space and $\varepsilon > 0$ is given then $M$ can be expressed as the finite union of pieces, each of diameter $\leq \varepsilon$.|,|
|**Theorem**|72|Peano curve: There exists a continuous path in the plane which is space-filling.|,|
|**Theorem**|73|Moore-Kline Theorem: Every Cantor space $M$ is homeomorphic to the standard middle-thirds Cantor set $C$.||
|**Lemma**|74|Cantor Partition Lemma: A Cantor space can be partitioned into $d$ Cantor pieces of diameter $\leq \varepsilon$.|-|
|**Corollary**|75|Every two Cantor spaces are homeomorphic.||
|**Corollary**|76|The fat Cantor set is homeomorphic to the standard Cantor set.||
|**Corollary**|77|A Cantor set is homeomorphic to its own Cartesian square; that is, $C \approx C \times C$.||
|**Theorem**|78|Every two Cantor spaces in R are ambiently homeomorphic.||
|**Lemma**|79|A Cantor space $M \subset R$ can be divided into two Cantor pieces whose convex hulls are disjoint.||
|**Theorem**|80|Completion Theorem: Every metric space can be completed.||
|**Lemma**|81|$|d(p, q) - d(x, y)|

### Chapter 3: Functions of a Real Variable

|Type|Number|Name|Citation|
|:--|:--|:--|:--|
|**Theorem**|1|The Rules of Differentiation.|-|
|**Corollary**|2|The derivative of a polynomial exists.||
|**Theorem**|3|Mean Value Theorem.||
|**Lemma**|4|If $f$ achieves an extremum at $\theta \in (a, b)$ then $f'(\theta) = 0$.|,|
|**Corollary**|5|Differentiable function satisfies global Lipschitz condition if $|f'(x)|
|**Theorem**|6|Ratio Mean Value Theorem.|,|
|**Theorem**|7|L’Hôpital’s Rule.|-|
|**Theorem**|8|If $f$ is differentiable, its derivative function $f'(x)$ has the intermediate value property.||
|**Corollary**|9|The derivative of a differentiable function never has a jump discontinuity.||
|**Theorem**|10|If $f$ is $r$th-order differentiable and $r \geq 1$ then $f^{(r-1)}(x)$ is continuous.||
|**Corollary**|11|A smooth function is continuous.||
|**Theorem**|12|Taylor Approximation Theorem.|-|
|**Corollary**|13|The smooth nonanalytic function $e(x)$ satisfies $\lim_{h\rightarrow 0} e(h)/h^r = 0$.|,|
|**Theorem**|14|Inverse Function Theorem in dimension 1.|-|
|**Corollary**|15|If $f$ is a $C^r$ homeomorphism and $f'(x) \neq 0$ then $f$ is a $C^r$ diffeomorphism.|,|
|**Theorem**|16|If $f$ is Riemann integrable then it is bounded.|,|
|**Theorem**|17|Linearity of the Integral.|,|
|**Theorem**|18|Monotonicity of the Integral.||
|**Corollary**|19|$|\int_a^b f(x) dx|
|**Theorem**|20|Riemann integrability is equivalent to Darboux integrability.|,-|
|**Theorem**|21|Riemann’s Integrability Criterion.||
|**Theorem**|22|Sandwich Principle for Riemann Integrability.|,|
|**Theorem**|23|Riemann-Lebesgue Theorem.||
|**Corollary**|24|Every continuous/bounded piecewise continuous function is Riemann integrable.||
|**Corollary**|25|The characteristic function of $S \subset [a, b]$ is Riemann integrable if and only if the boundary of $S$ is a zero set.||
|**Corollary**|26|Every monotone function is Riemann integrable.||
|**Corollary**|27|The product of Riemann integrable functions is Riemann integrable.||
|**Corollary**|28|If $f$ is Riemann integrable and $\varphi$ is continuous, then $\varphi \circ f$ is Riemann integrable.|,|
|**Corollary**|29|If $f \in R$ then $|f|
|**Corollary**|30|Additivity of the Riemann integral over adjacent intervals.|,|
|**Corollary**|31|If $f: [a, b] \rightarrow [0, M]$ is Riemann integrable and has integral zero then $f(x) = 0$ almost everywhere.|,|
|**Corollary**|32|If $f$ is Riemann integrable and $\psi$ is a homeomorphism whose inverse satisfies a Lipschitz condition then $f \circ \psi$ is Riemann integrable.|,|
|**Corollary**|33|If $f \in R$ and $\psi$ is a $C^1$ diffeomorphism then $f \circ \psi$ is Riemann integrable.|,|
|**Theorem**|34|Fundamental Theorem of Calculus: Derivative of the indefinite integral.|-|
|**Corollary**|35|The derivative of an indefinite Riemann integral exists almost everywhere and equals the integrand almost everywhere.||
|**Corollary**|36|Every continuous function has an antiderivative.||
|**Theorem**|37|Antiderivative Theorem: An antiderivative of a Riemann integrable function differs from the indefinite integral by a constant.|,|
|**Corollary**|38|Standard integral formulas are valid.||
|**Theorem**|37|There exists a continuous function $H$ whose derivative is almost everywhere zero but is not constant.||
|**Theorem**|38|Integration by Substitution.|-|
|**Theorem**|39|Integration by Parts.|,|
|**Theorem**|40|Comparison Test for series.||
|**Theorem**|41|Integral Test.|,|
|**Theorem**|42|Root Test.|-|
|**Theorem**|43|Ratio Test.|,|
|**Theorem**|44|Radius of Convergence Theorem.|,|

### Chapter 4: Function Spaces

| Type          | Number | Name                                                                                                                                                                                                  | Citation |
| :------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| **Theorem**   | 1      | The uniform limit of continuous functions is continuous.                                                                                                                                              | ,        |
| **Theorem**   | 2      | Convergence with respect to the sup metric $d$ is equivalent to uniform convergence.                                                                                                                  |          |
| **Theorem**   | 3      | $C_b$ is a complete metric space.                                                                                                                                                                     | ,        |
| **Corollary** | 4      | $C^0$ is a closed subset of $C_b$. It is a complete metric space.                                                                                                                                     | ,        |
| **Theorem**   | 5      | Weierstrass M-test.                                                                                                                                                                                   | ,        |
| **Theorem**   | 6      | The uniform limit of Riemann integrable functions is Riemann integrable, and the limit of the integrals is the integral of the limit.                                                                 | -        |
| **Corollary** | 7      | If $f_n \in R$ and $f_n \Rightarrow f$ then the indefinite integrals converge uniformly.                                                                                                              |          |
| **Theorem**   | 8      | Term by Term Integration Theorem.                                                                                                                                                                     |          |
| **Theorem**   | 9      | The uniform limit of a sequence of differentiable functions is differentiable provided that the sequence of derivatives also converges uniformly.                                                     | -        |
| **Theorem**   | 10     | A uniformly convergent series of differentiable functions can be differentiated term-by-term, provided that the derivative series converges uniformly.                                                |          |
| **Theorem**   | 11     | If $r < R$ then the power series converges uniformly and absolutely on the interval $[-r, r]$.                                                                                                        | ,        |
| **Theorem**   | 12     | A power series can be integrated and differentiated term-by-term on its interval of convergence.                                                                                                      | -        |
| **Theorem**   | 13     | Analytic functions are smooth, i.e., $C^\omega \subset C^\infty$.                                                                                                                                     | ,        |
| **Theorem**   | 14     | Arzelà-Ascoli Theorem: Every bounded equicontinuous sequence of functions in $C^0([a, b],R)$ has a uniformly convergent subsequence.                                                                  | -        |
| **Lemma**     | 15     | If $(f_k)$ is a subsequence of $(g_n)$ then for each $k$ we have $f_k = g_r$ for some $r \geq k$.                                                                                                     |          |
| **Theorem**   | 16     | Arzelà-Ascoli Propagation Theorem: Pointwise convergence of an equicontinuous sequence of functions on a dense subset of the domain **propagates** to uniform convergence on the whole domain.        |          |
| **Corollary** | 17     | If differentiable functions have uniformly bounded derivatives and $(f_n(x_0))$ is bounded, the sequence has a uniformly convergent subsequence.                                                      | ,        |
| **Theorem**   | 18     | Heine-Borel Theorem in a Function Space: A subset $E \subset C^0$ is compact if and only if it is closed, bounded, and equicontinuous.                                                                | ,        |
| **Theorem**   | 19     | Weierstrass Approximation Theorem: The set of polynomials is dense in $C^0([a, b],R)$.                                                                                                                |          |
| **Theorem**   | 20     | Stone-Weierstrass Theorem.                                                                                                                                                                            |          |
| **Lemma**     | 21     | If A vanishes nowhere and separates points then there exists $f \in A$ with specified values at any pair of distinct points.                                                                          | -        |
| **Lemma**     | 22     | The closure of a function algebra in $C^0M$ is a function algebra.                                                                                                                                    |          |
| **Corollary** | 23     | Any $2\pi$-periodic continuous function can be uniformly approximated by a trigonometric polynomial.                                                                                                  | ,        |
| **Theorem**   | 24     | Banach Contraction Principle.                                                                                                                                                                         |          |
| **Theorem**   | 25     | Picard’s Theorem (Existence and uniqueness of ODE solutions).                                                                                                                                         |          |
| **Theorem**   | 26     | If $\alpha \sigma < 1$ then the Taylor series converges uniformly to $f$ on the interval $I$.                                                                                                         | ,        |
| **Theorem**   | 27     | If $f$ is expressed as a convergent power series, it has bounded derivative growth rate on $I$.                                                                                                       | -        |
| **Theorem**   | 28     | Analyticity Theorem: A smooth function is analytic if and only if it has locally bounded derivative growth rate.                                                                                      | ,        |
| **Corollary** | 29     | A smooth function is analytic if its derivatives are uniformly bounded.                                                                                                                               |          |
| **Theorem**   | 30     | Taylor’s Theorem: If $f(x) = \sum c_k x^k$ and the power series has radius of convergence $R$ then $f$ is analytic on $(-R, R)$.                                                                      |          |
| **Theorem**   | 31     | There exists a continuous function $f: R \rightarrow R$ that has a derivative at no point whatsoever.                                                                                                 |          |
| **Theorem**   | 32     | Baire’s Theorem: Every thick subset of a complete metric space $M$ is dense in $M$.                                                                                                                   |          |
| **Theorem**   | 33     | The generic $f \in C^0$ is differentiable at no point.                                                                                                                                                | ,-       |
| **Corollary** | 34     | No subset of a complete nonempty metric space is both thick and thin.                                                                                                                                 |          |
| **Theorem**   | 35     | Uniform convergence equivalence and completeness properties of the space F of functions $f: X \rightarrow Y$.                                                                                         | -        |
| **Theorem**   | 36     | Pointwise equicontinuity implies uniform equicontinuity if $X$ is compact.                                                                                                                            | ,        |
| **Theorem**   | 37     | If the sequence of functions $f_n: X \rightarrow Y$ is uniformly equicontinuous, $X$ is compact, and $(f_n(x))$ lies in a compact subset of $Y$, then $(f_n)$ has a uniformly convergent subsequence. | ,        |
| **Theorem**   | 38     | If $X$ is $\sigma$-compact and if $(f_n)$ is a sequence of pointwise equicontinuous functions, then $(f_n)$ has a subsequence that converges uniformly on each compact subset of $X$.                 |          |
| **Corollary** | 39     | If $(f_n)$ is a sequence of pointwise equicontinuous functions $R \rightarrow R,$ and $(f_n(x_0))$ is bounded, then $(f_n)$ has a subsequence that converges uniformly on every compact subset of R.  | ,        |