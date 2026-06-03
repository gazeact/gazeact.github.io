<div align="center">

# 👀🤖 GazeAct

### A Gaze-Annotated Manipulation Dataset and Gaze-Regularized Action Policies

[![Project Page](https://img.shields.io/badge/🌐_Project_Page-gazeact.github.io-blue?style=for-the-badge)](https://gazeact.github.io/)
[![Paper](https://img.shields.io/badge/📄_Paper-Under_Review-red?style=for-the-badge)](#)
[![Dataset](https://img.shields.io/badge/📊_Dataset-Coming_Soon-orange?style=for-the-badge)](#)
[![Code](https://img.shields.io/badge/💻_Code-Coming_Soon-green?style=for-the-badge)](#)

</div>

---

## 📖 Overview

This repository hosts the project page and planned release for:

> **GazeAct: A Gaze-Annotated Manipulation Dataset and Gaze-Regularized Action Policies**

GazeAct studies how real human gaze can help vision-language-action policies learn better visual grounding for robot manipulation. The dataset is collected through a screen-based teleoperation system where operators view the robot camera feed while performing manipulation tasks, allowing gaze coordinates to align directly with the policy's visual input space.

During training, recorded gaze is converted into patch-level heatmaps and used as an auxiliary regularizer for the policy's language-conditioned visual attention. At inference time, the policy uses the standard gaze-free interface: images, language instructions, and proprioception.

## ✨ Highlights

- 👁️ **Gaze-annotated robot manipulation data:** 12,000 demonstrations across 40 manipulation tasks in five domains.
- 🎥 **Robot-view-aligned gaze:** gaze is recorded on the displayed robot observation and synchronized with observations, proprioception, and actions.
- 🔁 **Multi-view gaze supervision:** gaze is transferred across synchronized camera views to support multi-view VLA training.
- 🧠 **Training-only gaze regularization:** gaze improves attention learning during training without requiring eye tracking at deployment.
- 📈 **Policy improvements:** gaze regularization improves real-world manipulation success by up to 26.6% over a no-gaze baseline and transfers to LIBERO-Spatial.

## 🌐 Project Page

For the overview figure, supplementary material, and future updates, please visit:

<div align="center">

### 👉 [**gazeact.github.io**](https://gazeact.github.io/) 👈

</div>

## 🚀 Release Plan

We are preparing the release. The following will be made available soon:

- [ ] 📊 **Dataset** - GazeAct demonstrations and annotations
- [ ] 💻 **Code** - training and evaluation implementation
- [ ] 🤖 **Models** - checkpoints and configuration files
- [ ] 📚 **Documentation** - setup, data format, and usage instructions

## 📝 Citation

```bibtex
@inproceedings{anonymous2026gazeact,
  title  = {GazeAct: A Gaze-Annotated Manipulation Dataset and Gaze-Regularized Action Policies},
  author = {Anonymous Authors},
  year   = {2026}
}
```
