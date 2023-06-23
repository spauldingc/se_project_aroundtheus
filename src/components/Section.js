
export default class Section {
    constructor({ renderer, items }, selector) {
    this._items = items;
   this._renderer = renderer;
   this._element = document.querySelector(selector);
    }

  
addItem(element){
        this._element.append(element);
    }  

  clear() {
    this._element.innerHTML = "";
  }


    renderItems() {
        this.clear();
    
        this._renderedItems.forEach(item => {
          this._renderer(item);
        });
      }

}