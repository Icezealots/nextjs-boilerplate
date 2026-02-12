"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id; // 例如：diamond

  // PM 建議：在這裡定義你的商品資料，確保 slug 是唯一的
  const products = [
    { 
      id: 'p1', 
      slug: "classic-ring", 
      name: "18K 白金六爪鑽戒", 
      price: "NT$ 88,000", 
      img: "/diamond-ring1.webp" 
    },
    { 
      id: 'p2', 
      slug: "luxury-ring", 
      name: "梨形切割典藏鑽戒", 
      price: "NT$ 125,000", 
      img: "/diamond-ring2.webp" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8 font-serif">
      <nav className="mb-12">
        <Link href="/collections" className="text-[10px] text-stone-400 uppercase tracking-widest hover:text-stone-900 transition-colors">
          ← Back to Collections
        </Link>
      </nav>
      
      <h1 className="text-3xl text-center mb-16 uppercase tracking-[0.3em] font-light">{categoryId} 系列商品</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {products.map(p => (
          /* 重點：這裡的 Link 路徑必須是 /collections/[系列名]/[商品名] */
          <Link key={p.id} href={`/collections/${categoryId}/${p.slug}`} className="group cursor-pointer">
             <div className="aspect-[3/4] bg-white mb-6 overflow-hidden relative flex items-center justify-center">
                <img 
                  src={p.img} 
                  alt={p.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110" 
                />
             </div>
             <div className="text-center">
               <h4 className="text-sm tracking-widest uppercase mb-2">{p.name}</h4>
               <p className="text-xs text-stone-500 font-sans">{p.price}</p>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
