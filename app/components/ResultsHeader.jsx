import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/resultsheader';

const cx = classNames.bind(styles);

class ResultsHeader extends Component {
  render() {
    return (
      <div className={cx('results-header')}>
        {/*<h1 className={cx('results-header__h1')}>You searched for ""</h1>*/}
      </div>
    )
  }
};

export default ResultsHeader;