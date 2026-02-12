"use client";

import React from 'react';
import Link from 'next/link';

export default function CollectionsPage() {
  const jewelryItems = [
    {
      id: 1,
      slug: "diamond", // 跳轉路徑
      title: "經典鑽石系列",
      desc: "純淨無暇的永恆象徵",
      image: "/diamond-ring1.webp",
    },
    {
      id: 2,
      slug: "luxury",
      title: "極致奢華系列",
      desc: "演繹永恆的璀璨時刻",
      image: "/diamond-ring2.webp",
    },
    {
      id: 3,
      slug: "pearl",
      title: "珍珠美學系列",
      desc: "優雅溫潤的海中瑰寶",
      image: "/diamond-ring3.webp",
    },
    {
      id: 4,
      slug: "gemstone",
      title: "有色寶石系列",
      desc: "繽紛璀璨的自然色彩",
      image: "/diamond-ring4.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-serif p-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {jewelryItems.map((item) => (
          // PM 注意：這裡改用 Link 封裝，實現點擊跳轉
          <Link href={`/collections/${item.slug}`} key={item.id} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-stone-200 mb-6 overflow-hidden relative flex items-center justify-center">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <span className="text-stone-400 italic text-sm">Image Coming Soon</span>
              )}
              {/* 滑過時顯示「進入系列」的遮罩效果 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 text-[10px] tracking-[0.2em] border border-white p-2">VIEW COLLECTION</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg tracking-[0.2em] mb-2 uppercase">{item.title}</h3>
              <p className="text-[10px] text-stone-500 font-sans tracking-widest leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
