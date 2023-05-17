import Row from "./row.js";
import Subject from "../lib/subject.js";
import { DEFAULT_COLOR } from "../lib/constants.js";

class GameState extends Subject {
  constructor(difficulty) {
    super();
    this.difficulty = difficulty;
    this.rows = this.generateRows();
    this.currentRowPosition = 1;
    this.currentCellPosition = 1;
  }

  start() {
    super.notify(this);
  }

  addColor(color) {
    const currentRow = this.getRow(this.currentRowPosition);
    const currentCell = currentRow.getCell(this.currentCellPosition);
    currentCell.color = color;
    this.currentCellPosition += 1;
    if (this.currentCellPosition === 5) {
      // TODO: Comparate actual row with hidden row
      this.currentRowPosition += 1;
      this.currentCellPosition = 1;
    }
    super.notify(this);
  }

  getRow(position) {
    const row = this.rows.find((row) => row.position === position);
    return row;
  }

  getCell(rowPosition, cellPosition) {
    const row = this.getRow(rowPosition);
    const cell = row.getCell(cellPosition);
    return cell;
  }

  generateRows() {
    // TODO: generate rows based on difficulty
    const rows = [];
    for (let i = 10; i >= 1; i--) {
      const row = new Row(i);
      rows.push(row);
    }
    return rows;
  }
}

export default GameState;
