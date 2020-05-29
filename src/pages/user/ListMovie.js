import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import $ from "jquery";

// source image 
import City from './../../asset/img/city.png';
import Cinema from './../../asset/img/cinema.png';
import Exp from './../../asset/img/exp.png';
import DateImg from './../../asset/img/date.png';
import Banner from './../../asset/img/banner02.jpg';
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
      value: ""
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

    //dropdown
    $('select').each(function () {
      var $this = $(this), numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      var $list = $('<ul />', {
        'class': 'select-options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
        }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
          $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
      });

      $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
      });

    });
  }

  renderHTMLTheater = () => {
    const { theater } = this.props;
    // console.log(theater);

    if (theater) {
      return theater.map(theaterItem => {
        let theaterName = theaterItem.tenHeThongRap;
        // console.log(theaterName);
        let doDaiChuoi = theaterName.length;
        let start = theaterName.length + 3;
        return theaterItem.lstCumRap.map((th, index) => {
          let rapChuaCat = th.tenCumRap;
          let length = rapChuaCat.length - doDaiChuoi;
          let rap = rapChuaCat.substr(start, length);
          // console.log(rap);
          return (
            <div key={index} className="row row-theater">
              <div className="col-sm-4">
                <div key={index} className="row theater" >
                  <div className="col-sm-2">
                    <a href="" className="theater-map"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                  </div>
                  <div className="col-sm-10">
                    <a href="">
                      {rap}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-ticket">
                <div className="row text-center div-ticket">
                  {/* {this.renderTicket(movie.lichChieu[indexBefore].thongTinRap.maRap)} */}
                </div>

              </div>
            </div>
          );
        });
      })
    }
  }

  renderTheater = () => {
    const { movie } = this.props;
    // console.log(movie);

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

  renderDate = () => {
    var moment = require('moment'); // require
    var { theater } = this.props;

    if (theater) {
      return theater.map(theaterItem => {
        return theaterItem.lstCumRap.map(cumRapItem => {
          return cumRapItem.danhSachPhim.map(phimItem => {
            return phimItem.lstLichChieuTheoPhim.map(lichChieuItem => {
              let index = Math.random() * 1000;
              // console.log(lichChieuItem.ngayChieuGioChieu);
              return (
                <div className="text-center" style="outline: none !important">
                  <button key={index} className="btn-normal">
                    {moment(lichChieuItem.ngayChieuGioChieu).format("MM/DD")}
                  </button>
                </div>
              );
            });
          });
        })
      })
    }
  }

  chooseDay = day => {
    // console.log(day);
    this.setState({ day })
  }

  //hàm ko thực hiện dc
  renderCinema = () => {
    let { cinema } = this.props;
    if (cinema) {
      return cinema.map((item, index) => {
        // console.log(item.maHeThongRap);
        return (
          <option key={index} value={item.maHeThongRap}>
            {item.tenHeThongRap}
          </option>
        );
      })
    }
  }

  selectCinema = event => {
    let firstCinema = event.target.value;
    console.log(firstCinema);
    
    
  }

  componentWillUnmount() {
    // Khi component bị hủy đi (Rời khỏi component)
    this.props.resetDetailMovie();
  }

  render() {
    // const { theater } = this.props;
    // console.log(theater);

    const { cinema } = this.props;
    // console.log(cinema);

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
        <div className="banner-detail">
          <img src={Banner} alt="banner-img" className="banner-detail-img" />
          <div className="banner-text text-center">
            <h2>BHD Star</h2>
            <p>Cheapest cinema ever</p>
          </div>
        </div>

        <div className="theater-option">
          <div className="container">
            <div className="row form-inline text-center">
              <div className="form-group my-select col-sm-3">
                <div className="thumb">
                  <img src={City} className="mr-2" alt="date" />
                </div>
                <span className="type">Cinema</span>
                <select 
                className="select-bar" 
                value={this.state.value}
                onChange={this.selectCinema}>

                  {/* {this.renderCinema()} */}
                  
                  <option value="BHDStar">BHD Star</option>
                  <option value="CGV">CGV</option>
                  <option value="CineStar">CineStar</option>
                  <option value="Galaxy">Galaxy Cinema</option>
                  <option value="LotteCinima">Lotte Cinema</option>
                  <option value="MegaGS">MegaGS</option>
                </select>
              </div>

              <div className="form-group my-select col-sm-3">
                <div className="thumb">
                  <img src={Cinema} className="mr-2" alt="date" />
                </div>
                <span className="type">Location</span>
                <select className="select-bar">
                  <option value="26-12-19">Quoc Thanh</option>
                  <option value="26-12-19">Thao Dien</option>
                  <option value="26-12-19">Le Van Viet</option>
                </select>
              </div>
              <div className="form-group my-select col-sm-3">
                <div className="thumb">
                  <img src={DateImg} className="mr-2" alt="date" />
                </div>
                <span className="type">Date</span>
                <select className="select-bar">
                  <option value="26-12-19">23/10/2020</option>
                  <option value="26-12-19">24/10/2020</option>
                  <option value="26-12-19">25/10/2020</option>
                  <option value="26-12-19">26/10/2020</option>
                </select>
              </div>
              <div className="form-group my-select col-sm-3">
                <div className="thumb">
                  <img src={Exp} className="mr-2" alt="date" />
                </div>
                <span className="type">Experience</span>
                <select className="select-bar">
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
          <div className="container-theater">
            {this.renderHTMLTheater()}
            {/* {this.renderTheater()} */}
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
