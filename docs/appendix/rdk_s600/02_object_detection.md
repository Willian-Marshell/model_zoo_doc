---
sidebar_position: 2
---

# 目标检测

## 性能

| Device | Model | 输入尺寸 | 类别数 | 单线程延迟(ms) | 单线程FPS | 12线程延迟(ms) | 12线程FPS | CPU延迟(ms) | 参数量(M) | FLOPs(B) | GitHub仓库 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S600 | YOLO11l Detect | 640×640 | 80 | 3.229 | 307.877 | 9.113 | 1277.270 | 2.0 | 25.3 M | 86.9 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11m Detect | 640×640 | 80 | 2.584 | 384.284 | 7.054 | 1642.643 | 2.0 | 20.1 M | 68.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11n Detect | 640×640 | 80 | 0.800 | 1221.628 | 1.798 | 6142.695 | 2.0 | 2.6 M | 6.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11s Detect | 640×640 | 80 | 1.204 | 817.752 | 3.008 | 3761.944 | 2.0 | 9.4 M | 21.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11x Detect | 640×640 | 80 | 6.543 | 152.382 | 18.792 | 622.258 | 2.0 | 56.9 M | 194.9 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO12l Detect | 640×640 | 80 | 6.296 | 158.364 | 19.661 | 595.057 | 2.0 | 26.4 M | 88.9 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO12m Detect | 640×640 | 80 | 4.027 | 247.181 | 12.026 | 969.575 | 2.0 | 20.2 M | 67.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO12n Detect | 640×640 | 80 | 1.207 | 819.555 | 2.986 | 3779.575 | 2.0 | 2.6 M | 7.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO12s Detect | 640×640 | 80 | 1.957 | 505.866 | 5.155 | 2235.861 | 2.0 | 9.3 M | 21.4 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO12x Detect | 640×640 | 80 | 11.073 | 90.110 | 35.574 | 329.594 | 2.0 | 59.1 M | 199.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv10b Detect | 640×640 | 80 | 2.972 | 334.349 | 8.042 | 1442.637 | 2.0 | 19.1 M | 92.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv10l Detect | 640×640 | 80 | 3.723 | 267.232 | 10.360 | 1123.873 | 2.0 | 24.4 M | 120.3 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv10m Detect | 640×640 | 80 | 2.342 | 423.743 | 6.201 | 1867.309 | 2.0 | 15.4 M | 59.1 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv10n Detect | 640×640 | 80 | 0.781 | 1251.157 | 1.690 | 6457.445 | 2.0 | 2.3 M | 6.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv10s Detect | 640×640 | 80 | 1.166 | 847.781 | 2.802 | 4025.117 | 2.0 | 7.2 M | 21.6 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv10x Detect | 640×640 | 80 | 5.314 | 187.525 | 15.173 | 769.177 | 2.0 | 29.5 M | 160.4 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv5lu Detect | 640×640 | 80 | 3.980 | 250.292 | 11.117 | 1048.306 | 2.0 | 53.2 M | 135.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv5mu Detect | 640×640 | 80 | 2.240 | 442.539 | 5.935 | 1941.804 | 2.0 | 25.1 M | 64.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv5nu Detect | 640×640 | 80 | 0.719 | 1355.583 | 1.528 | 7182.102 | 2.0 | 2.6 M | 7.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv5su Detect | 640×640 | 80 | 1.096 | 898.017 | 2.656 | 4213.542 | 2.0 | 9.1 M | 24.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv5xu Detect | 640×640 | 80 | 7.333 | 136.001 | 21.084 | 554.451 | 2.0 | 97.2 M | 246.4 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8l Detect | 640×640 | 80 | 4.514 | 220.583 | 12.603 | 924.740 | 2.0 | 43.7 M | 165.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8m Detect | 640×640 | 80 | 2.677 | 371.027 | 7.180 | 1614.922 | 2.0 | 25.9 M | 78.9 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8n Detect | 640×640 | 80 | 0.776 | 1258.503 | 1.674 | 6512.325 | 2.0 | 3.2 M | 8.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8s Detect | 640×640 | 80 | 1.223 | 805.412 | 2.934 | 3839.066 | 2.0 | 11.2 M | 28.6 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8x Detect | 640×640 | 80 | 7.210 | 138.386 | 20.629 | 567.201 | 2.0 | 68.2 M | 257.8 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv9c Detect | 640×640 | 80 | 3.149 | 316.157 | 8.773 | 1325.812 | 2.0 | 25.3 M | 102.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv9e Detect | 640×640 | 80 | 8.560 | 116.557 | 31.421 | 372.969 | 2.0 | 57.4 M | 189.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv9m Detect | 640×640 | 80 | 2.747 | 361.925 | 7.518 | 1541.699 | 2.0 | 20.1 M | 76.8 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv9s Detect | 640×640 | 80 | 1.468 | 672.601 | 3.911 | 2921.499 | 2.0 | 7.2 M | 26.9 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO26n Detect | 640x640 | 80 | 0.83 | 1170.57 | 1.85 | 6023.19 | - | 2.57 | 6.1 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26s Detect | 640x640 | 80 | 1.27 | 780.57 | 3.17 | 3576.09 | - | 10.01 | 22.8 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26m Detect | 640x640 | 80 | 2.61 | 380.65 | 7.19 | 1612.92 | - | 21.90 | 75.4 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26l Detect | 640x640 | 80 | 3.21 | 309.74 | 9.02 | 1291.03 | - | 26.30 | 93.8 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26x Detect | 640x640 | 80 | 6.57 | 151.87 | 19.20 | 609.19 | - | 58.99 | 209.5 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26n Obb | 640x640 | 15 | 0.79 | 1230.91 | 1.65 | 6496.46 | - | 2.65 | 6.3 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26s Obb | 640x640 | 15 | 1.26 | 784.60 | 3.11 | 3610.24 | - | 10.53 | 24.5 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26m Obb | 640x640 | 15 | 2.66 | 372.64 | 7.21 | 1601.00 | - | 23.49 | 82.2 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26l Obb | 640x640 | 15 | 3.27 | 304.08 | 9.15 | 1266.96 | - | 27.90 | 100.6 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26x Obb | 640x640 | 15 | 6.73 | 148.08 | 19.31 | 604.86 | - | 62.66 | 225.3 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |




