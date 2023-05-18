import { getCellElement } from "../utils/get-cell-element.js";

class ColorObserver {
  notify(game) {
    const previusCell = game.getPreviusCell();
    if (!previusCell) return;
    const previusCellElement = getCellElement(previusCell);
    previusCellElement.style.backgroundColor = previusCell.color;
    previusCellElement.style.borderColor = "black";
  }
}

export default ColorObserver;
