---
title: Coprime Polynomials
draft: false
tags:
---
 
### Theorem.
Given polynomials $p(x),q(x) \in \mathcal{P}(F)$ such that $gcd(p(x),q(x)) = 1$, i.e. there are no polynomials that divide both $p(x)$ and $q(x)$, the following is true for any linear operator $T$: $null(p(T)q(T))=null(p(T))\bigoplus null(q(T))$. 
### Proof.
A key result of number theory is [[Bezout's Lemma]], which states that if $gcd(p,q)=1$, then there exist $s,t$ such that $ps+qt=1$. Because the ring of polynomials is a [[Euclidean Rings|Euclidean ring]], we can use Bezout's Lemma to assert the existence of polynomials $s(x),t(x)$ such that $p(x)s(x)+q(x)t(x)=1$, or equivalently, 
$$
p(T)s(T)+q(T)t(T)=s(T)p(T)+t(T)q(T)=I,
$$where we used the fact that polynomials commute. 

Assume $v \in null(p(T)q(T))$ such that $p(T)q(T)v=0$. Suppose $a = p(T)s(T)v$ and $b=q(T)t(T)v$ such that $a+b=v$. We need only show that $a\in null(q(T))$ and $b\in null(p(T))$. We can use the commutativity of polynomials to show this:
$$
q(T)a=q(T)p(T)s(T)v=s(T)p(T)q(T)v=s(T)0=0,
$$
and the same process can be applied to $b$. Thus, we have shown that $null(p(T)q(T))$ is the sum of $null(p(T))$ and $null(q(T))$.

To show that the sum is direct, assume for some $v\in V$ that $v\in null(p(T))$ and $v\in null(q(T))$. Applying both the LHS and the RHS of the above equation to $v$, since $p(T)v=0$ and $q(T)v=0$ by hypothesis, we obtain the result that $v=0$. Thus, $null(p(T))\cap null(q(T))=\{0\}$.

---
The commutativity of polynomials gives us a lot of room to play here. It seems that this is one of the reasons that using the minimal polynomial can be so powerful.

As someone that started their mathematical journey with number theory, seeing Bezout's Lemma show up puts a smile on my face.