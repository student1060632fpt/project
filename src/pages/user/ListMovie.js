import React, { Component } from "react";
import Movie from "../../components/Movie";
import { connect } from "react-redux";
import * as action from "../../redux/action";

// import $ from "jquery";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


class ListMovie extends Component {
  componentDidMount() {
    document.title = "List Movie";
    this.props.getListMovie();
  }

  renderHTML = () => {
    return this.props.listMovie.map(movie => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h3>ListMovie</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
