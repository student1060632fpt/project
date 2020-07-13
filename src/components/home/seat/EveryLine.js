import React, { Component } from 'react'
import EverySeat from './EverySeat';

export default class EveryLine extends Component {
    renderSeat = () => {
        let { line } = this.props;
        // console.log(line);
        return line.map((seat, index) => {
            return (
                <EverySeat
                    key={index}
                    seat={seat}
                />
            );
        })
    }
    render() {
        return (
            <li className="seat-line display-flex">
                <span>{this.props.letterLine}</span>
                <ul className="seat--area display-flex">
                    <li className="front-seat">
                        <ul className="display-flex">
                            {this.renderSeat()}
                        </ul>
                    </li>
                </ul>
                <span>{this.props.letterLine}</span>
            </li>
        )
    }
}
