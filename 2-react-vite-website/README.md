# n8n Chat Widget 整合 - React + Vite 版本

這是一個使用 React + Vite + TypeScript 的現代化網站範例，展示如何將 n8n Chat Widget 整合到 React 應用程式中。

## 📁 專案結構

```
2-react-vite-website/
├── n8n-chat-react-app/     # React 應用程式
│   ├── src/
│   │   ├── App.tsx         # 主要元件檔案
│   │   ├── App.css         # 應用程式樣式
│   │   ├── index.css       # 全域樣式 (含 Tailwind CSS)
│   │   └── main.tsx        # 應用程式入口點
│   ├── package.json        # 專案相依性設定
│   ├── vite.config.ts      # Vite 設定檔
│   ├── tailwind.config.js  # Tailwind CSS 設定
│   ├── postcss.config.js   # PostCSS 設定
│   └── tsconfig.json       # TypeScript 設定
├── intruction.md           # 原始說明檔案
└── README.md               # 本說明文件
```

## 🚀 快速開始

### 1. 安裝相依套件

```bash
cd n8n-chat-react-app
npm install
# 或
pnpm install
```

### 2. 安裝 Tailwind CSS 相依套件

```bash
npm install -D tailwindcss postcss autoprefixer
# 或
pnpm add -D tailwindcss postcss autoprefixer
```

### 3. 設定 n8n Webhook URL

在 `src/App.tsx` 第 9 行找到以下程式碼：

```typescript
webhookUrl: 'https://n8n-alex.zeabur.app/webhook/992455f5-869d-4634-b382-4ad1ceeddb93/chat',
```

**請將此 URL 替換為您自己的 n8n Webhook URL。**

### 4. 啟動開發伺服器

```bash
npm run dev
# 或
pnpm dev
```

開啟瀏覽器前往 `http://localhost:5173` 檢視網站。

## 🔧 整合步驟

### 步驟 1: 安裝 n8n Chat 套件

```bash
npm install @n8n/chat
# 或
pnpm add @n8n/chat
```

### 步驟 2: 在 React 元件中引入套件

```typescript
import { useEffect } from 'react'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
```

### 步驟 3: 設定 Tailwind CSS

1. **安裝 Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **建立設定檔案:**
   - `tailwind.config.js` - Tailwind 設定
   - `postcss.config.js` - PostCSS 設定

3. **更新 CSS 檔案:**
   在 `src/index.css` 加入 Tailwind 指令：
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### 步驟 4: 在 React 元件中初始化 Chat Widget

```typescript
function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'YOUR_N8N_WEBHOOK_URL', // 替換為您的 URL
      metadata: {
        name: "使用者名稱",
        email: "user@example.com",
      },
      target: '#n8n-chat',
      defaultLanguage: 'zh',
      initialMessages: [
        '嗨，一起學 AI 摟！👋',
        'Alex相談室，YT歡迎加入喔，AI一把罩啦！'
      ],
      i18n: {
        en: {
          title: 'Hi there! 👋',
          subtitle: "Start a chat. We're here to help you 24/7.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
          closeButtonTooltip: 'Close'
        },
        zh: {
          title: '您好！👋',
          subtitle: '有任何問題，隨時與我們聊聊。',
          footer: '',
          getStarted: '開始新對話',
          inputPlaceholder: '輸入您的問題…',
          closeButtonTooltip: '關閉'
        },
      },
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* 網站內容 */}
      <div id="n8n-chat"></div>
    </div>
  );
}
```

## ⚙️ 設定說明

### Chat Widget 設定選項

- `webhookUrl`: n8n Webhook URL
- `metadata`: 使用者資訊 (會傳送到 n8n 工作流)
- `target`: 聊天視窗掛載的 DOM 元素選擇器
- `defaultLanguage`: 預設語言
- `initialMessages`: 初始歡迎訊息
- `i18n`: 多語言文字設定

### Vite 設定

在 `vite.config.ts` 中已設定：

```typescript
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
```

### TypeScript 設定

專案使用 TypeScript，提供型別安全和更好的開發體驗。

## 🛠️ 開發指令

```bash
# 開發模式
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview

# 程式碼檢查
npm run lint
```

## 🎯 n8n 後端設定

### 工作流設定步驟

1. **建立新工作流**
2. **加入 Webhook 節點**
   - 選擇 "Webhook" 觸發器
   - 設定 HTTP Method 為 POST
   - 複製 Webhook URL

3. **加入 Chat Trigger 節點**
   - 連接到 Webhook 節點
   - 設定聊天處理邏輯

4. **加入 AI 模型節點**
   - OpenAI GPT
   - Anthropic Claude
   - Google Gemini
   - 或其他支援的 AI 服務

5. **加入 Respond to Webhook 節點**
   - 設定回應格式
   - 回傳 AI 生成的回答

### 資料流範例

```
Webhook → Chat Trigger → OpenAI → Respond to Webhook
```

## 🌐 部署建議

### 建置專案

```bash
npm run build
```

### 部署選項

1. **Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - 將 `dist` 資料夾拖放到 Netlify
   - 或連接 Git 倉庫自動部署

3. **GitHub Pages**
   ```bash
   npm run build
   # 將 dist 資料夾內容推送到 gh-pages 分支
   ```

4. **傳統主機**
   - 將 `dist` 資料夾內容上傳到網頁伺服器

## 🔧 疑難排解

### 常見問題

1. **Chat Widget 無法載入**
   - 檢查 `@n8n/chat` 套件是否正確安裝
   - 確認 CSS 樣式是否正確引入

2. **Webhook 無法連接**
   - 確認 n8n 實例可從外部存取
   - 檢查 Webhook URL 是否正確
   - 確保使用 HTTPS

3. **Tailwind CSS 樣式無效**
   - 檢查 `tailwind.config.js` 設定
   - 確認 PostCSS 正確設定
   - 重新啟動開發伺服器

4. **TypeScript 錯誤**
   - 檢查型別定義是否正確
   - 確認 `i18n` 物件包含所有必要欄位

## 📝 最佳實務

1. **環境變數管理**
   建議將 Webhook URL 存放在環境變數中：
   ```typescript
   webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL
   ```

2. **錯誤處理**
   加入錯誤處理邏輯，提升使用者體驗。

3. **效能優化**
   - 使用 React.lazy() 延遲載入聊天元件
   - 考慮使用 Web Workers 處理大量資料

4. **安全性**
   - 不要在前端程式碼中暴露敏感資訊
   - 在 n8n 工作流中實作適當的驗證機制

## 🔗 相關資源

- [React 官方文件](https://react.dev)
- [Vite 官方文件](https://vitejs.dev)
- [TypeScript 官方文件](https://www.typescriptlang.org)
- [Tailwind CSS 官方文件](https://tailwindcss.com)
- [n8n 官方文件](https://docs.n8n.io)
- [n8n Chat Widget 套件](https://www.npmjs.com/package/@n8n/chat)