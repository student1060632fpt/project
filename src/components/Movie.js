import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tomatoes from './../asset/img/tomatoes.png';
import Datepic from './../asset/img/cake.png';

export default class Movie extends Component {
  // hàm lấy ngày chứ ko lấy giờ
  getParsedDate = strDate => {
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="col-sm-3">
        <div className="card">
          <Link to={`/detail/${movie.maPhim}`}>
            <img className="card-img-top" to={`/detail/${movie.maPhim}`} src={movie.hinhAnh} alt={movie.tenPhim} />
          </Link>
          <div className="card-body">
            <h4>
              <Link className="card-title" to={`/detail/${movie.maPhim}`}>{movie.tenPhim}</Link>
            </h4>
            <hr />
            <p>
              <img src={Tomatoes} alt="tomatoes" /> {movie.danhGia}
              <img src={Datepic} className="ml-3" alt="Date" /> {this.getParsedDate(movie.ngayKhoiChieu)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
