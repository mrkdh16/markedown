---
title: Balancedness
draft: true
tags:
---
From equations (1) and (2) follows a conservation law. Observe that $\frac{dW^{21}}{dt}{W^{21}}^\top = {W^{32}}^\top \frac{dW^{32}}{dt}$. This implies that $\frac{dW^{21}}{dt}{W^{21}}^\top - {W^{32}}^\top \frac{dW^{32}}{dt} = {W^{21}}\frac{dW^{21}}{dt}^\top - \frac{dW^{32}}{dt}^\top{W^{32}}  = 0$ where for the second equality we took the transpose of both sides. From this and the product rule, it follows that $\frac{d}{dt}(W^{21}{W^{21}}^\top - {W^{32}}^\top W^{32}) = 0$. So, the quantity $W^{21}{W^{21}}^\top - {W^{32}}^\top W^{32}$ is conserved throughout time.