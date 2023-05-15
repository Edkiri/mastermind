import Board from "./board/board.js";

const boardElement = document.getElementById("board");
const board = new Board();
board.render(boardElement);

console.log(board);
