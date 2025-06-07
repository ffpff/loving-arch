# 💕 情侣成就App - Couple Achievement App

一款专为情侣设计的成就解锁应用，记录和分享你们的美好时光。

## 📱 功能特点

### 🏆 成就系统
- **双Tab切换**：已完成成就和心愿清单
- **3D翻转卡片**：支持自定义背面图片
- **双向确认机制**：需要双方确认才能解锁成就
- **进度追踪**：实时查看成就完成进度

### 🔍 发现模块
- **Tinder式交互**：左滑跳过，右滑收藏
- **智能推荐**：基于偏好和时间推荐成就
- **分类筛选**：浪漫、娱乐、旅行等多种分类

### 📊 统计分析
- **数据可视化**：成就完成趋势图、分类雷达图
- **月度报告**：个性化分析和建议
- **情侣对比**：匿名对比其他情侣数据

### 💑 情侣连接
- **快速配对**：二维码扫描或邀请码
- **实时同步**：成就状态实时更新
- **消息推送**：完成成就时通知对方

## 🛠 技术栈

- **框架**: React Native 0.72.7
- **语言**: TypeScript
- **状态管理**: Redux Toolkit
- **导航**: React Navigation v6
- **后端服务**: Firebase (Auth, Firestore, Storage)
- **UI组件**: React Native Vector Icons, React Native Reanimated

## 📦 安装与运行

### 前置要求
- Node.js >= 16
- React Native 开发环境配置完成
- iOS: Xcode 12+
- Android: Android Studio 4+

### 安装步骤

1. 克隆项目
```bash
git clone [项目地址]
cd CoupleAchievementApp
```

2. 安装依赖
```bash
npm install
# iOS需要安装Pod依赖
npm run pod-install
```

3. 运行项目
```bash
# iOS
npm run ios

# Android
npm run android
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
├── screens/            # 页面组件
│   ├── Achievement/    # 成就相关页面
│   ├── Discover/       # 发现页面
│   ├── Statistics/     # 统计页面
│   └── Auth/          # 认证相关页面
├── navigation/         # 导航配置
├── store/             # Redux状态管理
├── services/          # API服务
├── utils/             # 工具函数
├── types/             # TypeScript类型定义
├── constants/         # 常量定义
└── assets/           # 静态资源
```

## 🔧 配置说明

### Firebase配置
1. 在Firebase控制台创建项目
2. 下载配置文件
   - iOS: `GoogleService-Info.plist`
   - Android: `google-services.json`
3. 将配置文件放置到对应平台目录

### 环境变量
创建 `.env` 文件并配置以下变量：
```
API_URL=your_api_url
FIREBASE_API_KEY=your_firebase_api_key
```

## 🎨 设计规范

- **主题色**: #FF6B9D (温暖粉色)
- **辅助色**: #FEC868 (柔和橙黄)
- **字体**: 使用系统默认字体
- **图标**: Material Community Icons

## 📝 开发指南

### 添加新页面
1. 在 `src/screens` 下创建页面组件
2. 在 `src/types/index.ts` 中添加导航类型
3. 在导航器中注册新页面

### 状态管理
- 使用Redux Toolkit创建slice
- 遵循单一数据源原则
- 异步操作使用Redux Thunk

## 🤝 贡献指南

欢迎提交Pull Request或Issue！

## 📄 许可证

MIT License