import Subject from "../../lib/subject.js";
import { checkClueBalls } from "../utils/functions.js";

class MastermindGame extends Subject {
  constructor(state) {
    super();
    this.state = state;
  }

  start() {
    super.notify(this);
  }

  addColor(color) {
    if (this.state.currentCellPosition === 5) return;
    const currentCell = this.getCell(
      this.state.currentRowPosition,
      this.state.currentCellPosition
    );
    currentCell.color = color;
    this.state.currentCellPosition += 1;
    super.notify(this);
  }

  removeColor() {
    if (this.state.currentCellPosition === 1) return;
    this.state.currentCellPosition -= 1;
    const { currentRowPosition, currentCellPosition } = this.state;
    const currentCell = this.getCell(currentRowPosition, currentCellPosition);
    currentCell.color = "#3f3f3f";
    super.notify(this);
  }

  checkSecret() {
    if (this.state.currentCellPosition !== 5) return;
    const { rows } = this.state.public;
    const currentRow = rows.find(
      (row) => row.position === this.state.currentRowPosition
    )
    const currentCells = currentRow.cells;
    const { secretCells } = this.state.secretRow;
    const clueBallsList = checkClueBalls(currentCells, secretCells);
    const { clues } = currentRow;
    for(let i = 0; i < clueBallsList.length; i++) {
      clues[i].color = clueBallsList[i];
    };
    const blackBalls = clueBallsList.filter((clue) => clue === "black");
    if(blackBalls.length === 4) {
      this.state.public.victory = true;
    }
    else if(this.state.currentRowPosition === this.state.public.difficulty.maxAttempts) {
      this.state.public.loss = true;
    } else {
      this.state.currentRowPosition += 1;
      this.state.currentCellPosition = 1;
    }
    super.notify(this);
  }

  getCell(rowPosition, cellPosition) {
    if (!this.state.currentCellPosition) return;
    const row = this.state.public.rows.find((row) => row.position === rowPosition);
    const cell = row.cells.find((cell) => cell.position === cellPosition);
    return cell;
  }
}

export default MastermindGame;
