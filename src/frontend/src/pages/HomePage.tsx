import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, formatPrice } from "../data/products";

const BRANCHES = [
  {
    name: "Chi nhánh 1 — Trần Phú",
    address: "12 Trần Phú, Lộc Thọ, Nha Trang",
  },
  {
    name: "Chi nhánh 2 — Nguyễn Thiện Thuật",
    address: "45 Nguyễn Thiện Thuật, Phước Tiến, Nha Trang",
  },
];

export function HomePage() {
  const { addItem } = useCart();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[520px]">
            {/* Image */}
            <div className="relative overflow-hidden order-first lg:order-last">
              <img
                src="/assets/generated/hero-bakery.dim_1400x700.jpg"
                alt="Bánh ngọt và cà phê Huyền Trinh"
                className="w-full h-72 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/20 lg:bg-gradient-to-r lg:from-card/10 lg:via-transparent lg:to-transparent" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-12 space-y-6">
              <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
                Nha Trang · Khánh Hòa
              </span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Khoảnh khắc ngọt ngào bắt đầu tại đây
              </h1>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md">
                Thưởng thức hương vị bánh nghệ thuật và cà phê đậm đà bản sắc
                Việt tại không gian tinh tế của Huyền Trinh.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/san-pham"
                  className="btn-primary flex items-center gap-2"
                  data-ocid="hero-cta-products"
                >
                  Xem thêm <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/dat-hang"
                  className="btn-ghost"
                  data-ocid="hero-cta-order"
                >
                  Đặt hàng ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Câu chuyện của chúng tôi
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Huyền Trinh Coffee &amp; Bake được thành lập năm 2018 tại Nha
              Trang với tình yêu thuần khiết dành cho bánh thủ công và cà phê
              chất lượng. Chúng tôi tin rằng mỗi chiếc bánh là một tác phẩm nghệ
              thuật, và mỗi tách cà phê là một trải nghiệm đáng trân trọng.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Hương vị đặc trưng
            </h2>
            <p className="font-body text-muted-foreground">
              Những món được yêu thích nhất tại Huyền Trinh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="card-base p-0 overflow-hidden group cursor-pointer"
                data-ocid={`product-card-${product.id}`}
              >
                <div className="overflow-hidden h-40 md:h-48 bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-display text-sm md:text-base font-semibold text-foreground leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-display font-bold text-primary text-sm">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                        })
                      }
                      className="text-xs px-3 py-1.5 rounded-lg bg-accent/20 text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth font-semibold"
                      data-ocid={`add-to-cart-${product.id}`}
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/san-pham"
              className="btn-secondary inline-flex items-center gap-2"
              data-ocid="homepage-all-products"
            >
              Xem tất cả sản phẩm <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Hệ thống cửa hàng
            </h2>
            <p className="font-body text-muted-foreground">
              Tìm chúng tôi tại Nha Trang
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {BRANCHES.map((branch) => (
              <div
                key={branch.name}
                className="card-base flex gap-4 items-start"
                data-ocid="branch-card"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {branch.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {branch.address}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span className="font-body">07:00 – 22:00 hàng ngày</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-5">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">
            Đặt hàng trước — nhận ưu đãi đặc biệt
          </h2>
          <p className="font-body text-primary-foreground/80">
            Liên hệ đặt bánh sinh nhật, tiệc hoặc quà tặng theo yêu cầu
          </p>
          <Link
            to="/dat-hang"
            className="inline-block px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-smooth"
            data-ocid="homepage-order-cta"
          >
            Đặt hàng ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
