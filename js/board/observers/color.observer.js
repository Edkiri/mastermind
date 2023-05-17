import { getCellElement } from "../utils/get-cell-element.js";

class ColorObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    if (currentRowPosition === 1 && currentCellPosition === 1) return;

    let previusCell;
    if (currentCellPosition === 1) {
      previusCell = game.getCell(currentRowPosition - 1, 4);
    } else {
      previusCell = game.getCell(currentRowPosition, currentCellPosition - 1);
    }

    const previusCellElement = getCellElement(previusCell);
    previusCellElement.style.backgroundColor = previusCell.color;
    previusCellElement.style.borderColor = "black";
  }
}

export default ColorObserver;
