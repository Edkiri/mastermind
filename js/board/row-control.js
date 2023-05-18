class RowControl {
  constructor(colors) {
    this.colors = colors;
    this.controlCells = this.createControlCells();
    this.cancelButton = this.createCancelButton();
    this.checkButton = this.createCheckButton();
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

  createCancelButton() {
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Remove";
    cancelButton.classList.add("cancel-button");
    return cancelButton;
  }

  createCheckButton() {
    const checkButton = document.createElement("button");
    checkButton.type = "button";
    checkButton.textContent = "Check";
    checkButton.classList.add("check-button");
    return checkButton;
  }

  render(parentElement) {
    const controlContainer = document.createElement("div");
    controlContainer.classList.add("control-container");

    const controlColorContainer = document.createElement("div");
    controlColorContainer.classList.add("control-color-container");
    this.controlCells.forEach((controlCell) =>
      controlColorContainer.appendChild(controlCell)
    );

    const controlGameContainer = document.createElement("div");
    controlGameContainer.classList.add("control-game-container");
    controlGameContainer.appendChild(this.cancelButton);
    controlGameContainer.appendChild(this.checkButton);

    controlContainer.appendChild(controlColorContainer);
    controlContainer.appendChild(controlGameContainer);
    parentElement.appendChild(controlContainer);
  }
}

export default RowControl;
