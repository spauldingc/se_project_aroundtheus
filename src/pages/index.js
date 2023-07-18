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
  defaultFormConfig,
} from "../utils/Constants.js";

//import component classes
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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

addCardPopup.setEventListeners();
editProfileModal.setEventListeners();
cardPreviewPopup.setEventListeners();

/* Form Validation */

const addCardValidator = new FormValidator(
  defaultFormConfig,
  selectors.cardAddModal
);
const editCardValidator = new FormValidator(
  defaultFormConfig,
  profileEditModal
);
addCardValidator.enableValidation();
editCardValidator.enableValidation();

/* Event Handlers */

profileEditBtn.addEventListener("click", () => {
  const { profileName, profileDescription } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = profileDescription;
  editCardValidator.resetValidation();
  editProfileModal.open();
});

profileAddBtn.addEventListener("click", () => {
  addCardValidator.resetValidation();

  addCardPopup.open();
});

//API
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-42",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json"
  }
});

