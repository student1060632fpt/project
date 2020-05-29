import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from "../../redux/action";


class Seat extends Component {
    componentDidMount(){
        let id = this.props.match.params.id;
        this.props.getSeat(id);
    }
    render() {
        return (
            <div>
                Hello Seat
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSeat: id => {
            dispatch(action.actSeat(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(Seat);