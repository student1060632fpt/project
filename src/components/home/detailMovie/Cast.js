import React, { Component } from 'react'
import Slider from "react-slick";

import Act1 from './../../../asset/img/act1.jpeg';
import Act3 from './../../../asset/img/act3.jpg';
import Act4 from './../../../asset/img/act4.png';
import Act5 from './../../../asset/img/act5.jpg';
import Act6 from './../../../asset/img/act6.jpg';
import Act7 from './../../../asset/img/act7.jpg';
import Act8 from './../../../asset/img/act8.jpg';
import Act9 from './../../../asset/img/act9.jpg';

export default class Cast extends Component {
    render() {
        let {movie} = this.props;
        const settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]
          };
        return (
            <>
                <h3>Synopsis</h3>
              <p>{movie.moTa}</p>

              <h3>Cast</h3>
              
              <Slider {...settings2}>
                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act1} alt="cast" className="avatar-cast" />
                    </div>
                    <p className="cast-name"><a href="">Chris Evan</a></p>
                    <p className="comedien-name">Captain America</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act5} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Denis Đặng</a></p>
                    <p className="comedien-name">White Lotus</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act3} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Zachary Quinto</a></p>
                    <p className="comedien-name">Spock</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act4} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Charlize theron</a></p>
                    <p className="comedien-name">Furiosa</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act6} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Jessica Chastain</a></p>
                    <p className="comedien-name">Sara</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act7} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Michael Fassbender</a></p>
                    <p className="comedien-name">Magneto</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act8} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">James McAvoy</a></p>
                    <p className="comedien-name">Professor X</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="my-cast">
                    <div className="contain-avatar-cast">
                      <img src={Act9} alt="cast" className="avatar-cast" />
                    </div>

                    <p className="cast-name"><a href="">Ewan McGregor</a></p>
                    <p className="comedien-name">Doctor Sleep</p>
                  </div>
                </div>
              </Slider>
            </>
        )
    }
}
