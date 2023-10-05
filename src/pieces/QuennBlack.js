class QueenBlack extends Piece {
	constructor(position, name) {
		super(position, 'queen', name);
	}

	// getAllowedMoves(){
	// 	return [
	// 		this.getMovesTop(),
	// 		this.getMovesTopRight(),
	// 		this.getMovesTopLeft(),
	// 		this.getMovesBottom(),
	// 		this.getMovesBottomRight(),
	// 		this.getMovesBottomLeft(),
	// 		this.getMovesRight(),
	// 		this.getMovesLeft()
	// 	];
	// }
	getAllowedMoves(){
		const position = this.position;
			if(parseInt(position) == 84){
				return [
					[parseInt(position) - 20],
					[parseInt(position) + 11],
					[parseInt(position) - 11],
					[parseInt(position) + 9],
					[parseInt(position) - 9]

				]	
			}else{
				return [
					[parseInt(position) + 11],
					[parseInt(position) - 11],
					[parseInt(position) + 9],
					[parseInt(position) - 9]

				]	
		}
			
	}
}
exports = QueenBlack;