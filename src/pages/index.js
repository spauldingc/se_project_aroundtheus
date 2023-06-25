// index.js

import {initialCards, selectors} from "../components/Constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";


import  "./index.css";
/*
import {
  closeModal,
  openModal,
  addCloseModalWithClickListener,
} from "../utils/utils.js";
*/


/* Remaining Functions */



//const addCardPopup = new PopupWithForm(selectors);


const cardPreviewPopup = new PopupWithImage(selectors.cardImageModal);
const cardSection = new Section(
  {
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, selectors.cardTemplate);
    cardSection.addItem(card.generateCard());
}}
, selectors.cardList
);





cardSection.renderItems();
cardPreviewPopup.setEventListeners();



function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleCardAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closeModal(cardAddModal);
  e.target.reset();
  formValidators["add-card-form"].resetValidation();
}

/* Event Handlers */
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileAddBtn.addEventListener("click", () => openModal(cardAddModal));

modals.forEach((modal) => {
  addCloseModalWithClickListener(modal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

/* Validation */
const defaultFormConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitBtnSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const formValidators = {};

// enable validation
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // here you get the name of the form
    const formName = formElement.getAttribute("name");

    // here you store a validator by the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(defaultFormConfig);
