import React, { Component } from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import ArtistList from '../containers/ArtistList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <ArtistList />
      </div>
    )
  }
}

export default App;