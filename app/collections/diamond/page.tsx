"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const id = params.id; // 取得網址上的系列 ID (例如 diamond)

  // 模擬產品資料（以後可以放進資料庫）
  const products = [
    { id: 'p1', name: "18K 白金六爪鑽戒", price: "NT$ 88,000", img: "/diamond-ring1.webp" },
    { id: 'p2', name: "梨形切割典藏鑽戒", price: "NT$ 125,000", img: "/diamond-ring2.webp" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8 font-serif">
      <Link href="/collections" className="text-[10px] text-stone-400 uppercase tracking-widest">← Back to Collections</Link>
      
      <h1 className="text-3xl text-center my-12 uppercase tracking-widest">{id} 系列商品</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map(p => (
          <div key={p.id} className="group">
             <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img src={p.img} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
             </div>
             <h4 className="text-sm">{p.name}</h4>
             <p className="text-xs text-stone-500 mt-2 font-sans">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
