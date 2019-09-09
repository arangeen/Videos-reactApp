import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
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

  // new callback that will be called everytime video is selected
  onVideoSelect = video => {
    console.log("From the App!".video);
  };

  render() {
    return (
      //ui container puts a little bit of margin
      //on left and right side of of searchbar
      // remember you can name onSubmit and onVideoSelect
      // anything you want here
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
