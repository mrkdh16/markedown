---
title: AlphaEvolve
draft: true
tags:
---
Terrence Tao summarizes AlphaEvolve nicely: 

>"*Very roughly speaking, this is a tool that can attempt to extremize functions F(x) with x ranging over a high dimensional parameter space Omega, that can outperform more traditional optimization algorithms when the parameter space is very high dimensional and the function F (and its extremizers) have non-obvious structural features*"

AlphaEvolve thrives in problems that have simple objective functions, i.e. problems for which we can easily judge whether a solution is correct or close to correct. This property allows the model to quickly generate a large number of potential solutions using a cheap and fast large language model, and then iteratively improve the pool of solutions. 

- how does alphaevolve incorporate map elites and island-based population models?
- alphaevolve can generate algorithms for solving problems or algorithms that come up with a solution rather than directly a solution
	- can be powerful
	- means the model is very widely applicable

I suppose I never thought about using large language models to navigate a high-dimensional solution space, but with the advent of very fast models such as Google's Flash, this is becoming more and more feasible. Using large language models to supplement the navigation of high-dimensional solution spaces could prove to be revolutionary. The seeming creativity that large language models bring to the table may create machines that look and act dangerously similarly to human scientists and mathematicians.

Resources: [Terrence Tao Quote ](https://mathstodon.xyz/@tao/114508029896631083), [AlphaEvolve Paper](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/AlphaEvolve.pdf)