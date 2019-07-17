import React, { Component } from 'react';

class Controls extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<button onClick={this.props.playButton}>Play</button>
				<button onClick={this.props.pauseButton}>Pause</button>
				<button onClick={this.props.clear}>Clear</button>
				<button onClick={this.props.seedBoard}>Seed</button>
			</div>
		);
	}
}

export default Controls;
