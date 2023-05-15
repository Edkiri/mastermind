import Cell from "./cell.js";

class Row {
  constructor(position) {
    this.position = position;
    this.cells = this.generateCells();
    this.htmlElement = this.generateHtmlElement();
  }

  generateCells() {
    const cells = [];
    for (let i = 1; i <= 4; i++) {
      const cell = new Cell(this.position, i);
      cells.push(cell);
    }
    return cells;
  }

  generateHtmlElement() {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    return rowElement;
  }
}

export default Row;