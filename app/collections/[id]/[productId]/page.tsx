"use client";

import React, { useEffect } from 'react'; // 加入 useEffect 方便觀察
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { allProducts } from '@/app/lib/data';

export default function ProductDetailPage() {
  const params = useParams();
  
  // PM 除錯小技巧：在開發階段印出 params，看看 id 到底是不是 undefined
  useEffect(() => {
    console.log("當前網址參數 Params:", params);
  }, [params]);

  const productId = params?.productId as string;
  const categoryId = params?.id as string; // 確保與資料夾名稱 [id] 一致

  const product = allProducts[productId];

  if (!product) {
    return (
      <div className="p-20 text-center uppercase tracking-widest font-serif">
        Product Not Found
        <br />
        <Link href="/collections" className="text-xs text-stone-400 underline mt-4 block">Back to All Collections</Link>
      </div>
    );
  }

  // 💡 保險路徑：如果 categoryId 抓不到，就回大分類，不讓網址變成 /collections/undefined
  const backLink = categoryId ? `/collections/${categoryId}` : "/collections";

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-serif">
      <nav className="p-8">
        {/* 使用保險路徑 */}
        <Link href={backLink} className="text-[10px] tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors uppercase">
          ← Back to Collection
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* 左側：大圖 */}
          <div className="lg:w-1/2">
            <div className="aspect-square bg-white border border-stone-100 overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain p-12" />
            </div>
          </div>

          {/* 右側：詳細資訊 */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-light tracking-[0.2em] mb-4 uppercase">{product.name}</h1>
            <p className="text-lg font-sans text-stone-600 mb-8">{product.price}</p>
            
            <div className="space-y-8 mb-12">
              <p className="text-sm leading-relaxed text-stone-500 font-sans font-light italic">{product.desc}</p>
              
              <div className="border-t border-b border-stone-200 py-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6">Specifications / 規格細節</h3>
                <dl className="grid grid-cols-2 gap-y-4 text-[11px] font-sans uppercase tracking-widest">
                  <dt className="text-stone-400">Metal / 材質</dt>
                  <dd className="text-right">{product.material}</dd>
                  {product.carat && (
                    <>
                      <dt className="text-stone-400">Carat / 克拉</dt>
                      <dd className="text-right">{product.carat}</dd>
                    </>
                  )}
                  {product.color && (
                    <>
                      <dt className="text-stone-400">Color / 顏色</dt>
                      <dd className="text-right">{product.color}</dd>
                    </>
                  )}
                </dl>
              </div>
            </div>

            <button className="w-full bg-[#1a1a1a] text-white py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-stone-800 transition-all mb-4">
              Book an Appointment / 預約鑑賞
            </button>
            <button className="w-full border border-stone-300 py-5 text-[10px] tracking-[0.4em] uppercase hover:border-stone-800 transition-all">
              Add to Bag / 加入購物車
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
