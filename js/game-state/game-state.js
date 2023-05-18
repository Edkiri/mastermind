import { DEFAULT_COLOR } from "../lib/constants.js";
import Subject from "../lib/subject.js";

class Game extends Subject {
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
    const currentCell = this.getCurrentCell();
    currentCell.color = DEFAULT_COLOR;
    super.notify(this);
  }

  // TODO: Create check methods
  // checkSecret() {}

  getCell(rowPosition, cellPosition) {
    if (!this.state.currentCellPosition) return;
    const row = this.state.rows.find((row) => row.position === rowPosition);
    const cell = row.cells.find((cell) => cell.position === cellPosition);
    return cell;
  }

  getCurrentCell() {
    const { currentRowPosition, currentCellPosition } = this.state;
    const currentCell = this.getCell(currentRowPosition, currentCellPosition);
    return currentCell;
  }

  getPreviusCell() {
    const { currentRowPosition, currentCellPosition } = this.state;
    const previusCell = this.getCell(
      currentRowPosition,
      currentCellPosition - 1
    );
    return previusCell;
  }

  getNextCell() {
    const { currentRowPosition, currentCellPosition } = this.state;
    const nextCell = this.getCell(currentRowPosition, currentCellPosition + 1);
    return nextCell;
  }
}

export default Game;
