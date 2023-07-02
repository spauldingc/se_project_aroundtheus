// index.js
//import constants
import {
  initialCards,
  selectors,
  profileTitle,
  profileTitleInput,
  profileDescriptionInput,
  profileDescription,
  profileEditModal,
  profileEditBtn,
  profileAddBtn,
} from "../utils/Constants.js";

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

const editProfileModal = new PopupWithForm(
  profileEditModal,
  handleCardEditSubmit
);

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

function handleCardEditSubmit(inputValues) {
  // e.preventDefault();
  userInfo.setUserInfo(inputValues.title, inputValues.description);
  editProfileModal.close();
}

function handleCardAddSubmit({ title, url }) {
  //e.preventDefault();
  const addCardData = { name: title, link: url };
  cardSection.addItem(addCard(addCardData));
  // e.target.reset();
  // formValidators["add-card-form"].resetValidation();
  addCardPopup.close();
}

const cardPreviewPopup = new PopupWithImage(selectors.cardImageModal);
const addCardPopup = new PopupWithForm(
  selectors.cardAddModal,
  handleCardAddSubmit
);

/* Form Validation */

export const defaultFormConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitBtnSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const AddCardValidator = new FormValidator(
  defaultFormConfig,
  selectors.cardAddModal
);
const EditCardValidator = new FormValidator(
  defaultFormConfig,
  profileEditModal
);
AddCardValidator.enableValidation();
EditCardValidator.enableValidation();

/* Event Handlers */

profileEditBtn.addEventListener("click", () => {
  const { profileName, profileDescription } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = profileDescription;
  EditCardValidator._toggleBtnState();
  editProfileModal.open();
});

profileAddBtn.addEventListener("click", () => {
  AddCardValidator._toggleBtnState();
  addCardPopup.open();
});
