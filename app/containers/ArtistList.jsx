import React, { Component } from 'react';
import ArtistListItem from '../components/ArtistListItem';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../css/components/artistlist';

const cx = classNames.bind(styles);

class ArtistList extends Component {
  renderArtistList() {
    return this.props.relatedArtists.map(artist => {
      console.log(artist)
      return (
        <ArtistListItem artist={ artist } />
      );
    });
  }

  render() {
    if (this.props.relatedArtists.length) {
      return (
        <div className={cx('search__container')}>
          <p className={cx('search-header')}>Try these Artists...</p>
          <div className={cx('artist-list-item__container')}>
            { this.renderArtistList() } 
          </div>
        </div>
      )
    } else {
      return (
        <div className={cx('search-header__container')}>
          <p className={cx('search-subheader')}>discover new music</p>
          <p className={cx('search__initial-header')}>Search for an artist...</p>
        </div>
      )
    }
  }
};

function mapStateToProps(state) {
  return { 
    relatedArtists: state.relatedArtists
  };
}

export default connect(mapStateToProps)(ArtistList);