import React, { Component } from 'react'

export default class ProceedBook extends Component {
    render() {
        return (
            <div className="proceed-book bg_img" data-background>
                <div className="proceed-to-book display-flex">
                    <div className="book-item">
                        <span>You have Choosed Seat</span>
                        <h3 className="title">d9, d10</h3>
                    </div>
                    <div className="book-item">
                        <span>total price</span>
                        <h3 className="title">$150</h3>
                    </div>
                    <div className="book-item">
                        <a href="#" className="btn button-main">proceed</a>
                    </div>
                </div>
            </div>
        )
    }
}
