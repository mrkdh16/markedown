---
title: Math H110 NotebookLM Summary
draft: true
---
**Course Overview and Basic Concepts**

- A **vector space** over a field $F$ is an abelian group $V$ with a scalar multiplication $F \times V \to V$ satisfying certain axioms, including the distributive law $\lambda(v+w) = \lambda v + \lambda w$.
- A **subspace** $W$ of a vector space $V$ over $F$ is a nonempty subset $W \subseteq V$ that is closed under addition, negation, and scalar multiplication. The intersection of any collection of subspaces is a subspace. If $X \cup Y$ is a subspace, then $X \subseteq Y$ or $Y \subseteq X$.
- The **span** of a subset $S \subseteq V$ is the smallest subspace of $V$ that contains $S$. It consists of all finite linear combinations of vectors in $S$. The span of a list of vectors $v_1, \dots, v_t$ coincides with the span of the set ${v_1, \dots, v_t}$.
- A **list** of vectors $v_1, \dots, v_t$ is a finite sequence where order matters and vectors can be repeated; the length $t$ can be 0.
- A vector space $V$ is **finite-dimensional** if it is spanned by a finite set of vectors. For example, $F^n$ is finite-dimensional, spanned by the standard unit vectors. An **infinite-dimensional** vector space is one that is not finite-dimensional. The space of all polynomials $P(F)$ is infinite-dimensional. The space of formal power series is also infinite-dimensional.

**Dimension and Bases**

- Finite-dimensional vector spaces have well-defined **dimensions**, which is the length of any basis. The dimension of $F^n$ is $n$.
- A list of vectors $v_1, \dots, v_t$ is **linearly independent** if the only way to write the zero vector as a linear combination $\lambda_1 v_1 + \dots + \lambda_t v_t = 0$ is by taking all scalars $\lambda_i$ to be zero.
- A **basis** of a vector space $V$ is a linearly independent list of vectors that spans $V$. Equivalently, for a finite-dimensional space $V$, a list $v_1, \dots, v_n$ is a basis if the linear map $F^n \to V$ taking the standard basis vectors to $v_i$ is an isomorphism.
- **Lemma (Axler 2.19):** If a list $v_1, \dots, v_t$ is linearly dependent, then there is an index $k$ such that $v_k$ is in the span of $v_1, \dots, v_{k-1}$. Furthermore, removing $v_k$ from the list does not shrink the span.
- **Proposition:** Every spanning list for a vector space can be pruned down to a basis. This is a consequence of the lemma about removing vectors from linearly dependent lists.
- **Corollary:** Every finite-dimensional vector space has a basis.
- **Proposition (Axler 2.22):** In a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors.
- As a corollary of the above proposition (sometimes called the Replacement Lemma), all bases of a finite-dimensional vector space have the same length.
- **Proposition:** In a finite-dimensional vector space, every linearly independent list can be extended to a basis of the space.

**Subspaces and Sums**

- The **sum** of subspaces $X_1, \dots, X_t$ of $V$ is the subspace $X_1 + \dots + X_t = {x_1 + \dots + x_t \mid x_i \in X_i \text{ for all } i}$. This is the image of the summation map $X_1 \times \dots \times X_t \to V$.
- If $X$ and $Y$ are subspaces of $V$, their sum $X+Y$ is a **direct sum**, denoted $X \oplus Y$, if the summation map $X \times Y \to X+Y$ is injective.
- **Lemma:** If $X$ and $Y$ are subspaces of $V$, their sum $X+Y$ is a direct sum if and only if their intersection $X \cap Y$ consists only of the zero vector, i.e., $X \cap Y = {0}$.
- A **complementary subspace** to $X$ in $V$ is a subspace $Y$ such that $V = X \oplus Y$. This means each vector in $V$ can be written uniquely as a sum of an element from $X$ and an element from $Y$.
- **Major Theorem:** Every subspace of a finite-dimensional vector space has a complement.
- **Theorem:** Every subspace of a finite-dimensional vector space is finite-dimensional.
- **Proposition:** If $V$ is finite-dimensional, then every subspace of $V$ has dimension less than or equal to the dimension of $V$.
- The **dimension of a Cartesian product** of finite-dimensional spaces is the sum of their dimensions: $\dim(X \times Y) = \dim X + \dim Y$.
- The **dimension of a sum** of finite-dimensional subspaces is given by $\dim(X + Y) = \dim X + \dim Y - \dim(X \cap Y)$. This is Axler's 2.43.

