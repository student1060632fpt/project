import React, { Component } from 'react';
//import chọn ngày
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class AdminQuanLyLichChieu extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <div>
                Admin
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
