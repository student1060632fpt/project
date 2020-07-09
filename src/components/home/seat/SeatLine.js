import React, { Component } from 'react'
import imgSeat01 from './../../../asset/img/movie/seat01.png';

export default class SeatLine extends Component {
  renderLine = () => {
    let { listSeat } = this.props;
    for (var i = 0; i < listSeat.length; i++){
      var citrus = listSeat.splice(10);
      console.log(citrus);
      
    }
    return listSeat.map((seat, index) => {
      return (
        <li className="seat-line display-flex" key={index}>
          <span>A</span>
          <ul className="seat--area display-flex">
            <li className="front-seat">
              <ul className="display-flex">
                {this.renderColumn(seat, index)}
              </ul>
            </li>
          </ul>
          <span>A</span>
        </li>
      );
    })
  }
  renderColumn = (index, seat) => {
    for (seat; seat % 10 !== 0; seat++) {
      // console.log(seat);
      return this.renderHTMLseat(seat, index);
    }
  }

  renderHTMLseat = (seat, index) => {
    return (
      <li className="single-seat" key={index}>
        <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          <span className="seat-number">{seat.stt}</span>
        </button>
      </li>
    );
  }

  render() {
    let { listSeat } = this.props;
    // console.log(listSeat[0]);

    return (
      <>
        {this.renderLine()}
        {/* 
    <li className="seat-line display-flex">
      <span>A</span>
      <ul className="seat--area display-flex">
      <li className="front-seat">
        <ul className="display-flex">
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        </ul>
      </li>
      <li className="front-seat">
        <ul className="display-flex">
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        </ul>
      </li>
      <li className="front-seat">
        <ul className="display-flex">
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        <li className="single-seat">
          <button className="btn btn-none" onClick={this.props.openSeat()}>
          <img src={imgSeat01} alt="seat" />
          </button>
        </li>
        </ul>
      </li>
      </ul>
      <span>B</span>
    </li>
     */}
      </>
    )
  }
}
