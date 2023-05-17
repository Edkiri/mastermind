import { DEFAULT_COLOR } from "../lib/constants.js";

export function createInitialState(difficulty) {
  const rows = createInitialRows(difficulty);
  const currentRowPosition = 1;
  const currentCellPosition = 1;
  return {
    rows,
    currentCellPosition,
    currentRowPosition,
  };
}

// TODO: generate rows based on difficulty
function createInitialRows(difficulty) {
  const rows = [];
  for (let i = 10; i >= 1; i--) {
    const row = {
      position: i,
      cells: createInitialCells(i),
    };
    rows.push(row);
  }
  return rows;
}

function createInitialCells(rowPosition) {
  const cells = [];
  for (let i = 1; i <= 4; i++) {
    const cell = {
      rowPosition,
      position: i,
      color: DEFAULT_COLOR,
    };
    cells.push(cell);
  }
  return cells;
}
