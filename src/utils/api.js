import { inputNamePlace, inputLinkPlace } from "./constants.js";

class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getPlaces() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then(this._checkPromise);
  }

  newPlace() {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: inputNamePlace.value,
        link: inputLinkPlace.value,
      }),
    }).then(this._checkPromise);
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then(this._checkPromise);
  }

  patchUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkPromise);
  }

  patchUserAvatar(avatar) {
    console.log(avatar);
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkPromise);
  }

  changeLikeCardStatus(cardId, isLiked) {
    console.log(cardId, isLiked);
    if (!isLiked) {
      return this.addLike(cardId);
    }
    return this.removeLike(cardId);
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    }).then(this._checkPromise);
  }

  removeLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkPromise);
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkPromise);
  }

  _checkPromise(res) {
    if (!res.ok) {
      Promise.reject(`Error ${res.status}`);
    }
    return res.json();
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-18",
  headers: {
    "Content-Type": "application/json",
    authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
  },
});

export default api;
