import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "극한직업",
            imgUrl: "http://www.moviechart.co.kr/thumb?type=1&width=700&height=500&m_code=20182530&source=http://www.moviechart.co.kr/assets/upload/poster/190117101529_6201.jpg",
          },
          {
            title: "인생후르츠",
            imgUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81367/81367_1000.jpg",
          },
          {
            title: "우리들",
            imgUrl: "http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/0707/IE001987882_STD.jpg",
          },
          {
            title: "아바타",
            imgUrl: "https://s-i.huffpost.com/gen/5166168/thumbs/o-THE-570.jpg?7",
          }
        ]
      })
    }, 2000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie movieTitle={movie.title} movieImg={movie.imgUrl} key={index} />
      )
    })
    return movies;
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
