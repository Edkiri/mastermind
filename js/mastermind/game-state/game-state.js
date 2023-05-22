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
    const currentCells = rows.find(
      (row) => row.position === this.state.currentRowPosition
    ).cells;
    const currentCellsAux = currentCells.map((cell) => {
      return { ...cell, checked: false };
    });
    const secretCellsAux = this.state.secretRow.secretCells.map((cell) => {
      return { ...cell, checked: false };
    });
    const balls = [];
    console.log(secretCellsAux);
    currentCellsAux.forEach((cell) => {
      secretCellsAux.forEach((secretCell) => {
        if (
          cell.color === secretCell.color &&
          cell.position === secretCell.position
        ) {
          balls.push("black");
          secretCell.checked = true;
          cell.checked = true;
        }
      });
    });
    currentCellsAux.forEach((cell) => {
      secretCellsAux.forEach((secretCell) => {
        if (
          cell.color === secretCell.color &&
          !secretCell.checked &&
          !cell.checked
        ) {
          balls.push("white");
          secretCell.checked = true;
          cell.checked = true;
        }
      });
    });
    console.log(balls);
  }

  getCell(rowPosition, cellPosition) {
    if (!this.state.currentCellPosition) return;
    const row = this.state.rows.find((row) => row.position === rowPosition);
    const cell = row.cells.find((cell) => cell.position === cellPosition);
    return cell;
  }
}

export default GameState;