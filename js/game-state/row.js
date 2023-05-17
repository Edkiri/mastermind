import Cell from "./cell.js";

class Row {
  constructor(position) {
    this.position = position;
    this.cells = this.generateCells();
  }

  generateCells() {
    const cells = [];
    for (let i = 1; i <= 4; i++) {
      const cell = new Cell(this.position, i);
      cells.push(cell);
    }
    return cells;
  }

  getCell(position) {
    const cell = this.cells.find((cell) => cell.position === position);
    return cell;
  }
}

export default Row;
