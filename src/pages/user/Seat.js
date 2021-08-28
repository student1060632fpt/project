import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../../redux/action";

import Banner07 from './../../asset/img/banner07.jpg';
import Screen from './../../asset/img/movie/screen-thumb.png';
import SeatLine from '../../components/home/seat/SeatLine';
import ExSeat from '../../components/home/seat/ExSeat';
import ProceedBook from '../../components/home/seat/ProceedBook';
import PageTitle from '../../components/home/seat/PageTitle';

class Seat extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getSeat(id);
    }

    render() {
        let seat = this.props.seat;
        console.log(seat.danhSachGhe);
        return (
            <>
                <div className="banner-detail banner-listmovie">
                    <img src={Banner07} alt="banner-img" className="banner-detail-img" />
                    <div className="banner-text text-center">
                        <h3 className="title text-uppercase">{seat.thongTinPhim.tenPhim}</h3>
                        <div className="tags takealook">
                            <a href="#0">{seat.thongTinPhim.tenCumRap}</a>
                        </div>
                    </div>
                </div>
                {/* ==========Page-Title========== */}
                <PageTitle seat={seat} />
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
                            <SeatLine listSeat={seat.danhSachGhe} openSeat={this.openSeat} />
                        </div>

                        {/* ex seat  */}
                        <ExSeat />

                        {/* proceed book  */}
                        <ProceedBook/>

                    </div>
                </div>
                {/* ==========Movie-Section========== */}

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        seat: state.seatReducer.seat || {
            thongTinPhim: {
                maLichChieu: 17761,
                tenCumRap: "Đoán xem",
                tenRap: "Rạp 7",
                diaChi: "Quận cam",
                tenPhim: "Đoán xem",
                hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/i-am-not-a-rapper_GP09.jpg",
                ngayChieu: "08/01/2019",
                gioChieu: "10:01"
            },
            danhSachGhe: []
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSeat: id => {
            dispatch(action.actSeat(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);