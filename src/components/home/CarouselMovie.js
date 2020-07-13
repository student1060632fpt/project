import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/action";
import SliderMovie from '../../components/home/SliderMovie';

// slick carousel 
import Slider from "react-slick";

class CarouselMovie extends Component {
    componentDidMount() {
        document.title = "List Movie";
        this.props.getListMovie();
    }

    render() {
        const renderSlider = () => {
            return this.props.listMovie.map(movie => {
                return <SliderMovie key={movie.maPhim} movie={movie} />;
            });
        };
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
        return (
            <div className="container" id="carousel-movie">
                <div className="row d-flex">
                    <div className="col-lg-6 align-self-center">
                        <h3>Movie</h3>
                        <p className="d-wrap">
                            Be sure not to miss these Movies today.
                        </p>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <ul className="nav float-md-right">
                            <li >
                                <a className="btn mr-3 nav-link active" data-toggle="tab" href="#home">Now showing</a>
                            </li>
                            <li >
                                <a className="btn mr-3 nav-link" data-toggle="tab" href="#menu1">Comming soon</a>
                            </li>
                            <li >
                                <a className="btn nav-link" data-toggle="tab" href="#menu2">Popular</a>
                            </li>
                        </ul>

                    </div>
                </div>
                {/* ở đây từng là div row  */}
                <div className="">
                    <div className="tab-content">
                        <div id="home" className="container tab-pane active">
                            <Slider {...settings}>
                                {renderSlider()}
                            </Slider>
                        </div>
                        <div id="menu1" className="container tab-pane fade">
                            <Slider {...settings}>
                                {renderSlider()}
                            </Slider>
                        </div>
                        <div id="menu2" className="container tab-pane fade">
                            <Slider {...settings}>
                                {renderSlider()}
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
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

export default connect(mapStateToProp, mapDispatchToProps)(CarouselMovie);