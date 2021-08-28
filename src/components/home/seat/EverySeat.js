import React, { Component } from 'react'
import imgSeat01 from './../../../asset/img/movie/seat01.png';

import * as action from "../../../redux/action";
import { connect } from 'react-redux';

class EverySeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: false
        }
    }

    // seat-booked
    handleChoose = event => {
        // console.log(this.props.seat);
        let stt = event.target.id;
        if(this.props.seat.daDat === false){
            this.props.propsSeat(stt);
            this.setState({
                choose: !this.state.choose
            })
        }
    }
    
    render() {
        return (
            <li className="single-seat">
                <button className={`btn btn-none ${this.props.seat.daDat? "seat-booked":this.state.choose?"active":""}`} disabled={this.props.seat.daDat} onClick={this.handleChoose}>
                    <img src={imgSeat01} alt="seat" />
                    <span className="seat-number" id={this.props.seat.stt}>
                        {this.props.seat.stt}
                    </span>
                </button>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        propsSeat: seat => {
            dispatch(action.actPropsSeat(seat));
        }
    }
}

export default connect(null, mapDispatchToProps)(EverySeat);