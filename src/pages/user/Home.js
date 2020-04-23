import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import Movie from "../../components/Movie";
import Banner from '../../components/user/BannerHome';
import TicketSearch from "../../components/user/TicketSearch";

function Home(props) {
  useEffect(() => {
    props.getListMovie();
  }, [props]);

  const renderHTML = () => {
    return props.listMovie.map(movie => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  return (
    <>
      {/* banner section  */}
      <Banner />
      {/* ticket search  */}
      <TicketSearch />
      {/* carousel movie */}
      <div className="container" id="carousel-movie">
        <div className="row d-flex">
          <div className="col-lg-6 align-self-center">
            <h3>Movie</h3>
            <p className="d-wrap">
              Be sure not to miss these Movies today.
            </p>
          </div>
          <div className="col-lg-6 align-self-center">
            <ul class="nav float-md-right">
              <li class="">
                <a class="btn mr-3 nav-link active" data-toggle="tab" href="#home">Now showing</a>
              </li>
              <li class="">
                <a class="btn mr-3 nav-link" data-toggle="tab" href="#menu1">Comming soon</a>
              </li>
              <li class="">
                <a class="btn nav-link" data-toggle="tab" href="#menu2">Popular</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <div className="row">
                {renderHTML()}
              </div>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <div className="row">
                {renderHTML()}
              </div>
            </div>
            <div id="menu2" className="container tab-pane fade">
              <div className="row">
                {renderHTML()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProp = state => {
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

export default connect(mapStateToProp, mapDispatchToProps)(Home);
