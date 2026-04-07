import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    lines: [
      "12 Trần Phú, Lộc Thọ, Nha Trang, Khánh Hòa",
      "45 Nguyễn Thiện Thuật, Phước Tiến, Nha Trang",
    ],
    href: null,
  },
  {
    icon: Phone,
    label: "Điện thoại",
    lines: ["0905 123 456"],
    href: "tel:+84905123456",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["huyentrinh@gmail.com"],
    href: "mailto:huyentrinh@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Zalo / WhatsApp",
    lines: ["0905 123 456"],
    href: "https://zalo.me/0905123456",
  },
];

export function LienHePage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-3">
          <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
            Kết nối
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground">
            Liên hệ với chúng tôi
          </h1>
          <p className="font-body text-muted-foreground">
            Chúng tôi luôn sẵn sàng lắng nghe bạn
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-base flex items-start gap-5"
                  data-ocid={`contact-${item.label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-display font-semibold text-foreground text-sm uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.lines.map((line) =>
                      item.href ? (
                        <a
                          key={line}
                          href={item.href}
                          className="block font-body text-foreground hover:text-primary transition-colors duration-200"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="font-body text-foreground">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="card-base text-center space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Giờ mở cửa
            </h2>
            <div className="space-y-2">
              {[
                { day: "Thứ Hai – Thứ Sáu", hours: "07:00 – 22:00" },
                { day: "Thứ Bảy – Chủ Nhật", hours: "07:30 – 22:30" },
              ].map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="font-body text-muted-foreground">
                    {row.day}
                  </span>
                  <span className="font-display font-semibold text-foreground">
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">
              * Đặc biệt: Mở cửa vào các ngày lễ, Tết theo thông báo trên
              fanpage
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
