import React, { Component } from 'react';

import Avatar from './../../asset/img/avatar.jpg';
import Icon03 from './../../asset/img/event-icon03.png';
import Icon01 from './../../asset/img/event-icon01.png';
import Icon02 from './../../asset/img/event-icon02.png';

import BannerAccount from '../../components/home/BannerAccount';
import ModalAccount from '../../components/home/ModalAccount';

export default class Account extends Component {
    constructor(props) {
         super(props);
        this.state = {
            user: null
        }
    }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    if (user) {
      this.setState({
        user
      })
      console.log(user);
      
    } else {
      this.setState({
        user: null
      })
    }
  }
  render() {
      let user;
      if (this.state.user) {
        user = this.state.user
      } else{
        user = {
            taiKhoan: "",
            hoTen: "",
            email: "",
            soDT: "",
            maNhom: "",
            maLoaiNguoiDung: "",
            accessToken: ""
          }
      }
    return (
      <>
        <BannerAccount/>
        <section className="speaker-single padding-top pt-lg-0">
          <div className="container">
            <div className="speaker-wrapper bg-six padding-top padding-bottom row">
              <div className="col-md-4 speaker-thumb">
                <img src={Avatar} alt="speaker" />
                <button className="btn btn-normal" data-toggle="modal" data-target="#AccountModal">
                    Edit
                </button>
              </div>
              <div className="col-md-8 speaker-content">
                <div className="author">
    <h2 className="title">{user.hoTen}</h2>
                  <div className="info">Description about me, my knowledge and experience</div>
                </div>
                <div className="speak-container">
                  <div className="speak-row row">
                    <div className="item col-sm-6 col-xs-12">
                      <div className="item-thumb ml-3">
                        <img src={Icon03} alt="event" />
                      </div>
                      <div className="item-content">
                        <span className="up">Drop me a line:</span>
                        <a href="true">{user.email}</a>
                      </div>
                    </div>
                    <div className="item footer-icon col-sm-6 col-xs-12">
                      <a href>
                        <i className="fa fa-facebook-f" />
                      </a>
                      <a href>
                        <i className="fa fa-twitter" aria-hidden="true">
                        </i>
                      </a>
                      <a href>
                        <i className="fa fa-pinterest-p" aria-hidden="true">
                        </i>
                      </a>
                      <a href>
                        <i className="fa fa-google" aria-hidden="true">
                        </i>
                      </a>
                      <a href>
                        <i className="fa fa-instagram" aria-hidden="true">
                        </i>
                      </a>
                    </div>
                  </div>
                  <div className="speak-row row">
                    <div className="item col-sm-6">
                      <div className="item-thumb ml-3">
                        <img src={Icon02} alt="event" />
                      </div>
                      <div className="item-content">
                        <span className="up">Call me:</span>
                        <a href="#">{user.soDT}</a>
                      </div>
                    </div>
                    <div className="item col-sm-6">
                      <div className="item-thumb ml-3">
                        <img src={Icon01} alt="event" />
                      </div>
                      <div className="item-content">
    <span className="up">{user.taiKhoan}</span>
                        <a href="#">**********</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content mt-5">
                  <h3 className="subtitle">About me</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe omnis sint esse totam quas, ab
                  facere perferendis mollitia enim sit aperiam consectetur, voluptates vero. Doloribus eveniet quis quo
                  incidunt quibusdam earum voluptas autem vitae beatae, reprehenderit ea dolorem et fugiat ullam cumque
                  accusamus at animi adipisci. Corrupti, perspiciatis voluptates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalAccount/>
      </>
    )
  }
}
