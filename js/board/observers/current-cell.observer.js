import { getCellElement } from "../utils/get-cell-element.js";

class CurrentCellObserver {
  notify(game) {
    const currentCell = game.getCurrentCell();
    if (!currentCell) return;
    const currentCellElement = getCellElement(currentCell);
    currentCellElement.style.background = currentCell.color;
    currentCellElement.style.borderColor = "yellow";
  }
}

export default CurrentCellObserver;
