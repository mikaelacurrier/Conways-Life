import React, { Component } from 'react';

class Controls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			play: true
		};
	}
	changePlayPause = e => {
		if (e.target.name === 'play') {
			this.setState({ play: false });
			this.props.playButton();
		} else {
			this.setState({ play: true });
			this.props.pauseButton();
		}
	};
	render() {
		let play_pause = (
			<button onClick={this.changePlayPause} name="pause">
				Pause
			</button>
		);
		if (this.state.play === false) {
			play_pause = (
				<button onClick={this.changePlayPause} name="play">
					Play
				</button>
			);
		}
		return (
			<div>
				{play_pause}
				<button onClick={this.props.clear}>Clear</button>
				<button onClick={this.props.seedBoard}>Seed</button>
			</div>
		);
	}
}

export default Controls;
