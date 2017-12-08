import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Add from 'material-ui/svg-icons/content/add-circle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class BotDialog extends Component {
	constructor (props) {
		super(props);

		const botName     = props.botData ? props.botData.botName     : '';
		const description = props.botData ? props.botData.description : '';

		this.state = {
			botName,
			description
		};
	}

	updateBotName = (ev) => {
		const value = ev.target.value;
		
		this.setState({
			botName: value
		});	
	}
	
	updateDescription = (ev) => {
		const value = ev.target.value;

		this.setState({
			description: value
		});	
	}

	saveBot = () => {
		const {actions, editBotIndex} = this.props;
		const {botName, description} = this.state;
		const index = this.props.editBotIndex;


		if (editBotIndex) {
			actions.renameBot(index, botName, description);
		}
		else {
			actions.addBot(botName, description);
		}
		
		actions.closeDialog();
	}

	closeDialog = () => {
		this.props.actions.closeDialog();
	}

	renderActionButtons () {
		return [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.closeDialog}
			/>,
			<FlatButton
				label="Save Bot"
				primary={true}
				keyboardFocused={true}
				onClick={this.saveBot}
			/>
		]
	}

	render() {
		const { editBotIndex, botData, actions } = this.props;
		const {botName, description} = this.state;
		const dialogTitle = botName ? 'Rename Bot' : 'Create New Bot';

		const ButtonActions = this.renderActionButtons();

		return (
			<Dialog
				title={dialogTitle}
				actions={ButtonActions}
				modal={false}
				open={true}
				onRequestClose={this.closeDialog}
			>
				<TextField
					floatingLabelText="Bot Name"
					defaultValue={botName}
					autoFocus={true}
					onChange={this.updateBotName}
				/>
				<br />
				<TextField
					floatingLabelText="Bot Description"
					defaultValue={description}
					multiLine={true}
					onChange={this.updateDescription}
				/>
			</Dialog>
		);
	}
}

BotDialog.propTypes = {
	botData: PropTypes.object,
	editBotIndex: PropTypes.number,
	actions: PropTypes.object.isRequired
};

export default BotDialog;
