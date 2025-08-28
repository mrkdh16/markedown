---
title: Machine Learning
draft: false
tags:
  - computer-science
  - machine-learning
---
In recent decades, computer science has been remarkably successful at solving problems by casting them as [[Problem-Solving as a Search Problem|search problems in high dimensional solution spaces]]. And this effort has largely been spearheaded by machine learning. 

At its core, training a supervised machine learning model is an optimization problem: a search for parameters that minimize some loss function. The trained model is then used to solve tasks like classification, planning, or control. These tasks can themselves be framed as search or decision problems. In this way, supervised machine learning solves one search problem in order to automate the solution of others. Unsupervised or self-supervised models also traverse solution spaces, but they employ different techniques for doing so.

Training a machine learning model can also be thought of as extracting meaningful patterns from data. Here, meaningful might mean separating signal from noise. Using such meaningful patterns, we can generate predictions which in turn allows models to do tasks without explicit instruction. 

I'm particularly interested in [[Deep Learning|deep neural networks]] due to their powerful yet not widely understood capabilities. It is thought that deep neural networks learn the low dimensional manifolds that high dimensional data often lies on. 

>The **manifold hypothesis** posits that many [high-dimensional](https://en.wikipedia.org/wiki/High-dimensional "High-dimensional") data sets that occur in the real world actually lie along low-dimensional [latent manifolds](https://en.wikipedia.org/wiki/Latent_manifold "Latent manifold") inside that high-dimensional space. 
>
>-[Wikipedia Article on the Manifold Hypothesis](https://en.wikipedia.org/wiki/Manifold_hypothesis)

It is not yet well understood how deep neural nets accomplish this. Though this theory somewhat explains why heavily overparameterized (many more parameters than training points) deep neural nets are able to "generalize" (this terminology requires care as it's not clear what this exactly means or if neural nets are actually capable of what we usually mean by generalization), it is not particularly scientific as it doesn't tell us *how* they do what they do. I hope to explore more about how exactly deep neural nets do what they do in the future.

---
Below are (very) brief descriptions and links to slightly more thorough summaries of the machine learning papers I've read. I write about these papers because it helps *me* understand them better. This is also why a lot of them are not particularly well-written or easy to read (my apologies).
### Interpretable AI
Because we understand so little about deep neural nets, they are inherently uninterpretable. This is why many researchers advocate for [[Self-explaining AI|Self-explaining AI as an alternative to interpretable AI]]. I should note that this kind of "self-explaining AI" does not include so-called post-hoc interpretability techniques which seek to explain the behavior of black box models after they generate an output. Such post-hoc techniques have been criticized for a variety of reasons (see above paper for such criticisms).

[[Self-Explaining Neural Networks|Towards Robust Interpretability with Self-Explaining Neural Networks]] defines the notoriously hard-to-define term that is interpretability and generalizes linear models which *are* inherently interpretable to create powerful, interpretable models with comparable performance to black box models on certain tasks. 

[[This looks like That|This Looks Like That: Deep Learning for Interpretable Image Recognition]] (ProtoPNet) tries to emulate what humans do (supposedly) when they classify images. ProtoPNet identifies parts of an image that look like what a prototypical image of some class looks like and uses such similarities to generate a prediction. For example, it might identify a certain image of a bird as a bluejay because of a distinctive blue crest and black markings. [[ProtoPool|Interpretable Image Classification with Differentiable Prototypes Assignment]] (ProtoPool) attempts to improve upon ProtoPNet by having a shared pool of prototypes and making the training process end-to-end. Both ProtoPool and ProtoPNet use deep convolutional neural networks to generate latent representations of its inputs.  [[Shallower, more transparent ProtoPNet|The shallowest transparent and interpretable deep neural network for image recognition]] attempts to get rid of the black box that is a deep CNN by not using latent representations at all. This results in a much shallower and arguably more interpretable, albeit less powerful model.