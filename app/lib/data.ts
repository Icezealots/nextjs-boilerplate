// app/lib/data.ts

// 1. 系列分類資料
export const categoryData = {
  "diamond": {
    id: "diamond",
    title: "經典鑽石系列",
    description: "探索工藝之美。",
    productSlugs: ["classic-ring", "halo-ring"] // 關聯到產品
  },
  "pearl": {
    id: "pearl",
    title: "優雅珍珠系列",
    description: "溫潤的海中瑰寶。",
    productSlugs: ["pearl-necklace"]
  }
};

// 2. 詳細產品資料
export const allProducts = {
  "classic-ring": {
    slug: "classic-ring",
    name: "18K 白金六爪鑽戒",
    price: "NT$ 88,000",
    material: "18K White Gold",
    carat: "0.50ct",
    images: ["/diamond-ring1.webp"]
  },
  "pearl-necklace": {
    slug: "pearl-necklace",
    name: "大溪地黑珍珠項鍊",
    price: "NT$ 45,000",
    material: "18K Gold",
    carat: "N/A",
    images: ["/pearl-1.webp"]
  }
};
