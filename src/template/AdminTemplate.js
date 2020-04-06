import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import NavbarAdmin from "../components/admin/NavbarAdmin";

// Component AdminLayout
const AdminLayout = props => {
  return (
    <div className="wrapper">
      <NavbarAdmin/>
      {props.children}
    </div>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
          // Truong hop da login
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          // Chua login
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}
