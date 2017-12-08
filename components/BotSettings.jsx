import React, { Component, PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Settings from 'material-ui/svg-icons/action/settings';

const botImgDataURI = 'data:image/png;base64,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';

class BotSettings extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			open: false
		};
	}

	openSettingsMenu = (event) => {
		event.preventDefault();
	
		this.setState({
			open: true,
			anchorEl: event.currentTarget
		});
	};

	closeSettingsMenu = () => {
		this.setState({
			open: false
		});
	};

	deleteBot = (index) => {
		this.props.actions.deleteBot(index);

		this.closeSettingsMenu();
	};

	cloneBot = (index) => {
		this.props.actions.cloneBot(index);

		this.closeSettingsMenu();
	};

	openRenameBotDialog = (index) => {
		this.props.actions.openDialog('RENAME', index);

		this.closeSettingsMenu();
	};

	render() {
		const index = this.props.index;

		return (
			<div className="float-right">
				<Settings style={{color:'gray', cursor: 'pointer'}} onClick={this.openSettingsMenu.bind(this)}/>
				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
					onRequestClose={this.closeSettingsMenu}
				>
					<Menu>
						<MenuItem
							primaryText="Rename"
							onClick={this.openRenameBotDialog.bind(this, index)}
						/>
						<MenuItem
							primaryText="Clone" 
							onClick={this.cloneBot.bind(this, index)}
						/>
						<MenuItem
							primaryText="Delete"
							onClick={this.deleteBot.bind(this, index)}
						/>
					</Menu>
				</Popover>
			</div>
		);
	}
}

export default BotSettings;
