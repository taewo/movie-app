import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
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

class App extends Component {
  render() {
    return (
      <div className="App">
      {movies.map((movie, index) => {
        return (
          <Movie movieTitle={movie.title} movieImg={movie.imgUrl} key={index} />
        )
      })}
      </div>
    );
  }
}

export default App;
