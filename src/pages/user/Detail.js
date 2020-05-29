import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";

// source image 
import Banner from './../../asset/img/blog03.jpg';
import Tomatoes from './../../asset/img/tomatoes.png';
import Act1 from './../../asset/img/act1.jpeg';
import Act3 from './../../asset/img/act3.jpg';
import Act4 from './../../asset/img/act4.png';
import Act5 from './../../asset/img/act5.jpg';
import Act6 from './../../asset/img/act6.jpg';
import Act7 from './../../asset/img/act7.jpg';
import Act8 from './../../asset/img/act8.jpg';
import Act9 from './../../asset/img/act9.jpg';


import CountUp from 'react-countup';
// slick carousel 
import Slider from "react-slick";
import SeatModal from "../../components/home/SeatModal";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "your",
      rap: "",
      day: ""
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
            return;
          } else {
            // console.log("index = " + index + "; indexBefore = " + indexBefore + "; date = " + rap + " dateBefore = " + rapBefore);

            return (
              <div key={index} className="row row-theater">
                <div className="col-sm-4">
                  <div key={index} className="row theater" onClick={() => { this.handleRap(movie.lichChieu[indexBefore].thongTinRap.maRap) }}>
                    <div className="col-sm-2">
                      <a href="" className="theater-map"><i className="fa fa-map-marker" aria-hidden="true"></i></a>

                    </div>
                    <div className="col-sm-10">

                      <a href="">
                        {rapBefore}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-ticket">
                  <div className="row text-center div-ticket">
                    {this.renderTicket(movie.lichChieu[indexBefore].thongTinRap.maRap)}
                  </div>

                </div>
              </div>
            );
          }
        }
      });
    }
  }

  // render html ra vé xem phim với suất chiếu, nhớ hiện modal chuyển trang ticket
  renderTicket = (maRap) => {
    var moment = require('moment'); // require

    // console.log(maRap);
    // nó sẽ nhận lần lượt 5 cái rạp
    const { movie } = this.props;
    return movie.lichChieu.map((item, index) => {
      let maRapXet = item.thongTinRap.maRap;
      if (maRap === maRapXet) {
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
      }
    });
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
      return movie.lichChieu.map((item, index) => {
        // let chooseRap = item.thongTinRap.maRap;
        // if (this.state.rap === chooseRap) {
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
            return (
              <div className="text-center" style="outline: none !important">
                <button key={index} className="btn-normal" onClick={() => { this.chooseDay(movie.lichChieu[indexBefore].ngayChieuGioChieu) }}>
                  {moment(movie.lichChieu[indexBefore].ngayChieuGioChieu).format("MM/DD")}
                </button>
              </div>
            );
          }
        }
        // }
      });
    }
  };

  chooseDay = day => {
    // console.log(day);
    this.setState({ day })
  }

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

  renderThoiLuong = () => {
    const { movie } = this.props;

    if (movie.lichChieu) {
      return (movie.lichChieu[0].thoiLuong)
    }
  }
  render() {
    const { movie } = this.props;
    const settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
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
                  </div>
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
              <Slider {...settings1}>
                {this.renderSlider()}
              </Slider>
              <div className="container-theater">
                {this.renderTheater()}
              </div>
            </div>
          </div>
          {/* Summery */}
          <div className="tab-pane container" id="movieInfo">
            <div className="container">

              <h3>Synopsis</h3>
              <p>{movie.moTa}</p>

              <h3>Cast</h3>
              <Slider {...settings2}>
                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act1} alt="cast" className="avatar-cast" />
                    </div>
                    <p className="cast-name"><a href="">Chris Evan</a></p>
                    <p className="comedien-name">Captain America</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act5} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Denis Đặng</a></p>
                    <p className="comedien-name">White Lotus</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act3} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Zachary Quinto</a></p>
                    <p className="comedien-name">Spock</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act4} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Charlize theron</a></p>
                    <p className="comedien-name">Furiosa</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act6} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Jessica Chastain</a></p>
                    <p className="comedien-name">Sara</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act7} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Michael Fassbender</a></p>
                    <p className="comedien-name">Magneto</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act8} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">James McAvoy</a></p>
                    <p className="comedien-name">Professor X</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act9} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Ewan McGregor</a></p>
                    <p className="comedien-name">Doctor Sleep</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* User review */}
          {/* <div className="tab-pane container" id="movieReview">
            ...3
            </div> */}
        </div>





        {/* trailer modal  */}
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

        {/* seat modal  */}
        <SeatModal/>
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
