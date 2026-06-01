---
sidebar_position: 2
---

# 目标检测

> 说明：下表由图片 OCR 自动转换，可能存在个别识别误差，请按原图校对关键数据。

| Model | 输入尺寸 | 类别数 | 单线程延迟(ms) | 单线程 FPS | 双线程延迟(ms) | 双线程 FPS | CPU延迟(ms)| 参数量(M) | FLOPs(B) |  Pytorch AP | Python AP | Github仓库 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fcos_efficientnetb0 | 512 × 512 | 80 | 3.3 | 298.0 | 6.2 | 323.0 | 9 | - | - | - | - | [github](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/fcos) |
| fcos_efficientnetb2 | 768 × 768| 80 | 14.4 | 69.5 | 28.1 | 70.9 | 16 | - | - | - | - | [github](https://github.com/D-Robotics/rdk_model_zoo/tree/rdk_x5/samples/vision/fcos) |
| fcos_efficientnetb3| 896896 | 80 | 26.1 | 382 | 51.6 | 38.7 | 20 | - | - | - | - | - |
| yolovSmu | 641x640 | 80 | 26.5 | 37.7 | 47.1 | 42.4 | - | 251 | 642 | 0.417 | 0.407 | - |
| yolovSu | 641x640 | 80 | 911 | 11.0 | 175.7 | 114 | - | 97.2 | 2464 | 0.458 | 0.443 | - |
| yolevSm_v2.0 | 640x640 | 80 | - | 45,2 | - | - | - | 21.8 | - | - | - | https:/github.com/-Rototis/_mode_zo/ee/k_5/samples/VsionAltalytcs_yolo |
| yoloovS_42.0 | 641x640 | 80 | - | 12.3 | - | - | 12 | 89.0 | - | - | - | - |
| yolovS_v7.0 | 640x640 | 80 | - | 23.3 | - | - | 12 | 46.5 | - | - | - | - |
| yolove | - | 80 | 59.4 | 16.8 | 112.7 | 17.7 | - | 0.7 | 1652 | 0.454 | 0.440 | - |
| yolevis | 64640 | - | 149 | 67.1 | 238 | 83.7 | - | 7.2 | 21.6 | 0.469 | 0.44 | https://github.con/D-Rototics/mod_z0o/tee/d_x5/sampkes/sion/talytcs_yolo |
| yolovitx | 641x640 | 80 | 689 | 14.5 | 131.5 | 152 | - | 29.5 | 160.4 | 0.541 | 0.522 | https://github.con/0-Rototis/_mode_zxo/tee/k_5/samples/VsonAtalytcs_olo |
| yolo11n | 644640 | 80 | 8.2 | 121.6 | 10.5 | 188.9 | - | 26 | 6.5 | 0.323 | 0.368 | - |
| yolo11s | 640640 | 80 | 157 | 634 | 256 | 773 | - | - | 215 | 0.354 | 0.380 | - |
| yolo | 640640 | 80 | 956 | 10.5 | 1848 | 10.8 | - | 569 | 1949 | 0.466 | 0.46 | https:/gimut.com/0-Rototics/_mode_0/tree/hx5/samples/vsonutalytcs_oo |
| yi012n | 641x640 | 80 | 39.4 | 25.3 | 72.7 | 27.4 | - | 26 | 6.5 | 0.410 | 0.383 | - |
| y012 | 640540 | 80 | 634 | 15.8 | 120.6 | 16.5 | - | 93 | 21.4 | 0.487 | 0.465 | - |
| yolo012m | 640x640 | 80 | 1023 | 98 | 196.1 | 10.1 | - | 20.2 | 67.5 | 0.503 | 0.513 | - |
| yol012 | 64I640 | 80 | 3119 | 32 | 616.3 | 3.2 | - | 591 | 199.0 | 0.557 | 0.52 | http/igithub.com/DRootics/mode/tee5/mgkes/iontalycyo |
| yolv13s | 64x640 | - | 636 | 15.7 | 120.7 | 16.5 | - | 9.0 | 208 | 0.45 | 0.458 | - |
| Yoiv3 | 640640 | - | 1716 | 5.8 | 336.7 | 5.9 | - | 276 | 88.4 | 0.538 | 0.510 | - |
| yolov13x | 641x640 | 80 | 3084 | 32 | 609.2 | 3.3 | - | 64,0 | 1992 | TSSO | 0.526 | - |
| yb26_tet | 640x640 | 80 | 20.9 | 47.7 | 37.8 | 528 | - | - | - | 0.395 | 0.357 | https:/github.com/D-Robotics/r_mode_o/teedkx5/smples/sionttalytcs_olc26 |
| 25m_eet | 648640 | 80 | 511 | 24.8 | 76.1 | 26.1 | - | - | - | 0.42 | 0.413 | - |
| yo025x_oetet | 64x640 | 80 | 103.3 | 9.6 | 22.0 | 9.8 | - | - | - | 0.484 | 0.438 | - |
