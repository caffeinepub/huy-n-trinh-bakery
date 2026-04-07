import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, formatPrice } from "../data/products";

interface OrderForm {
  hoTen: string;
  soDienThoai: string;
  sanPham: string;
  soLuong: string;
  ghiChu: string;
}

export function DatHangPage() {
  const { addItem } = useCart();
  const [form, setForm] = useState<OrderForm>({
    hoTen: "",
    soDienThoai: "",
    sanPham: "",
    soLuong: "1",
    ghiChu: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<OrderForm>>({});

  const validate = (): boolean => {
    const newErrors: Partial<OrderForm> = {};
    if (!form.hoTen.trim()) newErrors.hoTen = "Vui lòng nhập họ và tên";
    if (!form.soDienThoai.trim())
      newErrors.soDienThoai = "Vui lòng nhập số điện thoại";
    if (!form.sanPham) newErrors.sanPham = "Vui lòng chọn sản phẩm";
    if (!form.soLuong || Number(form.soLuong) < 1)
      newErrors.soLuong = "Số lượng tối thiểu là 1";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof OrderForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const product = PRODUCTS.find((p) => p.id === form.sanPham);
    if (product) {
      const qty = Number(form.soLuong);
      for (let i = 0; i < qty; i++) {
        addItem({ id: product.id, name: product.name, price: product.price });
      }
    }
    setSubmitted(true);
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === form.sanPham);

  return (
    <div>
      {/* Header */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-3">
          <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
            Đặt hàng
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground">
            Đặt hàng online
          </h1>
          <p className="font-body text-muted-foreground">
            Đặt trước — nhận ngay tại cửa hàng
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-lg">
          {submitted ? (
            <div
              className="card-base text-center space-y-4 py-12"
              data-ocid="order-success"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Cảm ơn bạn đã đặt hàng!
              </h2>
              <p className="font-body text-muted-foreground">
                Chúng tôi sẽ liên hệ xác nhận đơn hàng trong vòng 30 phút.
              </p>
              {selectedProduct && (
                <div className="bg-muted/40 rounded-xl p-4 text-left space-y-1">
                  <p className="font-body text-sm text-muted-foreground">
                    Sản phẩm đã đặt:
                  </p>
                  <p className="font-display font-semibold text-foreground">
                    {selectedProduct.name}
                  </p>
                  <p className="font-body text-sm text-primary">
                    {form.soLuong} × {formatPrice(selectedProduct.price)}
                  </p>
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    hoTen: "",
                    soDienThoai: "",
                    sanPham: "",
                    soLuong: "1",
                    ghiChu: "",
                  });
                }}
                className="btn-secondary"
                data-ocid="order-reset"
              >
                Đặt thêm
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card-base space-y-5"
              data-ocid="order-form"
              noValidate
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                Thông tin đặt hàng
              </h2>

              <div className="space-y-1">
                <label
                  htmlFor="hoTen"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Họ và tên <span className="text-destructive">*</span>
                </label>
                <input
                  id="hoTen"
                  type="text"
                  value={form.hoTen}
                  onChange={(e) => handleChange("hoTen", e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring ${errors.hoTen ? "border-destructive" : "border-input"}`}
                  data-ocid="order-name"
                />
                {errors.hoTen && (
                  <p className="text-xs text-destructive font-body">
                    {errors.hoTen}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="soDienThoai"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Số điện thoại <span className="text-destructive">*</span>
                </label>
                <input
                  id="soDienThoai"
                  type="tel"
                  value={form.soDienThoai}
                  onChange={(e) => handleChange("soDienThoai", e.target.value)}
                  placeholder="0905 123 456"
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring ${errors.soDienThoai ? "border-destructive" : "border-input"}`}
                  data-ocid="order-phone"
                />
                {errors.soDienThoai && (
                  <p className="text-xs text-destructive font-body">
                    {errors.soDienThoai}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="sanPham"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Chọn sản phẩm <span className="text-destructive">*</span>
                </label>
                <select
                  id="sanPham"
                  value={form.sanPham}
                  onChange={(e) => handleChange("sanPham", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer ${errors.sanPham ? "border-destructive" : "border-input"}`}
                  data-ocid="order-product"
                >
                  <option value="">-- Chọn sản phẩm --</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {formatPrice(p.price)}
                    </option>
                  ))}
                </select>
                {errors.sanPham && (
                  <p className="text-xs text-destructive font-body">
                    {errors.sanPham}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="soLuong"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Số lượng <span className="text-destructive">*</span>
                </label>
                <input
                  id="soLuong"
                  type="number"
                  min={1}
                  max={50}
                  value={form.soLuong}
                  onChange={(e) => handleChange("soLuong", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring ${errors.soLuong ? "border-destructive" : "border-input"}`}
                  data-ocid="order-quantity"
                />
                {errors.soLuong && (
                  <p className="text-xs text-destructive font-body">
                    {errors.soLuong}
                  </p>
                )}
              </div>

              {selectedProduct && (
                <div className="bg-muted/40 rounded-xl p-3 flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">
                    Tạm tính:
                  </span>
                  <span className="font-display font-bold text-primary">
                    {formatPrice(
                      selectedProduct.price * (Number(form.soLuong) || 0),
                    )}
                  </span>
                </div>
              )}

              <div className="space-y-1">
                <label
                  htmlFor="ghiChu"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Ghi chú
                </label>
                <textarea
                  id="ghiChu"
                  rows={3}
                  value={form.ghiChu}
                  onChange={(e) => handleChange("ghiChu", e.target.value)}
                  placeholder="Giao lúc nào, ghi tên trên bánh, v.v."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  data-ocid="order-note"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                data-ocid="order-submit"
              >
                Đặt hàng
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
