import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as MainActions from '../actions/main';
import * as BotActions from '../actions/bots';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
	render() {
		const { main, bots, actions } = this.props;

		return (
			<div>
				<MuiThemeProvider muiTheme={theme}>
					<div>
						<MainSection main={main} bots={bots} actions={actions} />
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}

App.propTypes = {
	bots: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
	return {
		main: state.main,
		bots: state.bots
	};
}

function mapDispatchToProps (dispatch) {
	const allActions = Object.assign({}, MainActions, BotActions);
	
	return {
		actions: bindActionCreators (allActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
