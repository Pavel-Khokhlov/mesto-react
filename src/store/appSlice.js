import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  isEditProfilePopupOpen: false,
  isEditAvatarPopupOpen: false,
  isAddPlacePopupOpen: false,
  isZoomPopupOpen: false,
  isDelConfirmPopupOpen: false,
  selectedCard: [],
  uxBtnTitle: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openEditProfilePopup(state) {
      return {
        ...state,
        uxBtnTitle: "Save",
        isPopupOpen: true,
        isEditProfilePopupOpen: true,
      };
    },
    openEditAvatarPopup(state) {
      return {
        ...state,
        uxBtnTitle: "Save",
        isEditAvatarPopupOpen: true,
        isPopupOpen: true,
      };
    },
    openZoomImagePopup(state, action) {
      return {
        ...state,
        selectedCard: action.payload,
        isZoomPopupOpen: true,
        isPopupOpen: true,
      };
    },
    openAddPlacePopup(state) {
      return {
        ...state,
        uxBtnTitle: "Create",
        isAddPlacePopupOpen: true,
        isPopupOpen: true,
      };
    },
    openDelConfirmPopup(state, action) {
      return {
        ...state,
        uxBtnTitle: "Yes",
        selectedCard: action.payload,
        isDelConfirmPopupOpen: true,
        isPopupOpen: true,
      };
    },
    closeAllPopups(state) {
      return {
        ...state,
        isPopupOpen: false,
        isEditProfilePopupOpen: false,
        isEditAvatarPopupOpen: false,
        isAddPlacePopupOpen: false,
        isZoomPopupOpen: false,
        isDelConfirmPopupOpen: false,
      };
    },
    setUxBtnTitle(state, action) {
      return {
        ...state,
        uxBtnTitle: action.payload,
      };
    },
  },
});

export const {
  openEditProfilePopup,
  openEditAvatarPopup,
  openZoomImagePopup,
  openAddPlacePopup,
  openDelConfirmPopup,
  setUxBtnTitle,
  closeAllPopups,
} = appSlice.actions;

export default appSlice.reducer;
