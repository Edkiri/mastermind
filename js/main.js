import GameState from "./game-state/game-state.js";
import RowControl from "./board/row-control.js";
import { renderBoard } from "./board/render-board.js";
import ColorObserver from "./board/observers/color.observer.js";
import CurrentCellObserver from "./board/observers/current-cell.observer.js";
import { createInitialState } from "./game-state/create-initial-state.js";

const boardElement = document.getElementById("board");

// TODO: User must be able to choose the difficulty
const initialState = createInitialState("easy");
const game = new GameState(initialState);
console.log("GAME", game);
renderBoard(boardElement, game);

const colorObserver = new ColorObserver();
game.subscribe(colorObserver);

const currentCellObserver = new CurrentCellObserver();
game.subscribe(currentCellObserver);

// TODO: Add previusCellObserver to remove the last cell

game.start();

// TODO: User must be able to choose colors
const colors = ["red", "green", "blue", "orange"];
const rowControl = new RowControl(colors);
rowControl.controlCells.forEach((cellControl) => {
  cellControl.addEventListener("click", () => {
    const color = cellControl.style.backgroundColor;
    game.addColor(color);
  });
});
rowControl.render(boardElement);