**Linear Maps and Matrices**

- A **linear map** $T: V \to W$ satisfies $T(v_1 + v_2) = Tv_1 + Tv_2$ and $T(\lambda v) = \lambda Tv$.
- The **null space** (or kernel) of $T$, denoted $\operatorname{null}(T)$, is ${v \in V \mid Tv = 0}$, which is a subspace of $V$.
- The **image** (or range) of $T$, denoted $\operatorname{range}(T)$, is ${Tv \mid v \in V}$, which is a subspace of $W$.
- $T$ is **injective** if and only if $\operatorname{null}(T) = {0}$.
- $T$ is **surjective** if and only if $\operatorname{range}(T) = W$.
- $T$ is **bijective** if and only if it is both injective and surjective.
- If $v_1, \dots, v_d$ is a basis of $V$, $T$ is injective iff $Tv_1, \dots, Tv_d$ is linearly independent, surjective iff $Tv_1, \dots, Tv_d$ spans $W$, and bijective iff $Tv_1, \dots, Tv_d$ is a basis of $W$.
- The set of linear maps $L(V, W)$ is an $F$-vector space under pointwise addition and scalar multiplication.
- There is a natural isomorphism $L(F^n, W) \cong W^n$ given by $T \mapsto (Te_1, \dots, Te_n)$.
- The **matrix** $M(T)$ summarises a linear map $T: V \to W$ with respect to chosen bases of $V$ and $W$. Left multiplication by an $m \times n$ matrix is a linear map $F^n \to F^m$ (treating vectors as column matrices).
- The **rank** of $T$, denoted $\operatorname{rank}(T)$, is $\dim(\operatorname{range}(T))$.
- **Rank-Nullity Theorem (Fundamental Theorem of Linear Algebra):** If $V$ is finite-dimensional, $\dim V = \dim(\operatorname{null}(T)) + \dim(\operatorname{range}(T))$.
- **Proposition:** If $T: V \to W$ is injective and $V, W$ are finite-dimensional, then $\dim W \ge \dim V$.
- For $T: V \to W$, $\dim(\operatorname{range}(T)) \le \dim W$ and $\dim(\operatorname{range}(T)) \le \dim V$.
- A matrix $A$ can be factored as an $m \times r$ matrix times an $r \times n$ matrix, where $r$ is the rank of $A$ (column-row factorization, Axler 3.56).
- If $T: V \to V$ is an operator on a finite-dimensional space, using the same basis for the source and target space yields a single matrix representing $T$. Change of basis for an operator matrix: if $M(T)$ is the matrix of $T$ w.r.t. a basis and $Q$ is the change of basis matrix, the new matrix is $Q^{-1} M(T) Q$.

**Quotient Spaces and Exact Sequences**

- If $X$ is a subspace of $V$, the **quotient space** $V/X$ is the set of translates $v+X = {v+x \mid x \in X}$ with addition $(v+X) + (w+X) = (v+w)+X$ and scalar multiplication $\lambda(v+X) = (\lambda v)+X$. $v+X = w+X$ if and only if $v-w \in X$.
- The **dimension of a quotient space** $V/X$ is $\dim V - \dim X$ if $V$ is finite-dimensional. This formula allows deriving the Rank-Nullity Theorem.
- The canonical quotient map $\pi: V \to V/X$ sends $v$ to $v+X$. Its null space is $X$.
- **Proposition:** The assignment $U \mapsto U \circ \pi$ is a one-to-one correspondence between linear maps $V/X \to W$ and linear maps $V \to W$ whose null spaces contain $X$.
- An **exact sequence** is a sequence of vector spaces and linear maps where the image of each map is the null space of the next. The sequence $0 \to X \cap Y \to X \times Y \to X + Y \to 0$ is an example of an exact sequence. For an exact sequence of finite-dimensional vector spaces, the alternating sum of dimensions is 0.

**Duality**

