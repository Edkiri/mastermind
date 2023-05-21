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
