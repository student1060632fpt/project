import React, { Component } from 'react';
import Seat from './../../asset/img/seat-plan.png';
import { Link } from "react-router-dom";
import $ from "jquery";
import * as action from './../../redux/action'
import { connect } from 'react-redux';

class SeatModal extends Component {

  componentWillUnmount() {
    // console.log(document.body.classList.value);
    document.body.classList.value = "";
    
    // Khi component bị hủy đi (Rời khỏi component)
    this.props.resetSeat();
    $(".modal-backdrop").remove();

  }
  render() {
    return (
      <div className="modal fade" id="seatModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body text-center p-5">
              <p>Welcome!</p>
              <h3>Select your seats</h3>
              <img src={Seat} className="" alt="seat" />
              <br />
              <Link
                // className="btn button-main"
                to={`/seat/${this.props.seat}`}
                onClick={this.dismiss}
              >
                <button 
                className="btn button-main" 
                // data-dismiss="modal"
                >
                  Seat plan <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    resetSeat: () => {
      dispatch(action.actResetSeat({}));
    }
  };
};

export default connect(null, mapDispatchToProps)(SeatModal);