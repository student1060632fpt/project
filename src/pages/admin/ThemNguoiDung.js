import React, { Component } from "react";
import * as action from "./../../redux/action";
import { connect } from "react-redux";

class ThemNguoiDung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: ""
    };
  }

  handleOnChane = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <div>
        <h3>ThemNguoiDung</h3>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Thêm người dùng</h3>
          <div className="form-group">
            <span>Tài khoản</span>
            <input
              className="form-control"
              name="taiKhoan"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <span>Mật khẩu</span>
            <input
              className="form-control"
              name="matKhau"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <span>Họ tên</span>
            <input
              className="form-control"
              name="hoTen"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <span>Email</span>
            <input
              className="form-control"
              name="email"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <span>Số điện thoại</span>
            <input
              className="form-control"
              name="soDt"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <span>Mã nhóm</span>
            <input
              className="form-control"
              name="maNhom"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <span>Mã loại người dùng</span>
            <input
              className="form-control"
              name="maLoaiNguoiDung"
              onChange={this.handleOnChane}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Thêm người dùng
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => {
      dispatch(action.actThemNguoiDungAPI(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(ThemNguoiDung);
