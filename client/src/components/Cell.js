import React, { Component } from 'react';

class Cell extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.col);
	};

	render() {
		return (
			<div
				className={this.props.boxClass}
				id={this.props.boxId}
				onClick={this.selectBox}
			/>
		);
	}
}

export default Cell;
