import GameState from "./game-state/game-state.js";
import RowControl from "./board/row-control.js";
import { renderBoard } from "./board/render-board.js";
import ColorObserver from "./board/observers/color.observer.js";
import CurrentCellObserver from "./board/observers/current-cell.observer.js";

const boardElement = document.getElementById("board");

// TODO: User must be able to choose the difficulty
const gameState = new GameState("hard");
renderBoard(boardElement, gameState);

const colorObserver = new ColorObserver();
gameState.subscribe(colorObserver);

const currentCellObserver = new CurrentCellObserver();
gameState.subscribe(currentCellObserver);

// TODO: Add previusCellObserver to remove the last cell

gameState.start();

// TODO: User must be able to choose colors
const colors = ["red", "green", "blue", "orange"];
const rowControl = new RowControl(colors);
rowControl.controlCells.forEach((cellControl) => {
  cellControl.addEventListener("click", () => {
    const color = cellControl.style.backgroundColor;
    gameState.addColor(color);
  });
});
rowControl.render(boardElement);
