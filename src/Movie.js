import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie ({movieTitle, movieImg, genres, synopsis}) {
    return (
        <div className='Movie'>
            <div className='Movie__Columns'>
                <MoviePoster movieImg={movieImg} />
            </div>
            <div className='Movie__Columns'>
                <h1>{movieTitle}</h1>
                <div className='Movie__Genres'>
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className='Movie__Synopsis'>
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster ({movieImg}) {
    return <img src={movieImg} alt="hello" className='Movie__Poster' />
}

function MovieGenre ({genre}) {
    return (
        <span className='Movie__Genre'>{genre}</span>
    )
}

Movie.propTypes = {
    movieTitle: PropTypes.string,
    movieImg: PropTypes.string,
    genres: PropTypes.string,
    synopsis: PropTypes.string,
}

MoviePoster.propTypes = {
    movieImg: PropTypes.string
}

MovieGenre.propTypes = {
    genre: PropTypes.string
}

export default Movie;