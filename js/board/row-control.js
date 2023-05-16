class RowControl {
  constructor(colors) {
    this.colors = colors;
    this.controlCells = this.createControlCells();
  }

  createControlCells() {
    const controlCells = [];
    this.colors.forEach((color) => {
      const controlCell = document.createElement("button");
      controlCell.classList.add("cell");
      controlCell.classList.add("control-cell");
      controlCell.style.backgroundColor = color;
      controlCells.push(controlCell);
    });
    return controlCells;
  }

  render(parentElement) {
    const controlRow = document.createElement("div");
    controlRow.classList.add("row-control");
    this.controlCells.forEach((controlCell) => controlRow.appendChild(controlCell));
    parentElement.appendChild(controlRow);
  }
}

export default RowControl;