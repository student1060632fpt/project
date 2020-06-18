import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
     super(props);
    this.state = {
      user: ""
    }
  }
  componentDidMount() {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('navbar-home');
      } else {
        $('.navbar').removeClass('navbar-home');
      }
    });
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    if (user) {
      this.setState({
        user
      })
    } else {
      this.setState({
        user: ""
      })
    }
  }

  logout = () => {
    localStorage.removeItem("user");
    this.setState({
      user: ""
    })
    // console.log(this.props);

    // this.props.history.push("/home");
  }
  render() {
    let { user } = this.state;
    return (
      <nav className="navbar navbar-expand-md fixed-top d-print">
        <div className="container">
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
            className="collapse navbar-collapse flex-row-reverse"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ">
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
                  Movie
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/list-movie"
                >
                  Cinema
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
              {user ? <>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/list-movie"
                  >
                    {user.hoTen}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="form-inline btn button-main"
                    onClick={this.logout}
                  >
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </button>
                </li>
              </> :
                <>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/dang-ky"
                    >
                      Sign up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="form-inline btn button-main"
                      to="/dang-nhap"
                    >
                      Sign in
                    </NavLink>
                  </li>
                </>
              }

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.movieReducer.user
  }
}

export default connect(mapStateToProps, null)(Navbar);