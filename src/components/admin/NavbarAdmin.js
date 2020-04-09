import React, { Component } from "react";
import { render } from "react-dom";
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
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
          
          <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
            <i class="glyphicon glyphicon-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#homeSubmenu">
              <i className="fa fa-home" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-briefcase" />
              About
            </a>
            <a href="#pageSubmenu">
              <i className="fa fa-files-o" />
              Pages
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-link" />
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-paperclip" />
              FAQ
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-paper-plane" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
