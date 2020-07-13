import React, { Component } from 'react'
import imgSeat01 from './../../../asset/img/movie/seat01.png';
import $ from 'jquery';

import * as action from "../../../redux/action";
import { connect } from 'react-redux';

class EverySeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: false
        }
    }

    componentDidMount(){
        if (this.props.seat.daDat === true) {
            console.log("có người đặt rùi huhu");
            $(`.btn-none #${this.props.seat.stt}`).parent().parent().addClass("seat-booked");
        }
    }

    // seat-booked
    handleChoose = event => {
        // console.log(this.props.seat);
        let stt = event.target.id;
        if(this.props.seat.daDat === false){
            this.props.propsSeat(stt);
            if (this.state.choose === false) {
                $(`.btn-none #${stt}`).parent().addClass("active");
            } else {
                $(`.btn-none #${stt}`).parent().removeClass("active");
            }
            this.setState({
                choose: !this.state.choose
            })
        }
    }
    
    render() {
        return (
            <li className="single-seat">
                <button className="btn btn-none" onClick={this.handleChoose}>
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