## 精度

| Device | Model | bbox-all FP32 / BPU | bbox-small FP32 / BPU | bbox-medium FP32 / BPU | bbox-large FP32 / BPU |
| --- | --- | --- | --- | --- | --- |
| S600 | YOLO12n Detect | 0.338 / 0.320 (94.7 %) | 0.128 / 0.104 (81.3 %) | 0.374 / 0.350 (93.6 %) | 0.524 / 0.514 (98.1 %) |
| S600 | YOLO12s Detect | 0.403 / 0.385 (95.5 %) | 0.201 / 0.158 (78.6 %) | 0.450 / 0.436 (96.9 %) | 0.602 / 0.586 (97.3 %) |
| S600 | YOLO12m Detect | 0.452 / 0.436 (96.5 %) | 0.251 / 0.228 (90.8 %) | 0.509 / 0.497 (97.6 %) | 0.638 / 0.626 (98.1 %) |
| S600 | YOLO12l Detect | 0.463 / 0.441 (95.2 %) | 0.268 / 0.226 (84.3 %) | 0.522 / 0.505 (96.7 %) | 0.646 / 0.640 (99.1 %) |
| S600 | YOLO12x Detect | 0.475 / 0.455 (95.8 %) | 0.276 / 0.238 (86.2 %) | 0.536 / 0.527 (98.3 %) | 0.659 / 0.618 (93.8 %) |
| S600 | YOLO11s Detect | 0.400 / 0.382 (95.5 %) | 0.198 / 0.165 (83.3 %) | 0.445 / 0.430 (96.6 %) | 0.587 / 0.586 (99.8 %) |
| S600 | YOLO11m Detect | 0.444 / 0.429 (96.6 %) | 0.247 / 0.220 (89.1 %) | 0.497 / 0.488 (98.2 %) | 0.627 / 0.610 (97.3 %) |
| S600 | YOLO11l Detect | 0.460 / 0.448 (97.4 %) | 0.267 / 0.238 (89.1 %) | 0.520 / 0.514 (98.8 %) | 0.638 / 0.622 (97.5 %) |
| S600 | YOLO11x Detect | 0.474 / 0.457 (96.4 %) | 0.283 / 0.244 (86.2 %) | 0.529 / 0.517 (97.7 %) | 0.652 / 0.639 (98.0 %) |
| S600 | YOLOv10n Detect | 0.303 / 0.285 (94.1 %) | 0.099 / 0.075 (75.8 %) | 0.330 / 0.306 (92.7 %) | 0.478 / 0.469 (98.1 %) |
| S600 | YOLOv10s Detect | 0.386 / 0.363 (94.0 %) | 0.175 / 0.144 (82.3 %) | 0.434 / 0.410 (94.5 %) | 0.574 / 0.528 (92.0 %) |
| S600 | YOLOv10m Detect | 0.425 / 0.389 (91.5 %) | 0.221 / 0.202 (91.4 %) | 0.481 / 0.450 (93.6 %) | 0.603 / 0.505 (83.7 %) |
| S600 | YOLOv10b Detect | 0.443 / 0.388 (87.6 %) | 0.242 / 0.189 (78.1 %) | 0.498 / 0.447 (89.8 %) | 0.618 / 0.496 (80.3 %) |
| S600 | YOLOv10l Detect | 0.445 / 0.392 (88.1 %) | 0.258 / 0.215 (83.3 %) | 0.498 / 0.463 (93.0 %) | 0.626 / 0.492 (78.6 %) |
| S600 | YOLOv10x Detect | 0.459 / 0.424 (92.4 %) | 0.258 / 0.228 (88.4 %) | 0.518 / 0.490 (94.6 %) | 0.639 / 0.546 (85.4 %) |
| S600 | YOLOv9s Detect | 0.400 / 0.387 (96.8 %) | 0.191 / 0.169 (88.5 %) | 0.444 / 0.433 (97.5 %) | 0.583 / 0.564 (96.7 %) |
| S600 | YOLOv9m Detect | 0.449 / 0.441 (98.2 %) | 0.253 / 0.232 (91.7 %) | 0.504 / 0.496 (98.4 %) | 0.617 / 0.611 (99.0 %) |
| S600 | YOLOv9c Detect | 0.461 / 0.451 (97.8 %) | 0.269 / 0.251 (93.3 %) | 0.512 / 0.509 (99.4 %) | 0.640 / 0.612 (95.6 %) |
| S600 | YOLOv9e Detect | 0.481 / 0.470 (97.7 %) | 0.298 / 0.273 (91.6 %) | 0.538 / 0.525 (97.6 %) | 0.662 / 0.650 (98.2 %) |
| S600 | YOLOv8s Detect | 0.391 / 0.376 (96.2 %) | 0.195 / 0.169 (86.7 %) | 0.437 / 0.423 (96.8 %) | 0.566 / 0.558 (98.6 %) |
| S600 | YOLOv8m Detect | 0.441 / 0.429 (97.3 %) | 0.249 / 0.222 (89.2 %) | 0.494 / 0.486 (98.4 %) | 0.618 / 0.607 (98.2 %) |
| S600 | YOLOv8l Detect | 0.461 / 0.448 (97.2 %) | 0.271 / 0.245 (90.4 %) | 0.516 / 0.505 (97.9 %) | 0.651 / 0.642 (98.6 %) |
| S600 | YOLOv8x Detect | 0.474 / 0.459 (96.8 %) | 0.280 / 0.253 (90.4 %) | 0.527 / 0.516 (97.9 %) | 0.658 / 0.647 (98.3 %) |
| S600 | YOLOv5nu Detect | 0.278 / 0.269 (96.8 %) | 0.093 / 0.083 (89.2 %) | 0.309 / 0.296 (95.8 %) | 0.417 / 0.412 (98.8 %) |
| S600 | YOLOv5su Detect | 0.367 / 0.355 (96.7 %) | 0.169 / 0.140 (82.8 %) | 0.416 / 0.406 (97.6 %) | 0.530 / 0.531 (100.2 %) |
| S600 | YOLOv5mu Detect | 0.425 / 0.415 (97.6 %) | 0.226 / 0.207 (91.6 %) | 0.477 / 0.470 (98.5 %) | 0.603 / 0.604 (100.2 %) |
| S600 | YOLOv5lu Detect | 0.458 / 0.451 (98.5 %) | 0.260 / 0.238 (91.5 %) | 0.516 / 0.511 (99.0 %) | 0.641 / 0.637 (99.4 %) |
| S600 | YOLOv5xu Detect | 0.466 / 0.454 (97.4 %) | 0.281 / 0.246 (87.5 %) | 0.523 / 0.517 (98.9 %) | 0.645 / 0.647 (100.3 %) |
