import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Add from 'material-ui/svg-icons/content/add-circle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CreateBot extends Component {
	state = {
		open: false,
		botName: '',
		description: ''
	};

	openDialog = () => {
		this.setState({
			open: true
		});
	};

	closeDialog = () => {
		this.setState({
			open: false
		});
	};

	saveBot = () => {
		const {botName, description} = this.state;

		this.props.actions.addBot(botName, description);
		
		this.closeDialog();
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
	
	render() {
		const actions = [
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
		];

		return (
			<div>
				<RaisedButton
					label="Create New Bot"
					labelPosition="after"
					icon={<Add />}
					primary={true}
					onClick={this.openDialog}
				/>
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
						multiLine={true}
						onChange={this.updateDescription}
					/>
				</Dialog>
			</div>
		);
	}
}

export default CreateBot;
