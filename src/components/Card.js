export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._cardElement = this._getTemplate();
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardLikeBtn = this._cardElement.querySelector(".card__like-button");
    this._cardTrashBtn = this._cardElement.querySelector(".card__trash-button");
    this._handleCardClick = handleCardClick;
  }

  _handleLikeIcon() {
    this._cardLikeBtn.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    this._cardTrashBtn.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardImageEl.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
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
