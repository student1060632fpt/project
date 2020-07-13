import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class NavbarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Hoa"
    }
  }
  componentDidMount() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });

    // ten admin 
    let user = JSON.parse(localStorage.getItem("userAdmin"));
    // console.log(user);
    if (user) {
      this.setState({
        user
      })
    } else {
    }
  }
  render() {
    let { user } = this.state;

    return (
      <nav id="sidebar">
        <div className="sidebar-header">
    <h3 className="mb-3">{user.hoTen}</h3>
          <strong>Nav</strong>

          <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
            <i className="glyphicon glyphicon-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
        <ul className="list-unstyled components">
          <li className="">
            <Link
              to="/admin/admin-quan-ly-lich-chieu"
              exact
              activeClassName="active"
            >
              <i className="fa fa-home" />
              Quản lý lịch chiếu
            </Link>
          </li>
          <li>
            <Link
              to="/admin/admin-quan-ly-nguoi-dung"
              exact
              activeClassName="active"
            >
              <i className="fa fa-files-o" />
              Quản lý người dùng
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
