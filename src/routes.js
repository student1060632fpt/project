import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import Detail from "./pages/home/Detail";
import HOC from "./HOC";

import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";
import HOOKS from "./HOOKS";
import Material from "./pages/home/Material";

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
    path: "/hoc",
    exact: false,
    component: HOC
  },
  {
    path: "/hooks",
    exact: false,
    component: HOOKS
  },
  {
    path: "/material",
    exact: false,
    component: Material
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
  }
];

export { routesHome, routesAdmin };
