import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import Banner from './../../asset/img/blog03.jpg';

import Tomatoes from './../../asset/img/tomatoes.png';
import CountUp from 'react-countup';

// slick carousel 
import Slider from "react-slick";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "",
      rap: "",
      countDay: 0
    }
  }
  handleRating = event => {
    let rate = event.target.value;
    this.setState({
      rate
    })
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getDetail(id);
  }
  
  // componentWillMount(){
  //   if (this.props.movie.lichChieu) {
  //     let rap = this.props.movie.lichChieu.thongTinRap.tenCumRap;
  //     console.log(rap);
      
  //   }
    
  // }

  renderTheater = () => {
    const { movie } = this.props;
    if (movie.lichChieu) {
      
      return movie.lichChieu.map((item, index) => {
        let rap = item.thongTinRap.tenCumRap;
        if (index > 0) {
          let indexBefore = index - 1;
          let rapBefore = movie.lichChieu[indexBefore].thongTinRap.tenCumRap;
          if (rap === rapBefore) {
            // console.log("noo");
            //nếu date bằng date lần trước thì sẽ ko hiển thị
          } else {
            // console.log("index = " + index + "; indexBefore = " + indexBefore + "; date = " + rap + " dateBefore = " + rapBefore);
            return <button key={index} className="btn-normal" onClick={() => { this.handleRap(movie.lichChieu[indexBefore].thongTinRap.maRap) }}> {rapBefore} </button>;
          }
        }
      });
    }
  }

  handleRap = rap => {
    this.setState({
      rap,
    })
  }

  renderSlider = () => {
    var moment = require('moment'); // require
    const { movie } = this.props;
    
    if (movie.lichChieu) {

      let countDay = 0;
      let lichChieu = movie.lichChieu;
      console.log(lichChieu);
      
      return movie.lichChieu.map((item, index) => {
        let chooseRap = item.thongTinRap.maRap;
        if (this.state.rap === chooseRap) {
          // console.log(chooseRap);
          let date = new Date(item.ngayChieuGioChieu).toLocaleDateString();
          if (index > 0) {
            let indexBefore = index - 1;
            let dateBefore = new Date(movie.lichChieu[indexBefore].ngayChieuGioChieu).toLocaleDateString();
            if (date === dateBefore) {
              // console.log("noo");
              //nếu date bằng date lần trước thì sẽ ko hiển thị
            } else {
              // console.log("index = " + index + "; indexBefore = " + indexBefore + "; date = " + date + " dateBefore = " + dateBefore);
              countDay++;
              
              return (<div key={index} className="text-center"> {moment(dateBefore).format("MM/DD")} </div>);
            }
          }
          
        }
      });
      
      console.log(countDay);
    }
    
  };

  renderTable = () => {
    const { movie } = this.props;

    if (movie.lichChieu) {
      return movie.lichChieu.map(item => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <button className="btn btn-success">Chọn ghế</button>
            </td>
          </tr>
        );
      });
    }
  };

  renderTomatoes = () => {
    const { danhGia } = this.props.movie;
    if (danhGia) {
      return <CountUp end={danhGia * 10} />;
    }
  }

  componentWillUnmount() {
    // Khi component bị hủy đi (Rời khỏi component)
    this.props.resetDetailMovie();
  }

  render() {
    const { movie } = this.props;
    const settings = {
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
    console.log(this.state.countDay);

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
                2 hrs 50 mins
                {movie.thoiLuong}
                </div>
              </div>
              {/* <p>{movie.moTa}</p> */}
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
                  <div className="col-sm-3 tomatoes text-center">
                    <img src={Tomatoes} alt="tomatoes" />

                    <span>{this.renderTomatoes()}%</span>
                    <p className="mt-2">Rotten Tomatoes</p>
                  </div>
                  <div className="col-sm-3 text-center">

                    <fieldset className="rating">
                      <input type="radio" id="heart5" name="rating" defaultValue={5} onChange={this.handleRating} />
                      <label className="full" htmlFor="heart5" title="Awesome - 5 hearts" />
                      <input type="radio" id="heart4" name="rating" defaultValue={4} onChange={this.handleRating} />
                      <label className="full" htmlFor="heart4" title="Pretty good - 4 hearts" />
                      <input type="radio" id="heart3" name="rating" defaultValue={3} onChange={this.handleRating} />
                      <label className="full" htmlFor="heart3" title="Meh - 3 hearts" />
                      <input type="radio" id="heart2" name="rating" defaultValue={2} onChange={this.handleRating} />
                      <label className="full" htmlFor="heart2" title="Kinda bad - 2 hearts" />
                      <input type="radio" id="heart1" name="rating" defaultValue={1} onChange={this.handleRating} />
                      <label className="full" htmlFor="heart1" title="Sucks big time - 1 heart" />
                    </fieldset>

                    <br />
                    <br />
                    <span className="rating-number">{this.state.rate}</span> score

                  </div>
                  <div className="col-sm-6 film-button">
                    <button className="btn-normal mr-3" data-toggle="modal" data-target="#exampleModal">Trailer</button>
                    <button className="btn button-main">BOOK TICKETS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 table-ticket">
          <div className="row">
            <div className="col-sm-3">
              <div className="d-flex flex-column">
                {this.renderTheater()}
              </div>
            </div>
            <div className="col-sm-9 ">
              <div className="lishday">
                <Slider {...settings}>
                  {this.renderSlider()}
                </Slider>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cum rap</th>
                    <th>Ten rap</th>
                    <th>Ngay chieu</th>
                    <th>Gio chieu</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content modal-trailer">
              <div className="modal-header">
                <p className="modal-title" id="exampleModalLabel">Trailer  {movie.tenPhim}</p>
                <button type="btn-normal" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe style={{ width: 100 + "%", height: 300 + "px" }} src={movie.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>


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
