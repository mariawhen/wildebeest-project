import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import { searchArtist } from '../actions/search';

class SearchBarContainer extends Component {
  render() {
    return (
      <SearchBar searchArtist={ this.props.searchArtist } />
    )
  }
};

function mapStateToProps(state) {
  return { 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    searchArtist: artist => {
      dispatch(searchArtist(artist))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);