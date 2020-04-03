import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";

class Detail extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getDetail(id);
  }

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

  componentWillUnmount() {
    // Khi component bị hủy đi (Rời khỏi component)
    this.props.resetDetailMovie();
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="container">
        <h3>Detail</h3>
        <div className="row">
          <div className="col-sm-6">
            <img src={movie.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ten phim</td>
                  <td>{movie.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{movie.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
