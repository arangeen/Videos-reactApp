import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  //callback function that will be called anytime
  // someone submits a SearchBar
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      //ui container puts a little bit of margin
      //on left and right side of of searchbar
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
