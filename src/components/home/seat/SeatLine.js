import React, { Component } from 'react'
import EveryLine from './EveryLine';

export default class SeatLine extends Component {
  renderLine = () => {
    let { listSeat } = this.props;
    let line = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let letterLine = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q"];
    for (var i = 0; i < line.length; i++) {
      line[i] = listSeat.splice(0, 10);
    }
    return line.map((seat, index) => {
      return (
        <EveryLine
          key={index}
          seat={seat}
          letterLine={letterLine[index]}
          line={line[index]}
        />
      );
    })
  }

  render() {
    let { listSeat } = this.props;
    // console.log(listSeat[0]);
    return (
      <>
        <div className="screen-wrapper">
          <ul className="seat-area">
          {this.renderLine()}
        </ul>
      </div>
      </>
    )
  }
}
