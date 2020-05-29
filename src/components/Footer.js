import React, { Component } from 'react';
import Logo from './../asset/img/logo.png';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-section">
                    <div className="container footer-subcribe-section" id="subcribe">
                        {/* để relative */}
                        <div className="subcribe-tab text-center">
                            <div className="subcribe-text">
                                <p className="category">SUBSCRIBE TO CINEMAX</p>
                                <h3>TO GET BENIFITS</h3>
                                <form className="form-inline mt-5">
                                    <span>
                                        <input type="text" className="form-control" name="" placeholder="Your email address " />
                                        <input name=""  className="btn btn-primary" type="button" value="Subcribe" />
                                    </span>
                                </form>
                                <p className="mt-4">We respect your privacy, so we never share your info</p>
                            </div>
                        </div>
                    </div>
                    <div className="container footer-info">
                        <div className="row footer-info-top mb-3">
                            <span className="col-md-6 footer-logo">
                                <a href="">
                                    <img src={Logo} className="img-fluid" alt="" />CINEMAX</a>
                            </span>
                            <span className="col-md-6 footer-icon text-right">
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-pinterest-p" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-google" aria-hidden="true" />
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                            </span>
                        </div>
                        <div className="row mt-5 footer-info-bottom">
                            <p className="copyright col-md-6">Copyright © 2020. All Rights Reserved By <a href=""><span className="light-color">Cinemax</span></a></p>
                            <span className="footer-small-sitemap col-md-6 text-right">
                                <a href="">
                                    About
                                    </a>
                                <a href="">
                                    Terms Of Use
                                    </a>
                                <a href="">
                                    Privacy Policy
                                    </a>
                                <a href="">
                                    FAQ
                                    </a>
                                <a href="">
                                    Feedback
                                    </a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer >
        )
    }
}
