import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../redux/action";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  handleOnChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.loginAdmin(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <h3>Admin</h3>
        <div className="container">
          <div className="col-sm-6 mx-auto">
            <form onSubmit={this.handleLogin}>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleOnChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAdmin: (user, history) => {
      dispatch(action.actLoginAdmin(user, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(Admin);
