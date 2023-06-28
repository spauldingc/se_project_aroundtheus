// index.js
//import constants
import {
  initialCards,
  selectors,
  cardAddModal,
  cardTitleInput,
  cardUrlInput,
  cardAddForm,
  profileTitle,
  profileTitleInput,
  profileDescriptionInput,
  profileDescription,
  profileEditModal,
  profileEditForm,
  profileEditBtn,
  profileAddBtn,
  modals,
} from "../components/Constants.js";

//import component classes
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//import styles
import "./index.css";

//Profile Class
const userInfo = new UserInfo(profileTitle, profileDescription);

const editProfileModal = new PopupWithForm(profileEditModal, (inputsObject) => {
  userInfo.setUserInfo(inputsObject.name, inputsObject.description);
  editProfileModal.close();
});

//Section Class
const cardSection = new Section(
  {
    items: initialCards,
    renderer: ({ name, link }) => {
      const card = addCard({ name, link });
      cardSection.addItem(card);
    },
  },
  selectors.cardList
);

cardSection.renderItems();

//Create Cards or Add Cards through Submit
function addCard({ name, link }) {
  const newCard = new Card(
    { name, link },
    selectors.cardTemplate,
    ({ name, link }) => {
      cardPreviewPopup.open({ name, link });
    }
  );
  return newCard.generateCard();
}

function handleCardAddSubmit({ title, url }, e) {
  e.preventDefault();
  const addCardData = { name: title, link: url };
  cardSection.prependItem(addCard(addCardData));
  e.target.reset();
  formValidators["add-card-form"].resetValidation();
  addCardPopup.close();
}


const cardPreviewPopup = new PopupWithImage(selectors.cardImageModal);
const addCardPopup = new PopupWithForm(
  selectors.cardAddModal,
  handleCardAddSubmit
);

/*
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

}


*/

/* Form Validation */
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

/* Event Handlers */


profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  editProfileModal.open();
});

profileAddBtn.addEventListener("click", () => {
  addCardPopup.open(); 
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);