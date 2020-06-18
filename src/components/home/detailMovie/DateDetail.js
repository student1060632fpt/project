import React, { Component } from 'react'
import Slider from "react-slick";

export default class detailDate extends Component {
    renderSlider = () => {
        var moment = require('moment'); // require
        const { movie } = this.props;
    
        if (movie.lichChieu) {
          return movie.lichChieu.map((item, index) => {
            let date = new Date(item.ngayChieuGioChieu).toLocaleDateString();
            if (index > 0) {
              let indexBefore = index - 1;
              let dateBefore = new Date(movie.lichChieu[indexBefore].ngayChieuGioChieu).toLocaleDateString();
              if (date === dateBefore) {
              } else {
                return (
                  <div key={index} className="text-center" style="outline: none !important">
                    <button className="btn-normal" onClick={() => { this.props.chooseDay(movie.lichChieu[indexBefore].ngayChieuGioChieu) }}>
                      {moment(movie.lichChieu[indexBefore].ngayChieuGioChieu).format("MM/DD")}
                    </button>
                  </div>
                );
              }
            }
          });
        }
      };
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
                {this.renderSlider()}
              </Slider>
        )
    }
}
