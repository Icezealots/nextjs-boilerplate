"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState('8');

  // 模擬單一商品資料 (之後這部分會根據 productId 從資料庫抓取)
  const product = {
    name: "經典六爪鑽戒 18K 白金",
    price: "NT$ 128,000",
    description: "這款經典的六爪鑲嵌設計，能讓光線從各個角度進入鑽石，極致釋放鑽石的璀璨光芒。簡潔的線條演繹出永恆的優雅，是求婚與紀念的最佳選擇。",
    material: "18K White Gold",
    carat: "0.50 ct",
    color: "D",
    clarity: "VS1",
    images: ["/diamond-ring1.webp", "/diamond-ring2.webp"] // 這裡可以用你上傳的圖
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-serif">
      {/* 導航 */}
      <nav className="p-8">
        <Link href={`/collections/${params.id}`} className="text-[10px] tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors uppercase">
          ← Back to Collection
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* 左側：大圖展示 */}
          <div className="lg:w-3/5 space-y-4">
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-contain p-12"
              />
            </div>
            {/* 次要圖清單 */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-white cursor-pointer border border-transparent hover:border-stone-300">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* 右側：資訊與購買 */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <h1 className="text-3xl font-light tracking-widest mb-4 uppercase">{product.name}</h1>
            <p className="text-xl font-sans mb-8 text-stone-600">{product.price}</p>
            
            <div className="space-y-6 mb-12">
              <p className="text-sm leading-relaxed text-stone-500 font-sans italic">
                {product.description}
              </p>
              
              {/* 規格表 */}
              <div className="border-t border-b border-stone-200 py-6">
                <h3 className="text-xs uppercase tracking-widest mb-4">產品規格 Specifications</h3>
                <dl className="grid grid-cols-2 gap-y-3 text-[11px] font-sans uppercase tracking-wider">
                  <dt className="text-stone-400">金屬材質</dt>
                  <dd className="text-right">{product.material}</dd>
                  <dt className="text-stone-400">鑽石重</dt>
                  <dd className="text-right">{product.carat}</dd>
                  <dt className="text-stone-400">顏色等級</dt>
                  <dd className="text-right">{product.color}</dd>
                  <dt className="text-stone-400">淨度等級</dt>
                  <dd className="text-right">{product.clarity}</dd>
                </dl>
              </div>

              {/* 尺寸選擇 */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-3">選擇戒指尺寸 (HK SIZE)</label>
                <div className="flex gap-2">
                  {['8', '10', '12', '14'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 text-xs border ${selectedSize === size ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 hover:border-stone-400'} transition-all`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 行動按鈕 */}
            <div className="space-y-3">
              <button className="w-full bg-stone-900 text-white py-5 text-xs tracking-[0.3em] uppercase hover:bg-stone-800 transition-colors">
                加入購物車
              </button>
              <button className="w-full border border-stone-900 text-stone-900 py-5 text-xs tracking-[0.3em] uppercase hover:bg-stone-50 transition-colors">
                預約鑑賞 Appointment
              </button>
            </div>
            
            <p className="text-[10px] text-center mt-6 text-stone-400 tracking-widest">
              全台免費運送及 30 天退換貨保證
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
