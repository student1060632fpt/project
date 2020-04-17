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
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Movie</h3>
            <p>
              Be sure not to miss these Movies today.
            </p>
          </div>
          <div className="col-lg-6">
            <ul class="nav ">
              <li class="">
                <a class="btn nav-link active" data-toggle="tab" href="#home">Home</a>
              </li>
              <li class="">
                <a class="btn nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
              </li>
              <li class="">
                <a class="btn nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="tab-content">
            <div id="home" className="container tab-pane active"><br />
              <h3>HOME</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div id="menu1" className="container tab-pane fade"><br />
              <h3>Menu 1</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="menu2" className="container tab-pane fade"><br />
              <h3>Menu 2</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        {renderHTML()}
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
