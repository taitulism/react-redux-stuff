import React, { Component, PropTypes } from 'react';

class MyBotsTitle extends Component {
	render() {
		const count = this.props.count || 0;

		return (
			<div className="my-bots-title">
				My Bots ({count})
			</div>
		);
	}
}

MyBotsTitle.propTypes = {
	count: PropTypes.number
};

export default MyBotsTitle;
