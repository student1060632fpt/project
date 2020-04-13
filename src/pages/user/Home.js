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
      <Banner/>
      {/* ticket search  */}
      <TicketSearch/>
      <div className="container">
        <h3>Home</h3>
        <div className="row">{renderHTML()}</div>
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
