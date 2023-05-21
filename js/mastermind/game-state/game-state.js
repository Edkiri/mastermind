import Subject from "../../lib/subject.js";

class GameState extends Subject {
  constructor(state) {
    super();
    this.state = state;
  }

  start() {
    super.notify(this);
  }

  addColor(color) {
    if (this.state.currentCellPosition === 5) return;
    const currentCell = this.getCell(
      this.state.currentRowPosition,
      this.state.currentCellPosition
    );
    currentCell.color = color;
    this.state.currentCellPosition += 1;
    super.notify(this);
  }

  removeColor() {
    if (this.state.currentCellPosition === 1) return;
    this.state.currentCellPosition -= 1;
    const { currentRowPosition, currentCellPosition } = this.state;
    const currentCell = this.getCell(currentRowPosition, currentCellPosition);
    currentCell.color = "#3f3f3f";
    super.notify(this);
  }

  checkSecret() {
    if (this.state.currentCellPosition !== 5) return;
    const { rows } = this.state;
    const currentRow = rows.find(
      (row) => row.position === this.state.currentRowPosition
    );
    const secretCells = this.state.secretRow.secretCells;
    console.log("secretCells", secretCells);
    let secretColors = [];
    secretCells.forEach((secretCell) => {
      const existingColor = secretColors.find(
        (secretColor) => secretCell.color === secretColor.color
      );
      if (existingColor) {
        existingColor.quantity += 1;
      } else {
        secretColors.push({ color: secretCell.color, quantity: 1 });
      }
    });
    console.log("SECRET COLORS", secretColors);
    const clues = [];
    currentRow.cells.forEach((cell) => {
      if (cell.color === secretCells[cell.position - 1].color) {
        clues.push("black");
        return;
      } else if (true) {
        clues.push("white");
      }
    });
    console.log(clues);
  }

  getCell(rowPosition, cellPosition) {
    if (!this.state.currentCellPosition) return;
    const row = this.state.rows.find((row) => row.position === rowPosition);
    const cell = row.cells.find((cell) => cell.position === cellPosition);
    return cell;
  }
}

export default GameState;
