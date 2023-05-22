import { getCellElement } from "../utils/functions.js";

export class CurrentCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const currentCell = game.getCell(currentRowPosition, currentCellPosition);
    if (!currentCell) return;
    const currentCellElement = getCellElement(currentCell);
    currentCellElement.style.background = currentCell.color;
    currentCellElement.style.borderColor = "yellow";
  }
}

export class NextCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const nextCell = game.getCell(currentRowPosition, currentCellPosition + 1);
    if (!nextCell) return;
    const nextCellElement = getCellElement(nextCell);
    nextCellElement.style.borderColor = "black";
  }
}

export class PreviusCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const previusCell = game.getCell(
      currentRowPosition,
      currentCellPosition - 1
    );
    if (!previusCell) return;
    const previusCellElement = getCellElement(previusCell);
    previusCellElement.style.backgroundColor = previusCell.color;
    previusCellElement.style.borderColor = "black";
  }
}
export class RowObserver {
  constructor() {
    this.currentRowPosition = 1;
  }
  notify(game) {
    if (this.currentRowPosition < game.state.currentRowPosition) {
      const currentRow = game.state.rows.find((row) => row.position === this.currentRowPosition);
      const { clues } = currentRow;
      const cluesElements = document.querySelectorAll(`#clues-${this.currentRowPosition} > div`);
      for(let i = 0; i < clues.length; i++) {
        cluesElements[i].style.backgroundColor = clues[i].color || "#3f3f3f";
      }
      this.currentRowPosition += 1;
    }
  }
}
