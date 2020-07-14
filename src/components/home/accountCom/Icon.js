import React, { Component } from 'react'

export default class Icon extends Component {
    render() {
        return (
            <div className="item footer-icon col-sm-6 col-xs-12">
                <a href>
                    <i className="fa fa-facebook-f" />
                </a>
                <a href>
                    <i className="fa fa-twitter" aria-hidden="true">
                    </i>
                </a>
                <a href>
                    <i className="fa fa-pinterest-p" aria-hidden="true">
                    </i>
                </a>
                <a href>
                    <i className="fa fa-google" aria-hidden="true">
                    </i>
                </a>
                <a href>
                    <i className="fa fa-instagram" aria-hidden="true">
                    </i>
                </a>
            </div>
        )
    }
}
