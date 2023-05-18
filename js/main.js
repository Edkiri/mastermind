import GameState from "./game-state/game-state.js";
import RowControl from "./board/row-control.js";
import { renderBoard } from "./board/render-board.js";
import PreviusCellObserver from "./board/observers/previus-cell.observer.js";
import CurrentCellObserver from "./board/observers/current-cell.observer.js";
import NextCellObserver from "./board/observers/next-cell.observer.js";
import { createInitialState } from "./game-state/create-initial-state.js";

const boardElement = document.getElementById("board");

// TODO: User must be able to choose the difficulty
const initialState = createInitialState("easy");
const game = new GameState(initialState);
console.log("GAME", game);
renderBoard(boardElement, game);

const previusCellObserver = new PreviusCellObserver();
game.subscribe(previusCellObserver);

const currentCellObserver = new CurrentCellObserver();
game.subscribe(currentCellObserver);

const nextCellObserver = new NextCellObserver();
game.subscribe(nextCellObserver);

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
rowControl.cancelButton.addEventListener("click", () => {
  game.removeColor();
});
rowControl.render(boardElement);
