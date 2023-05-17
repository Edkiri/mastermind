// Renderiza el estado inicial del tablero dentro del elemento 'boardElement'.
export function renderBoard(boardElement, gameState) {
  // Renderiza las celdas ocultas arriba del tablero.
  const hiddenRowElement = document.createElement("div");
  hiddenRowElement.classList.add("row");
  // Crea 4 celdas ocultas y agrega identificador único y clases para los estilos.
  for (let i = 1; i <= 4; i++) {
    const hiddenCellElement = document.createElement("div");
    hiddenCellElement.classList.add("cell");
    hiddenCellElement.classList.add("hidden-cell");
    hiddenCellElement.textContent = "?";
    hiddenCellElement.id = `hidden-cell-${i}`;
    hiddenRowElement.appendChild(hiddenCellElement);
  }
  boardElement.appendChild(hiddenRowElement);
  const { rows } = gameState.state;
  // Por cada fila del estado: Crea un elemento div y agrega la clase 'row' y un identificador único.
  rows.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    rowElement.id = `row-${row.position}`;
    // Por cada celda de la fila actual: Crea un elemento 'button', agrega la clase 'cell' y el
    // color actual leído del estado. Agrega un identificador único.
    row.cells.forEach((cell) => {
      const cellElement = document.createElement("button");
      cellElement.classList.add("cell");
      cellElement.style.backgroundColor = cell.color;
      cellElement.id = `row-${row.position}-cell-${cell.position}`;
      // Renderiza todas las celdas dentro de la fila actual.
      rowElement.appendChild(cellElement);
    });
    // Renderiza todas las filas dentro del elemento 'boardElement'.
    boardElement.appendChild(rowElement);
  });
}
