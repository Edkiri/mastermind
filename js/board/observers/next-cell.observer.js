import { getCellElement } from "../utils/get-cell-element.js";

class NextCellObserver {
  notify(game) {
    const nextCell = game.getNextCell();
    if (!nextCell) return;
    const nextCellElement = getCellElement(nextCell);
    nextCellElement.style.borderColor = "black";
  }
}

export default NextCellObserver;
