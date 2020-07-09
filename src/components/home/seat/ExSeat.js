import React, { Component } from 'react'
import imgSeat01 from './../../../asset/img/movie/seat01.png';

export default class ExSeat extends Component {
    render() {
        return (
            <div className="page-title-area help-seat display-flex">
                <div className="item">
                    <div className="single-seat">
                        <button className="btn btn-none mr-3">
                            <img src={imgSeat01} alt="seat" />
                        </button>
                                    Empty seat
                    </div>
                </div>
                <div className="item">
                    <div className="single-seat">
                        <button className="btn btn-none active mr-3">
                            <img src={imgSeat01} alt="seat" />
                        </button>
                                    Choosen seat
                    </div>
                </div>
                <div className="item">
                    <div className="single-seat">
                        <button className="btn btn-none mr-3 seat-booked">
                            <img src={imgSeat01} alt="seat" />
                        </button>
                                Booked seat
                    </div>
                </div>
            </div>
        )
    }
}
