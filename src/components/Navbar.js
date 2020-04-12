import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

export default class Navbar extends Component {
  componentDidMount(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('navbar-home');
      } else {
        $('.navbar').removeClass('navbar-home');
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md  fixed-top">
        {/* Brand */}
        <NavLink
          exact
          activeClassName="active"
          className="navbar-brand"
          to="/"
        >
          <img src="./images/logo.png" alt="" /> Cinemax
        </NavLink>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/list-movie"
              >
                ListMovie
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/material"
              >
                Material
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/dang-ky"
              >
                Đăng Ký
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/dang-nhap"
              >
                Đăng nhập
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
