// app/lib/data.ts

// 定義產品規格的類型 (為了讓開發更嚴謹)
export interface Product {
  id: string;
  slug: string;
  category: string; // 關聯系列用
  name: string;
  price: string;
  desc: string;
  material: string;
  carat?: string; // 鑽石才有克拉
  color?: string;
  clarity?: string;
  images: string[];
}

// 定義系列分類的類型
export interface Category {
  id: string;
  slug: string;
  title: string;
  desc: string;
  image: string;
  productSlugs: string[]; // 該系列下擁有的產品 slug
}

// 1. 全部產品資料庫
export const allProducts: Record<string, Product> = {
  "classic-ring": {
    id: "p1",
    slug: "classic-ring",
    category: "diamond",
    name: "18K 白金六爪鑽戒",
    price: "NT$ 88,000",
    desc: "這款經典的六爪鑲嵌設計，能讓光線從各個角度進入鑽石，極致釋放鑽石的璀璨光芒。",
    material: "18K White Gold",
    carat: "0.50 ct",
    color: "D",
    clarity: "VS1",
    images: ["/diamond-ring1.webp", "/diamond-ring2.webp"]
  },
  "halo-ring": {
    id: "p2",
    slug: "halo-ring",
    category: "diamond",
    name: "光環璀璨鑲鑽戒指",
    price: "NT$ 110,000",
    desc: "主鑽周圍鑲嵌一圈小鑽，營造出放大主鑽效果的同時，增加了整體的閃耀感。",
    material: "Platinum (鉑金)",
    carat: "0.70 ct",
    color: "E",
    clarity: "VVS2",
    images: ["/diamond-ring2.webp"]
  },
  "pearl-necklace": {
    id: "p3",
    slug: "pearl-necklace",
    category: "pearl",
    name: "大溪地黑珍珠項鍊",
    price: "NT$ 45,000",
    desc: "來自大溪地的神秘黑珍珠，泛著迷人的綠紫色光澤，襯托女性尊貴氣質。",
    material: "18K Gold",
    images: ["/diamond-ring3.webp"]
  }
};

// 2. 全部系列資料庫
export const jewelryCategories: Category[] = [
  {
    id: "c1",
    slug: "diamond",
    title: "經典鑽石系列",
    desc: "純淨無暇的永恆象徵",
    image: "/diamond-ring1.webp",
    productSlugs: ["classic-ring", "halo-ring"]
  },
  {
    id: "c2",
    slug: "luxury",
    title: "極致奢華系列",
    desc: "演繹永恆的璀璨時刻",
    image: "/diamond-ring2.webp",
    productSlugs: ["halo-ring"]
  },
  {
    id: "c3",
    slug: "pearl",
    title: "珍珠美學系列",
    desc: "優雅溫潤的海中瑰寶",
    image: "/diamond-ring3.webp",
    productSlugs: ["pearl-necklace"]
  },
  {
    id: "c4",
    slug: "gemstone",
    title: "有色寶石系列",
    desc: "繽紛璀璨的自然色彩",
    image: "/diamond-ring4.webp",
    productSlugs: [] // 暫無商品
  }
];
