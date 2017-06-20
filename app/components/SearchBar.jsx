import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/searchbar';

const cx = classNames.bind(styles);

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.searchArtist(this.state.term)
	}

	render() {
		console.log(this.state.term)
		return (
			<form
				className={cx('search-bar')}
				onSubmit={ event => this.onSubmit(event) }
			>
				<input
					className={cx('search-bar-input')}
					value={ this.state.term }
					placeholder="type here"
					onChange={ event => this.setState({ term: event.target.value}) } />
				<button 
					type="submit"
				>
					<i className="fa fa-search" aria-hidden="true"></i>
				</button>
			</form>
		);
	}
}

export default SearchBar;