import React, { Component } from "react";
import { IMAGE_BASE_URL_BANNER } from "../../requests";
import "./Banner.css";
import axios from "axios";

class Banner extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { id } = this.state.movie;
    if (localStorage.getItem(`${id}`)) {
      const state = JSON.parse(localStorage.getItem(`${id}`));
      this.setState({ ...state });
    } else {
      this.fetchRandomImage(this.props.fetchUrl);
    }
  }

  fetchRandomImage = (fetchUrl) => {
    axios
      .get(fetchUrl)
      .then((res) => {
        const movie =
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ];
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
      })
      .catch((err) => console.log(`Error : ${err}`));
  };

  render() {
    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    const {
      name,
      original_name,
      original_title,
      overview,
      backdrop_path,
    } = this.state.movie;
    return (
      <header
        className="banner"
        style={{
          background: `url("${IMAGE_BASE_URL_BANNER}${
            this.state.movie && backdrop_path
          }")`,
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {name || original_name || original_title}
          </h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">{truncate(overview, 150)}</h1>
        </div>
        <div className="banner-fade-bottom" />
      </header>
    );
  }
}

export default Banner;
