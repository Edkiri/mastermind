export function createHTMLElement(tag, id, classes = []) {
  const HTMLElement = document.createElement(tag);
  if (id) HTMLElement.id = id;
  classes.forEach((cssClass) => {
    HTMLElement.classList.add(cssClass);
  });
  return HTMLElement;
}

export function getCellElement(cell) {
  return document.getElementById(
    `row-${cell.rowPosition}-cell-${cell.position}`
  );
}

export function checkClueBalls(currentCells, secretCells) {
  const currentCellsAux = currentCells.map((cell) => {
    return { ...cell, checked: false };
  });
  const secretCellsAux = secretCells.map((cell) => {
    return { ...cell, checked: false };
  });
  const clueBalls = [];
  currentCellsAux.forEach((cell) => {
    secretCellsAux.forEach((secretCell) => {
      if (
        cell.color === secretCell.color &&
        cell.position === secretCell.position
      ) {
        clueBalls.push("black");
        secretCell.checked = true;
        cell.checked = true;
      }
    });
  });
  currentCellsAux.forEach((cell) => {
    secretCellsAux.forEach((secretCell) => {
      if (
        !secretCell.checked &&
        !cell.checked &&
        cell.color === secretCell.color
      ) {
        clueBalls.push("white");
        secretCell.checked = true;
        cell.checked = true;
      }
    });
  });
  while(clueBalls.length < 4) {
    clueBalls.push(null);
  };
  return clueBalls;
}
