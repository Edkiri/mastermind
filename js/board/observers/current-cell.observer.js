class CurrentCellObserver {
  notify(gameState) {
    const { currentRowPosition, currentCellPosition } = gameState;
    const currentCell = gameState.getCell(
      currentRowPosition,
      currentCellPosition
    );
    const currentCellElement = document.getElementById(
      `row-${currentCell.rowPosition}-cell-${currentCell.position}`
    );
    const nextCellElement = document.getElementById(
      `row-${currentCell.rowPosition}-cell-${currentCell.position + 1}`
    );
    currentCellElement.style.borderColor = "yellow";
    if(nextCellElement) {
      nextCellElement.style.borderColor = "black";
    }
  }
}

export default CurrentCellObserver;
