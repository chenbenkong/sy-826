# sy-826（GARGANTUA 黑洞 · 3D 太阳系探索器）

> 基于 React + Three.js 的沉浸式 3D 太阳系探索应用，支持电影级视觉效果与交互式黑洞体验。

## 项目简介

sy-826 是一个用 React + Three.js 构建的沉浸式 3D 太阳系探索应用。除完整的太阳系行星系统外，还包含程序化太阳等离子体特效、电影级 8-pass 后期处理管线，以及可交互的 **GARGANTUA 黑洞体验**（测地线光线弯曲、吸积盘、引力透镜）。本仓库也是 solor-zipu 等衍生项目的上游基础。

## 功能特性

### 太阳系漫游

- **完整行星系统**：水星、金星、地球（含月球）、火星（含火卫一/火卫二）、木星（含四颗伽利略卫星）、土星（含环与泰坦等卫星）、天王星、海王星、冥王星
- **真实比例**：所有天体半径基于真实比例缩放（地球=10 基准，太阳上限 300）
- **行星纹理**：使用真实行星贴图（albedo / normal / specular）
- **轨道运动**：行星公转与自转，支持时间速度调节

### 太阳特效

- **等离子体着色器**：程序化日珥、耀斑、表面湍流
- **体积光晕**：基于物理的辉光效果
- **镜头光晕**：随视角变化的光斑

### 黑洞体验（GARGANTUA）

- **测地线着色器**：光线在引力场中的弯曲模拟
- **吸积盘**：炽热物质盘的发光与旋转
- **引力透镜**：背景星空的扭曲效果
- **沉浸式交互**：专用控制器与 HUD 信息面板

### 电影级后期处理（8-pass 渲染管线）

1. 场景渲染
2. Bloom 辉光
3. God Rays 体积光
4. Chromatic Aberration 色差
5. Color Grading 色阶
6. Vignette + Film Grain 暗角与胶片颗粒
7. Lens Flare 镜头光晕
8. ACES Tone Mapping 输出

### 视觉增强

- **三层星场**：不同旋转速度产生视差深度感
- **小行星带**：8000+ 程序化岩石（火星与木星之间）
- **柯伊伯带**：3000+ 冰冻天体（海王星轨道外）
- **4 颗命名小行星**：谷神星、灶神星、智神星、婚神星
- **地球大气层**：半透明蓝色光晕
- **土星环**：半透明环带系统

## 操作方式

| 操作 | 快捷键 |
|------|--------|
| 缩放 | 鼠标滚轮 |
| 旋转视角 | 左键拖拽 |
| 平移 | 右键拖拽 |
| 选中行星 | 左键点击 |
| 信息面板 | 点击行星查看 |
| 时间控制 | 面板滑块 |
| 黑洞体验 | 导航面板按钮 |

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.2 | UI 组件与状态管理 |
| Three.js | 0.160 | 3D 渲染引擎 |
| Vite | 5.0 | 构建工具 |

- 太阳/黑洞/小行星等均为程序化着色器与几何体，配合 `public/textures/` 本地贴图，无外部 API 依赖

## 目录结构

```
src/
├── App.jsx                     # 主应用组件
├── main.jsx                    # 入口文件
├── components/                 # React UI 组件
│   ├── ControlPanel.jsx        # 控制面板（时间、显示选项）
│   ├── NavigationPanel.jsx      # 导航面板（行星列表、黑洞入口）
│   ├── PlanetInfo.jsx           # 行星信息卡片
│   ├── PlanetLabels.jsx         # 行星标签
│   ├── Header.jsx               # 顶部标题
│   ├── LoadingScreen.jsx        # 加载画面
│   ├── StatusDisplay.jsx        # 状态信息
│   └── BlackHoleOverlay.jsx     # 黑洞体验覆盖层
├── data/
│   └── planetData.js           # 行星数据（真实参数）
├── styles/
│   └── index.css               # 全局样式
└── three/                      # Three.js 3D 场景
    ├── SolarSystemScene.js      # 主场景管理器
    ├── sun/
    │   └── createSun.js         # 太阳等离子体着色器
    ├── planets/
    │   └── createPlanets.js     # 行星创建（含卫星系统）
    ├── objects/
    │   ├── createAsteroidBelt.js  # 小行星带 + 柯伊伯带
    │   └── asteroidTextures.js    # 程序化岩石纹理
    ├── utils/
    │   └── createStarfield.js    # 三层星场
    ├── postprocessing/
    │   ├── createComposer.js     # 8-pass 后期处理管线
    │   └── cinematicShaders.js   # 自定义着色器
    └── blackhole/
        ├── BlackHoleExperience.js  # 黑洞场景
        └── geodesicShader.js       # 测地线着色器
```

## 本地运行

```bash
npm install     # 安装依赖（React 18 + Three.js + Vite 5）
npm run dev     # 启动开发服务器，自动打开 http://localhost:3000
npm run build   # 生产构建，输出到 dist/
npm run preview # 本地预览生产构建
```

## 在线演示

<https://chenbenkong.github.io/sy-826/>

## 说明 / 备注

- **部署结构**：分支 `main` 为源码，GitHub Pages 从 `main` 根目录部署；`vite.config.js` 中 `base: './'`（相对路径），同时兼容 Pages 子路径与本地预览。
- 行星贴图在 `public/textures/`，全部本地资源，无外部 API 依赖。
- 许可证：**MIT License**。
