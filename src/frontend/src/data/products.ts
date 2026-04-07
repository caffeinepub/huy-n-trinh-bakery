export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "banh" | "ca-phe" | "trang-mieng";
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "croissant-bo-phap",
    name: "Bánh Croissant Bơ Pháp",
    description:
      "Lớp vỏ giòn tan, nhân bơ thơm ngậy theo phong cách Pháp truyền thống",
    price: 35000,
    category: "banh",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
  {
    id: "ca-phe-sua-da",
    name: "Cà Phê Sữa Đá Sài Gòn",
    description: "Cà phê robusta rang đậm, pha phin truyền thống với sữa đặc",
    price: 45000,
    category: "ca-phe",
    image:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=80",
  },
  {
    id: "banh-tao-nuong",
    name: "Bánh Táo Nướng Mật Ong",
    description: "Táo tươi caramel hóa trên nền bánh shortcrust bơ mỏng giòn",
    price: 60000,
    category: "banh",
    image:
      "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600&q=80",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte Trân Châu",
    description: "Matcha Uji thượng hạng, sữa tươi và trân châu đen thủ công",
    price: 55000,
    category: "ca-phe",
    image:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80",
  },
  {
    id: "banh-pho-mai",
    name: "Bánh Phô Mai Việt Quất",
    description:
      "Cheesecake New York mịn màng, phủ topping việt quất tươi ngọt thanh",
    price: 65000,
    category: "trang-mieng",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
  },
  {
    id: "bac-xiu",
    name: "Bạc Xỉu Truyền Thống",
    description:
      "Cà phê nhẹ nhàng pha sữa đặc Ông Thọ, uống là nhớ cả tuổi thơ",
    price: 40000,
    category: "ca-phe",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("vi-VN")}đ`;
}

export const CATEGORY_LABELS: Record<Product["category"], string> = {
  banh: "Bánh Ngọt",
  "ca-phe": "Cà Phê",
  "trang-mieng": "Tráng Miệng",
};
