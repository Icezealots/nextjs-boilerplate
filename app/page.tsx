import Image from "next/image";
import { ArrowRight, MessageSquare, Zap, Shield } from "lucide-react";

"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-[#1a1a1a] font-serif selection:bg-stone-200">
      {/* 頂部導覽 - 極簡精品風格 */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-sm px-8 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="text-sm tracking-[0.3em] font-light">COLLECTIONS</div>
          <div className="text-2xl tracking-[0.5em] font-bold">RIGHT</div>
          <div className="text-sm tracking-[0.3em] font-light uppercase">Boutique</div>
        </div>
      </nav>

      {/* Hero Section - 珠寶品牌形象 */}
      <main className="flex flex-col items-center justify-center px-8 py-32 text-center">
        <div className="mb-8 tracking-[0.4em] text-xs text-stone-400 uppercase">Crafting Eternity Since 2026</div>
        <h1 className="mb-10 text-5xl md:text-7xl font-light tracking-widest leading-tight">
          點亮生命的<br />
          <span className="italic">璀璨時刻</span>
        </h1>
        <p className="mb-14 max-w-xl text-stone-500 leading-relaxed font-sans font-light tracking-wide">
          Right 珠寶不僅是飾品，更是工藝與情感的傳承。<br />
          每一顆寶石都經過嚴格篩選，只為呈現最純粹的光輝。
        </p>
        <div className="flex flex-col gap-6 sm:flex-row font-sans uppercase tracking-[0.2em] text-xs">
          <button className="bg-[#1a1a1a] px-12 py-5 text-white hover:bg-stone-800 transition-all duration-500">
            預約專屬鑑賞
          </button>
          <button className="border border-stone-300 px-12 py-5 hover:bg-white transition-all duration-500">
            探索全系列
          </button>
        </div>
      </main>

      {/* 珠寶展示區 (Collections Preview) */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <JewelryCategory name="婚嫁系列" sub="Bridal Collection" color="bg-stone-100" />
            <JewelryCategory name="高級訂製" sub="High Jewelry" color="bg-stone-200" />
            <JewelryCategory name="日常美學" sub="Daily Essentials" color="bg-stone-100" />
          </div>
        </div>
      </section>

      {/* 品牌服務資訊 (Information) */}
      <section className="py-32 px-8 text-center bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto italic text-2xl leading-loose font-light">
          "珠寶是永恆的語言，我們用最精湛的工藝，記錄您人生中每一個值得紀念的篇章。"
        </div>
      </section>

      {/* 專業諮詢服務 (Service & Consulting) */}
      <section className="py-24 px-8 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-light tracking-widest mb-8 uppercase">專業諮詢服務</h2>
            <div className="space-y-8 font-sans font-light text-stone-600">
              <p>● 1對1 私人珠寶顧問預約</p>
              <p>● GIA 鑽石等級鑑定與諮詢</p>
              <p>● 舊品翻新與個性化訂製</p>
            </div>
          </div>
          <div className="aspect-[4/5] bg-stone-100 flex items-center justify-center text-stone-300 italic">
            [ 品牌形象照展示區域 ]
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="py-20 px-8 bg-[#1a1a1a] text-white text-center">
        <div className="text-xl tracking-[0.8em] mb-10">RIGHT</div>
        <div className="flex justify-center space-x-8 mb-10 text-[10px] tracking-[0.3em] text-stone-500 uppercase">
          <a href="#">Privacy</a>
          <a href="#">Stores</a>
          <a href="#">Contact</a>
        </div>
        <div className="text-[10px] text-stone-600 tracking-widest">
          © 2026 RIGHT JEWELRY. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}

function JewelryCategory({ name, sub, color }: { name: string; sub: string; color: string }) {
  return (
    <div className={`aspect-[3/4] ${color} flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative`}>
      <div className="z-10 text-center transition-transform duration-700 group-hover:scale-110">
        <div className="text-lg tracking-[0.2em] mb-2">{name}</div>
        <div className="text-[10px] tracking-[0.3em] text-stone-400 uppercase font-sans">{sub}</div>
      </div>
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
}
