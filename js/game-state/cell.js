import { DEFAULT_COLOR } from "../lib/constants.js";

class Cell {
  constructor(rowPosition, cellPosition) {
    this.rowPosition = rowPosition;
    this.position = cellPosition;
    this.color = DEFAULT_COLOR;
  }
}

export default Cell;
