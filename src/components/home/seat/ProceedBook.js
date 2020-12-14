import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as action from './../../../redux/action';

class ProceedBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
    }

    renderseatNumber = () => {
        let { seatNumber } = this.props;
        if (seatNumber === []) {
            return "Choose one";
        } else {
            return `${seatNumber}`;
        }
    }

    calculate = () => {
        let { seatNumber } = this.props;
        let priceSeat = seatNumber.length * 75000;
        return priceSeat;
    }
    render() {
        return (
            <div className="proceed-book bg_img" data-background>
                <div className="proceed-to-book display-flex">
                    <div className="book-item">
                        <span>You have Choosed Seat Number</span>
                        <h3 className="title">{this.renderseatNumber()}</h3>
                    </div>
                    <div className="book-item">
                        <span>total price</span>
                        <h3 className="title">{this.calculate()}vnd</h3>
                    </div>
                    <div className="book-item">
                        <Link to={`/account`} className="btn button-main" onSubmit={() => {this.props.actProcess(this.props.seatNumber)}}>proceed</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        seatNumber: state.seatReducer.seatNumber,
        seat: state.seatReducer.seat || {
            thongTinPhim: {
                maLichChieu: 17761,
                tenCumRap: "Đoán xem",
                tenRap: "Rạp 7",
                diaChi: "Quận cam",
                tenPhim: "Đoán xem",
                hinhAnh: "https://movie0706.cybersoft.edu.vn/hinhanh/i-am-not-a-rapper_GP07.jpg",
                ngayChieu: "08/01/2019",
                gioChieu: "10:01"
            },
            danhSachGhe: [
                {
                    daDat: false,
                    giaVe: 75000,
                    loaiGhe: "Thuong",
                    maGhe: 53321,
                    maRap: 488,
                    stt: "01",
                    taiKhoanNguoiDat: null,
                    tenGhe: "01"
                }
            ]
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actProcess: (data) => {
            dispatch(action.actProcess(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProceedBook);