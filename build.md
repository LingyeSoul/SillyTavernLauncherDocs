# 如何自行打包启动器

本文档将指导你如何在本地环境中自行打包 SillyTavernLauncher。启动器是基于 Python 和 Flet 构建的 Windows 应用程序，使用  Nuitka 进行打包。

## 准备工作

在开始打包之前，请确保你的系统满足以下要求：

1. Windows 操作系统（推荐 Windows 10 或更高版本）
2. Python 3.12 已安装
3. Git 已安装
4. 网络连接正常

## 构建步骤

### 1. 获取源代码

首先，你需要获取 SillyTavern 启动器的源代码：

```bash
git clone https://github.com/LingyeSoul/SillyTavernLauncher.git
cd SillyTavernLauncher
```

### 2. 安装依赖

创建虚拟环境（可选但推荐）并安装所需的 Python 包：

```bash
# 创建虚拟环境（可选）
python -m venv venv
# Windows 上激活虚拟环境
venv\Scripts\activate

# 升级 pip 并安装依赖
python -m pip install --upgrade pip
pip install pyinstaller ruamel.yaml packaging Nuitka flet-desktop==0.28.3 aiohttp flet==0.28.3 pystray==0.19.5
```

### 3. 安装自定义 flet-cli

启动器使用了一个自定义版本的 flet-cli，需要从 GitHub 安装：

```bash
pip install git+https://github.com/LingyeSoul/flet_cli.git@main
```

验证安装是否成功：

```bash
flet --version
flet pack --help
```

### 4. 打包应用程序

使用 NuitkaBuild.bat 脚本打包应用程序，输入版本号即可

### 5. 检查打包结果

打包完成后，检查 dist 目录结构：

```
dist/
├── main.dist/           
│   ├── SillyTavernLauncher.exe
│   └── ...              # 其他依赖文件
└── ...                  
```


## 自动化构建（推荐）

项目中包含一个完整的 GitHub Actions 工作流文件 [.github/workflows/main.yml](https://github.com/LingyeSoul/SillyTavernLauncher/blob/main/.github/workflows/main.yml)，可以自动完成整个构建过程，包括：

- 版本号自动生成（使用 GitVersion）
- 依赖安装
- 应用程序打包
- ZIP 文件创建
- 构建产物上传

你可以 Fork 项目后，在 GitHub 上启用 Actions，然后触发构建。

## 故障排除

1. **打包失败**: 确保所有依赖都正确安装，特别是自定义的 flet-cli 版本。

2. **缺少图标文件**: 确保 src/assets/icon.ico 文件存在。