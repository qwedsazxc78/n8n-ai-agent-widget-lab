import { useEffect } from 'react'
import './App.css'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-alex.zeabur.app/webhook/992455f5-869d-4634-b382-4ad1ceeddb93/chat',
      metadata   : {
        name : "alexhsieh",
        email  : "ai.brain.alex@gmail.com",
      },
      target: '#n8n-chat',
      defaultLanguage: 'en',
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
          closeButtonTooltip: 'Close',
        },
        zh: {
          title: '您好！👋 ',
          subtitle: '有任何問題，隨時與我們聊聊。 Lab2',
          footer: '',
          getStarted: '開始新對話',
          inputPlaceholder: '輸入您的問題…',
          closeButtonTooltip: '關閉',
        },
      },
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-12 px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">n8n 自動化工作流平台</h1>
          <p className="text-lg text-gray-600">
            在數分鐘內建立無程式碼/低程式碼自動化流程，並透過 AI Agent 提升效率！
          </p>
          <a
            href="#ai-agent"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            立即開始
          </a>
        </div>
      </header>

      <section id="ai-agent" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">對話視窗 AI Agent</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                將 n8n 工作流串接到您的網站聊天視窗，快速建立具備上下文記憶與推理能力的 AI Agent。
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>即時與訪客對話，收集需求或引導預約流程</li>
                <li>
                  透過 Webhook 呼叫 <strong>M8n</strong> 後端，執行訂單查詢、預約確認等動作
                </li>
                <li>支援 OpenAI / Anthropic / Google Gemini 等大型語言模型</li>
                <li>可用 n8n 節點擴充自訂邏輯，快速迭代</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <div
                id="n8n-chat"
                className="h-64 border rounded-lg flex items-center justify-center text-gray-400"
              >
                <span>正在載入 Chat Widget…</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※ Chat Widget 由 <code>@n8n/chat</code> 套件掛載，並透過<br />
                <code>YOUR_PRODUCTION_WEBHOOK_URL</code> 與後端工作流互動。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="m8n-basics" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">M8n 基礎功能</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">可視化工作流設計</h3>
              <p className="text-sm text-gray-600">拖拉節點即可打造流程，支援條件分支、迴圈與子流程。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Webhook 觸發器</h3>
              <p className="text-sm text-gray-600">輕鬆建立 HTTP/REST 端點，接收事件驅動。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">排程與佇列</h3>
              <p className="text-sm text-gray-600">內建 Cron 與佇列，確保任務準時執行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">200+ 節點整合</h3>
              <p className="text-sm text-gray-600">涵蓋 Slack、Supabase、MySQL、GCP、AWS 等常用服務。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">認證管理</h3>
              <p className="text-sm text-gray-600">統一管理 API 金鑰與 OAuth 資訊，安全又方便。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">版本控制</h3>
              <p className="text-sm text-gray-600">支援 Git 匯出 / 套件化部署，輕鬆在多環境同步。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="links" className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">有用連結</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://n8n.io"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                n8n 官方網站
              </a>
            </li>
            <li>
              <a
                href="https://docs.n8n.io"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                n8n 文件
              </a>
            </li>
            <li>
              <a
                href="https://community.n8n.io"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                n8n 社群討論區
              </a>
            </li>
            <li>
              <a
                href="https://github.com/n8n-io/n8n"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                n8n GitHub
              </a>
            </li>
            <li>
              <a
                href="https://supabase.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Supabase
              </a>
              {' '}- 開源後端即服務
            </li>
            <li>
              <a
                href="https://openai.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                OpenAI
              </a>
              {' '}- LLM 提供者
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-500">
          © 2025 DevOps with Alex. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
