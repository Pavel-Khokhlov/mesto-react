import { createSlice } from "@reduxjs/toolkit";
import { REG_NAME, REG_LINK } from "../utils/config";

const changeValue = (v) => {
  return v.charAt(0).toUpperCase() + v.slice(1);
};

const initialState = {
  values: { name: "", about: "", link: "" },
  errors: { name: false, about: false, link: false },
  isFormValid: false,
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    handleValueChange(state, action) {
      const { name, value } = action.payload;
      let modifiedValue = "";
      if (name === "name" || name === "about") {
        modifiedValue = changeValue(value);
      } else if (name === "link") {
        modifiedValue = value;
      }
      state.values = { ...state.values, [name]: modifiedValue };
    },
    validateInput(state, action) {
      if (action.payload === `name`) {
        if (state.values.name.length === 0) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Необходимо ввести имя",
          };
          return;
        }
        if (!REG_NAME.test(state.values.name)) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Имя может содержать только буквы, -, _ и пробел",
          };
          return;
        }
        if (state.values.name.length < 2) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Имя должно быть больше 2 букв!",
          };
          return;
        }
        state.errors = { ...state.errors, [action.payload]: true };
        return;
      }
      if (action.payload === `about`) {
        if (state.values.about.length === 0) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Необходимо ввести профессию",
          };
          return;
        }
        if (!REG_NAME.test(state.values.about)) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Описание может содержать только буквы, -, _ и пробел",
          };
          return;
        }
        if (state.values.about.length < 2) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Описание должно быть больше 2 букв!",
          };
          return;
        }
        state.errors = { ...state.errors, [action.payload]: true };
        return;
      }
      if (action.payload === `link`) {
        if (state.values.link.length === 0 ) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Необходимо ввести URL-ссылку",
          };
          return;
        }
        if (!REG_LINK.test(state.values.link)) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Введите правильную URL-ссылку",
          };
          return;
        }
        state.errors = { ...state.errors, [action.payload]: true };
        return;
      }
    },
    validateForm(state, action) {
      state.isFormValid = action.payload.every((i) => 
        state.errors[i] === true);
    },
    disableButton(state) {
      state.isFormValid = false;
    },
    resetFormCurrentUser(state, action) {
      state.values = {
        name: action.payload.name,
        about: action.payload.about,
        link: "",
      };
      state.errors = {
        name: true,
        about: true,
        link: false,
      };
      state.isFormValid = false;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const {
  handleValueChange,
  validateInput,
  validateForm,
  disableButton,
  resetFormCurrentUser,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
