class BoardRender {
  constructor(gameState) {
    this.gameState = gameState;
    this.hiddenRow = this.createHiddenRow();
    this.cellRows = this.createCellRows();
  }

  createHiddenRow() {
    const hiddenRow = document.createElement("div");
    hiddenRow.classList.add("row");
    for (let i = 1; i <= 4; i++) {
      const hiddenCell = this.createHiddenCell(i);
      hiddenRow.appendChild(hiddenCell);
    }
    return hiddenRow;
  }

  createHiddenCell(position) {
    const hiddenCellElement = document.createElement("div");
    hiddenCell.classList.add("cell");
    hiddenCell.classList.add("hidden-cell");
    hiddenCell.textContent = "?";
    hiddenCell.id = `hidden-cell-${position}`;
    return hiddenCellElement;
  }

  createCellRows() {
    const { rows } = this.gameState;
    rows.forEach((row) => {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      rowElement.id = `row-${row.position}`;
      row.cells.forEach((cell) => {
        const cell = this.createCell(cell);
        rowElement.appendChild(cell);
      });
    });
  }

  createCell(cell) {
    const cellElement = document.createElement("button");
    cellElement.classList.add("cell");
    cellElement.style.backgroundColor = cell.color;
    cellElement.id = `row-${cell.rowPosition}-cell-${cell.position}`;
    return cellElement;
  }
}

export default BoardRender;
