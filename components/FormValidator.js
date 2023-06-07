export default class FormValidator {
  constructor(config, formEl) {
    this._inputSelector = config.inputSelector;
    this._submitBtnSelector = config.submitBtnSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formEl = formEl;
    this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitBtn = this._formEl.querySelector(this._submitBtnSelector);
    

  }

  _showInputError(inputEl) {
    this._errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = inputEl.validationMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    this._errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    this._errorMessageEl.textContent = "";
    this._errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }
    this._hideInputError(inputEl);
  }

  _hasInvalidInput() {
    return !this._inputEls.every((inputEl) => {
      return inputEl.validity.valid;
    });
  }

  _disableBtn() {
    this._submitBtn.classList.add(this._inactiveButtonClass);
    this._submitBtn.disabled = true;
  }

  _enableBtn() {
    this._submitBtn.classList.remove(this._inactiveButtonClass);
    this._submitBtn.disabled = false;
  }

  _toggleBtnState() {
    if (this._hasInvalidInput()) {
      this._disableBtn();
    } else {
      this._enableBtn();
    }
  }

  _setEventListeners() {
    this._toggleBtnState();
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (event) => {
        this._checkInputValidity(inputEl);
        this._toggleBtnState();
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleBtnState(); 

    this._inputEls.forEach((inputEl) => {
      this._hideInputError(inputEl) 
    });

  }
}

