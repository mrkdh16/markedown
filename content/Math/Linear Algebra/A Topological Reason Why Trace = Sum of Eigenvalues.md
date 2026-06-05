---
title: A Topological Reason Why Trace = Sum of Eigenvalues
draft: true
tags:
  - math
---
It's a linear algebraic fact that for any square matrix $A$ over $\mathbb{R}$ or $\mathbb{C}$, $\text{Tr}(A) = \sum_{i}\lambda_{i}$ where the $\lambda_{i}$s are the eigenvalues of $A$.

**Step 1: Two continuous functions**

Both "sum of eigenvalues" and "trace" can be expressed as continuous functions of a matrix's entries. The trace is obviously continuous — it's just adding up the diagonal entries. The sum of eigenvalues is also continuous, because eigenvalues are roots of the characteristic polynomial, and roots of a polynomial vary continuously with its coefficients (over ℝ or ℂ). So their _difference_ — call it $f(A) = \text{tr}(A) - \sum \lambda_i(A)$ — is also continuous.

**Step 2: The result is easy to verify on diagonalizable matrices**

For a diagonalizable matrix, $A = PDP^{-1}$ where $D$ is diagonal with the eigenvalues on the diagonal. You can check directly that $\text{tr}(A) = \text{tr}(PDP^{-1}) = \text{tr}(D) = \sum \lambda_i$, using the cyclic property of trace. So $f(A) = 0$ on all diagonalizable matrices.

**Step 3: Diagonalizable matrices are dense**

Over ℝ or ℂ, the diagonalizable matrices form a _dense_ subset of all $n \times n$ matrices. Intuitively this is because non-diagonalizability is a "fragile" condition — it requires eigenvalues to coincide in a precise way, which is destroyed by any generic small perturbation. More formally, a matrix fails to be diagonalizable (over ℂ) only when its characteristic polynomial has repeated roots, which is a measure-zero condition defined by the vanishing of the discriminant.

**Step 4: A continuous function that's zero on a dense set is zero everywhere**

This is a standard topological fact. If $f$ is continuous and $f(A) = 0$ on a dense set $S$, then for any matrix $B$, you can find a sequence of diagonalizable matrices $A_n \to B$. By continuity, $f(B) = \lim f(A_n) = \lim 0 = 0$.

**The conclusion**

Therefore $f(A) = 0$ for _all_ matrices — meaning trace equals the sum of eigenvalues universally.

---

The reason this argument is nice is that it separates the "hard" algebraic part (verifying the identity on diagonalizable matrices) from the "soft" topological part (extending it everywhere by density and continuity), and the soft part does most of the heavy lifting.