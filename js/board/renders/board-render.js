class RenderBoard {
  constructor(gameState) {
    this.gameState = gameState;
    this.hiddenRow = this.createHiddenRow();
    this.cellRows = this.createCellRows();
  }

  render(boardElement) {
    boardElement.appendChild(this.hiddenRow);
    this.cellRows.forEach((rowElement) => {
      boardElement.appendChild(rowElement);
    })
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
    const hiddenCell = document.createElement("div");
    hiddenCell.classList.add("cell");
    hiddenCell.classList.add("hidden-cell");
    hiddenCell.textContent = "?";
    hiddenCell.id = `hidden-cell-${position}`;
    return hiddenCell;
  }

  createCellRows() {
    const { rows } = this.gameState;
    const rowElements = [];
    rows.forEach((row) => {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      rowElement.id = `row-${row.position}`;
      row.cells.forEach((cell) => {
        const cellElement = this.createCell(cell);
        rowElement.appendChild(cellElement);
      });
      const clueContainerElement = document.createElement("div");
      clueContainerElement.classList.add("clue-container");
      row.clues.forEach((clue) => {
        const clueElement = this.createClue(clue);
        clueContainerElement.appendChild(clueElement);
      });
      rowElement.appendChild(clueContainerElement);
      rowElements.push(rowElement);
    });
    return rowElements;
  }

  createCell(cell) {
    const cellElement = document.createElement("button");
    cellElement.classList.add("cell");
    cellElement.style.backgroundColor = cell.color;
    cellElement.id = `row-${cell.rowPosition}-cell-${cell.position}`;
    return cellElement;
  }

  createClue(clue) {
    const clueElement = document.createElement("div");
    clueElement.classList.add("clue-cell");
    clueElement.style.backgroundColor = clue.color;
    return clueElement;
  }
}

export default RenderBoard;
