import React, { Component } from 'react';
import Date from './../../asset/img/date.png';
import Cinema from './../../asset/img/cinema.png';
import $ from "jquery";
import { connect } from 'react-redux';
import * as action from './../../redux/action'
import { Link } from 'react-router-dom';

class TicketSearch extends Component {
    componentDidMount() {
        $('select').each(function () {
            var $this = $(this), numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function (e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function () {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                //console.log($this.val());
            });

            $(document).click(function () {
                $styledSelect.removeClass('active');
                $list.hide();
            });

        });
    }
    render() {
        return (
            <section className="container ticket-search-section">
                <div className="search-tab text-center">
                    <div className="title">
                        <p className="category">Welcome to Cinemax!</p>
                        <h3 className="text-uppercase">What are you looking for?</h3>
                    </div>
                    <form className="form-inline">
                        <div className="form-group col-lg-4 col-md-12">
                            <input 
                            type="text" 
                            id="search" 
                            placeholder="Search for movie" 
                            onChange={e => {this.props.getKeyWord(e.target.value)}}
                            />
                            <Link className="btn btn-search" type="button" to={`/about`}>
                                <i className="fa fa-search"></i>
                            </Link>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 my-select">
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
                        <div className="form-group col-lg-4 col-md-6 my-select">
                            <div className="thumb">
                                <img src={Cinema} className="" alt="cinema" />
                            </div>
                            <span className="type">Cinema</span>
                            <select className="select-bar">
                                <option value="26-12-19">BHD</option>
                                <option value="26-12-19">CGV</option>
                                <option value="26-12-19">Cinestar</option>
                                <option value="26-12-19">Lotte Cinema</option>
                            </select>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getKeyWord: keyword => {
            dispatch(action.actGetKeyWord(keyword))
        }
    }
}

export default connect (null, mapDispatchToProps)(TicketSearch);