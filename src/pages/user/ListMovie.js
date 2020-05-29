import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


// source image 
import City from './../../asset/img/city.png';
import Cinema from './../../asset/img/cinema.png';
import Exp from './../../asset/img/exp.png';
import DateImg from './../../asset/img/date.png';
import Banner from './../../asset/img/banner02.jpg';
import Ad from './../../asset/img/adr03.jpg';


import Slider from "react-slick";
import SeatModal from "../../components/home/SeatModal";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "your",
      rap: "",
      day: "",
      firstCinema: "BHDStar",
      value: "",
      maCumRap: ""
    }
  }

  componentDidMount() {
    //lấy id do ở home hoặc trang nào đó nhấn vào
    let id = this.props.match.params.id;
    this.props.getDetail(1344);

    //lấy theater
    this.props.getTheater(this.state.firstCinema);

    //lấy cinema
    this.props.getCinema();


  }

  renderHTMLTheater = () => {
    const { theater } = this.props;

    if (theater) {
      return theater.map(theaterItem => {
        return theaterItem.lstCumRap.map((th) => {
          // console.log(th);
          if (th.maCumRap === this.state.maCumRap) {

            return th.danhSachPhim.map((phim, index) => {
              return (
                <div key={index} className="row row-theater">
                  <div className="col-sm-4">
                    <Link className="theater-img" to={`/detail/${phim.maPhim}`}>
                      <img src={phim.hinhAnh} alt={phim.tenPhim} />
                    </Link>
                  </div>
                  <div className="col-sm-8 col-ticket">
                    <div className="row text-center div-ticket">
                      {/* {this.renderTicket(movie.lichChieu[indexBefore].thongTinRap.maRap)} */}
                      {this.renderHTMLTicket(phim.maPhim)}
                    </div>
                  </div>
                </div>
              );

            })
          }

        });
      })
    }
  }
  renderHTMLTicket = maPhimCho => {
    // console.log(maPhimCho);
    var moment = require('moment'); // require

    const { theater } = this.props;

    if (theater) {
      return theater.map(theaterItem => {
        return theaterItem.lstCumRap.map((th) => {
          return th.danhSachPhim.map((phim) => {
            let maPhimXet = phim.maPhim;

            if (maPhimCho === maPhimXet) {
              console.log(phim.tenPhim);
              return phim.lstLichChieuTheoPhim.map((item, index) => {
                let stateday = moment(this.state.day).format("MM/DD");
                let thisday = moment(item.ngayChieuGioChieu).format("MM/DD");
                if (stateday === thisday) {
                  return (
                    <div className="col-sm-3">
                      {/* và đây là nút chọn ghế hehe  */}
                      <button key={index} className="btn-ticket" data-toggle="modal" data-target="#seatModal">
                        {moment(item.ngayChieuGioChieu).format("HH:mm")}
                      </button>
                    </div>
                  );
                }
              })

            }
          })
        })
      })
    }
  }



  renderDate = () => {
    var moment = require('moment'); // require
    var { theater } = this.props;

    if (theater) {
      return theater.map(theaterItem => {
        return theaterItem.lstCumRap.map(cumRapItem => {
          // console.log(cumRapItem);
          let cumRapXet = cumRapItem.maCumRap;
          if (cumRapXet === this.state.maCumRap) {
            return cumRapItem.danhSachPhim.map(phimItem => {
              return phimItem.lstLichChieuTheoPhim.map((lichChieuItem, index) => {
                // let dayNow = moment(lichChieuItem.ngayChieuGioChieu).format("MM/DD");
                // let indexBefore = index -1;
                // let dayBefore = phimItem.lstLichChieuTheoPhim[indexBefore].ngayChieuGioChieu;
                // console.log(dayBefore);
                // if(dayNow === dayBefore){

                // }
                return (
                  <div className="text-center" style="outline: none !important">
                    <button key={index} className="btn-normal" onClick={() => { this.chooseDay(lichChieuItem.ngayChieuGioChieu) }}>
                      {moment(lichChieuItem.ngayChieuGioChieu).format("MM/DD")}
                    </button>
                  </div>
                );
              });
            });
          }
        })
      })
    }
  }

  chooseDay = day => {
    console.log(day);
    this.setState({ day })
  }

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

  //renderMovie
  renderMovie = event => {
    let maCumRap = event.target.value;
    // console.log(phim);
    this.setState({ maCumRap })
  }

  // option select cinema 
  selectCinema = event => {
    let firstCinema = event.target.value;
    // console.log(firstCinema);
    // this.setState({firstCinema})
    this.props.getTheater(firstCinema);
  }

  componentWillUnmount() {
    // Khi component bị hủy đi (Rời khỏi component)
    this.props.resetDetailMovie();
  }

  renderTheaterName = () => {
    if (this.props.theater) {
      return this.props.theater.map(index => {
        return index.tenHeThongRap;
      })
    }
  }
  render() {
    const { theater } = this.props;

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
    // moment để sửa lại thời gian
    return (
      <>
        <div className="banner-detail banner-listmovie">
          <img src={Banner} alt="banner-img" className="banner-detail-img" />
          <div className="banner-text text-center">
            <h2 className="text-uppercase">{this.renderTheaterName()}</h2>
            <p>Cheapest cinema ever</p>
          </div>
        </div>

        <div className="theater-option">
          <div className="container">
            <div className="row form-inline text-center">
              <div className="form-group col-sm-3">
                <div className="thumb">
                  <img src={City} className="mr-2" alt="date" />
                </div>
                <span className="type">Cinema</span>
                <select
                  className="custom-select"
                  // value={this.state.value}
                  onChange={this.selectCinema}
                >
                  <option value="BHDStar" active>BHD Star</option>
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
                <select className="custom-select" onChange={this.renderMovie}>
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
            </div>
          </div>
        </div>

        <div className="container table-ticket">
          <Slider {...settings1}>
            {/* {this.renderSlider()} */}
            {this.renderDate()}
          </Slider>
          <div className="row container-theater">
            <div className="col-md-9 col-sm-12">

            {this.renderHTMLTheater()}
            </div>
            <div className="col-md-3 hidden-sm hidden-xs">
              <img className="w-100" src={Ad} alt="ads"/>
            </div>
          </div>
        </div>

        {/* seat modal  */}
        <SeatModal />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieReducer.detailMovie,
    theater: state.movieReducer.theater,
    cinema: state.movieReducer.cinema
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => {
      dispatch(action.actDetailMovie(id));
    },
    getTheater: theater => {
      dispatch(action.actTheater(theater));
    },
    getCinema: () => {
      dispatch(action.actCinema());
    },
    // cái này dùng cho component unmount 
    resetDetailMovie: () => {
      dispatch(action.actGetDetailMovie({}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
