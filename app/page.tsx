import Image from "next/image";
import { ArrowRight, MessageSquare, Zap, Shield } from "lucide-react"; // 記得要 npm install lucide-react

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900">
      {/* 導覽列 */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold tracking-tighter text-blue-600">RIGHT</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition">關於我們</a>
          <a href="#" className="hover:text-blue-600 transition">核心技術</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm hover:bg-slate-800 transition">
          開始體驗
        </button>
      </nav>

      {/* Hero Section - 品牌大圖區 */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 py-20 text-center">
        <div className="mb-6 flex items-center justify-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
          ✨ 2026 全新數位轉型方案
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          做正確的事。<br />
          <span className="text-blue-600">就在 Right。</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-500">
          我們專注於提供最精準的數位解決方案。透過 AI 驅動的技術，
          協助您的企業在變動的時代中，做出最「Right」的決策。
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
            立即諮詢 <ArrowRight size={20} />
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-8 py-4 font-bold text-slate-600 transition hover:bg-slate-50">
            查看案例
          </button>
        </div>
      </main>

      {/* 底部功能預覽 */}
      <section className="bg-slate-50 py-20 px-8">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <Zap className="mb-4 text-blue-600" />
            <h3 className="mb-2 font-bold">極速效能</h3>
            <p className="text-sm text-slate-500">讓品牌形象瞬時呈現，不流失任何潛在客戶。</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <Shield className="mb-4 text-blue-600" />
            <h3 className="mb-2 font-bold">安全可靠</h3>
            <p className="text-sm text-slate-500">專業加密技術，守護企業最核心的數位資產。</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <MessageSquare className="mb-4 text-blue-600" />
            <h3 className="mb-2 font-bold">AI 客服</h3>
            <p className="text-sm text-slate-500">整合您正在開發的 AI 客服，實現 24 小時自動化營運。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
