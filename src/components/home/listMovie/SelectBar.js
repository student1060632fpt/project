import React, { Component } from 'react'

// source image 
import City from './../../../asset/img/city.png';
import Cinema from './../../../asset/img/cinema.png';
import Exp from './../../../asset/img/exp.png';
import DateImg from './../../../asset/img/date.png';

export default class SelectBar extends Component {
    renderOptionTheater = () => {
        let { theater } = this.props;
        // console.log(theater);
        if (theater) {
          return theater.map(mainTheater => {
            let theaterName = mainTheater.tenHeThongRap;
    
            let doDaiChuoi = theaterName.length;
            let start = 0;
            if (mainTheater.maHeThongRap === "BHDStar" || mainTheater.maHeThongRap === "CGV" || mainTheater.maHeThongRap === "MegaGS") {
              start = doDaiChuoi + 3;
            } else if (mainTheater.maHeThongRap === "CineStar") {
              doDaiChuoi = theaterName.length - 2;
              start = theaterName.length - 2;
            }
            return mainTheater.lstCumRap.map((item, index) => {
              let rapChuaCat = item.tenCumRap;
    
              let length = rapChuaCat.length - doDaiChuoi;
              let rap = rapChuaCat.substr(start, length);
              if (mainTheater.maHeThongRap === "BHDStar" || mainTheater.maHeThongRap === "CGV" || mainTheater.maHeThongRap === "MegaGS" || mainTheater.maHeThongRap === "CineStar") {
                return (
                  <option
                    value={item.maCumRap}
                    key={index}
                  >
                    {rap}
                  </option>
                );
              } else {
                return (
                  <option
                    value={item.maCumRap}
                    key={index}
                  >
                    {item.tenCumRap}
                  </option>
                );
              }
            })
          })
        }
      }
    
    render() {
        return (
            <>
                <div className="form-group col-sm-3">
                <div className="thumb">
                  <img src={City} className="mr-2" alt="date" />
                </div>
                <span className="type">Cinema</span>
                <select
                  className="custom-select"
                  onChange={this.props.selectCinema}
                >
                  <option value="BHDStar">BHD Star</option>
                  <option value="CGV">CGV</option>
                  <option value="CineStar">CineStar</option>
                  <option value="Galaxy">Galaxy Cinema</option>
                  <option value="LotteCinima">Lotte Cinema</option>
                  <option value="MegaGS">MegaGS</option>
                </select>
              </div>

              <div className="form-group col-sm-3">
                <div className="thumb">
                  <img src={Cinema} className="mr-2" alt="date" />
                </div>
                <span className="type">Location</span>
                <select className="custom-select" onChange={this.props.renderMovie}>
                  <option value="">Choose one</option>
                  {this.renderOptionTheater()}
                </select>
              </div>
              <div className="form-group col-sm-3">
                <div className="thumb">
                  <img src={DateImg} className="mr-2" alt="date" />
                </div>
                <span className="type">City</span>
                <select className="custom-select">
                  <option value="26-12-19">Ho Chi Minh</option>
                  <option value="26-12-19">Da Nang</option>
                  <option value="26-12-19">Ha Noi</option>
                </select>
              </div>
              <div className="form-group col-sm-3">
                <div className="thumb">
                  <img src={Exp} className="mr-2" alt="date" />
                </div>
                <span className="type">Experience</span>
                <select className="custom-select">
                  <option value="26-12-19">Subtitle</option>
                  <option value="26-12-19">Present</option>
                  <option value="26-12-19">Subtitle 3D</option>
                  <option value="26-12-19">Present 3D</option>
                </select>
              </div>
            </>
        )
    }
}
