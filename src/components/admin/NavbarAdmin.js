import React, { Component } from "react";

export default class NavbarAdmin extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
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