- The **dual space** of an $F$-vector space $V$ is $V' = L(V, F)$, the space of linear functionals $V \to F$.
- If $V$ is finite-dimensional, $\dim V' = \dim V$.
- Given a basis $v_1, \dots, v_n$ of $V$, the **dual basis** $\phi_1, \dots, \phi_n$ of $V'$ is defined by $\phi_i(v_j) = \delta_{ij}$ (Kronecker delta). If $v = \sum \lambda_j v_j$, then $\phi_i(v) = \lambda_i$.
- The **annihilator** of a subset $U \subseteq V$ is $U^0 = {\psi \in V' \mid \psi(u) = 0 \text{ for all } u \in U}$.
- **Lemma:** If $U$ is a subspace of a finite-dimensional vector space $V$, then $\dim(U^0) = \dim V - \dim U$. This relies on the surjectivity of the restriction map $V' \to U'$.
- **Proposition:** Every linear functional on a subspace $U$ of $V$ can be extended to a linear functional on $V$.
- **Corollary:** For a subspace $U$ of a finite-dimensional space $V$, $U^0 = {0}$ if and only if $U = V$, and $U^0 = V'$ if and only if $U = {0}$.
- The **dual map** $T': W' \to V'$ of a linear map $T: V \to W$ is defined by $T'(\psi) = \psi \circ T$ for $\psi \in W'$.
- The null space of the dual map $T'$ is the annihilator of the range of $T$: $\operatorname{null}(T') = (\operatorname{range}(T))^0$.
- **Corollary:** If $T: V \to W$ is a linear map between finite-dimensional spaces, $\dim(\operatorname{null}(T')) = \dim(\operatorname{null}(T)) + \dim W - \dim V$.

**Polynomials and Operators**

- The space of polynomials over $F$ is denoted $F[x]$.
- The map $F[x] \to {\text{functions } F \to F}$ is injective if $F$ is infinite but not if $F$ is finite. For $\mathbb{R}$ or $\mathbb{C}$, this map is an identification used by Axler (P(F)).
- $F[x]$ is a ring with polynomial multiplication. It supports a division algorithm.
- **Proposition:** For $f(x) \in F[x]$ and $\lambda \in F$, $f(\lambda)=0$ if and only if $f$ is divisible by $x-\lambda$.
- **Corollary:** A polynomial with infinitely many roots is the zero polynomial.
- **Ideals** of $F[x]$ are **principal**; any ideal $I$ is of the form $(m)$ for some polynomial $m \in I$.
- Every non-zero, non-unit polynomial in $F[x]$ can be factored uniquely (up to order and units) into **irreducible polynomials**.
- **Fundamental Theorem of Algebra (FTA):** The linear polynomials $x-\lambda$ are the only monic irreducible polynomials over $\mathbb{C}$. Equivalently, every nonconstant polynomial over $\mathbb{C}$ has a root. The proof relies on facts like every complex number having $k$-th roots and real polynomials of odd degree having real roots.
- Over $\mathbb{R}$, the irreducible polynomials are linear ($x-\lambda$) and irreducible quadratic polynomials ($x^2+bx+c$ with $b^2-4c < 0$). Every non-constant real polynomial factors into a product of these irreducible polynomials.
- For a linear operator $T \in L(V)$, the map $\alpha: F[x] \to L(V)$ defined by $\alpha(x) = T$ and extending to polynomials is a ring homomorphism. The kernel of this map is an ideal $(m)$, where $m$ is the **minimal polynomial** of $T$ (if $V$ is finite-dimensional and $V \ne {0}$). The minimal polynomial is the unique monic polynomial of lowest degree satisfied by $T$ (i.e., $m(T)=0$).
- **Proposition:** If $V$ is finite-dimensional, the degree of the minimal polynomial of $T$ is less than or equal to $\dim V$.

**Eigenvalues, Eigenvectors, and Diagonalization**

- An **eigenvector** for $T \in L(V)$ is a nonzero vector $v \in V$ such that $Tv = \lambda v$ for some scalar $\lambda \in F$. The scalar $\lambda$ is the corresponding **eigenvalue**.
- The **eigenspace** for an eigenvalue $\lambda$ is $E(\lambda, T) = {v \in V \mid Tv = \lambda v}$. This is a subspace, and it contains all eigenvectors for $\lambda$ (plus the zero vector).
- An operator $T$ on a nonzero finite-dimensional complex vector space always has at least one eigenvalue. This follows from the FTA and the minimal polynomial. This holds over any algebraically closed field.
- Operators on odd-dimensional real vector spaces have at least one eigenvalue.
- **Proposition:** If $f \in F[x]$ satisfies $f(T) = 0$, then every eigenvalue of $T$ is a root of $f$.
- **Corollary:** If $V$ is finite-dimensional, $T$ has at most $\dim V$ distinct eigenvalues. (Eigenvectors for distinct eigenvalues are linearly independent).
- For distinct eigenvalues $\lambda_1, \dots, \lambda_m$, the sum of the corresponding eigenspaces $E(\lambda_1, T) + \dots + E(\lambda_m, T)$ is a **direct sum** $E(\lambda_1, T) \oplus \dots \oplus E(\lambda_m, T)$.
- **Corollary:** $\sum_{i=1}^m \dim E(\lambda_i, T) \le \dim V$.
- An operator $T$ is **diagonalizable** if there exists a basis of $V$ consisting entirely of eigenvectors for $T$. In this basis, the matrix of $T$ is diagonal.
- **Axler 5.55 (Equivalences for Diagonalizability):** For a finite-dimensional vector space $V$, the following are equivalent: (a) $T$ is diagonalizable. (b) $V$ has a basis consisting of eigenvectors. (c) The direct sum of eigenspaces for distinct eigenvalues is all of $V$: $\bigoplus_i E(\lambda_i, T) = V$. (d) The sum of the dimensions of the eigenspaces for distinct eigenvalues equals the dimension of $V$: $\sum_i \dim E(\lambda_i, T) = \dim V$.
- **Proposition:** If $T: V \to V$ has $\dim V$ different eigenvalues, then $T$ is diagonalizable.
- **Proposition (Axler 5.62):** The operator $T: V \to V$ is diagonalizable if and only if its minimal polynomial splits completely over $F$ as a product of distinct linear factors of the form $x-r$.

**Invariant Subspaces and Jordan Form**

- A subspace $U \subseteq V$ is **$T$-invariant** (or $T$-stable) if $T(U) \subseteq U$. Examples include ${0}$, $V$, $\operatorname{null}(T)$, $\operatorname{range}(T)$, and the eigenspaces $E(\lambda, T)$.
- If $X$ is a $T$-invariant subspace and $V=X \oplus Y$ (not necessarily $T$-invariant $Y$), the matrix of $T$ w.r.t. an appropriate basis is block upper-triangular. If both $X$ and $Y$ are $T$-invariant, the matrix is block diagonal.
- If the minimal polynomial of $T$ on a finite-dimensional space $V$ factors as $(x-\lambda_1)^{k_1} \cdots (x-\lambda_t)^{k_t}$ over $F$, then $V$ is the direct sum of **generalized eigenspaces**: $V = X_1 \oplus \dots \oplus X_t$.
- The **generalized eigenspace** $X_i$ for $\lambda_i$ is defined as ${v \in V \mid (T-\lambda_i I)^k v = 0 \text{ for some } k \ge 1}$. On $X_i$, the operator $U = T - \lambda_i I$ is **nilpotent**, meaning $U^k = 0$ for some $k$.
- For a nilpotent operator $U$ on $X$, a **block** (or cyclic subspace) generated by $v \in X$ is the span of $v, Uv, U^2v, \dots, U^{k-1}v$, where $k$ is the smallest positive integer such that $U^k v = 0$. The dimension of this block is $k$.
- **Theorem (Component of Jordan Form):** If $U$ is a nilpotent operator on a finite-dimensional space $X$, then $X$ is the direct sum of blocks. The number and dimensions of these blocks are related to the dimensions of $\operatorname{null}(U^k)$ for $k=1, \dots, m$, where $m$ is the exponent of nilpotence ($U^m=0, U^{m-1} \ne 0$).

**Inner Products**

- An **inner product** $\langle \cdot, \cdot \rangle$ on a vector space $V$ over $F$ (typically $\mathbb{R}$ or $\mathbb{C}$) is a function $V \times V \to F$ satisfying certain properties (linearity in the first argument, conjugate symmetry, positive-definiteness).
- The norm of a vector $v$ is $|v| = \sqrt{\langle v, v \rangle}$.
- The Triangle inequality holds: $|u+v| \le |u| + |v|$.
- In a complex inner product space, the inner product identifies $V'$ with $V$ via $v \mapsto \phi_v$ where $\phi_v(x) = \langle x, v \rangle$ (Riesz Representation Theorem implication). For real spaces, it identifies $V'$ with $V$ via $v \mapsto \phi_v$ where $\phi_v(x) = \langle v, x \rangle$.
- A list of vectors $v_1, \dots, v_m$ is **orthogonal** if $\langle v_j, v_k \rangle = 0$ for $j \ne k$. It is **orthonormal** if it is orthogonal and $|v_j| = 1$ for all $j$, meaning $\langle v_j, v_k \rangle = \delta_{jk}$.
- **Proposition (Pythagorean Theorem):** If $v_1, \dots, v_m$ is orthonormal, then $|\sum a_i v_i|^2 = \sum |a_i|^2$.
- **Proposition:** If $v = \sum_{i=1}^m a_i v_i$ and $v_1, \dots, v_m$ is orthonormal, then $a_k = \langle v, v_k \rangle$. If $v_1, \dots, v_m$ is an orthonormal basis, then $v = \sum_{i=1}^m \langle v, v_i \rangle v_i$.
- The **Gram-Schmidt process** takes a linearly independent list $v_1, v_2, \dots$ and outputs an orthonormal list $e_1, e_2, \dots$ such that $\operatorname{span}(v_1, \dots, v_t) = \operatorname{span}(e_1, \dots, e_t)$ for all $t \ge 1$. The process does not change vectors that are already part of an initial orthonormal list.
- **Proposition:** Every orthonormal list of vectors in a finite-dimensional space $V$ can be extended to an orthonormal basis of $V$. (Proof uses Gram-Schmidt).
- **Proposition (Schur's theorem):** If an operator $T$ on a finite-dimensional vector space $V$ is upper-triangular with respect to some basis, it is upper-triangular with respect to some orthonormal basis.

**Adjoints and Spectral Theory**

- For an operator $T$ on an inner product space $V$, the **adjoint** $T^_$ is an operator $T^_: V \to V$ such that $\langle Tv, w \rangle = \langle v, T^*w \rangle$ for all $v, w \in V$. The existence of the adjoint is guaranteed for finite-dimensional spaces.
- An operator $T$ is **self-adjoint** (or symmetric in the real case) if $T^* = T$.
- **Corollary:** An operator $T$ on a complex inner product space is self-adjoint if and only if $\langle Tv, v \rangle \in \mathbb{R}$ for all $v \in V$.
- **Theorem (Real Spectral Theorem):** If $T$ is a self-adjoint operator on a real inner product space, then $T$ is diagonal in an orthonormal basis of $V$. (Requires existence of real eigenvalues for real symmetric operators).
- If $T$ is an operator on a complex inner product space, $\langle Tv, v \rangle = \langle v, T^*v \rangle$.
- Proof sketch for diagonalizability of self-adjoint operators uses properties like $\langle Te_i, e_j \rangle = \langle e_i, T^_e_j \rangle$ and potentially norm relations like $|Te_i| = |T^_e_i|$ to show off-diagonal entries in an orthonormal basis are zero.
- **Proposition (Axler 5.33):** If $T$ is an operator on a finite-dimensional real vector space and $p(x) = x^2+bx+c$ is an irreducible polynomial over $\mathbb{R}$ ($b^2-4c < 0$), then the null space of $p(T)$ is even-dimensional.
- **Proposition (Honors version):** If $T$ is an operator on a finite-dimensional vector space over $F$ and $p$ is an irreducible polynomial over $F$, then the dimension of the null space of $p(T)$ is a multiple of the degree of $p$.

**Orthogonal Complements and Projections**

- The **orthogonal complement** of a subset $U \subseteq V$ is $U^\perp = {v \in V \mid \langle v, u \rangle = 0 \text{ for all } u \in U}$.
- If $V$ is finite-dimensional, $U^\perp$ can be viewed as the annihilator $U^0$ via the isomorphism $V \cong V'$.
- Properties: $\emptyset^\perp = V$, ${0}^\perp = V$, $V^\perp = {0}$. If $U \subseteq W$, then $W^\perp \subseteq U^\perp$. $U \cap U^\perp \subseteq {0}$.
- **Lemma:** If $U$ is a finite-dimensional subspace of $V$, then $V = U \oplus U^\perp$.
- If $U$ is finite-dimensional, $(U^\perp)^\perp = U$.
- The **orthogonal projection** onto $U$, denoted $P_U$, is defined for $v = u+x$ with $u \in U, x \in U^\perp$ as $P_U(v) = u$. This is a linear map.
- If $e_1, \dots, e_d$ is an orthonormal basis of $U$, then $P_U(v) = \sum_{i=1}^d \langle v, e_i \rangle e_i$.
- For a finite-dimensional subspace $U$, $P_U v$ is the vector in $U$ closest to $v$: $|v - P_U v| \le |v - u|$ for all $u \in U$, with equality iff $u = P_U v$.

**Commuting Operators**

- Two operators $S, T \in L(V)$ **commute** if $ST = TS$. This is equivalent to their matrices commuting in any given basis.
- **Theorem (Axler 5.78):** Every pair of commuting operators on a finite-dimensional nonzero complex vector space has a **common eigenvector**. Proof uses the fact that eigenspaces of one operator are invariant under the other.
- **Proposition:** Two commuting operators on a finite-dimensional nonzero complex vector space can be **simultaneously upper-triangularized**.
- **Proposition (Axler 5.81):** If $S$ and $T$ commute on a finite-dimensional complex vector space, every eigenvalue of $S+T$ is the sum of an eigenvalue of $S$ and an eigenvalue of $T$, and every eigenvalue of $ST$ is the product of an eigenvalue of $S$ and an eigenvalue of $T$. (This is subject to conditions related to simultaneous triangularization/diagonalization).

**Isometries and Polar Decomposition**

- An **isometry** $S$ on an inner product space $V$ preserves distances: $|Sv - Sw| = |v - w|$ for all $v, w \in V$. This is equivalent to preserving norms: $|Sv| = |v|$ for all $v \in V$.
- For an isometry $S$, if $e_1, \dots, e_n$ is an orthonormal basis, then $Se_1, \dots, Se_n$ is also an orthonormal basis.
- The condition $\langle Se_i, Se_j \rangle = \delta_{ij}$ for an orthonormal basis $e_1, \dots, e_n$ is equivalent to $S^*S = I$.
- For a linear map $T: V \to W$ between finite-dimensional inner product spaces, the operator $T^_T \in L(V)$ is **positive** (meaning self-adjoint and $\langle T^_Tv, v \rangle \ge 0$). $T^_T$ has a unique positive square root $\sqrt{T^_T}$.
- The **Polar Decomposition** states that any operator $T$ can be factored as $T = SP$, where $S$ is an isometry and $P = \sqrt{T^_T}$ is a positive operator. (S may not be unique if T is not invertible). This decomposition can be written as $T = S \circ \sqrt{T^_T}$.

**Singular Values**

- For a linear map $T: V \to W$ between finite-dimensional inner product spaces, the **singular values** of $T$ are the square roots of the eigenvalues of the positive operator $T^*T \in L(V)$. They are non-negative real numbers. It is common to list them in decreasing order $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_n \ge 0$, where $n = \dim V$.
- The multiplicity of 0 as a singular value equals the nullity of $T$.
- The number of positive (nonzero) singular values equals $\dim(\operatorname{range}(T)) = \dim(\operatorname{range}(T^*))$.
- $T$ is surjective if and only if $\dim W$ is the number of positive singular values of $T$.
- **Proposition:** If $\sigma_1$ is the largest singular value of $T: V \to W$, then $|Tv| \le \sigma_1 |v|$ for all $v \in V$. (This is proven using the Singular Value Decomposition formula $Tv = \sum_j \sigma_j \langle v, e_j \rangle f_j$).
- The Singular Value Decomposition (SVD) for a matrix $M$ corresponding to $T: V \to W$ is $M = A D B^{-1}$ (or $A D B^*$ for orthogonal/unitary $A, B$), where $D$ is a diagonal matrix containing the positive singular values.

**Tensor Products**

- The **tensor product** $V \otimes W$ of two vector spaces $V$ and $W$ is constructed to turn bilinear maps on $V \times W$ into linear maps on $V \otimes W$.
- One construction involves forming the **free vector space** on the set of symbols ${v \otimes w \mid v \in V, w \in W}$ and taking a quotient by relations that enforce bilinearity.
- Alternatively, for finite-dimensional spaces with bases $e_1, \dots, e_n$ for $V$ and $f_1, \dots, f_m$ for $W$, $V \otimes W$ can be constructed as the free vector space on the symbols ${e_i \otimes f_j \mid 1 \le i \le n, 1 \le j \le m}$.
- The set ${e_i \otimes f_j}$ forms a basis for $V \otimes W$.
- The dimension of the tensor product of finite-dimensional spaces is the product of their dimensions: $\dim(V \otimes W) = \dim V \cdot \dim W = nm$.
- There is a canonical bilinear map $b_{univ}: V \times W \to V \otimes W$ defined by $(v, w) \mapsto v \otimes w$, which is bilinear. For basis vectors, $b_{univ}(e_i, f_j) = e_i \otimes f_j$.
- The key property (universal property) is that for any vector space $Z$, the space of linear maps $L(V \otimes W, Z)$ is isomorphic to the space of bilinear maps $\operatorname{Bil}(V, W; Z)$.