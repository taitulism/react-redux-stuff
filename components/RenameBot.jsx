import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class CreateBot extends Component {
	state = {
		open: false,
		botName: '',
		description: ''
	};

	renameBot = (index) => {
		this.props.actions.renameBot(index);
	};

	saveBot = () => {
		const {botName, description} = this.state;

		this.props.actions.addBot(botName, description);
		
		this.closeDialog();
	}
	
	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.closeDialog}
			/>,
			<FlatButton
				label="Rename Bot"
				primary={true}
				keyboardFocused={true}
				onClick={this.saveBot}
			/>
		];

		return (
			<Dialog
				title="Create New Bot"
				actions={actions}
				modal={false}
				open={this.state.open}
				onRequestClose={this.closeDialog}
			>
				<TextField
					floatingLabelText="Bot Name"
					onChange={this.updateBotName}
				/>
				<br />
				<TextField
					floatingLabelText="Bot Description"
					onChange={this.updateDescription}
				/>
			</Dialog>
		);
	}
}

export default CreateBot;
