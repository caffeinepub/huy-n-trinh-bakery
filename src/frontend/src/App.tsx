import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { DatHangPage } from "./pages/DatHangPage";
import { GioHangPage } from "./pages/GioHangPage";
import { GioiThieuPage } from "./pages/GioiThieuPage";
import { GopYPage } from "./pages/GopYPage";
import { HomePage } from "./pages/HomePage";
import { LienHePage } from "./pages/LienHePage";
import { SanPhamPage } from "./pages/SanPhamPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const gioiThieuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gioi-thieu",
  component: GioiThieuPage,
});
const sanPhamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/san-pham",
  component: SanPhamPage,
});
const lienHeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lien-he",
  component: LienHePage,
});
const gopYRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gop-y",
  component: GopYPage,
});
const datHangRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dat-hang",
  component: DatHangPage,
});
const gioHangRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gio-hang",
  component: GioHangPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  gioiThieuRoute,
  sanPhamRoute,
  lienHeRoute,
  gopYRoute,
  datHangRoute,
  gioHangRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
