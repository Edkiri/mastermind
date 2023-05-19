import MastermindGame from "./game-state/mastermind-game.js";
import RowControl from "./board/row-control.js";
import RenderBoard from "./board/renders/board-render.js";
import PreviusCellObserver from "./board/observers/previus-cell.observer.js";
import CurrentCellObserver from "./board/observers/current-cell.observer.js";
import NextCellObserver from "./board/observers/next-cell.observer.js";
import { createInitialState } from "./game-state/create-initial-state.js";

const boardElement = document.getElementById("board");

// TODO: User must be able to choose colors.
// TODO: User must be able to choose difficulty.
const colors = ["red", "green", "blue", "orange"];
const difficulty = "easy";

const initialState = createInitialState(difficulty, colors);
const game = new MastermindGame(initialState);

const renderBoard = new RenderBoard(game.state);
renderBoard.render(boardElement);

const currentCellObserver = new CurrentCellObserver();
const previusCellObserver = new PreviusCellObserver();
const nextCellObserver = new NextCellObserver();
game.subscribe(currentCellObserver);
game.subscribe(previusCellObserver);
game.subscribe(nextCellObserver);

game.start();

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
