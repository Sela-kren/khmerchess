class Bishop extends Piece {
  constructor(position, name) {
    super(position, "bishop", name);
  }

  // getAllowedMoves() {
  // 	// return [ this.getMovesTopRight(), this.getMovesTopLeft(), this.getMovesBottomRight(), this.getMovesBottomLeft() ];
  // 	const position = this.position;
  // 	return [
  // 		// [parseInt(position) + 1],
  // 		// [parseInt(position) - 1],
  // 		[parseInt(position) + 10],
  // 		// [parseInt(position) - 10],
  // 		[parseInt(position) + 11],
  // 		[parseInt(position) - 11],
  // 		[parseInt(position) + 9],
  // 		[parseInt(position) - 9]
  // 	]
  // }
  getAllowedMoves() {
    const position = this.position;
    const mathSign = this.color == "white" ? "+" : "-";
    return [
      // [parseInt(position) + 1],
      // [parseInt(position) - 1],
      // [parseInt(position) + 10],
      // [parseInt(position) - 10],
      //   [parseInt(position) + mathSign + "10"],
      [eval(position + mathSign + "10")],
      [parseInt(position) + 11],
      [parseInt(position) - 11],
      [parseInt(position) + 9],
      [parseInt(position) - 9],
    ];
  }
}
