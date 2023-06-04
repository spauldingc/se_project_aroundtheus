import { openModal } from "../utils/utils.js";

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePreviewPicture();
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handlePreviewPicture() {
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
    openModal(this._cardImageModal);
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector("#card-template")
      .content.firstElementChild.cloneNode(true);
    return this._cardElement;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;
    this._setEventListeners();

    return this._cardElement;
  }

  returnCard() {
    return this._generateCard();
  }
}
