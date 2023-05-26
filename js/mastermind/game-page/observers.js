import { getCellElement } from "../utils/functions.js";

class CurrentCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const currentCell = game.getCell(currentRowPosition, currentCellPosition);
    if (!currentCell) return;
    const currentCellElement = getCellElement(currentCell);
    currentCellElement.style.background = currentCell.color;
    currentCellElement.style.border = `3px solid yellow`;
  }
}

class NextCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const nextCell = game.getCell(currentRowPosition, currentCellPosition + 1);
    if (!nextCell) return;
    const nextCellElement = getCellElement(nextCell);
    nextCellElement.style.border = "1px solid rgb(150, 150, 150)";
  }
}

class PreviusCellObserver {
  notify(game) {
    const { currentRowPosition, currentCellPosition } = game.state;
    const previusCell = game.getCell(
      currentRowPosition,
      currentCellPosition - 1
    );
    if (!previusCell) return;
    const previusCellElement = getCellElement(previusCell);
    previusCellElement.style.backgroundColor = previusCell.color;
    previusCellElement.style.border = "none";
  }
}

class RowObserver {
  constructor() {
    this.currentRowPosition = 1;
  }
  notify(game) {
    if (this.currentRowPosition < game.state.currentRowPosition) {
      const currentRow = game.state.public.rows.find(
        (row) => row.position === this.currentRowPosition
      );
      const { clues } = currentRow;
      const cluesElements = document.querySelectorAll(
        `#clues-${this.currentRowPosition} > div`
      );
      for (let i = 0; i < clues.length; i++) {
        cluesElements[i].style.backgroundColor = clues[i].color || "#3f3f3f";
        if (clues[i].color) {
          cluesElements[i].style.border = "none";
        }
      }
      this.currentRowPosition += 1;
    }
  }
}

class ControlButtonsObserver {
  notify(game) {
    const { currentCellPosition } = game.state;
    if (currentCellPosition !== 1) {
      document.getElementById("remove-button").disabled = false;
    } else {
      document.getElementById("remove-button").disabled = true;
    }
    if (currentCellPosition === 5) {
      document.getElementById("check-button").disabled = false;
    } else {
      document.getElementById("check-button").disabled = true;
    }
  }
}

class VictoryOrLossObserver {
  notify(game) {
    const { victory, loss } = game.state.public;
    if (victory) {
      document.getElementById("victory-modal").style.display = "block";
    }
    if (loss) {
      console.log("HAS PERDIDO");
      document.getElementById("loss-modal").style.display = "block";
    }
  }
}

export default {
  CurrentCellObserver,
  NextCellObserver,
  PreviusCellObserver,
  RowObserver,
  ControlButtonsObserver,
  VictoryOrLossObserver,
};
