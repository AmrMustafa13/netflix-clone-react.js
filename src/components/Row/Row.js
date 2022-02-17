import React, { Component } from "react";
import "./Row.css";
import { IMAGE_BASE_URL_ROW } from "../../requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "axios";

class Row extends Component {
  state = {
    movies: [],
    trailerUrl: "",
  };

  componentDidMount() {
    if (localStorage.getItem(`${this.props.title}`)) {
      const state = JSON.parse(localStorage.getItem(`${this.props.title}`));
      this.setState({ ...state });
    } else {
      this.fetchMovies(this.props.fetchUrl);
    }
  }

  fetchMovies = (fetchUrl) => {
    axios
      .get(fetchUrl)
      .then((res) => {
        this.setState(
          {
            movies: res.data.results,
          },
          () => {
            localStorage.setItem(
              `${this.props.title}`,
              JSON.stringify(this.state)
            );
          }
        );
      })
      .catch((err) => console.log(`Error : ${err}`));
  };

  handleClick = (movie) => {
    if (this.state.trailerUrl) {
      this.setState({
        trailerUrl: "",
      });
    } else {
      movieTrailer(movie.name || movie.original_name || movie.original_title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          this.setState({
            trailerUrl: urlParams.get("v"),
          });
        })
        .catch((err) => console.log("Error :", err));
    }
  };

  render() {
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="row">
        <h2>{this.props.title}</h2>
        <div className="row-posters">
          {this.state.movies.map((movie) => {
            return (
              <img
                onClick={() => this.handleClick(movie)}
                className={`row-poster ${this.props.isLarge && "row-poster-large"
                  }`}
                alt={movie.name ? movie.name : "poster"}
                key={movie.id}
                src={
                  !this.props.isLarge
                    ? `${IMAGE_BASE_URL_ROW}${movie.backdrop_path}`
                    : `${IMAGE_BASE_URL_ROW}${movie.poster_path}`
                }
              />
            );
          })}
        </div>
        {this.state.trailerUrl && (
          <YouTube
            className="youtube-iframe"
            opts={opts}
            videoId={this.state.trailerUrl}
          />
        )}
      </div>
    );
  }
}

export default Row;
