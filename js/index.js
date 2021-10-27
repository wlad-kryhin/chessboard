const config = {
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
  draggable: true,
  onchange: onchange,
};
const board = Chessboard("myBoard", config);
function onChange() {}
