import FormValidator from "../components/FormValidator.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(modal);
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose());
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose());
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      const currentModal = document.querySelector(".modal_opened");
      close(currentModal);
    }
  }
  setEventListeners() {
    modal.addEventListener("click", (event) => {
        if (
          event.target.classList.contains("modal") ||
          event.target.classList.contains("modal__close")
        ) {
          close(modal);
        }
      });
  }
}

