import Home from "./pages/user/Home";
import About from "./pages/user/About";
import ListMovie from "./pages/user/ListMovie";
import Detail from "./pages/user/Detail";
import Seat from './pages/user/Seat';
import DangKy from "./pages/user/DangKy";
import DangNhap from "./pages/user/DangNhap";
import Material from "./pages/user/Material";
import Account from './pages/user/Account';

import AdminQuanLyLichChieu from "./pages/admin/AdminQuanLyLichChieu";
import AdminQLND from "./pages/admin/AdminQLND";

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
    path: "/seat/:id",
    exact: false,
    component: Seat
  },
  {
    path: "/material",
    exact: false,
    component: Material
  },
  {
    path: "/account",
    exact: false,
    component: Account
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
    path: "/admin/admin-quan-ly-lich-chieu",
    exact: false,
    component: AdminQuanLyLichChieu
  },
  {
    path: "/admin/admin-quan-ly-nguoi-dung",
    exact: false,
    component: AdminQLND
  }
];

export { routesHome, routesAdmin };
