import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tomatoes from './../asset/img/tomatoes.png';
import Date from './../asset/img/date.png';

export default class Movie extends Component {
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
            <hr/>
            <p>
              <img src={Tomatoes} alt="tomatoes" /> {movie.danhGia}
              <img src={Date} alt="Date"/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
