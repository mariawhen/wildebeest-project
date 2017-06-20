import React, { Component } from 'react';
import ArtistListItem from '../components/ArtistListItem';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../css/components/artistlist';

const cx = classNames.bind(styles);

class ArtistList extends Component {
  renderArtistList() {
    return this.props.relatedArtists.map(artist => {
      return (
        <ArtistListItem artist={ artist } />
      );
    });
  }

  render() {
    if (this.props.relatedArtists.length) {
      return (
        <div className={cx('artist-list-item')}>
          <p className={cx('artist-list-item__header')}>Try these Artists...</p>
          <div className={cx('artist-list-item__container')}>
            { this.renderArtistList() } 
          </div>
        </div>
      )
    } else {
      return (
        <div className={cx('artist-list-item__initial-container')}>
          <p className={cx('artist-list-item__subheader')}>discover new music</p>
          <p className={cx('artist-list-item__initial-header')}>Search for an artist...</p>
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