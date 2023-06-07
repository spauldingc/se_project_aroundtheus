import { openModal } from "../utils/utils.js";

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._cardElement = this._getTemplate();
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardLikeBtn = this._cardElement.querySelector(".card__like-button");
    this._cardTrashBtn = this._cardElement.querySelector(".card__trash-button");
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    this._cardTrashBtn.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardImageEl.addEventListener("click", () => {
      this._handlePreviewPicture();
    });
  }

  _handleLikeIcon() {
    this._cardLikeBtn.classList.toggle("card__like-button_active");
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
    return document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
  }

  generateCard() {
    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;
    this._setEventListeners();

    return this._cardElement;
  }
}
