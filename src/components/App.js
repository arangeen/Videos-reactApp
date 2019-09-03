import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  //callback function that will be called anytime
  // someone submits a SearchBar
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    //console.log(response) to view data, items
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      //ui container puts a little bit of margin
      //on left and right side of of searchbar
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
