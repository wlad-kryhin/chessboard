let board = null;
const game = new Chess();

function onDragStart(source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false;

  // only pick up pieces for White
  if (piece.search(/^b/) !== -1) return false;
}

function makeRandomMove() {
  const possibleMoves = game.moves();

  // game over
  if (possibleMoves.length === 0) return;

  const randomIdx = Math.floor(Math.random() * possibleMoves.length);
  game.move(possibleMoves[randomIdx]);
  board.position(game.position());
}

function onDrop(source, target) {
  // see if the move is legal
  const move = game.move({
    from: source,
    to: target,
    promotion: "q", // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return "snapback";

  // make random legal move for black
  window.setTimeout(makeRandomMove, 250);
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd() {
  board.position(game.position());
}

const config = {
  draggable: true,
  position: {
    a3: "wP",
    b3: "wP",
    c3: "wP",
    d3: "wP",
    e3: "wP",
    f3: "wP",
    g3: "wP",
    h3: "wP",
    a6: "bP",
    b6: "bP",
    c6: "bP",
    d6: "bP",
    e6: "bP",
    f6: "bP",
    g6: "bP",
    h6: "bP",
    d1: "wQ",
    e1: "wK",
    d8: "bQ",
    e8: "bK",
  },
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
};
board = Chessboard("myBoard", config);
console.log(board);
board.move();
