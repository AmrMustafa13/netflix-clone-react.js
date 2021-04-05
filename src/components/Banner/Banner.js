import React, { Component } from "react";
import { IMAGE_BASE_URL } from "../../requests";
import "./Banner.css";

class Banner extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    if (localStorage.getItem(`${this.state.movie.id}`)) {
      const state = JSON.parse(localStorage.getItem(`${this.state.movie.id}`));
      this.setState({ ...state });
    } else {
      this.fetchRandomImage(this.props.fetchUrl);
    }
  }

  fetchRandomImage = async (fetchUrl) => {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    const movie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    this.setState(
      {
        movie: { ...movie },
      },
      () => {
        localStorage.setItem(
          `${this.state.movie.id}`,
          JSON.stringify(this.state.movie)
        );
      }
    );
  };

  render() {
    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
      <header
        className="banner"
        style={{
          background: `url("${IMAGE_BASE_URL}${
            this.state.movie && this.state.movie.backdrop_path
          }")`,
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {this.state.movie.name ||
              this.state.movie.original_name ||
              this.state.movie.original_title}
          </h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">
            {truncate(this.state.movie.overview, 150)}
          </h1>
        </div>
        <div className="banner-fade-bottom" />
      </header>
    );
  }
}

export default Banner;
