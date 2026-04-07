import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="bg-card border-t border-border mt-auto"
      data-ocid="footer"
    >
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-bold text-foreground">
              Huyền Trinh
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Nơi mỗi chiếc bánh là một câu chuyện và mỗi tách cà phê là một
              khoảnh khắc đáng nhớ.
            </p>
            <p className="font-body text-xs text-muted-foreground italic">
              Coffee &amp; Bake — Nha Trang
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-widest">
              Khám phá
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/gioi-thieu", label: "Giới thiệu" },
                { to: "/san-pham", label: "Sản phẩm" },
                { to: "/dat-hang", label: "Đặt hàng" },
                { to: "/gop-y", label: "Góp ý" },
                { to: "/lien-he", label: "Liên hệ" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-widest">
              Liên hệ
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span className="font-body">
                  12 Trần Phú, Lộc Thọ, Nha Trang, Khánh Hòa
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span className="font-body">0905 123 456</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span className="font-body">huyentrinh@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-muted-foreground">
            © {year} Huyền Trinh Coffee &amp; Bake. Bảo lưu mọi quyền.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Được xây dựng với ♥ bởi{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
