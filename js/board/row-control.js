class RowControl {
  constructor(colors) {
    this.colors = colors;
    this.controlCells = this.createControlCells();
    this.removeButton = this.createRemoveButton();
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

  createRemoveButton() {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    return removeButton;
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
    controlGameContainer.appendChild(this.removeButton);
    controlGameContainer.appendChild(this.checkButton);

    controlContainer.appendChild(controlColorContainer);
    controlContainer.appendChild(controlGameContainer);
    parentElement.appendChild(controlContainer);
  }
}

export default RowControl;
