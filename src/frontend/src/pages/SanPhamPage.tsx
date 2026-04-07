import { Link } from "@tanstack/react-router";
import { Check, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  CATEGORY_LABELS,
  PRODUCTS,
  type Product,
  formatPrice,
} from "../data/products";

type FilterCategory = "all" | Product["category"];

export function SanPhamPage() {
  const { addItem } = useCart();
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [added, setAdded] = useState<string | null>(null);

  const filtered =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  const handleAdd = (product: Product) => {
    addItem({ id: product.id, name: product.name, price: product.price });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  const filters: { value: FilterCategory; label: string }[] = [
    { value: "all", label: "Tất cả" },
    { value: "banh", label: "Bánh Ngọt" },
    { value: "ca-phe", label: "Cà Phê" },
    { value: "trang-mieng", label: "Tráng Miệng" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-3">
          <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
            Menu
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground">
            Sản phẩm của chúng tôi
          </h1>
          <p className="font-body text-muted-foreground">
            Tất cả được chế biến tươi mỗi ngày
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background py-8 border-b border-border sticky top-[64px] md:top-[80px] z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="flex flex-wrap gap-2 justify-center"
            data-ocid="product-filters"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-lg font-body text-sm transition-smooth ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
                data-ocid={`filter-${f.value}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-muted/20 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="card-base p-0 overflow-hidden group"
                data-ocid={`product-${product.id}`}
              >
                <div className="h-48 md:h-56 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-xs font-body text-accent font-semibold uppercase tracking-wide">
                      {CATEGORY_LABELS[product.category]}
                    </span>
                    <h3 className="font-display font-semibold text-foreground mt-1 leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-smooth ${
                        added === product.id
                          ? "bg-accent/30 text-foreground"
                          : "bg-accent/20 text-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                      data-ocid={`add-to-cart-${product.id}`}
                    >
                      {added === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Đã thêm
                        </>
                      ) : (
                        <>
                          <ShoppingBasket className="w-3.5 h-3.5" /> Thêm vào
                          giỏ
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-3">
            <p className="font-body text-muted-foreground text-sm">
              Muốn đặt số lượng lớn hoặc theo yêu cầu?
            </p>
            <Link
              to="/dat-hang"
              className="btn-primary inline-block"
              data-ocid="sanpham-order-cta"
            >
              Đặt hàng đặc biệt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
