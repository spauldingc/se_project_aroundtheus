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
/*Elements*/
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileCloseBtn = profileEditModal.querySelector("#profile-close-button");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");

const cardAddModal = document.querySelector("#card-add-modal");
const profileAddBtn = document.querySelector("#profile-add-button");
const cardAddCloseBtn = cardAddModal.querySelector("#card-add-close-button");
const cardAddForm = cardAddModal.querySelector(".modal__form");

const cardTitleInput = cardAddForm.querySelector("#card-form-title");
const cardUrlInput = cardAddForm.querySelector("#card-form-link");
const cardImageModal = document.querySelector("#card-image-modal");
const cardImageModalPreview = document.querySelector(
  "#card-image-modal-preview"
);
const cardImageModalTitle = document.querySelector("#card-image-modal-title");
const cardImageCloseBtn = document.querySelector(
  "#card-image-modal-close-button"
);

const modals = [...document.querySelectorAll(".modal")];

/*Functions*/
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalWithEsc);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalWithEsc);
}

const closeModalWithEsc = (e) => {
  if (e.key === "Escape") {
    const currentModal = document.querySelector(".modal_opened");
    closeModal(currentModal);
  }
};
/*Event Handler */

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
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
  toggleBtnState(inputEls, submitBtn, config);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__trash-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardTitleEl.textContent;

  cardImageEl.addEventListener("click", () => {
    cardImageModalPreview.src = cardImageEl.src;
    cardImageModalPreview.alt = cardImageEl.alt;
    cardImageModalTitle.textContent = cardTitleEl.textContent;
    openModal(cardImageModal);
  });
  return cardElement;
}

function addCloseModalWithClick(modal) {
  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains("modal__close")
    ) {
      closeModal(modal);
    }
  });
}

/*Event Listeners*/

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileAddBtn.addEventListener("click", () => openModal(cardAddModal));
profileCloseBtn.addEventListener("click", () => closeModal(profileEditModal));
cardAddCloseBtn.addEventListener("click", () => closeModal(cardAddModal));
cardImageCloseBtn.addEventListener("click", () => closeModal(cardImageModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

modals.forEach((modal) => {
  addCloseModalWithClick(modal);
});
