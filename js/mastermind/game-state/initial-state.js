import levels from "./levels.js";

export function createInitialState(username, difficulty, colors) {
  const secretRow = createSecretRow(colors);
  const rows = createInitialRows(difficulty);
  return {
    public: {
      username,
      difficulty: levels[difficulty],
      rows,
      victory: false,
      loss: false,
    },
    secretRow,
    currentCellPosition: 1,
    currentRowPosition: 1,
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

function createInitialRows(difficulty) {
  const rows = [];
  const rowQuantity =  levels[difficulty].maxAttempts;
  for (let i = rowQuantity; i >= 1; i--) {
    const row = {
      position: i,
      cells: createInitialCells(i),
      clues: createInitialClues(),
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
      color: null,
    };
    cells.push(cell);
  }
  return cells;
}

function createInitialClues() {
  const clues = [];
  for (let i = 1; i <= 4; i++) {
    const clue = {
      color: null,
    };
    clues.push(clue);
  }
  return clues;
}
