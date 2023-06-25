import Popup from "./Popup.js"
export default class PopupWithForm extends Popup{
constructor(popupSelector, handleFormSubmit){
    super({popupSelector});
    this._popupForm=this._popupElement.querySelector(".modal__form")
this._handleFormSubmit = handleFormSubmit;
}
close(){
    super.close();
    this._popupForm.reset();
}

_getInputValues(){}

setEventListeners(){
    super.setEventListeners();

}

}

const newCardPopup = new PopupWithForm("#card-add-modal",() =>{});
newCardPopup.open();
newCardPopup.close();