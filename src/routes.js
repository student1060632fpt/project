import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import Detail from "./pages/home/Detail";
import DangKy from "./pages/home/DangKy";
import DangNhap from "./pages/home/DangNhap";

import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";
import Material from "./pages/home/Material";
import AdminQuanLyLichChieu from "./pages/admin/AdminQuanLyLichChieu";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  },
  {
    path: "/about",
    exact: false,
    component: About
  },
  {
    path: "/list-movie",
    exact: false,
    component: ListMovie
  },
  {
    path: "/detail/:id",
    exact: false,
    component: Detail
  },
  {
    path: "/material",
    exact: false,
    component: Material
  },
  {
    path: "/dang-ky",
    exact: false,
    component: DangKy
  },
  {
    path: "/dang-nhap",
    exact: false,
    component: DangNhap
  }
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "/admin/them-nguoi-dung",
    exact: false,
    component: ThemNguoiDung
  },
  {
    path: "/admin/admin-quan-ly-lich-chieu",
    exact: false,
    component: AdminQuanLyLichChieu
  }
];

export { routesHome, routesAdmin };
