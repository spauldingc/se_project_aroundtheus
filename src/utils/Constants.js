export const initialCards = [
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

  export const cardData = {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  };

  export const selectors = {
    cardList: ".cards__list",
    cardTemplate: "#card-template",
    cardImageModal: "#card-image-modal",
    cardAddModal: "#card-add-modal",
    form: ".modal__form"
  
   
  }

  
  export const profileEditBtn = document.querySelector("#profile-edit-button");

  export const profileAddBtn = document.querySelector("#profile-add-button");

  export const profileEditModal = "#profile-edit-modal"; 

export const modals = [...document.querySelectorAll(".modal")];
export const profileTitle = document.querySelector(".profile__title");
export  const profileDescription = document.querySelector(".profile__description");
export const profileTitleInput = document.querySelector("#profile-title-input");
  export const profileDescriptionInput = document.querySelector( "#profile-description-input");

  /*
  

  
  
  
  export const profileCloseBtn = profileEditModal.querySelector("#profile-close-button");
  
  export  const cardAddCloseBtn = cardAddModal.querySelector("#card-add-close-button");
  export const cardImageCloseBtn = document.querySelector(
    "#card-image-modal-close-button"
  );
  

*/