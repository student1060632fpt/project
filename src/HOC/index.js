import React, { Component } from "react";
import FormNhanVien from "./FormNhanVien";
// import FormSanPham from "./FormSanPham";
import WithModal from "./WithModal";

let FormModal = WithModal(FormNhanVien);

export default class HOC extends Component {
  render() {
    return (
      <div>
        <h3>HOC</h3>
        <FormModal />
      </div>
    );
  }
}
