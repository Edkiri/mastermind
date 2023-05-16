import Row from "./row.js";
import Subject from "../lib/subject.js";

class GameState extends Subject {
  constructor() {
    super();
    this.difficulty;
    this.rows = this.generateRows();
    this.attempts = 0;
    this.currentCellPosition = 1;
  }

  generateRows(difficulty) {
    // TODO: generate rows based on difficulty
    const rows = [];
    for (let i = 10; i >= 1; i--) {
      const row = new Row(i);
      rows.push(row);
    }
    return rows;
  }

  createNewGame(difficulty) {
    this.difficulty = difficulty;
    this.generateRows(difficulty);
    super.notify(this);
  }
}

export default GameState;
