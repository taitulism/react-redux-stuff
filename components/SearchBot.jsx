import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';

const textFieldStyle = {
	width: 150,
	marginRight: 20,
	fontSize: 14
};

class SearchBot extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isSearching: false
		};
	}

	showSearchBox = () => {
		this.setState({isSearching: true});
	};
	
	stopSearch = () => {
		if (this.props.query) return;

		this.setState({
			isSearching: false
		});
	};
	
	updateQuery = (ev) => {
		const query = ev.target.value;
		
		this.props.actions.findBotByName(query);
	};

	render () {
		const isSearching = this.state.isSearching;

		return (
			isSearching 
				? <TextField
					hintText="Find Bot By Name"
					onChange={this.updateQuery}
					style={textFieldStyle}
					// onBlur={this.stopSearch}
					autoFocus={true}
				/> 
				: <RaisedButton
					icon={<Search />}
					onClick={this.showSearchBox}
				/>
		);
	}
}

SearchBot.propTypes = {
	query: PropTypes.string,
	actions: PropTypes.object.isRequired
};

export default SearchBot;
