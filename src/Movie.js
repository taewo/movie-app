import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    static propTypes = {
        movieTitle: PropTypes.string.isRequired,
        movieImg: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div>
                영화 제목 : {this.props.movieTitle}
                <MoviePoster movieImg={this.props.movieImg} />
            </div>
        )
    }
}

class MoviePoster extends Component {
    static propTypes = {
        movieImg: PropTypes.string.isRequired,
    }

    render() {
        return (
            <img src={this.props.movieImg} />
        )
    }
}

export default Movie;