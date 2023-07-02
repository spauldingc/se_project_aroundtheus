export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._element = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach((element) => this._renderer(element));
  }

  addItem(element) {
    this._element.prepend(element);
  }
}
