---
title: Trial Run with Synthetic Toy Data
draft: true
tags:
---
The goal is to test various model architectures and saliency methods. I tried to generate synthetic data that roughly matches the real data that we will receive:

1. Generate a point cloud within a cube (generate n points each with three uniformly randomly generated coordinate values in [0,1])
2. Randomly choose a few points in the cube to be 'beads,' i.e. concentration points
3. Based on an 'analyte concentration' parameter, have the points clump near the beads accordingly; a higher concentration means the points are more strongly attracted to the beads (for every point, find the nearest bead. then, change the location of the point to a random point in a normal distribution where the closest bead position is the mean and the standard deviation is determined by the concentration)
4. Turn the data into a z-stack format (eg. 700x700x100 tensor)

The model will try to guess the concentration parameter by looking at the point cloud.

---

5000 points, 6 chosen to be beads, varying attractive strength (varying standard deviation)

| ![[synthetic_data_low.png]] | ![[synthetic_data_med.png]] | ![[synthetic_data_high.png]] |
| --------------------------- | --------------------------- | ---------------------------- |
| low concentration           | medium concentration        | high concentration           |
We can then turn the point clouds into z-stack image data:
![[z-stack_data.png]]