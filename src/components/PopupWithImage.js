import Popup from "./Popup.js"
export default class PopupWithImage extends Popup{
constructor(popupSelector){
    super({popupSelector});
    this._cardImageModalPreview = document.querySelector(
      "#card-image-modal-preview");
      this._cardImageModalTitle = document.querySelector(
        "#card-image-modal-title").textContent;
}
open({link, name}){
    super.open();
    
    this._cardImageModalTitle.textContent = name;
  this._cardImageModalTitle.alt = name;
   this._cardImageModalPreview.src = link;
    

}
}