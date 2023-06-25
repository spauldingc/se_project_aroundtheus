import FormValidator from "./FormValidator.js";
export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(".modal");
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose());
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose());
  }


  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  }


  setEventListeners() {
    modal.addEventListener("click", () => {
        if (
          this._event.target.classList.contains("modal") ||
          this._event.target.classList.contains("modal__close")
        ) {
          close(modal);
        }
      });
  }
}

