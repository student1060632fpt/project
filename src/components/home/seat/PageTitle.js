import React, { Component } from 'react'

export default class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            second: 0
        }
    }
    componentDidMount() {
        // 5 phút * 60 giây = 300
        var time = 300;
        let countDown = setInterval(() => {
            if (time > 0) {
                time = time - 1;
                let min = Math.floor(time / 60);
                let second = Math.floor((time % 60));
                // console.log(min + " : " + second);
                this.setState({ min, second })
            } else {
                clearInterval(countDown);
                // this.props.history.goBack();
            }
        }, 1000)
    }
    renderCountdown = () => {
        let { min, second } = this.state;
        return `${min} : ${second}`;
    }
    render() {
        var moment = require('moment'); // require

        return (
            <section className="page-title bg-one">
                <div className="container">
                    <div className="page-title-area display-flex">
                        <div className="item md-order-1">
                            <a href="#" onClick={() => { this.props.history.goBack() }} className="btn button-main">
                                <i className="fa fa-angle-double-left mr-2" />Back
                                </a>
                        </div>
                        <div className="item date-item">
                            <span className="date">{moment(this.props.seat.thongTinPhim.ngayChieu).format("MMMM Do YYYY")}</span>
                            <select className="select-bar">
                                <option value="sc1">09:40</option>
                                <option value="sc2">13:45</option>
                                <option value="sc3">15:45</option>
                                <option value="sc4">19:50</option>
                            </select>
                        </div>
                        <div className="item">
                            <h5 className="title">{this.renderCountdown()}</h5>
                            <p>Mins Left</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
