"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { jewelryCategories, allProducts } from '@/app/lib/data';

export default function CategoryPage() {
  const params = useParams();
  const id = params.id as string;

  // 1. 找出目前的系列資料
  const category = jewelryCategories.find(c => c.slug === id);

  // 2. 如果找不到該系列，顯示錯誤
  if (!category) return <div className="p-20 text-center uppercase tracking-widest">Category Not Found</div>;

  // 3. 根據系列中的 productSlugs，從 allProducts 抓出完整的商品簡表
  const productsToShow = category.productSlugs.map(slug => allProducts[slug]).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-serif p-8">
      <nav className="mb-16">
        <Link href="/collections" className="text-[10px] tracking-[0.3em] text-stone-400 hover:text-stone-900 transition-colors uppercase">
          ← All Collections
        </Link>
      </nav>

      <header className="text-center mb-20">
        <h1 className="text-4xl font-light tracking-[0.4em] uppercase mb-4">{category.title}</h1>
        <p className="text-stone-500 font-sans font-light tracking-widest text-xs uppercase italic">{category.desc}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {productsToShow.map((product) => (
          <Link key={product.slug} href={`/collections/${id}/${product.slug}`} className="group">
            <div className="aspect-[3/4] bg-white mb-6 overflow-hidden relative flex items-center justify-center border border-stone-100">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] mb-2 uppercase">{product.name}</h3>
              <p className="text-[10px] text-stone-400 font-sans tracking-widest">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
