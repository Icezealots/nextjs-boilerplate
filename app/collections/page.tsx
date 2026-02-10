"use client";

import React from 'react';
import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-serif p-8">
      {/* 返回首頁的按鈕 */}
      <nav className="mb-16">
        <Link href="/" className="text-[10px] tracking-[0.3em] text-stone-400 hover:text-stone-900 transition-colors uppercase">
          ← Back to Home
        </Link>
      </nav>

      <header className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-6">全部系列</h1>
        <p className="text-stone-500 font-sans font-light tracking-widest text-xs">探索 Right 珠寶的卓越工藝與永恆美學</p>
      </header>

      {/* 這裡是你的珠寶清單，你可以之後在這裡加入更多詳細內容 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="aspect-[3/4] bg-stone-200 flex flex-col items-center justify-center p-12 group cursor-pointer">
          <div className="text-xl tracking-[0.2em] mb-4">鑽石系列</div>
          <p className="text-[10px] text-stone-500 font-sans text-center leading-relaxed">純淨無暇的永恆象徵</p>
        </div>
        <div className="aspect-[3/4] bg-stone-200 flex flex-col items-center justify-center p-12 group cursor-pointer">
          <div className="text-xl tracking-[0.2em] mb-4">珍珠系列</div>
          <p className="text-[10px] text-stone-500 font-sans text-center leading-relaxed">優雅溫潤的海中瑰寶</p>
        </div>
        <div className="aspect-[3/4] bg-stone-200 flex flex-col items-center justify-center p-12 group cursor-pointer">
          <div className="text-xl tracking-[0.2em] mb-4">有色寶石</div>
          <p className="text-[10px] text-stone-500 font-sans text-center leading-relaxed">繽紛璀璨的自然色彩</p>
        </div>
      </div>
    </div>
  );
}
