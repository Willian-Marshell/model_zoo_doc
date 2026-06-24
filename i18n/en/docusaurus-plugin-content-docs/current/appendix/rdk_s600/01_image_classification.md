---
sidebar_position: 1
---

# Image Classification

## Performance

| Device | Model | Input Size | Number of Classes | Single Thread Latency(ms) | Single Thread FPS | 12 Threads Latency(ms) | 12 Threads FPS | CPU Latency(ms) | Number of Parameters(M) | FLOPs(B) | GitHub Repository |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S600 | YOLO11l CLS | 224×224 | 1000 | 0.654 | 1497.623 | 1.418 | 7986.583 | 0.5 | 42.6 M | 50.4 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11m CLS | 224×224 | 1000 | 0.534 | 1830.295 | 1.042 | 10636.601 | 0.5 | 32.8 M | 39.3 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11n CLS | 224×224 | 1000 | 0.345 | 2788.428 | 0.761 | 13779.799 | 0.5 | 5.0 M | 5.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11s CLS | 224×224 | 1000 | 0.407 | 2380.216 | 0.771 | 14041.000 | 0.5 | 13.1 M | 14.4 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO11x CLS | 224×224 | 1000 | 0.994 | 991.985 | 2.669 | 4295.902 | 0.5 | 97.7 M | 113.2 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8l CLS | 224×224 | 1000 | 0.877 | 1123.179 | 2.737 | 4181.651 | 0.5 | 36.3 M | 99.0 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8m CLS | 224×224 | 1000 | 0.568 | 1718.996 | 1.359 | 8276.775 | 0.5 | 17.0 M | 42.8 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8n CLS | 224×224 | 1000 | 0.315 | 3054.368 | 0.612 | 17488.633 | 0.5 | 2.7 M | 4.3 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8s CLS | 224×224 | 1000 | 0.362 | 2695.563 | 0.697 | 15550.891 | 0.5 | 6.4 M | 13.5 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLOv8x CLS | 224×224 | 1000 | 1.249 | 792.299 | 4.156 | 2775.157 | 0.5 | 57.4 M | 154.8 M | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo) |
| S600 | YOLO26l Cls | 224x224 | 1000 | 0.65 | 1516.99 | 1.43 | 7924.24 | - | 14.12 | 6.2 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26m Cls | 224x224 | 1000 | 0.54 | 1825.63 | 1.06 | 10526.32 | - | 11.63 | 5.0 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26n Cls | 224x224 | 1000 | 0.34 | 2890.55 | 0.68 | 15743.07 | - | 2.81 | 0.5 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26s Cls | 224x224 | 1000 | 0.40 | 2459.18 | 0.78 | 13540.05 | - | 6.72 | 1.6 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |
| S600 | YOLO26x Cls | 224x224 | 1000 | 0.99 | 998.72 | 2.57 | 4463.59 | - | 29.64 | 13.7 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_s/samples/vision/ultralytics_yolo26) |




## Accuracy

| Device | Model | TOP1 FP32 / BPU | TOP5 FP32 / BPU |
| --- | --- | --- | --- |
| S600 | YOLO11n CLS | 0.700 / 0.556 (79.4 %) | 0.894 / 0.794 (88.9 %) |
| S600 | YOLO11s CLS | 0.754 / 0.666 (88.3 %) | 0.927 / 0.875 (94.3 %) |
| S600 | YOLO11m CLS | 0.773 / 0.700 (90.5 %) | 0.939 / 0.897 (95.5 %) |
| S600 | YOLO11l CLS | 0.783 / 0.718 (91.7 %) | 0.942 / 0.908 (96.4 %) |
| S600 | YOLO11x CLS | 0.795 / 0.731 (92.0 %) | 0.949 / 0.917 (96.6 %) |
| S600 | YOLOv8n CLS | 0.689 / 0.571 (82.9 %) | 0.883 / 0.803 (90.9 %) |
| S600 | YOLOv8s CLS | 0.737 / 0.626 (84.9 %) | 0.917 / 0.844 (92.0 %) |
| S600 | YOLOv8m CLS | 0.768 / 0.700 (91.1 %) | 0.935 / 0.899 (96.1 %) |
| S600 | YOLOv8l CLS | 0.783 / 0.723 (92.3 %) | 0.942 / 0.909 (96.5 %) |
| S600 | YOLOv8x CLS | 0.790 / 0.737 (93.3 %) | 0.945 / 0.920 (97.4 %) |
