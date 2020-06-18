import React, { Component } from 'react'
import Slider from "react-slick";

export default class Date extends Component {

  renderDate = () => {
    var moment = require('moment'); // require
    var { theater } = this.props;

    if (theater) {
      return theater.map(theaterItem => {
        return theaterItem.lstCumRap.map(cumRapItem => {
          let cumRapXet = cumRapItem.maCumRap;
          if (cumRapXet === this.props.maCumRap) {
            return cumRapItem.danhSachPhim.map(phimItem => {
              return phimItem.lstLichChieuTheoPhim.map((lichChieuItem, index) => {
                let date = moment(lichChieuItem.ngayChieuGioChieu).format("MM/DD");
                if(index > 0){
                    let dateBefore = moment(phimItem.lstLichChieuTheoPhim[index - 1].ngayChieuGioChieu).format("MM/DD");
                    if(date === dateBefore){
                        // console.log(date);
                    } else {
                        return (
                            <div className="text-center" style="outline: none !important">
                              <button key={index} className="btn-normal" onClick={() => { this.props.chooseDay(lichChieuItem.ngayChieuGioChieu) }}>
                                {moment(lichChieuItem.ngayChieuGioChieu).format("MM/DD")}
                              </button>
                            </div>
                          );
                    }
                }
                
              });
            });
          }
        })
      })
    }
  }
  
  render() {
    const settings1 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings1}>
        {/* {this.renderSlider()} */}
        {this.renderDate()}
      </Slider>
    )
  }
}
