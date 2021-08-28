import React, { Component } from 'react';

import Avatar from './../../asset/img/avatar.jpg';
import Icon03 from './../../asset/img/event-icon03.png';
import Icon01 from './../../asset/img/event-icon01.png';
import Icon02 from './../../asset/img/event-icon02.png';


import BannerAccount from '../../components/home/BannerAccount';
import ModalAccount from '../../components/home/ModalAccount';
import { connect } from 'react-redux';
import Icon from '../../components/home/accountCom/Icon';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    if (user) {
      this.setState({
        user
      })
    } else {
      this.setState({
        user: null
      })
    }
  }
  renderPassword = () => {
    let { user } = this.state;
    return (<a href="#">**********</a>);
  }
  render() {
    let { seat, seatNumber } = this.props;
    console.log(seat, seatNumber);
    let user;
    if (this.state.user) {
      user = this.state.user
    } else {
      user = {
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        accessToken: ""
      }
    }
    return (
      <>
        <BannerAccount />
        <section className="speaker-single padding-top pt-lg-0">
          <div className="container">
            <div className="speaker-wrapper bg-six padding-top padding-bottom row">
              <div className="col-md-4 speaker-thumb">
                <img src={Avatar} alt="speaker" />
                <button className="btn btn-normal" data-toggle="modal" data-target="#AccountModal">
                  Edit
                </button>
              </div>
              <div className="col-md-8 speaker-content">
                <div className="author">
                  <h2 className="title">{user.hoTen}</h2>
                  <div className="info">Description about me, my knowledge and experience</div>
                </div>
                <div className="speak-container">
                  <div className="speak-row row">
                    <div className="item col-sm-6 col-xs-12">
                      <div className="item-thumb ml-3">
                        <img src={Icon03} alt="event" />
                      </div>
                      <div className="item-content">
                        <span className="up">Drop me a line:</span>
                        <a href="true">{user.email}</a>
                      </div>
                    </div>
                    <Icon />
                  </div>
                  <div className="speak-row row">
                    <div className="item col-sm-6">
                      <div className="item-thumb ml-3">
                        <img src={Icon02} alt="event" />
                      </div>
                      <div className="item-content">
                        <span className="up">Call me:</span>
                        <a href="#">{user.soDT}</a>
                      </div>
                    </div>
                    <div className="item col-sm-6">
                      <div className="item-thumb ml-3">
                        <img src={Icon01} alt="event" />
                      </div>
                      <div className="item-content">
                        <span className="up">{user.taiKhoan}</span>
                        {this.renderPassword()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content mt-5">
                  <h3 className="subtitle">My seat</h3>
                  <div className="speak-container">
                    <div className="speak-row row">
                      <div className="item col-sm-6 col-xs-12">
                        <div className="item-thumb mr-4">
                          <button className="btn-ticket" data-toggle="modal" data-target="#seatModal">
                            12/12
                          </button>
                        </div>
                        <div className="item-content">
                          <span className="up">Movie</span>
                          <a href="true">Trainwech</a>
                        </div>
                      </div>
                      <div className="item col-sm-6 col-xs-12">

                        <div className="item-content">
                          <span className="up">Theater</span>
                          <a href="true">BHD Star Megamall</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalAccount />
      </>
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
        hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/i-am-not-a-rapper_GP09.jpg",
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

export default connect(mapStateToProps, null)(Account);