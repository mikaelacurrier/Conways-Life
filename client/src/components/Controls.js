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
			this.setState({ play: true });
			this.props.playButton();
		} else {
			this.setState({ play: false });
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
		} else {
			play_pause = (
				<button onClick={this.changePlayPause} name="pause">
					Pause
				</button>
			);
		}
		return (
			<div className="controls">
				{play_pause}
				<button onClick={this.props.clear}>Clear</button>
				<button onClick={this.props.seedBoard}>Seed</button>
				<button onClick={this.props.fast}>Fast</button> 
				<button onClick={this.props.slow}>Slow</button>
			</div>
		);
	}
}

export default Controls;
