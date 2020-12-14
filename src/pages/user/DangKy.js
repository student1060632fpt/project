import React, { Component } from 'react';
import * as action from './../../redux/action';
import { connect } from 'react-redux';

class DangKy extends Component {
  constructor(props) {
    // https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy
    super(props);
    this.state = {
      values: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        maLoaiNguoiDung: "KhachHang",
        maNhom: "GP07"
      },
      errors: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: ""
      },
      formValid: false,
      taiKhoanVa: false,
      matKhauVa: false,
      emailVa: false,
      soDtVa: false
    }
  }
  handleOnChange = event => {
    let { name, value } = event.target;
    this.setState(
      {
        values: {
          ...this.state.values,
          [name]: value
        }
      }
    )
  }

  handleErrors = event => {
    let { name, value } = event.target;

    let message = value === "" ? name + " is required" : "";
    let { taiKhoanVa, matKhauVa, emailVa, soDtVa } = this.state;
    switch (name) {
      case "taiKhoan": {
        taiKhoanVa = message !== "" ? false : true;
        if (value !== "" && value.length < 4) {
          message = "Account must have more than 3 letters";
          taiKhoanVa = false;
        }
        break;

      }
      case "matKhau": {
        matKhauVa = message !== "" ? false : true;

        if (value !== "" && value.length < 4) {
          message = "Password must have more than 3 letters";
          matKhauVa = false;
        }
        break;

      }
      case "email": {
        emailVa = message !== "" ? false : true;

        if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          message = "Email must correct";
          emailVa = false;
        }
        break;

      }

      case "soDt": {
        soDtVa = message !== "" ? false : true;

        if (value !== "" && value.length < 8 && value.length > 11) {
          message = "Phone must have 9 to 11 numbers";
          soDtVa = false;
        }
        break;
      }

      default:
        break;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message
      },
      taiKhoanVa,
      soDtVa,
      matKhauVa,
      emailVa
    },
      () => {
        this.handleForm()
      }
    )
  }

  handleForm = () => {
    let { taiKhoanVa, matKhauVa, emailVa, soDtVa } = this.state;
    // console.log(taiKhoanVa, matKhauVa, emailVa, soDtVa);

    if (taiKhoanVa === true && matKhauVa === true && emailVa === true && soDtVa === true) {
      this.setState({
        formValid: true
      })
    } else {
      this.setState({
        formValid: false
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state.values, this.props.history);
    // console.log(this.state.values);
  }

  render() {
    let { errors } = this.state;
    return (
      <div className="background-img-sign">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3 text-center">
                <span className="cate">welcome</span>
                <h2 className="title">to Boleto </h2>
              </div>
              <form className="account-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="taiKhoan">Account<span>*</span></label><br />
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Enter Your Account"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                    required
                  />
                  {
                    errors.taiKhoan === "" ? ("") : (<div className='alert alert-danger'>{errors.taiKhoan}</div>)
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen">Name</label><br />
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Enter Your Name"
                    onBlur={this.handleErrors}
                    onChange={this.handleOnChange}
                    id="hoTen"
                    name="hoTen"
                  />
                  {
                    errors.hoTen === "" ? ("") : (<div className='alert alert-danger'>{errors.hoTen}</div>)
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email<span>*</span></label><br />
                  <input
                    onBlur={this.handleErrors}
                    onChange={this.handleOnChange}
                    type="email"
                    className="w-100"
                    placeholder="Enter Your Email"
                    id="email"
                    name="email"
                    required
                  />
                  {
                    errors.email === "" ? ("") : (<div className='alert alert-danger'>{errors.email}</div>)
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="soDt">Phone<span>*</span></label><br />
                  <input
                    type="phone"
                    className="w-100"
                    placeholder="Enter Your Phone"
                    onBlur={this.handleErrors}
                    onChange={this.handleOnChange}
                    id="soDt"
                    name="soDt"
                    required
                  />
                  {
                    errors.soDt === "" ? ("") : (<div className='alert alert-danger'>{errors.soDt}</div>)
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="matKhau">Password<span>*</span></label><br />
                  <input
                    type="password"
                    className="w-100"
                    placeholder="Password"
                    onBlur={this.handleErrors}
                    onChange={this.handleOnChange}
                    id="matKhau"
                    name="matKhau"
                    required
                  />
                  {
                    errors.matKhau === "" ? ("") : (<div className='alert alert-danger'>{errors.matKhau}</div>)
                  }
                </div>

                <div className="form-group checkbox checkgroup">
                  {/* <input type="checkbox" id="bal" required checked> */}
                  <label htmlFor="bal"><input type="checkbox" className="mr-2" defaultValue id="bal" style={{ height: 'auto' }} required />I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    defaultValue="Sign Up"
                    disabled={!this.state.formValid}
                  />
                </div>
              </form>
              <div className="option">
                Already have an account? <a href="./signin.html">Login</a>
              </div>
              <hr />
              <div className="or"><span>Or</span></div>
              <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#0" className="active">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user, history) => {
      dispatch(action.actDangKy(user, history));
    }
  }
}

export default connect(null, mapDispatchToProps)(DangKy)