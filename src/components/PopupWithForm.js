import Popup from "./Popup.js"
export default class PopupWithForm extends Popup{
constructor(popupSelector, handleFormSubmit){
    super({popupSelector});
    this._popupForm=this._popupElement.querySelector(".modal__form")
this._handleFormSubmit = handleFormSubmit;
this._inputEls = this._popupForm.querySelectorAll(".modal__input");

}
close(){
    super.close();
    this._popupForm.reset();
    this._popupElement.removeEventListener("submit", this._submitForm);

}

_getInputValues(){
    const inputsObject = {};
    this._inputEls.forEach((inputEl) => {
        if(inputEl.value !==""){
           inputsObject[inputEl.name] = inputEl.value 
        }
      });
      return inputsObject;
}

_submitForm(){
    this._handleFormSubmit(this._getInputValues);
}

setEventListeners(){
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._submitForm);
}

}
