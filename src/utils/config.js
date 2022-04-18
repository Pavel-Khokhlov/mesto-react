export const BASE_URL = "http://localhost:3000";
export const BASE_API = "https://mesto.nomoreparties.co/v1/cohort-18";

export const HEADERS = `
  headers: {
    "Content-Type": "application/json",
    authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
  }`

export const REG_NAME = /^[a-zA-Zа-яА-ЯЁё\s-_]+$/i;

export const REG_EMAIL = /^[^@]+@[^@.]+\.[^@]+$/;

export const REG_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;

export const REG_LINK =
  /^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/;

export const ESC_CODE = 27;

export const DELAY = 500;
