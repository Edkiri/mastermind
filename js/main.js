import GameState from "./game-state/game-state.js";
import InitialBoardObserver from "./board/observers/initial-board.observer.js";
import RowControl from "./board/row-control.js";

const boardElement = document.getElementById("board");

const gameState = new GameState();

const initialBoardObserver = new InitialBoardObserver(boardElement);
gameState.subscribe(initialBoardObserver);

// TODO: User must be able to choose the difficulty
gameState.createNewGame("easy");

gameState.unsubscribe(initialBoardObserver);

// TODO: User must be able to choose colors
const colors = ["red", "green", "blue", "orange"];
const rowControl = new RowControl(colors);
rowControl.render(boardElement);
