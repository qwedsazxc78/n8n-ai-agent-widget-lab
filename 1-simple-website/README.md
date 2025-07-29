# n8n Chat Widget 整合 - 靜態 HTML 版本

這是一個簡單的 HTML 靜態網站範例，展示如何將 n8n Chat Widget 整合到您的網站中。

## 📁 檔案結構

```
1-simple-website/
├── index.html          # 主要的 HTML 檔案
└── README.md           # 本說明文件
```

## 🚀 快速開始

### 1. 檢視網站

直接用瀏覽器開啟 `index.html` 即可檢視網站效果。

### 2. 設定 n8n Webhook URL

在 `index.html` 第 174 行找到以下程式碼：

```javascript
webhookUrl: 'https://n8n-alex.zeabur.app/webhook/992455f5-869d-4634-b382-4ad1ceeddb93/chat',
```

**請將此 URL 替換為您自己的 n8n Webhook URL。**

## 🔧 整合步驟

### 步驟 1: 引入 n8n Chat Widget CSS

在 HTML `<head>` 區塊中加入：

```html
<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
```

### 步驟 2: 創建聊天容器

在 HTML 中加入聊天視窗容器：

```html
<div id="n8n-chat" class="h-64 border rounded-lg flex items-center justify-center text-gray-400">
  <span>正在載入 Chat Widget…</span>
</div>
```

### 步驟 3: 引入並初始化 Chat Widget

在 HTML 底部加入初始化腳本：

```html
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

  createChat({
    webhookUrl: 'YOUR_N8N_WEBHOOK_URL', // 替換為您的 n8n Webhook URL
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
      },
      zh: {
        title: '您好！👋',
        subtitle: '有任何問題，隨時與我們聊聊。',
        footer: '',
        getStarted: '開始新對話',
        inputPlaceholder: '輸入您的問題…',
      },
    },
  });
</script>
```

## ⚙️ 自訂設定

### 語言設定

- `defaultLanguage`: 設定預設語言 (`'zh'` 或 `'en'`)
- `i18n`: 自訂各語言的文字內容

### 初始訊息

修改 `initialMessages` 陣列來設定聊天視窗的初始歡迎訊息。

### 樣式自訂

本範例使用 Tailwind CSS 進行樣式設計，您可以：

1. 修改容器的 CSS 類別來調整聊天視窗外觀
2. 透過 n8n Chat Widget 的 CSS 變數來自訂主題色彩

## 🎯 n8n 後端設定

在您的 n8n 工作流中：

1. 建立一個新的工作流
2. 加入 **Webhook** 節點作為觸發器
3. 設定 Webhook URL 並複製到前端程式碼中
4. 加入 **Chat Trigger** 節點來處理聊天訊息
5. 連接您的 AI 模型節點（如 OpenAI、Anthropic Claude 等）
6. 使用 **Respond to Webhook** 節點回傳回應

## 📝 注意事項

- 確保您的 n8n 實例可以從外部存取
- Webhook URL 必須支援 HTTPS
- 聊天記錄會根據您的 n8n 工作流設定進行處理和儲存

## 🌐 部署建議

### 本地測試
直接用瀏覽器開啟 `index.html` 即可。

### 生產環境
將檔案上傳到任何靜態網站託管服務：
- GitHub Pages
- Netlify
- Vercel
- 傳統網頁託管服務

## 🔗 相關資源

- [n8n 官方文件](https://docs.n8n.io)
- [n8n Chat Widget 文件](https://www.npmjs.com/package/@n8n/chat)
- [Tailwind CSS 文件](https://tailwindcss.com)