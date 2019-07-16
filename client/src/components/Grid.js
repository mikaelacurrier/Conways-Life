import React, { Component } from 'react';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			continue: true,
			count: 1
		};
	}
	componentDidMount() {
		requestAnimationFrame(timestamp => {
			this.onAimFrame(timestamp);
			const canvas = this.refs.canvas;
			const context = canvas.getContext('2d');
			const bh = 500;
			const bw = 500;
			const p = 10;

			function drawBoard() {
				for (let x = 0; x <= bw; x += 20) {
					context.moveTo(0.5 + x + p, p);
					context.lineTo(0.5 + x + p, bh + p);
				}

				for (let x = 0; x <= bh; x += 20) {
					context.moveTo(p, 0.5 + x + p);
					context.lineTo(bw + p, 0.5 + x + p);
				}

				context.strokeStyle = 'black';
				context.stroke();
			}

			drawBoard();
			let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			let buffer = imageData.data; // Obtained from getImageData()
	
			let x = 10,
				y = 20;
			let index = (y * 500 + x) * 4;
	
			buffer[index + 0] = 0xff; // Red: 0xff == 255, full intensity
			buffer[index + 1] = 0x00; // Green: zero intensity
			buffer[index + 2] = 0x00; // Blue: zero intensity
			buffer[index + 3] = 0xff; // Alpha: 0xff == 255, fully opaque
	
			context.putImageData(imageData, 0, 0);
		});
		
	}

	componentWillUnmount() {
		this.setState({ continue: false });
	}

	onAimFrame(timestamp) {
		if (this.state.continue) {
			requestAnimationFrame(timestamp => {
				this.onAimFrame(timestamp);
				this.setState({ count: this.state.count + 1 });
			});
		}
		const canvas = this.refs.canvas;
		const context = canvas.getContext('2d');

	}
	handler = () => {
		this.setState({ continue: !this.state.continue });
	};

	render() {
		return (
			<div>
				<canvas ref="canvas" width="500px" height="500px" />
				<button onClick={() => this.handler()}>Change</button>
			</div>
		);
	}
}

export default Grid;
