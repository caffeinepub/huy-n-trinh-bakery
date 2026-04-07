import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { to: "/", label: "Trang chủ" },
  { to: "/gioi-thieu", label: "Giới thiệu" },
  { to: "/san-pham", label: "Sản phẩm" },
  { to: "/lien-he", label: "Liên hệ" },
  { to: "/gop-y", label: "Góp ý" },
  { to: "/dat-hang", label: "Đặt hàng" },
  { to: "/gio-hang", label: "Giỏ hàng" },
];

export function Header() {
  const { totalItems } = useCart();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-xs"
      data-ocid="header"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none group"
            data-ocid="header-logo"
          >
            <span className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
              Huyền Trinh
            </span>
            <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              Coffee &amp; Bake
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            data-ocid="header-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                currentPath === link.to ||
                (link.to !== "/" && currentPath.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-smooth ${
                    isActive
                      ? "bg-secondary text-secondary-foreground font-semibold"
                      : "text-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/gio-hang"
              className="relative p-2 rounded-lg hover:bg-muted transition-smooth"
              aria-label="Giỏ hàng"
              data-ocid="header-cart"
            >
              <ShoppingBasket className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="header-mobile-toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav
            className="lg:hidden border-t border-border py-4 flex flex-col gap-1"
            data-ocid="header-mobile-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                currentPath === link.to ||
                (link.to !== "/" && currentPath.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg font-body text-sm transition-smooth ${
                    isActive
                      ? "bg-secondary text-secondary-foreground font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
