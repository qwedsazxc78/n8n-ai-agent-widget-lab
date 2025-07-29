import './App.css'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';


function App() {

  useEffect(() => {
      createChat({
        webhookUrl: 'https://n8n-alex.zeabur.app/webhook/992455f5-869d-4634-b382-4ad1ceeddb93/chat',
        target: '#n8n-chat',
        defaultLanguage: 'zh',
        chatSessionKey: 'sessionId',
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
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-center p-8 space-y-10">
      {/* Hero Section */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">n8n 自動化工作流平台</h1>
          <p className="text-lg text-gray-600">
            在數分鐘內建立無程式碼/低程式碼自動化流程，並透過 AI Agent 提升效率！
          </p>
          <a
            href="#n8n-chat"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            開始體驗
          </a>
        </header>

        {/* Chat Widget */}
        <section
          id="n8n-chat"
          className="h-80 w-full max-w-2xl border rounded-lg flex items-center justify-center text-gray-400 bg-white shadow"
        >
          Loading chat…
        </section>
    </div>
    </>
  )
}

export default App
