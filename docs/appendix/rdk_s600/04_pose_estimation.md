---
sidebar_position: 4
---

# 姿态估计

## 性能

| Device | Model | 输入尺寸 | 类别数 | 单线程延迟(ms) | 单线程FPS | 12线程延迟(ms) | 12线程FPS | CPU延迟(ms) | 参数量(M) | FLOPs(B) | GitHub仓库 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S600 | YOLO11l Pose | 640×640 | 80 | 3.319 | 299.436 | 9.278 | 1250.641 | 1.0 | 26.2 M | 90.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11m Pose | 640×640 | 80 | 2.667 | 371.922 | 7.232 | 1596.972 | 1.0 | 20.9 M | 71.7 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11n Pose | 640×640 | 80 | 0.846 | 1159.078 | 1.925 | 5680.205 | 1.0 | 2.9 M | 7.6 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11s Pose | 640×640 | 80 | 1.275 | 771.542 | 3.146 | 3565.380 | 1.0 | 9.9 M | 23.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11x Pose | 640×640 | 80 | 6.768 | 147.282 | 19.390 | 602.593 | 1.0 | 58.8 M | 203.3 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8l Pose | 640×640 | 80 | 4.621 | 215.565 | 12.895 | 902.833 | 1.0 | 44.4 M | 168.6 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8m Pose | 640×640 | 80 | 2.760 | 360.059 | 7.384 | 1565.411 | 1.0 | 26.4 M | 81.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8n Pose | 640×640 | 80 | 0.808 | 1204.101 | 1.733 | 6280.026 | 1.0 | 3.3 M | 9.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8s Pose | 640×640 | 80 | 1.292 | 761.464 | 3.148 | 3553.976 | 1.0 | 11.6 M | 30.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8x Pose | 640×640 | 80 | 7.392 | 134.881 | 21.121 | 553.125 | 1.0 | 69.4 M | 263.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO26n Pose | 640x640 | 1 | 0.86 | 1129.76 | 1.93 | 5634.91 | - | 3.68 | 10.3 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26s Pose | 640x640 | 1 | 1.36 | 725.97 | 3.33 | 3384.84 | - | 11.81 | 29.2 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26m Pose | 640x640 | 1 | 2.73 | 363.75 | 7.41 | 1550.53 | - | 24.22 | 85.2 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26l Pose | 640x640 | 1 | 3.31 | 299.85 | 9.26 | 1252.19 | - | 28.63 | 103.6 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26x Pose | 640x640 | 1 | 6.80 | 146.52 | 19.60 | 596.04 | - | 62.73 | 225.3 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |




## 精度

| Device | Model | pose-all FP32 / BPU | pose-medium FP32 / BPU | pose-large FP32 / BPU |
| --- | --- | --- | --- | --- |
| S600 | YOLO11n Pose | 0.465 / 0.448 (96.3 %) | 0.386 / 0.374 (96.9 %) | 0.597 / 0.572 (95.8 %) |
| S600 | YOLO11s Pose | 0.559 / 0.541 (96.8 %) | 0.495 / 0.476 (96.2 %) | 0.672 / 0.648 (96.4 %) |
| S600 | YOLO11m Pose | 0.627 / 0.605 (96.5 %) | 0.586 / 0.566 (96.6 %) | 0.711 / 0.688 (96.8 %) |
| S600 | YOLO11l Pose | 0.636 / 0.617 (97.0 %) | 0.592 / 0.568 (95.9 %) | 0.726 / 0.707 (97.4 %) |
| S600 | YOLO11x Pose | 0.672 / 0.651 (96.9 %) | 0.634 / 0.610 (96.2 %) | 0.750 / 0.731 (97.5 %) |
| S600 | YOLOv8n Pose | 0.476 / 0.461 (96.8 %) | 0.391 / 0.373 (95.4 %) | 0.610 / 0.593 (97.2 %) |
| S600 | YOLOv8s Pose | 0.578 / 0.552 (95.5 %) | 0.510 / 0.486 (95.3 %) | 0.692 / 0.667 (96.4 %) |
| S600 | YOLOv8m Pose | 0.630 / 0.605 (96.0 %) | 0.578 / 0.552 (95.5 %) | 0.724 / 0.703 (97.1 %) |
| S600 | YOLOv8l Pose | 0.657 / 0.633 (96.3 %) | 0.607 / 0.581 (95.7 %) | 0.747 / 0.719 (96.3 %) |
| S600 | YOLOv8x Pose | 0.671 / 0.651 (97.0 %) | 0.624 / 0.603 (96.6 %) | 0.757 / 0.739 (97.6 %) |
