import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("cars");
  }
  //callback function that will be called anytime
  // someone submits a SearchBar
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    //console.log(response) to view data, items
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  // new callback that will be called everytime video is selected
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      //ui container puts a little bit of margin
      //on left and right side of of searchbar
      // remember you can name onSubmit and onVideoSelect
      // anything you want here
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
