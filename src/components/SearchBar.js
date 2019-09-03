import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //when you type something in search, it will update here
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    // this is so page doesnt refresh when u push enter
    event.preventDefault();

    //Todo: make sure we call callback from parent component
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
