import React, { Component } from 'react';
import * as action from './../../redux/action';
import { connect } from 'react-redux';

class DangNhap extends Component {
    // https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        }
    }

    handleOnChange = event => {
        let { value, name } = event.target;
        this.setState({
            [name]: value
        }
            // , console.log(this.state.taiKhoan, this.state.matKhau)
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.signin(this.state, this.props.history);
        // console.log(this.state);

    }
    render() {
        return (
            <div className="background-img-sign">
                <div className="container">
                    <div className="padding-top padding-bottom">
                        <div className="account-area">
                            <div className="section-header-3 text-center">
                                <span className="cate">Hello</span>
                                <h2 className="title">Welcome back</h2>
                            </div>
                            <form className="account-form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="account">Account</label><br />
                                    <input name="taiKhoan" type="text" className="w-100" placeholder="Enter Your Account" id="account" onChange={this.handleOnChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass1">Password</label><br />
                                    <input name="matKhau" type="password" className="w-100" placeholder="Password" id="pass1" onChange={this.handleOnChange} required />
                                </div>
                                <div className="form-group checkbox checkgroup">
                                    {/* <input type="checkbox" id="bal" required checked> */}
                                    <input type="checkbox" id="bal2" required defaultChecked style={{ height: 'auto' }} />
                                    <label htmlFor="bal2">remember password</label>
                                    <a href="./signup.html" className="forget-pass text-right">Forget Password</a>
                                </div>
                                <div className="form-group text-center">
                                    <input type="submit" defaultValue="Sign Up" />
                                </div>
                            </form>
                            <div className="option">
                                Don't have an account? <a href="signup.html">sign up now</a>
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
        signin: (user, history) => {
            dispatch(action.actDangNhap(user, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(DangNhap);