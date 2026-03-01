---
title: Outline
draft: true
tags:
---
## The Objective
We want to determine the concentration of some analyte (perhaps some protein) using some kind of sensing technique and data analysis method. Ideally, the technique is fast, non-invasive, stable, and precise, but in practice only a few of these criteria can be met. The goal is to leverage machine learning to make pre-existing techniques meet more of the aforementioned criteria and/or expedite and refine the data analysis process.
## The Data
Different techniques for collecting data yield different kinds of data. 
#### ELISA like Assay
The more 'simple' method which yields much quicker results leverages nanodiamonds (NDs) and polystyrene beads in a microdroplet for a [ELISA](https://en.wikipedia.org/wiki/ELISA) like assay. In the presence of analyses in the microdroplet, the NDs bind to the beads. We can visually detect this binding through the NDs' fluoresence. If the NDs bind to the beads, we will be able to see spots of bright fluoresence instead of a weaker, more sparse fluoresence.
![[Microdroplet for ELISA like assay with NDs.png]]
High analyte concentration on the left, low concentration on the right:

| ![[Screenshot 2025-06-25 at 9.32.36 AM.png]] | ![[Screenshot 2025-06-25 at 9.30.22 AM.png]] |
|:---:|:---:|
#### Microdroplet Quantum Sensing
The second more sophisticated method which allows for more instrumentally stable and precise measurements is 'quantum-enhanced' in that it utilizes the NDs as 'quantum sensors' ([[Leveraging Nanodiamond Nitrogen-Vacancy Centers for Chemical and Biosensing]]). The method described in [[ODMR Quantum Sensing Paper|High-precision chemical quantum sensing in flowing monodisperse microdroplets]] includes both the sensing and data analysis methodology. The main aim of this method is to maximize stability and precision. The raw time series data is Fourier transformed and analyzed.
## Room for Machine Learning Integration
There are multiple areas where machine learning (ML) could be useful. For the ELISA-like assay we might
- apply ML to solve for the analyte concentration by treating it as a regression problem
- correct for instrumental drift in the ELISA-like assay image data (image preprocessing/normalization with techniques such as CLAHE, data augmentation/synthetic data creation)
- utilize saliency methods (eg. [Grad-CAM: Visual Explanations from Deep Networks via Gradient-Based Localization](https://link.springer.com/article/10.1007/S11263-019-01228-7)) to interpret the model's behavior and make sure the model isn't falling victim to instrumental drift.
For the microdroplet ODMR method, we might:
- reconstruct full spectra from undersampled data with ML (similar to [[Deep Learning for Speeding up NMR Paper|Deep learning network for NMR spectra reconstruction in time-frequency domain and quality assessment]] and [Joint Optimization of Hadamard Sensing and Reconstruction in Compressed Sensing Fluorescence Microscopy](https://arxiv.org/pdf/2105.07961); could suffer from interpretability issues; seems to have a lot of precedent)
- conduct end-to-end analysis by using raw time series data to directly predict analyte concentration (seems to lack precedent).
