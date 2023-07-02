import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._cardImageModalPreview = document.querySelector(
      "#card-image-modal-preview"
    );
    this._cardImageModalTitle = document.querySelector(
      "#card-image-modal-title"
    );
  }
  open({ name, link }) {
    this._cardImageModalPreview.src = link;
    this._cardImageModalPreview.alt = name;
    this._cardImageModalTitle.textContent = name;
    super.open();
  }
}
