import React, { Component } from 'react';
import Date from './../../asset/img/date.png';
import Cinema from './../../asset/img/cinema.png';

export default class TicketSearch extends Component {
    render() {
        return (
            <section className="container ticket-search-section">
                <div className="search-tab text-center">
                    <p className="category">Welcome to Cinemax!</p>
                    <h3 className="text-uppercase">What are you looking for?</h3>
                    <form className="form-inline">
                        <div className="form-group col-md-6">
                            <input type="text" placeholder="Search for movie" />
                            <button className="btn btn-search" x type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="thumb">
                                <img src={Date} className="" alt="date" />
                            </div>
                            <span className="type">Date</span>
                            <select className="select-bar">
                                <option value="26-12-19">23/10/2020</option>
                                <option value="26-12-19">24/10/2020</option>
                                <option value="26-12-19">25/10/2020</option>
                                <option value="26-12-19">26/10/2020</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="thumb">
                                <img src={Cinema} className="" alt="cinema" />
                            </div>
                            <span className="type">Cinema</span>
                            <select className="select-bar">
                                <option value="26-12-19">23/10/2020</option>
                                <option value="26-12-19">24/10/2020</option>
                                <option value="26-12-19">25/10/2020</option>
                                <option value="26-12-19">26/10/2020</option>
                            </select>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
