export function getCellElement(cell) {
  return document.getElementById(
    `row-${cell.rowPosition}-cell-${cell.position}`
  );
}
