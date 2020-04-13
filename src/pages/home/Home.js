import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import Movie from "../../components/Movie";

function Home(props) {
  useEffect(() => {
    props.getListMovie();

    //effect type text
    //source https://codepen.io/Hikisu/pen/qVbQgZ?editors=0010
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 100) || 4000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 150 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1000;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #e9eeff }";
      document.body.appendChild(css);
    };
  }, [props]);

  const renderHTML = () => {
    return props.listMovie.map(movie => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  return (
    <>
      {/* banner section  */}
      <section className="banner-section">
        <div className="banner-background"></div>
        <div className="container">
          <div className="banner-content">

            <h1 className="title"><span className="d-block">book your</span> tickets <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ "cheep", "quickly", "safe"]'></span>
            </h1>
            <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
          </div>
        </div>

      </section>
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
