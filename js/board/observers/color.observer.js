class ColorObserver {
  notify(gameState) {
    const { currentRowPosition, currentCellPosition } = gameState;
    if (currentRowPosition === 1 && currentCellPosition === 1) return;
    let previusCell;
    if (currentCellPosition === 1 && currentRowPosition > 1) {
      previusCell = gameState.getCell(currentRowPosition - 1, 4);
    } else {
      previusCell = gameState.getCell(
        currentRowPosition,
        currentCellPosition - 1
      );
    }
    const previusCellElement = document.getElementById(
      `row-${previusCell.rowPosition}-cell-${previusCell.position}`
    );
    previusCellElement.style.backgroundColor = previusCell.color;
    previusCellElement.style.borderColor = "black";
  }
}

export default ColorObserver;
