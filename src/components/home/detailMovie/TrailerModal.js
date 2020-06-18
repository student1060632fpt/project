import React, { Component } from 'react'

export default class TrailerModal extends Component {
    render() {
        let {movie} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-trailer">
                        <div className="modal-header">
                            <p className="modal-title" id="exampleModalLabel">Trailer  {movie.tenPhim}</p>
                            <button type="btn-normal" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <iframe style={{ width: 100 + "%", height: 300 + "px" }} src={movie.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
