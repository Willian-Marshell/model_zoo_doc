---
sidebar_position: 3
---

# 实例分割

## 性能

| Device | Model | 输入尺寸 | 类别数 | 单线程延迟(ms) | 单线程FPS | 12线程延迟(ms) | 12线程FPS | CPU延迟(ms) | 参数量(M) | FLOPs(B) | GitHub仓库 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S600 | YOLO11l Seg | 640×640 | 80 | 4.268 | 233.082 | 12.015 | 967.109 | 5.0 | 27.6 M | 142.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11m Seg | 640×640 | 80 | 3.624 | 274.240 | 9.977 | 1161.123 | 5.0 | 22.4 M | 123.3 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11n Seg | 640×640 | 80 | 0.959 | 1024.863 | 2.379 | 4586.104 | 5.0 | 2.9 M | 10.4 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11s Seg | 640×640 | 80 | 1.513 | 651.042 | 3.845 | 2908.329 | 5.0 | 10.1 M | 35.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11x Seg | 640×640 | 80 | 8.831 | 112.923 | 25.480 | 459.263 | 5.0 | 62.1 M | 319.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8l Seg | 640×640 | 80 | 5.585 | 178.335 | 15.661 | 743.323 | 5.0 | 46.0 M | 220.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8m Seg | 640×640 | 80 | 3.298 | 301.000 | 8.931 | 1296.706 | 5.0 | 27.3 M | 100.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8n Seg | 640×640 | 80 | 0.940 | 1038.438 | 2.236 | 4790.304 | 5.0 | 3.4 M | 12.6 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8s Seg | 640×640 | 80 | 1.540 | 642.329 | 3.883 | 2873.027 | 5.0 | 11.8 M | 42.6 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8x Seg | 640×640 | 80 | 8.884 | 112.265 | 25.517 | 458.336 | 5.0 | 71.8 M | 344.1 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO26n Seg | 640x640 | 80 | 1.02 | 966.75 | 2.54 | 4353.03 | - | 3.13 | 10.5 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26s Seg | 640x640 | 80 | 1.70 | 579.68 | 4.38 | 2585.38 | - | 11.51 | 37.4 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26m Seg | 640x640 | 80 | 3.91 | 254.03 | 10.87 | 1069.46 | - | 27.11 | 132.5 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26l Seg | 640x640 | 80 | 4.58 | 217.11 | 13.00 | 895.80 | - | 31.52 | 150.9 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26x Seg | 640x640 | 80 | 9.32 | 107.13 | 26.92 | 434.77 | - | 70.69 | 337.7 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |




## 精度（检测框 bbox）

| Device | Model | bbox-all FP32 / BPU | bbox-small FP32 / BPU | bbox-medium FP32 / BPU | bbox-large FP32 / BPU |
| --- | --- | --- | --- | --- | --- |
| S600 | YOLO11s Seg | 0.394 / 0.383 (97.2 %) | 0.184 / 0.162 (88.0 %) | 0.442 / 0.434 (98.2 %) | 0.582 / 0.581 (99.8 %) |
| S600 | YOLO11m Seg | 0.443 / 0.427 (96.4 %) | 0.246 / 0.224 (91.1 %) | 0.497 / 0.484 (97.4 %) | 0.627 / 0.607 (96.8 %) |
| S600 | YOLO11l Seg | 0.460 / 0.443 (96.3 %) | 0.267 / 0.236 (88.4 %) | 0.520 / 0.508 (97.7 %) | 0.638 / 0.614 (96.2 %) |
| S600 | YOLO11x Seg | 0.474 / 0.456 (96.2 %) | 0.283 / 0.244 (86.2 %) | 0.529 / 0.515 (97.4 %) | 0.652 / 0.636 (97.5 %) |
| S600 | YOLOv8s Seg | 0.386 / 0.375 (97.2 %) | 0.180 / 0.162 (90.0 %) | 0.432 / 0.419 (97.0 %) | 0.564 / 0.560 (99.3 %) |
| S600 | YOLOv8m Seg | 0.431 / 0.420 (97.4 %) | 0.228 / 0.209 (91.7 %) | 0.486 / 0.478 (98.4 %) | 0.608 / 0.605 (99.5 %) |
| S600 | YOLOv8l Seg | 0.453 / 0.435 (96.0 %) | 0.258 / 0.223 (86.4 %) | 0.502 / 0.496 (98.8 %) | 0.626 / 0.611 (97.6 %) |
| S600 | YOLOv8x Seg | 0.465 / 0.454 (97.6 %) | 0.268 / 0.236 (88.1 %) | 0.520 / 0.514 (98.8 %) | 0.641 / 0.633 (98.8 %) |


## 精度（分割掩码 mask）

| Device | Model | mask-all FP32 / BPU | mask-small FP32 / BPU | mask-medium FP32 / BPU | mask-large FP32 / BPU |
| --- | --- | --- | --- | --- | --- |
| S600 | YOLO11s Seg | 0.311 / 0.295 (94.9 %) | 0.099 / 0.088 (88.9 %) | 0.350 / 0.327 (93.4 %) | 0.509 / 0.486 (95.5 %) |
| S600 | YOLO11m Seg | 0.347 / 0.322 (92.8 %) | 0.136 / 0.123 (90.4 %) | 0.396 / 0.362 (91.4 %) | 0.549 / 0.506 (92.2 %) |
| S600 | YOLO11l Seg | 0.357 / 0.331 (92.7 %) | 0.143 / 0.126 (88.1 %) | 0.409 / 0.377 (92.2 %) | 0.560 / 0.511 (91.3 %) |
| S600 | YOLO11x Seg | 0.366 / 0.339 (92.6 %) | 0.149 / 0.124 (83.2 %) | 0.420 / 0.384 (91.4 %) | 0.572 / 0.529 (92.5 %) |
| S600 | YOLOv8s Seg | 0.305 / 0.290 (95.1 %) | 0.096 / 0.085 (88.5 %) | 0.343 / 0.317 (92.4 %) | 0.496 / 0.476 (96.0 %) |
| S600 | YOLOv8m Seg | 0.337 / 0.319 (94.7 %) | 0.121 / 0.109 (90.1 %) | 0.386 / 0.360 (93.3 %) | 0.533 / 0.506 (94.9 %) |
| S600 | YOLOv8l Seg | 0.351 / 0.331 (94.3 %) | 0.137 / 0.119 (86.9 %) | 0.398 / 0.374 (94.0 %) | 0.550 / 0.516 (93.8 %) |
| S600 | YOLOv8x Seg | 0.358 / 0.338 (94.4 %) | 0.139 / 0.122 (87.8 %) | 0.409 / 0.382 (93.4 %) | 0.562 / 0.529 (94.1 %) |
