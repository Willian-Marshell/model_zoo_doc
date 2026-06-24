---
sidebar_position: 2
---

# 目标检测

| Model | 输入尺寸 | 类别数 | 单线程延迟(ms) | 单线程FPS | 双线程延迟(ms) | 双线程FPS | CPU延迟(ms) | 参数量(M) | FLOPs(B) | PyTorch AP | Python AP | GitHub仓库 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fcos_efficientnetb0 | 512x512 | 80 | 3.3 | 298.0 | 6.2 | 323.0 | 9 | - | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/fcos) |
| fcos_efficientnetb2 | 768x768 | 80 | 14.4 | 69.5 | 28.1 | 70.9 | 16 | - | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/fcos) |
| fcos_efficientnetb3 | 896x896 | 80 | 26.1 | 38.2 | 51.6 | 38.7 | 20 | - | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/fcos) |
| yolov5nu | 640x640 | 80 | 6.3 | 157.4 | 6.8 | 291.8 | 5 | 2.6 | 7.7 | 0.275 | 0.260 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5su | 640x640 | 80 | 12.3 | 81.0 | 18.9 | 105.6 | 5 | 9.1 | 24.0 | 0.362 | 0.354 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5mu | 640x640 | 80 | 26.5 | 37.7 | 47.1 | 42.4 | 5 | 25.1 | 64.2 | 0.417 | 0.407 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5lu | 640x640 | 80 | 52.7 | 19.0 | 99.1 | 20.1 | 5 | 53.2 | 135.0 | 0.449 | 0.442 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5xu | 640x640 | 80 | 91.1 | 11.0 | 175.7 | 11.4 | 5 | 97.2 | 246.4 | 0.458 | 0.443 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5s_v2.0 | 640x640 | 80 | - | 106.8 | - | - | 12 | 7.5 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5m_v2.0 | 640x640 | 80 | - | 45.2 | - | - | 12 | 21.8 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5l_v2.0 | 640x640 | 80 | - | 21.8 | - | - | 12 | 47.8 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5x_v2.0 | 640x640 | 80 | - | 12.3 | - | - | 12 | 89.0 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5n_v7.0 | 640x640 | 80 | - | 277.2 | - | - | 12 | 1.9 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5s_v7.0 | 640x640 | 80 | - | 124.2 | - | - | 12 | 7.2 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5m_v7.0 | 640x640 | 80 | - | 48.4 | - | - | 12 | 21.2 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5l_v7.0 | 640x640 | 80 | - | 23.3 | - | - | 12 | 46.5 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov5x_v7.0 | 640x640 | 80 | - | 13.1 | - | - | 12 | 86.7 | - | - | - | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov8n | 640x640 | 80 | 7.0 | 141.9 | 8.0 | 247.2 | 5 | 3.2 | 8.7 | 0.306 | 0.292 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov8s | 640x640 | 80 | 13.6 | 73.5 | 21.4 | 93.2 | 5 | 11.2 | 28.6 | 0.384 | 0.372 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov8m | 640x640 | 80 | 30.6 | 32.6 | 55.3 | 36.1 | 5 | 25.9 | 78.9 | 0.433 | 0.423 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov8l | 640x640 | 80 | 59.4 | 16.8 | 112.7 | 17.7 | 5 | 43.7 | 165.2 | 0.454 | 0.440 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov8x | 640x640 | 80 | 92.4 | 10.8 | 178.3 | 11.2 | 5 | 68.2 | 257.8 | 0.465 | 0.448 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov9t | 640x640 | 80 | 6.9 | 144.0 | 7.9 | 250.6 | 5 | 2.1 | 8.2 | 0.357 | 0.346 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov9s | 640x640 | 80 | 13.0 | 77.0 | 20.1 | 98.9 | 5 | 7.2 | 26.9 | 0.460 | 0.446 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov9m | 640x640 | 80 | 32.5 | 30.8 | 59.0 | 33.8 | 5 | 20.1 | 76.8 | 0.504 | 0.485 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov9c | 640x640 | 80 | 40.3 | 24.8 | 74.6 | 26.7 | 5 | 25.3 | 102.7 | 0.530 | 0.515 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov9e | 640x640 | 80 | 119.5 | 8.4 | 232.5 | 8.6 | 5 | 57.4 | 189.5 | 0.555 | 0.530 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov10n | 640x640 | 80 | 8.7 | 114.2 | 11.6 | 171.9 | 5 | 2.3 | 6.7 | 0.387 | 0.357 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov10s | 640x640 | 80 | 14.9 | 67.1 | 23.8 | 83.7 | 5 | 7.2 | 21.6 | 0.469 | 0.444 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov10m | 640x640 | 80 | 29.4 | 34.0 | 52.6 | 37.9 | 5 | 15.4 | 59.1 | 0.510 | 0.482 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov10b | 640x640 | 80 | 40.0 | 25.0 | 74.2 | 26.9 | 5 | 19.1 | 92.0 | 0.525 | 0.504 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov10l | 640x640 | 80 | 49.8 | 20.1 | 93.6 | 21.3 | 5 | 24.4 | 120.3 | 0.540 | 0.517 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov10x | 640x640 | 80 | 68.9 | 14.5 | 131.5 | 15.2 | 5 | 29.5 | 160.4 | 0.541 | 0.522 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo11n | 640x640 | 80 | 8.2 | 121.6 | 10.5 | 188.9 | 5 | 2.6 | 6.5 | 0.323 | 0.308 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo11s | 640x640 | 80 | 15.7 | 63.4 | 25.6 | 77.7 | 5 | 9.4 | 21.5 | 0.394 | 0.380 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo11m | 640x640 | 80 | 34.5 | 29.0 | 63.0 | 31.7 | 5 | 20.1 | 68.0 | 0.437 | 0.422 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo11l | 640x640 | 80 | 45.0 | 22.2 | 84.0 | 23.7 | 5 | 25.3 | 86.9 | 0.452 | 0.432 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo11x | 640x640 | 80 | 95.6 | 10.5 | 184.8 | 10.8 | 5 | 56.9 | 194.9 | 0.466 | 0.446 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo12n | 640x640 | 80 | 39.4 | 25.3 | 72.7 | 27.4 | 5 | 2.6 | 6.5 | 0.410 | 0.383 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo12s | 640x640 | 80 | 63.4 | 15.8 | 120.6 | 16.5 | 5 | 9.3 | 21.4 | 0.487 | 0.465 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo12m | 640x640 | 80 | 102.3 | 9.8 | 198.1 | 10.1 | 5 | 20.2 | 67.5 | 0.533 | 0.513 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo12l | 640x640 | 80 | 181.6 | 5.5 | 356.4 | 5.6 | 5 | 26.4 | 88.9 | 0.545 | 0.523 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolo12x | 640x640 | 80 | 311.9 | 3.2 | 616.3 | 3.2 | 5 | 59.1 | 199.0 | 0.557 | 0.532 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo) |
| yolov13n | 640x640 | 80 | 44.6 | 22.4 | 83.1 | 24.0 | 5 | 2.5 | 6.4 | 0.409 | 0.385 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5) |
| yolov13s | 640x640 | 80 | 63.6 | 15.7 | 120.7 | 16.5 | 5 | 9.0 | 20.8 | 0.485 | 0.458 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5) |
| yolov13l | 640x640 | 80 | 171.6 | 5.8 | 336.7 | 5.9 | 5 | 27.6 | 88.4 | 0.538 | 0.510 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5) |
| yolov13x | 640x640 | 80 | 308.4 | 3.2 | 609.2 | 3.3 | 5 | 64.0 | 199.2 | 0.551 | 0.526 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5) |
| yolo26n_detect | 640x640 | 80 | 11.6 | 86.3 | 19.1 | 104.3 | - | - | - | 0.319 | 0.284 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo26) |
| yolo26s_detect | 640x640 | 80 | 20.9 | 47.7 | 37.8 | 52.8 | - | - | - | 0.395 | 0.357 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo26) |
| yolo26m_detect | 640x640 | 80 | 40.1 | 24.8 | 76.1 | 26.1 | - | - | - | 0.442 | 0.413 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo26) |
| yolo26l_detect | 640x640 | 80 | 51.1 | 19.5 | 98.0 | 20.3 | - | - | - | 0.456 | 0.431 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo26) |
| yolo26x_detect | 640x640 | 80 | 103.3 | 9.6 | 202.0 | 9.8 | - | - | - | 0.484 | 0.438 | [GitHub](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/ultralytics_yolo26) |
