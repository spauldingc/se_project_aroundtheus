import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  closeModal,
  openModal,
  addCloseModalWithClickListener,
} from "../utils/utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardData = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};

/*Elements*/

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardAddModal = document.querySelector("#card-add-modal");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardListEl = document.querySelector(".cards__list");
const cardAddForm = cardAddModal.querySelector(".modal__form");

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileCloseBtn = profileEditModal.querySelector("#profile-close-button");

const profileAddBtn = document.querySelector("#profile-add-button");
const cardAddCloseBtn = cardAddModal.querySelector("#card-add-close-button");
const cardImageCloseBtn = document.querySelector(
  "#card-image-modal-close-button"
);
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = cardAddForm.querySelector("#card-form-title");
const cardUrlInput = cardAddForm.querySelector("#card-form-link");
const cardImageModal = document.querySelector("#card-image-modal");
const modals = [...document.querySelectorAll(".modal")];

/* Remaining Functions */
function renderCard(cardData, wrapper) {
  const card = new Card(cardData, "#card-template");
  wrapper.prepend(card.generateCard());
}

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
}

/* Event Handlers */
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileAddBtn.addEventListener("click", () => openModal(cardAddModal));
profileCloseBtn.addEventListener("click", () => closeModal(profileEditModal));
cardAddCloseBtn.addEventListener("click", () => closeModal(cardAddModal));
cardImageCloseBtn.addEventListener("click", () => closeModal(cardImageModal));

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
  errorClass: ".modal__error_visible",
};

const editFormValidator = new FormValidator(
  defaultFormConfig,
  profileEditModal
);
const cardFormValidator = new FormValidator(defaultFormConfig, cardAddModal);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
