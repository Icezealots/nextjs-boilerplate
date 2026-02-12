"use client";

import React from 'react';
import Link from 'next/link';
// 1. 引入剛剛建立的資料
import { jewelryCategories } from '@/app/lib/data';

export default function CollectionsPage() {
  // 2. 直接使用 jewelryCategories
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
        {jewelryCategories.map((item) => (
          <Link href={`/collections/${item.slug}`} key={item.id} className="group cursor-pointer">
            {/* ... 下方的 UI 結構保持不變 ... */}
            <div className="aspect-[3/4] bg-stone-200 mb-6 overflow-hidden relative flex items-center justify-center">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 text-[10px] tracking-[0.2em] border border-white p-2">VIEW COLLECTION</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg tracking-[0.2em] mb-2 uppercase">{item.title}</h3>
              <p className="text-[10px] text-stone-500 font-sans tracking-widest leading-relaxed">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
