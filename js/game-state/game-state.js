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
    const currentCell = this.getCell(
      this.state.currentRowPosition,
      this.state.currentCellPosition
    );
    currentCell.color = color;
    this.state.currentCellPosition += 1;
    if (this.state.currentCellPosition === 5) {
      // TODO: Comparate actual row with hidden row
      this.state.currentRowPosition += 1;
      this.state.currentCellPosition = 1;
    }
    super.notify(this);
  }

  getCell(rowPosition, cellPosition) {
    const row = this.state.rows.find((row) => row.position === rowPosition);
    const cell = row.cells.find((cell) => cell.position === cellPosition);
    return cell;
  }
}

export default Game;
