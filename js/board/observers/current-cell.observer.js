import { getCellElement } from "../utils/get-cell-element.js";

class CurrentCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const currentCell = game.getCell(currentRowPosition, currentCellPosition);
    const currentCellElement = getCellElement(currentCell);
    currentCellElement.style.borderColor = "yellow";
  }
}

export default CurrentCellObserver;
