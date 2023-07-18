class Api {
    constructor(options) {
this._options = options; 
this._baseUrl = baseUrl;
this._headers = headers; }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: {
            authorization: "d58e9574-68b1-4d52-aba4-66595060467b"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
 return Promise.reject(`Error: ${res.status}`);
});
         
      }
   getUserInfo(){
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: "d58e9574-68b1-4d52-aba4-66595060467b"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
});
   }

   changeUserInfo(){
    return fetch(`${this._baseUrl}/users/me`,
     {method: Patch,
      headers: {
        authorization: "d58e9574-68b1-4d52-aba4-66595060467b",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist"
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
});
}


addCard(){
return fetch(`${this._baseUrl}/cards`, {
  method: POST,
headers: {
  authorization: "d58e9574-68b1-4d52-aba4-66595060467b"
}
})
.then(res => {
  if (res.ok) {
    return res.json();
  }
});
}

deleteCard(){
  return fetch(`${this._baseUrl}/cards/cardId`, {
    method: Delete,
  headers: {
    authorization: "d58e9574-68b1-4d52-aba4-66595060467b"
  }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  });
  }

}

  
  api.getInitialCards()
  .then((result) => {
    // process the result
  })
  .catch((err) => {
    console.error(err); // log the error to the console
  });

  Promise.all([api.getUserInfo(), api.getInitialCards()])