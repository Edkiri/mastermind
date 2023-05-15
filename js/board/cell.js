class Cell {
  constructor(rowPosition, cellPosition) {
    this.rowPosition = rowPosition;
    this.position = cellPosition;
    this.htmlElement = this.generateHtmlElement();
  }

  generateHtmlElement() {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.classList.add("empty");
    return cellElement;
  }
}

export default Cell;
