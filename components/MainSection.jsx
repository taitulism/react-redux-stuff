import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add-circle';

import MyBotsTitle from './MyBotsTitle';
import SearchBot   from './SearchBot';
import BotList     from './BotList';
import BotDialog   from './BotDialog';

class MainSection extends Component {
	renderFilteredBots (query, filteredBots) {
		if (filteredBots && filteredBots.length > 0) {
			return <BotList bots={filteredBots} actions={this.props.actions} />
		}
		else {
			return <div className="no-results">no results</div>
		}
	}

	openCreateDialog = () => {
		this.props.actions.openDialog('CREATE');
	};

	render() {
		const { main, bots, actions } = this.props;
		const { isDialogOpen, dialogType, editBotIndex, searchQuery } = main;
		
		const showAllBots = !main.searchQuery;

		return (
			<section className="main-section">
				<div className="title-and-tools">
					<MyBotsTitle count={bots.length} />
					<SearchBot query={searchQuery} actions={actions} />
					<RaisedButton
						label="Create New Bot"
						labelPosition="after"
						icon={<Add />}
						primary={true}
						onClick={this.openCreateDialog}
					/>
				</div>
				
				{showAllBots
					? <BotList bots={bots} actions={actions} />
					: this.renderFilteredBots(searchQuery, main.filteredBots)
				}
				
				{isDialogOpen &&
					<BotDialog
						dialogType={dialogType}
						botData={bots[editBotIndex]}
						editBotIndex={editBotIndex}
						actions={actions}
					/>
				}
			</section>
		);
	}
}

MainSection.propTypes = {
	main: PropTypes.object.isRequired,
	bots: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default MainSection;
