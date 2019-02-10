import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie ({movieTitle, movieImg}) {
    return (
        <div>
            영화 제목 : {movieTitle}
            <MoviePoster movieImg={movieImg} />
        </div>
    )
}

function MoviePoster ({movieImg}) {
    return <img src={movieImg} />
}

Movie.propTypes = {
    movieTitle: PropTypes.string,
    movieImg: PropTypes.string,
}

MoviePoster.propTypes = {
    movieImg: PropTypes.string
}

export default Movie;