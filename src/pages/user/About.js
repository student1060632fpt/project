import React, { Component } from "react";
import Axios from "axios";
import Movie from "../../components/Movie";
import TicketSearch from "../../components/home/TicketSearch";
import { connect } from "react-redux";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: [],
      status: true
    }
  }

  componentDidMount() {
    //Didmount so voi class component
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07"
    })
      .then(rs => {
        this.setState({
          listMovie: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderHTML = () => {
    let keyword = this.props.keyword.toLowerCase();
    let listMovie = this.state.listMovie;
    listMovie = listMovie.filter(movie => {
      console.log(movie.tenPhim.toLowerCase());
      return movie.tenPhim.toLowerCase().indexOf(keyword) !== -1;
    })

    return listMovie.map(movie => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };
  render() {
    return (
      <>
        <section className="banner-section">
          <div className="banner-background"></div>
        </section>
        <TicketSearch />
        <div className="container about">
          <h3 className="mb-4">Result</h3>
          <div className="row">{this.renderHTML()}</div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    keyword: state.movieReducer.keyword || "",
  }
}

export default connect(mapStateToProps, null)(About);
