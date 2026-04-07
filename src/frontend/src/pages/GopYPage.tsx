import { MessageSquare } from "lucide-react";
import { useState } from "react";

interface FormState {
  hoTen: string;
  soDienThoai: string;
  noiDung: string;
}

export function GopYPage() {
  const [form, setForm] = useState<FormState>({
    hoTen: "",
    soDienThoai: "",
    noiDung: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.hoTen.trim()) newErrors.hoTen = "Vui lòng nhập họ và tên";
    if (!form.soDienThoai.trim())
      newErrors.soDienThoai = "Vui lòng nhập số điện thoại";
    if (!form.noiDung.trim())
      newErrors.noiDung = "Vui lòng nhập nội dung góp ý";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-3">
          <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
            Phản hồi
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground">
            Góp ý của bạn
          </h1>
          <p className="font-body text-muted-foreground">
            Ý kiến của bạn giúp chúng tôi hoàn thiện hơn mỗi ngày
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-lg">
          {submitted ? (
            <div
              className="card-base text-center space-y-4 py-12"
              data-ocid="feedback-success"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Cảm ơn bạn đã gửi phản hồi!
              </h2>
              <p className="font-body text-muted-foreground">
                Chúng tôi đã nhận được ý kiến của bạn và sẽ cải thiện dịch vụ
                tốt hơn.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ hoTen: "", soDienThoai: "", noiDung: "" });
                }}
                className="btn-secondary"
                data-ocid="feedback-reset"
              >
                Gửi phản hồi khác
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card-base space-y-5"
              data-ocid="feedback-form"
              noValidate
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                Gửi góp ý
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
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.hoTen ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="feedback-name"
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
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.soDienThoai ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="feedback-phone"
                />
                {errors.soDienThoai && (
                  <p className="text-xs text-destructive font-body">
                    {errors.soDienThoai}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="noiDung"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Nội dung góp ý <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="noiDung"
                  rows={5}
                  value={form.noiDung}
                  onChange={(e) => handleChange("noiDung", e.target.value)}
                  placeholder="Chia sẻ trải nghiệm hoặc góp ý của bạn..."
                  className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                    errors.noiDung ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="feedback-content"
                />
                {errors.noiDung && (
                  <p className="text-xs text-destructive font-body">
                    {errors.noiDung}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                data-ocid="feedback-submit"
              >
                Gửi phản hồi
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
