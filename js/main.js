import MastermindGame from "./game-state/game.js";
import RowControl from "./board/row-control.js";
import { renderBoard } from "./board/render-board.js";
import PreviusCellObserver from "./board/observers/previus-cell.observer.js";
import CurrentCellObserver from "./board/observers/current-cell.observer.js";
import NextCellObserver from "./board/observers/next-cell.observer.js";
import { createInitialState } from "./game-state/create-initial-state.js";

const boardElement = document.getElementById("board");

// TODO: User must be able to choose difficulty
const initialState = createInitialState("easy");
const game = new MastermindGame(initialState);
renderBoard(boardElement, game);

const currentCellObserver = new CurrentCellObserver();
const previusCellObserver = new PreviusCellObserver();
const nextCellObserver = new NextCellObserver();
game.subscribe(currentCellObserver);
game.subscribe(previusCellObserver);
game.subscribe(nextCellObserver);

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
rowControl.removeButton.addEventListener("click", () => {
  game.removeColor();
});
rowControl.render(boardElement);
