import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputEls = this._popupForm.querySelectorAll(".modal__input");
  }
  close() {
    super.close();
    this._popupForm.reset();
  }

  _getInputValues() {
    const inputValues = {};
    this._inputEls.forEach((inputEl) => {
      inputValues[inputEl.name] = inputEl.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
