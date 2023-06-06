import React, { Component } from 'react';

class MovieReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=xztKOvFXdLubWKODN4FXFH19L01jLQXO")
      .then((res) => res.json())
      .then((movies) => {
        this.setState({movies:movies.results});
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="movies">
        <h1 style={{color:"#233b67"}}>The 90s_Cinema &rarr;</h1>
        {this.state.movies.map(movie=> <div className="reviews">
          <h2 style={{color:"#fed38e", fontWeight:"bold"}}>{movie.display_title}</h2>
          <hr className="line"/>
          <p className="p-tag" style={{fontWeight:"Bold"}}>Writer: {movie.byline}</p>
          <p className="p-tag" style={{fontWeight:"Bold"}}>Movie Headline: {movie.headline}</p>
          <p className="p-tag" style={{fontWeight:"Bold"}}>Critic Pick: {movie.critics_pick}</p>
          <p className="p-tag" style={{fontWeight:"Bold"}}>Rating: {movie.mpaa_rating}</p>
        </div>)}
      </div>
    )
  }
}

export default MovieReview;