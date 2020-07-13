import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProceedBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
    }
    componentDidMount() {
        this.setState({
            seat: this.props.seat
        })
    }
    renderSeat = () => {
        let {seat} = this.props;
        if (seat === []){
            return "Choose one";
        } else {
            return `${seat}`;
        }
    }

    calculate = () =>{
        let {seat} = this.props;

        return 1;
    }
    render() {
        return (
            <div className="proceed-book bg_img" data-background>
                <div className="proceed-to-book display-flex">
                    <div className="book-item">
                        <span>You have Choosed Seat</span>
                        <h3 className="title">{this.renderSeat()}</h3>
                    </div>
                    <div className="book-item">
                        <span>total price</span>
        <h3 className="title">${this.calculate()}</h3>
                    </div>
                    <div className="book-item">
                        <a href="#" className="btn button-main">proceed</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        seat: state.seatReducer.seatNumber
    }
}

export default connect(mapStateToProps, null)(ProceedBook);