import React, { Component } from 'react';
import Seat from './../../asset/img/seat-plan.png';

export default class SeatModal extends Component {
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
                            <button className="btn button-main">Seat plan <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
