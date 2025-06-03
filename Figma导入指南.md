# 🎨 Figma导入指南 - 情侣成就App

## 📁 文件清单

### 设计文档
- `UI设计规范.md` - 完整的设计系统规范
- `原型图-成就主页.svg` - 成就主页原型图
- `原型图-发现页面.svg` - 发现页面原型图

---

## 🚀 Figma导入步骤

### 第一步：创建新项目
1. 在Figma中创建新的设计文件
2. 设置画板尺寸：375 × 812 (iPhone 13)
3. 命名项目：`情侣成就App设计`

### 第二步：导入SVG原型图
1. 在Figma中选择 `File` > `Import`
2. 选择 `原型图-成就主页.svg` 和 `原型图-发现页面.svg`
3. 拖拽SVG文件到画板中

### 第三步：建立设计系统
根据 `UI设计规范.md` 创建以下样式：

#### 颜色样式 (Color Styles)
```
Primary Colors:
- Primary/Pink: #FF69B4
- Primary/Light: #FFE4E6
- Primary/Deep: #E91E63

Secondary Colors:
- White: #FFFFFF
- Light Gray: #F8F9FA
- Medium Gray: #6C757D
- Dark Gray: #343A40

Status Colors:
- Success: #28A745
- Warning: #FFC107

Rarity Colors:
- Bronze: #CD7F32
- Silver: #C0C0C0
- Gold: #FFD700
- Diamond: #B9F2FF
```

#### 文字样式 (Text Styles)
```
Heading 1: SF Pro Display, 24px, Bold, #343A40
Heading 2: SF Pro Display, 18px, Bold, #343A40
Body: SF Pro Display, 14px, Regular, #343A40
Caption: SF Pro Display, 12px, Regular, #6C757D
Button: SF Pro Display, 16px, SemiBold
```

#### 效果样式 (Effect Styles)
```
Card Shadow: 
- Type: Drop shadow
- X: 0, Y: 4, Blur: 12
- Color: #FF69B4 (15% opacity)

Button Shadow:
- Type: Drop shadow  
- X: 0, Y: 4, Blur: 12
- Color: #FF69B4 (30% opacity)
```

---

## 🧩 组件库创建

### 1. 按钮组件 (Buttons)
#### 主要按钮 (Primary Button)
- 创建矩形：宽度auto, 高度48px
- 圆角：24px
- 填充：渐变 #FF69B4 → #FF1493
- 文字：白色，16px SemiBold
- 添加阴影效果

#### 次要按钮 (Secondary Button)
- 创建矩形：宽度auto, 高度48px
- 圆角：24px
- 填充：白色
- 边框：2px, #FF69B4
- 文字：粉色，16px SemiBold

#### 图标按钮 (Icon Buttons)
- 创建圆形：48px × 48px
- 填充：根据类型设置颜色
- 图标：居中放置

### 2. 成就卡片组件 (Achievement Card)
#### 基础结构
```
Container: 164px × 120px, 圆角12px, 白色背景
Border: 2px 粉色渐变边框
Icon Area: 32px × 32px 圆形背景
Title: 12px SemiBold
Description: 10px Regular
Rarity Badge: 右上角徽章
Progress Bar: 底部进度条
```

#### 创建步骤
1. 创建主容器矩形
2. 添加渐变边框
3. 放置图标区域
4. 添加文字组件
5. 创建稀有度徽章
6. 添加进度条组件
7. 应用阴影效果
8. 创建为组件 (Component)

### 3. 导航组件 (Navigation)
#### 底部Tab栏
```
Container: 375px × 80px, 白色背景
Tab Item: 圆形图标 + 文字标签
Selected State: 粉色背景 + 白色图标
Normal State: 灰色背景 + 灰色图标
```

---

## 🎭 动画与交互

### 1. 原型制作 (Prototyping)
#### 页面切换动画
- 连接方式：On Click
- 动画：Smart Animate
- 时长：300ms
- 缓动：Ease Out

#### 卡片翻转效果
- 触发：On Click
- 动画：Smart Animate + 3D旋转
- 时长：600ms
- 缓动：Ease In Out

### 2. 微交互设计
#### 按钮点击反馈
- 添加按钮的 Pressed 状态
- 缩放：95%
- 透明度：90%

#### 卡片Hover效果
- Y位置：向上移动2px
- 阴影：增强效果

---

## 🔧 高级技巧

### 1. 自动布局 (Auto Layout)
- 对卡片网格使用自动布局
- 间距设置：16px (行), 12px (列)
- 对齐方式：顶部对齐

### 2. 变体系统 (Variants)
#### 成就卡片变体
```
Properties:
- State: Default, Progress, Completed
- Rarity: Bronze, Silver, Gold, Diamond
- Size: Small, Medium, Large
```

#### 按钮变体
```
Properties:
- Type: Primary, Secondary, Icon
- State: Default, Hover, Pressed, Disabled
- Size: Small, Medium, Large
```

### 3. 组件嵌套
- 在页面组件中嵌套卡片组件
- 使用实例交换快速更换内容
- 保持设计一致性

---

## 📱 响应式设计

### 1. 约束设置 (Constraints)
```
页面容器：左右固定到边界
卡片网格：居中对齐，左右边距16px
底部导航：固定到底部
顶部导航：固定到顶部
```

### 2. 适配不同屏幕
- iPhone SE: 320 × 568
- iPhone 13: 375 × 812  
- iPhone 13 Pro Max: 428 × 926

---

## 🎨 导出与交付

### 1. 资源导出
#### 图标资源
- 格式：SVG (矢量) + PNG (光栅)
- 分辨率：1x, 2x, 3x

#### 设计规范导出
- 使用Figma Dev Mode
- 导出CSS代码片段
- 生成设计token

### 2. 开发者交接
- 添加详细的组件注释
- 标注间距和尺寸
- 提供交互说明

---

## 📋 检查清单

### 设计一致性检查
- [ ] 所有颜色使用了样式系统
- [ ] 文字大小和字重一致
- [ ] 圆角和间距统一
- [ ] 阴影效果统一应用

### 组件库检查
- [ ] 所有组件已创建并命名
- [ ] 变体系统完整
- [ ] 组件状态齐全
- [ ] 自动布局正确设置

### 原型检查
- [ ] 页面间连接完整
- [ ] 动画效果流畅
- [ ] 交互逻辑清晰
- [ ] 状态变化合理

---

## 🛠️ 常用快捷键

```
创建组件：Ctrl/Cmd + Alt + K
创建实例：Ctrl/Cmd + D
自动布局：Shift + A
文字工具：T
矩形工具：R
圆形工具：O
导出选中：Ctrl/Cmd + Shift + E
原型模式：Ctrl/Cmd + \
```

---

## 💡 最佳实践

### 1. 命名规范
```
Pages: 01-首页, 02-发现, 03-统计
Frames: Page/Home, Page/Discovery
Components: Button/Primary, Card/Achievement
Styles: Color/Primary/Pink, Text/Heading/H1
```

### 2. 团队协作
- 使用统一的组件库
- 定期同步设计系统
- 添加清晰的文档说明
- 版本控制和历史记录

### 3. 性能优化
- 合理使用组件实例
- 避免过度嵌套
- 优化图片资源大小
- 简化复杂路径和效果 