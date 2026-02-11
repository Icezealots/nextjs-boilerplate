"use client";

import React from 'react';
import Link from 'next/link';

export default function CollectionsPage() {
  // PM 技術筆記：在這裡管理你的所有圖片，之後想增加只要複製一行即可
  const jewelryItems = [
    {
      id: 1,
      title: "經典鑽石系列",
      desc: "純淨無暇的永恆象徵",
      image: "/diamond-ring.webp", // 已上傳的圖片 1
    },
    {
      id: 2,
      title: "極致奢華系列",
      desc: "演繹永恆的璀璨時刻",
      image: "/diamond-ring2.webp", // 已上傳的圖片 2
    },
    {
      id: 3,
      title: "珍珠美學系列",
      desc: "優雅溫潤的海中瑰寶",
      image: "/diamond-ring3.webp", // 暫時留空，之後上傳後填入如 "/pearl.webp"
    },
    {
      id: 4,
      title: "有色寶石系列",
      desc: "繽紛璀璨的自然色彩",
      image: "/diamond-ring4.webp", // 暫時留空
    },
  ];

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
        <p className="text-stone-500 font-sans font-light tracking-widest text-xs uppercase">
          探索 Right 珠寶的卓越工藝與永恆美學
        </p>
      </header>

      {/* 珠寶展示清單 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {jewelryItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            {/* 圖片容器 */}
            <div className="aspect-[3/4] bg-stone-200 mb-6 overflow-hidden relative flex items-center justify-center">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                // 如果沒圖片時顯示的文字佔位
                <span className="text-stone-400 italic text-sm">Image Coming Soon</span>
              )}
            </div>
            
            {/* 文字說明 */}
            <div className="text-center">
              <h3 className="text-lg tracking-[0.2em] mb-2 uppercase">{item.title}</h3>
              <p className="text-[10px] text-stone-500 font-sans tracking-widest leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-32 pb-10 text-center">
        <div className="text-[10px] text-stone-300 tracking-[0.5em] uppercase">RIGHT Jewelry Boutique</div>
      </footer>
    </div>
  );
}
