import React, { Component } from 'react'
import Tomatoes from './../../../asset/img/tomatoes.png';
import CountUp from 'react-countup';

export default class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: "your"
        }
    }
    renderTomatoes = () => {
        const { danhGia } = this.props.movie;
        if (danhGia) {
            return <CountUp end={danhGia * 10} />;
        }
    }
    handleRating = event => {
        let rate = event.target.value;
        this.setState({
            rate
        })
    }

    render() {
        return (
            <>
                <div className="col-sm-3 tomatoes text-center">
                    <img src={Tomatoes} alt="tomatoes" />

                    <span>{this.renderTomatoes()}%</span>
                    <p className="mt-2">Rotten Tomatoes</p>
                </div>
                <div className="col-sm-3 text-center">

                    <fieldset className="rating">
                        <input type="radio" id="heart5" name="rating" defaultValue={5} onChange={this.handleRating} />
                        <label className="full" htmlFor="heart5" title="Awesome - 5 hearts" />
                        <input type="radio" id="heart4" name="rating" defaultValue={4} onChange={this.handleRating} />
                        <label className="full" htmlFor="heart4" title="Pretty good - 4 hearts" />
                        <input type="radio" id="heart3" name="rating" defaultValue={3} onChange={this.handleRating} />
                        <label className="full" htmlFor="heart3" title="Meh - 3 hearts" />
                        <input type="radio" id="heart2" name="rating" defaultValue={2} onChange={this.handleRating} />
                        <label className="full" htmlFor="heart2" title="Kinda bad - 2 hearts" />
                        <input type="radio" id="heart1" name="rating" defaultValue={1} onChange={this.handleRating} />
                        <label className="full" htmlFor="heart1" title="Sucks big time - 1 heart" />
                    </fieldset>

                    <br />
                    <br />
                    <span className="rating-number">{this.state.rate}</span> score

                  </div>
                <div className="col-sm-6 film-button">
                    <button className="btn-normal mr-3" data-toggle="modal" data-target="#exampleModal">Trailer</button>
                </div>
            </>
        )
    }
}
