import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/artistlistitem';

const cx = classNames.bind(styles);

class ArtistListItem extends Component {
  renderTracks() {
    return this.props.artist.tracks.slice(0, 5).map(track => {
      return (
        <a href={track.external_urls.spotify} target="_blank"><li key={ track.id }> { track.name } </li></a>
      );
    });
  }

  render() {
    return (
      <div className={cx('artist-list-item')}>
        <div className={cx('artist-list-item__wave')}></div>
        <div className={cx('artist-list-item__wave', 'two')}></div>
        <div className={cx('artist-list-item__wave', 'three')}></div>

        <p className={cx('artist-list-item__title')}>
          { this.props.artist.name }
        </p>

        <div className={cx('artist-list-item__tracks')}>
          <ul>
            { this.renderTracks() }
          </ul>
        </div>
      </div>
    )
  }
};

export default ArtistListItem;