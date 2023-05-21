import { createHTMLElement } from "./utils/functions.js";

export default function renderRows(rows) {
  rows.forEach((row) => {
    // Crea un 'div', le agrega un 'id' para identificarlo y le agrega la clase 'row' para el css.
    // Estas son las filas, serán un div en el html que contiene las celdas 'cells' y pistas 'clues'. 
    const rowElement = createHTMLElement("div", `row-${row.position}`, ["row"]);
  
    // Itera por cada celda definida en el estado inicial.
    // Por cada celda crea un 'div' con un identificardor único y le agrega la clase 'cell' para el css. 
    row.cells.forEach((cell) => {
      // Crea un div, le agrega un id para identificarlo y le agrega la clase 'row'.
      const id = `row-${cell.rowPosition}-cell-${cell.position}`;
      const cellElement = createHTMLElement("div", id, ["cell"]);
      cellElement.style.backgroundColor = cell.color;
      rowElement.appendChild(cellElement);
    });
  
    //Pistas
    const clueId = `clues-${row.position}`;
    const cluesElement = createHTMLElement("div", clueId, ["clues-container"]);
    row.clues.forEach((clue) => {
      const clueElement = createHTMLElement("div", "", ["clue-cell"]);
      clueElement.style.backgroundColor = clue.color;
      cluesElement.appendChild(clueElement);
    });
    rowElement.appendChild(cluesElement);
    
    const boardElement = document.getElementById("board");
    boardElement.appendChild(rowElement);
    
  });

}
