import React, { Component } from 'react'

export default class BannerAccount extends Component {
    render() {
        return (
            <section className="speaker-banner bg_img" data-background="./asset/img/banner08.jpg">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">My Account</h2>
                        <ul className="breadcrumb">
                            <li>
                                my profile
        </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
