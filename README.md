# n8n AI Agent Widget 整合實驗室

這是一個示範如何將 n8n Chat Widget 整合到不同類型網站的實驗專案。提供兩種實作方式：靜態 HTML 版本和現代化 React 版本。

## 🎯 專案目標

學習如何在網站中整合 n8n Chat Widget，建立與 n8n 工作流連動的 AI 聊天機器人。透過實際範例了解前後端整合的完整流程。

## 📁 專案結構

```
n8n-ai-agent-widget-lab/
├── 1-simple-website/          # 靜態 HTML 版本
│   ├── index.html            # 主要 HTML 檔案
│   └── README.md             # 詳細說明文件
├── 2-react-vite-website/      # React + Vite 版本
│   ├── n8n-chat-react-app/   # React 應用程式
│   └── README.md             # 詳細說明文件
└── README.md                 # 本檔案
```

## 🚀 快速開始

### 選擇適合的版本

#### 1️⃣ 靜態 HTML 版本 (推薦初學者)

* **適用場景**: 簡單的靜態網站、Landing Page
* **技術需求**: 基礎 HTML/CSS/JavaScript 知識
* **優點**: 設定簡單、無需建置工具、直接用瀏覽器開啟
* **查看說明**: [1-simple-website/README.md](./1-simple-website/README.md)

#### 2️⃣ React + Vite 版本 (推薦進階開發者)

* **適用場景**: 現代化 SPA 應用程式、複雜的互動網站
* **技術需求**: React、TypeScript、Vite 知識
* **優點**: 型別安全、現代化開發體驗、易於擴展
* **查看說明**: [2-react-vite-website/README.md](./2-react-vite-website/README.md)

## 🔧 核心功能特色

### ✨ n8n Chat Widget 整合

* 📱 響應式聊天介面
* 🌐 多語言支援 (中文/英文)
* 🎨 可自訂樣式主題
* 💬 自訂歡迎訊息
* 👤 使用者資訊收集

### 🤖 AI Agent 功能

* 🧠 與 n8n 工作流無縫整合
* 🔗 支援多種 AI 模型 (OpenAI、Anthropic、Google Gemini)
* 📝 上下文記憶能力
* ⚡ 即時回應
* 🔄 自動化工作流觸發

### 🎯 實用應用場景

* 💼 客服機器人
* 📅 預約系統
* 🛒 訂單查詢
* 📊 資料收集
* 🎓 教學助手

## 🛠️ 設定 n8n 後端

### 前置需求

1. **n8n 實例**: 可使用 n8n Cloud 或自行部署
2. **Webhook URL**: 從 n8n 工作流中取得
3. **AI 服務**: OpenAI、Anthropic 或其他支援的服務

### 基本工作流設定

```
1. Webhook 觸發器 → 2. Chat Trigger → 3. AI 模型節點 → 4. Respond to Webhook
```

詳細設定步驟請參考各資料夾中的 README.md 檔案。

## 📋 學習路徑建議

### 🌟 初學者路徑

1. 先從 **靜態 HTML 版本** 開始
2. 理解 n8n Chat Widget 的基本概念
3. 設定第一個 n8n 工作流
4. 測試聊天功能

### 🚀 進階開發者路徑

1. 直接使用 **React + Vite 版本**
2. 了解 TypeScript 型別定義
3. 自訂 Chat Widget 樣式
4. 整合更複雜的 n8n 工作流

## 🎨 自訂選項

### 樣式自訂

* 🎨 Tailwind CSS 樣式系統
* 🖌️ CSS 變數自訂主題色彩
* 📱 響應式設計
* 🎭 聊天氣泡樣式

### 功能自訂

* 🗣️ 多語言介面
* 📝 自訂歡迎訊息
* 👤 使用者資訊表單
* 🔔 通知設定

### React 版本部署

```bash
# 建置專案
npm run build

# 部署到各平台
vercel         # Vercel
netlify deploy # Netlify
```

## 🔍 疑難排解

### 常見問題

1. **Chat Widget 無法載入**
   - 檢查 CDN 連線
   - 確認套件版本相容性

2. **無法連接 n8n**
   - 檢查 Webhook URL
   - 確認 CORS 設定
   - 驗證 n8n 實例可存取性

3. **樣式顯示異常**
   - 檢查 CSS 載入順序
   - 確認 Tailwind CSS 設定

### 除錯技巧

* 使用瀏覽器開發者工具
* 檢查 Network 面板
* 查看 Console 錯誤訊息

## 🔗 相關資源

### 官方文件

* [n8n 官方網站](https://n8n.io)
* [n8n 文件](https://docs.n8n.io)
* [n8n Chat Widget](https://www.npmjs.com/package/@n8n/chat)

### 社群資源

* [n8n 社群討論區](https://community.n8n.io)
* [n8n GitHub](https://github.com/n8n-io/n8n)

### 開發工具

* [React 官方文件](https://react.dev)
* [Vite 官方文件](https://vitejs.dev)
* [Tailwind CSS](https://tailwindcss.com)

## 📄 授權條款

本專案採用 MIT 授權條款。

## 👨‍💻 作者

DevOps with Alex - AI Brain Alex 相談室
