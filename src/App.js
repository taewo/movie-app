import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie movieTitle={movie.title} movieImg={movie.large_cover_image} key={index} />
      )
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(data => data.json())
    .then(json => json.data.movies)
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
