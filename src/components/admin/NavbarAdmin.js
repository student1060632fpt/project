import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class NavbarAdmin extends Component {
  componentDidMount(){
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  }
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Tên admin</h3>
          <strong>BS</strong>
          
          <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
            <i className="glyphicon glyphicon-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <Link to={`/admin/admin-quan-ly-lich-chieu`}>
              <i className="fa fa-home" />
              Quản lý lịch chiếu
            </Link>
          </li>
          <li>
            <a href="#pageSubmenu">
              <i className="fa fa-files-o" />
              Quản lý người dùng
            </a>
          </li>
          <li>
            <Link to={`/admin/them-nguoi-dung`}>
              <i className="fa fa-link" />
              Thêm người dùng
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
