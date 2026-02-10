"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-[#1a1a1a] font-serif">
      {/* 導覽列 */}
      {/* 導覽列 - 修正手機版擁擠問題 */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-sm px-4 py-4 md:px-8 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-2 md:gap-0">
          {/* 手機版會隱藏或縮小的左側文字 */}
          <div className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-light text-stone-400 md:text-stone-900">
            COLLECTIONS
          </div>
          
          {/* 品牌主標題 - 在手機版置中且加大一點點 */}
          <div className="text-xl md:text-2xl tracking-[0.4em] md:tracking-[0.5em] font-bold py-1 md:py-0">
            RIGHT
          </div>
          
          {/* 右側文字 */}
          <div className="text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-light uppercase text-stone-400 md:text-stone-900">
            Boutique
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-8 py-32 text-center">
        <div className="mb-8 tracking-[0.4em] text-xs text-stone-400 uppercase">Crafting Eternity Since 2026</div>
        <h1 className="mb-10 text-5xl md:text-7xl font-light tracking-widest leading-tight">
          點亮生命的<br />
          <span className="italic text-stone-600">璀璨時刻</span>
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

      {/* 展示區塊 */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[3/4] bg-stone-100 flex flex-col items-center justify-center p-8">
              <div className="text-lg tracking-[0.2em] mb-2">婚嫁系列</div>
              <div className="text-[10px] tracking-[0.3em] text-stone-400 uppercase">Bridal Collection</div>
            </div>
            <div className="aspect-[3/4] bg-stone-200 flex flex-col items-center justify-center p-8">
              <div className="text-lg tracking-[0.2em] mb-2">高級訂製</div>
              <div className="text-[10px] tracking-[0.3em] text-stone-400 uppercase">High Jewelry</div>
            </div>
            <div className="aspect-[3/4] bg-stone-100 flex flex-col items-center justify-center p-8">
              <div className="text-lg tracking-[0.2em] mb-2">日常美學</div>
              <div className="text-[10px] tracking-[0.3em] text-stone-400 uppercase">Daily Essentials</div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務資訊 */}
      <section className="py-24 px-8 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-widest mb-12 uppercase text-stone-800">珠寶諮詢服務</h2>
          <div className="grid md:grid-cols-3 gap-12 text-sm font-sans font-light text-stone-600 tracking-wide">
            <div>
              <h3 className="font-bold text-stone-900 mb-4 uppercase tracking-widest">私人顧問</h3>
              <p>專業珠寶顧問為您提供 1 對 1 鑑賞體驗。</p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-4 uppercase tracking-widest">鑑定服務</h3>
              <p>提供 GIA 全球權威鑑定與價值評估。</p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-4 uppercase tracking-widest">翻新訂製</h3>
              <p>承襲百年工藝，賦予舊珠寶嶄新靈魂。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="py-20 px-8 bg-[#1a1a1a] text-white text-center">
        <div className="text-xl tracking-[0.8em] mb-10">RIGHT</div>
        <div className="text-[10px] text-stone-600 tracking-widest">
          © 2026 RIGHT JEWELRY. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
