import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBasket, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export function GioHangPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();
  const [paid, setPaid] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setPaid(true);
  };

  if (paid) {
    return (
      <div>
        <section className="bg-card py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-6xl text-center space-y-3">
            <h1 className="font-display text-4xl font-bold text-foreground">
              Thanh toán thành công
            </h1>
          </div>
        </section>
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 max-w-lg">
            <div
              className="card-base text-center space-y-5 py-12"
              data-ocid="checkout-success"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <ShoppingBasket className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Cảm ơn bạn đã mua hàng!
              </h2>
              <p className="font-body text-muted-foreground">
                Chúng tôi sẽ xử lý đơn hàng và liên hệ với bạn sớm nhất.
              </p>
              <button
                type="button"
                onClick={() => setPaid(false)}
                className="btn-secondary"
                data-ocid="checkout-continue"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-3">
          <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
            Giỏ hàng
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground">
            Giỏ hàng của bạn{totalItems > 0 && ` (${totalItems})`}
          </h1>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {items.length === 0 ? (
            <div
              className="card-base text-center space-y-5 py-16"
              data-ocid="cart-empty"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                <ShoppingBasket className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Giỏ hàng đang trống
              </h2>
              <p className="font-body text-muted-foreground">
                Hãy thêm một vài sản phẩm yêu thích của bạn nhé!
              </p>
              <Link
                to="/san-pham"
                className="btn-primary inline-block"
                data-ocid="cart-shop-cta"
              >
                Xem sản phẩm
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart Table */}
              <div className="lg:col-span-2">
                <table className="w-full" data-ocid="cart-table">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left pb-3 font-display text-xs text-muted-foreground uppercase tracking-wide w-1/2">
                        Tên sản phẩm
                      </th>
                      <th className="text-center pb-3 font-display text-xs text-muted-foreground uppercase tracking-wide">
                        Số lượng
                      </th>
                      <th className="text-right pb-3 font-display text-xs text-muted-foreground uppercase tracking-wide">
                        Giá
                      </th>
                      <th className="pb-3 w-10" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {items.map((item) => (
                      <tr
                        key={item.id}
                        className="group"
                        data-ocid={`cart-item-${item.id}`}
                      >
                        <td className="py-4 pr-4 min-w-0">
                          <p className="font-display font-semibold text-foreground truncate">
                            {item.name}
                          </p>
                          <p className="font-body text-sm text-muted-foreground">
                            {formatPrice(item.price)} / cái
                          </p>
                        </td>

                        <td className="py-4 px-2">
                          <div className="flex items-center gap-2 justify-center">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 rounded-lg border border-input flex items-center justify-center hover:bg-muted transition-smooth"
                              aria-label="Giảm"
                              data-ocid={`cart-decrease-${item.id}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center font-display font-semibold text-foreground text-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded-lg border border-input flex items-center justify-center hover:bg-muted transition-smooth"
                              aria-label="Tăng"
                              data-ocid={`cart-increase-${item.id}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>

                        <td className="py-4 pl-2 text-right">
                          <span className="font-display font-bold text-primary">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </td>

                        <td className="py-4 pl-2">
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
                              aria-label="Xóa"
                              data-ocid={`cart-remove-${item.id}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div
                  className="card-base space-y-4 sticky top-24"
                  data-ocid="cart-summary"
                >
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Tóm tắt đơn hàng
                  </h2>

                  <div className="space-y-2 border-b border-border pb-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start gap-2"
                      >
                        <span className="font-body text-sm text-muted-foreground flex-1 min-w-0 truncate">
                          {item.name} ×{item.quantity}
                        </span>
                        <span className="font-body text-sm text-foreground shrink-0">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-display font-semibold text-foreground">
                      Tổng cộng
                    </span>
                    <span className="font-display font-bold text-primary text-xl">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="btn-primary w-full"
                    data-ocid="cart-checkout"
                  >
                    Thanh toán
                  </button>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="w-full text-center font-body text-xs text-muted-foreground hover:text-destructive transition-colors duration-200 pt-1"
                    data-ocid="cart-clear"
                  >
                    Xóa toàn bộ giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
