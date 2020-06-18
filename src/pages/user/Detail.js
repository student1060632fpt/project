import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";

// source image 
import Banner from './../../asset/img/blog03.jpg';

// slick carousel 
import SeatModal from "../../components/home/SeatModal";
import Cast from "../../components/home/detailMovie/Cast";
import TrailerModal from "../../components/home/detailMovie/TrailerModal";
import DateDetail from './../../components/home/detailMovie/DateDetail';
import TheaterDetail from "../../components/home/detailMovie/TheaterDetail";
import Rate from "../../components/home/detailMovie/Rate";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      seat: ""
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getDetail(id);
  }

  changeMaLichChieu = seat => {
    this.setState({
      seat
    })
    
  }

  chooseDay = day => {
    // console.log(day);
    this.setState({ day })
  }

  componentWillUnmount() {
    // Khi component bị hủy đi (Rời khỏi component)
    this.props.resetDetailMovie();
  }

  renderThoiLuong = () => {
    const { movie } = this.props;

    if (movie.lichChieu) {
      return (movie.lichChieu[0].thoiLuong)
    }
  }

  render() {
    const { movie } = this.props;
    
    // moment để sửa lại thời gian
    var moment = require('moment'); // require
    return (
      <>
        <div className="banner-detail">
          <img src={Banner} alt="banner-img" className="banner-detail-img" />
        </div>
        <div className="container detail">
          <div className="row">
            <div className="col-sm-3 img-film" >
              <img src={movie.hinhAnh} alt={movie.tenPhim} />
            </div>
            <div className="col-sm-9 film-resume">
              <h3>{movie.tenPhim}</h3>
              <div className="film-div-tag"><a href="#" className="film-tag">HORROR</a></div>
              <div className="d-flex mb-5">
                <div className="calendar">
                  <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                  {moment(movie.ngayKhoiChieu).format("Do MMMM YYYY")}
                </div>
                <div className="film-time ml-3">
                  <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>

                  {this.renderThoiLuong()} mins
                {/* {movie.lichChieu[0].thoiLuong} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rate">
          <div className="container">
            <div className="row">
              <div className="col-sm-3" >
              </div>
              <div className="col-sm-9">
                <div className="row">
                  <Rate movie={movie}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* nav tab  */}
        <div className="container movie-tab">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#bookTickets">Book tickets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#movieInfo">Summary</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#movieReview">User review</a>
            </li> */}
          </ul>
        </div>

        {/* tab panel */}
        <div className="tab-content">
          <div className="tab-pane active container" id="bookTickets">
            {/* dat ve  */}
            <div className="container table-ticket">
              <DateDetail movie={movie} chooseDay={this.chooseDay}/>
              <div className="container-theater">
                {/* rạp và vé  */}
                <TheaterDetail movie={movie} day={this.state.day} changeMaLichChieu={this.changeMaLichChieu}/>
              </div>
            </div>
          </div>
          {/* Summery */}
          <div className="tab-pane container" id="movieInfo">
            <div className="container">
              <Cast movie={movie}/>
            </div>
          {/* User review */}
          {/* <div className="tab-pane container" id="movieReview">
            ...3
            </div> */}
          </div>
        </div>

        {/* trailer modal  */}
        <TrailerModal movie={movie}/>

        {/* seat modal  */}
        <SeatModal seat={this.state.seat}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieReducer.detailMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => {
      dispatch(action.actDetailMovie(id));
    },
    resetDetailMovie: () => {
      dispatch(action.actGetDetailMovie({}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
