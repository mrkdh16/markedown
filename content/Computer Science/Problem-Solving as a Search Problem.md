---
title: Problem-Solving as a Search Problem
draft: false
tags:
  - computer-science
  - math
---
## Every Problem is a Search Problem
Almost any well-defined problem can be thought of as a search problem in a high-dimensional [[Vector Spaces|vector space]]. Here, the well-defined condition requires that we are able to parameterize the potential solutions and quantify the quality of each solution through some sort of function. The potential solutions are each represented as a vector which together form a solution space (this may or may not be a vector space in the technical mathematical sense). The function we use to evaluate the solutions is the objective function (or loss function depending on who you ask). 

Ideally, to satisfy the mathematicians, the potential solutions when represented as vectors create a coherent vector space that satisfies the necessary mathematical axioms. However this is not at all a necessary condition for thinking of problems in this framework nor is it necessary to use tools we later discuss such as [[Gradient Descent|gradient descent]] (gradient descent does have some other necessary requirements).

This framework for problem-solving is arguably the dominant paradigm of twenty-first century computer science and is what has made machine learning so successful in recent years. It allows us to solve an incredibly diverse array of problems using the same techniques. Suppose we want to build a chatbot that is capable of conversing humans. We can frame the problem as such: we need only predict the most likely word to come next in a sequence, given the words that came before. Here, the solution space would be the space of words. In this case, we use [[Word Embeddings|word embeddings]] which really do form a vector space.
## Solving the Search Problem
It is hard to understate how difficult it is to find the perfect vector in a vast high-dimensional solution space. Not only are our minds embarrassingly [[The Curse of Dimensionality|bad at comprehending]] just how large high-dimensional vector spaces can be, the high-dimensionality means it can be very expensive to evaluate a large number of solutions using the objective function. Thus, we must find a way to find the optimal solution in a very unintuitive landscape while evaluating the least number of potential solutions. 

One popular approach is [[Gradient Descent|gradient descent]] which is largely responsible for the success of deep learning. Another possible, albeit less popular, approach is an evolutionary algorithmic one. Recently this method has seen great success when combined with fast large language models: [[AlphaEvolve]].