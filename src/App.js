import React from "react";
import { requests, titles } from "./requests";
import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";

const App = _ => {
  return (
    <div className="App">
      <NavBar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      {Object.keys(requests).map((request, i) => {
        if (titles[i] === "NETFLIX ORIGINALS") {
          return (
            <Row
              key={i}
              title={titles[i]}
              fetchUrl={requests[request]}
              isLarge={true}
            />
          );
        }
        return <Row key={i} title={titles[i]} fetchUrl={requests[request]} />;
      })}
    </div>
  );
}

export default App;
