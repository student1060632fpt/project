import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as action from "../../redux/action";


import imgSeat01 from './../../asset/img/movie/seat01.png';
import imgSeat02 from './../../asset/img/movie/seat02.png';
import Banner07 from './../../asset/img/banner07.jpg';
import Screen from './../../asset/img/movie/screen-thumb.png';

class Seat extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getSeat(id);
    }
    openSeat = event => {
        // console.log(event);

        // if (event.currentTarget.className.indexOf("active") === -1) {
        //     event.currentTarget.className += " active";

        // } else {
        //     event.currentTarget.className = event.currentTarget.className.replace("active", "");

        // }

    }
    render() {
        return (
            <>
                <div className="banner-detail banner-listmovie">
                    <img src={Banner07} alt="banner-img" className="banner-detail-img" />
                    <div className="banner-text text-center">
                        <h3 className="title text-uppercase">Inside out</h3>
                        <div className="tags takealook">
                            <a href="#0">BHD Star Cineplex</a>
                            <a href="#0">Bitexco</a>
                        </div>
                    </div>
                </div>
                {/* ==========Page-Title========== */}
                <section className="page-title bg-one">
                    <div className="container">
                        <div className="page-title-area display-flex">
                            <div className="item md-order-1">
                                <a href="movieDetail.html" className="btn button-main">
                                    <i className="fa fa-angle-double-left mr-2" />Back
          </a>
                            </div>
                            <div className="item date-item">
                                <span className="date">MON, SEP 09 2020</span>
                                <select className="select-bar">
                                    <option value="sc1">09:40</option>
                                    <option value="sc2">13:45</option>
                                    <option value="sc3">15:45</option>
                                    <option value="sc4">19:50</option>
                                </select>
                            </div>
                            <div className="item">
                                <h5 className="title">05:00</h5>
                                <p>Mins Left</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==========Page-Title========== */}
                {/* ==========Movie-Section========== */}
                <div className="seat-plan-section padding-bottom padding-top">
                    <div className="container">
                        <div className="screen-area">
                            <h4 className="subtitle">screen</h4>
                            <div className="screen-thumb">
                                <img src={Screen} alt="movie" />
                            </div>
                            <h5 className="subtitle">Normal</h5>
                            <div className="screen-wrapper">
                                <ul className="seat-area">
                                    <li className="seat-line display-flex">
                                        <span>A</span>
                                        <ul className="seat--area display-flex">
                                            <li className="front-seat">
                                                <ul className="display-flex">
                                                    <li className="single-seat">
                                                        
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                            <span className="seat-number">a1</span>
                                                        </button>
                                                    </li>

                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat seat-booked">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>
                                                    <li className="single-seat">
                                                        <button className="btn btn-none" onClick={this.openSeat()}>
                                                            <img src={imgSeat01} alt="seat" />
                                                        </button>
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                        <span>B</span>
                                    </li>
                                </ul>
                            </div>
                            <h5 className="subtitle">Couple</h5>
                            <div className="screen-wrapper">
                                <ul className="seat-area couple">
                                    <li className="seat-line display-flex">
                                        <span>b</span>
                                        <ul className="seat--area display-flex">
                                            <li className="front-seat">
                                                <ul className="display-flex">
                                                    <li className="single-seat"> <button className="btn btn-none" onClick={this.openSeat()}>
                                                        <img src={imgSeat02} alt="seat" /></button>
                                                    </li>
                                                    <li className="single-seat"> <button className="btn btn-none" onClick={this.openSeat()}>
                                                        <img src={imgSeat02} alt="seat" /></button>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="front-seat">
                                                <ul className="display-flex">
                                                    <li className="single-seat"> <button className="btn btn-none" onClick={this.openSeat()}>
                                                        <img src={imgSeat02} alt="seat" /></button>
                                                    </li>
                                                    <li className="single-seat seat-booked">
                                                        <img src={imgSeat02} alt="seat" />
                                                        <span className="seat-number-booked">b7 b8</span>
                                                    </li>
                                                    <li className="single-seat"> <button className="btn btn-none" onClick={this.openSeat()}>
                                                        <img src={imgSeat02} alt="seat" /></button>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="front-seat">
                                                <ul className="display-flex">
                                                    <li className="single-seat"> <button className="btn btn-none" onClick={this.openSeat()}>
                                                        <img src={imgSeat02} alt="seat" /></button>
                                                    </li>
                                                    <li className="single-seat"> <button className="btn btn-none" onClick={this.openSeat()}>
                                                        <img src={imgSeat02} alt="seat" /></button>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <span>b</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                    </div>
                </div>
                {/* ==========Movie-Section========== */}

            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSeat: id => {
            dispatch(action.actSeat(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(Seat);