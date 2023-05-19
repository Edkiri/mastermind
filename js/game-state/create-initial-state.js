import { DEFAULT_COLOR } from "../lib/constants.js";

export function createInitialState(difficulty, colors) {
  const secretRow = createSecretRow(colors);
  const rows = createInitialRows(difficulty);
  const currentRowPosition = 1;
  const currentCellPosition = 1;
  return {
    rows,
    secretRow,
    currentCellPosition,
    currentRowPosition,
  };
}

function createSecretRow(colors) {
  const secretRow = {
    secretCells: createSecretCells(colors),
  };
  return secretRow;
}

function createSecretCells(colors) {
  const secretCells = [];
  for (let i = 1; i <= 4; i++) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    const secretCell = {
      position: i,
      color: colors[randomIndex],
    };
    secretCells.push(secretCell);
  }
  return secretCells;
}

// TODO: generate rows based on difficulty
function createInitialRows(difficulty) {
  const rows = [];
  for (let i = 10; i >= 1; i--) {
    const row = {
      position: i,
      cells: createInitialCells(i),
      clues: createInitialClues(i),
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

function createInitialClues(rowPosition) {
  const clues = [];
  for (let i = 1; i <= 4; i++) {
    const clue = {
      color: DEFAULT_COLOR,
    };
    clues.push(clue);
  }
  return clues;
}
