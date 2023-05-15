class CellControl {
  constructor(color) {
    this.color = color;
    this.htmlElement = this.generateHtmlElement();
  }

  generateHtmlElement() {
    const button = document.createElement("button");
    button.classList.add("cell");
    button.classList.add(this.color);
    return button;
  }
}

export default CellControl;
