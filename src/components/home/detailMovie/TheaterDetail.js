import React, { Component } from 'react'

export default class TheaterDetail extends Component {
    constructor(props) {
         super(props);
        this.state = {
            rap: ""
        }
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
            return;
          } else {
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
        let stateday = moment(this.props.day).format("MM/DD");
        let thisday = moment(item.ngayChieuGioChieu).format("MM/DD");
        if (stateday === thisday) {
          // console.log(item);

          return (
            <div className="col-sm-3" key={index}>
              {/* và đây là nút chọn ghế hehe  */}
              <button className="btn-ticket" data-toggle="modal" data-target="#seatModal" onClick={() => { this.props.changeMaLichChieu(item.maLichChieu) }}>
                {moment(item.ngayChieuGioChieu).format("HH:mm")}
              </button>
            </div >
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
  render() {
    return (
      <>
        {this.renderTheater()}
      </>
    )
  }
}
