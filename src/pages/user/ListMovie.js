import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// source image 
import Banner from './../../asset/img/banner02.jpg';
import Ad from './../../asset/img/adr03.jpg';

//small component
import SeatModal from "../../components/home/SeatModal";
import Date from "../../components/home/listMovie/Date";
import SelectBar from "../../components/home/listMovie/SelectBar";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "your",
      rap: "",
      day: "",
      firstCinema: "BHDStar",
      value: "",
      maCumRap: "",
      maLichChieu: ""
    }
  }

  componentDidMount() {

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
              // console.log(phim.tenPhim);
              return phim.lstLichChieuTheoPhim.map((item, index) => {
                let stateday = moment(this.state.day).format("MM/DD");
                let thisday = moment(item.ngayChieuGioChieu).format("MM/DD");
                if (stateday === thisday) {
                  return (
                    <div className="col-sm-3">
                      {/* và đây là nút chọn ghế hehe  */}
                      <button key={index} className="btn-ticket" data-toggle="modal" data-target="#seatModal" onClick={() => this.giveSeat(item.maLichChieu)}>
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

  giveSeat = seat => {
    // console.log(seat);
    this.setState({
      maLichChieu: seat
    })
  }


  chooseDay = day => {
    this.setState({ day })
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

  renderTheaterLocation = () => {
    if (this.props.theater) {
      return this.props.theater.map(index => {
        return index.tenHeThongRap;
      })
    }
  }
  
  render() {
    const { theater } = this.props;
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
              <SelectBar selectCinema={this.selectCinema} renderMovie={this.renderMovie} theater={theater} />
            </div>
          </div>
        </div>

        <div className="container table-ticket">
          <Date theater={this.props.theater} maCumRap={this.state.maCumRap} chooseDay={this.chooseDay}/>

          <div className="row container-theater">
            <div className="col-md-9 col-sm-12">
              
              {this.renderHTMLTheater()}
            </div>
            <div className="col-md-3 hidden-sm hidden-xs">
              <img className="w-100" src={Ad} alt="ads" />
            </div>
          </div>
        </div>

        {/* seat modal  */}
        <SeatModal seat={this.state.maLichChieu} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    theater: state.movieReducer.theater,
    cinema: state.movieReducer.cinema
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
