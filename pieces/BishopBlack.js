class Bishopblack extends Piece {
	constructor(position, name) {
		super(position, 'bishop', name);
	}

	
	// getAllowedMoves() {
	// 	return [ this.getMovesTopRight(), this.getMovesTopLeft(), this.getMovesBottomRight(), this.getMovesBottomLeft() ];
	// }
	getAllowedMoves(){
		const position = this.position;
		return [
			// [parseInt(position) + 1],
			// [parseInt(position) - 1],
			// [parseInt(position) + 10],
			[parseInt(position) - 10],
			[parseInt(position) + 11],
			[parseInt(position) - 11],
			[parseInt(position) + 9],
			[parseInt(position) - 9]
		]
	}


}

exports = Bishopblack;