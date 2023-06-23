import Popup from "./Popup.js"
export class PopupWithImage extends Popup{
constructor(popupSelector){
    super({popupSelector});
    

}
open(){
    super.open();    
    this._cardImageModal = document.querySelector("#card-image-modal");
    this._cardImageModalPreview = document.querySelector(
      "#card-image-modal-preview"
    );
    this._cardImageModalTitle = document.querySelector(
      "#card-image-modal-title"
    );
    this._cardImageModalPreview.src = this._link;
    this._cardImageModalPreview.alt = this._name;
    this._cardImageModalTitle.textContent = this._name;
}
}