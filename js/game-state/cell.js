import { DEFAULT_COLOR } from "../lib/constants.js";

class Cell {
  constructor(cellPosition) {
    this.position = cellPosition;
    this.color = DEFAULT_COLOR;
  }
}

export default Cell;
