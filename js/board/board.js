import Row from "./row.js";
import RowControl from "./control/row-control.js";

class Board {
  constructor() {
    this.rows = this.generateRows();
    this.rowControl = new RowControl();
  }

  generateRows() {
    const rows = [];
    for (let i = 10; i >= 1; i--) {
      const row = new Row(i);
      rows.push(row);
    }
    return rows;
  }

  render(boardHTMLElement) {
    this.rows.forEach((row) => {
      row.cells.forEach((cell) => {
        row.htmlElement.appendChild(cell.htmlElement);
      });
      boardHTMLElement.appendChild(row.htmlElement);
    });
    this.rowControl.render(boardHTMLElement);
  }
}

export default Board;
