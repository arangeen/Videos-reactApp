import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      //ui container puts a little bit of margin
      //on left and right side of of searchbar
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
