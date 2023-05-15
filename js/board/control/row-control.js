import CellControl from "./cell-control.js";

class RowControl {
  constructor() {
    this.cellsControl = this.generateControlCells();
  }

  generateControlCells() {
    const colors = ["red", "blue", "green", "yellow"];
    const cellsControl = [];
    colors.forEach((color) => {
      const cellControl = new CellControl(color);
      cellsControl.push(cellControl);
    });
    return cellsControl;
  }

  render(boardHTMLElement) {
    const rowControlElement = document.createElement("div");
    rowControlElement.classList.add("row-control");
    this.cellsControl.forEach((cellControl) => {
      rowControlElement.appendChild(cellControl.htmlElement);
    });
    boardHTMLElement.appendChild(rowControlElement);
  }
}

export default RowControl;
