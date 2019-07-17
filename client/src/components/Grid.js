import React, { Component } from 'react';

import Cell from './Cell';
import '../css/grid.css';
class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const width = this.props.cols * 16;
		var rowsArr = [];

		var boxClass = '';
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + '_' + j;
				boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';
				rowsArr.push(
					<Cell
						boxClass={boxClass}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}
		return (
			<div className="grid" style={{ width: width }}>
				{rowsArr}
			</div>
		);
	}
}

export default Grid;
