import React, { Component } from 'react';
import './../../js/datepicker';

export default class AdminQuanLyLichChieu extends Component {
    render() {
        return (
            <div>
                Admin
               <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày làm" />
            </div>
        )
    }
}
