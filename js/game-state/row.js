import Cell from "./cell.js";

class Row {
  constructor(position) {
    this.position = position;
    this.cells = this.generateCells();
  }

  generateCells() {
    const cells = [];
    for (let i = 1; i <= 4; i++) {
      const cell = new Cell(i);
      cells.push(cell);
    }
    return cells;
  }
}

export default Row;