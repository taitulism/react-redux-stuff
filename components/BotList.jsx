import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { List } from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';

import BotItem from './BotItem';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		// height: 450,
		// overflowY: 'auto'
	},
	gridTile: {
		// height: 500,
		margin: 20
	}
};

class BotList extends Component {
	render () {
		const { bots } = this.props;

		return (
			<div style={styles.root}>
				<GridList className="bots-list" cols={2} cellHeight={180} style={styles.gridList}>
					{ 
						bots.map((bot, index) =>
							<GridTile key={index} style={styles.gridTile} >
								<BotItem
									key={index}
									index={index}
									botData={bot}
									actions={this.props.actions}
								/>
							</GridTile>
						)
					}
				</GridList>
			</div>
		);
	}
}

BotList.propTypes = {
	actions: PropTypes.object.isRequired,
	bots: PropTypes.array.isRequired
};

export default BotList;
