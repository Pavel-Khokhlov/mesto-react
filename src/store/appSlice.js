import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditProfilePopupOpen: false,
  isEditAvatarPopupOpen: false,
  isAddPlacePopupOpen: false,
  isZoomPopupOpen: false,
  isDelConfirmPopupOpen: false,
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
        isEditProfilePopupOpen: true,
      };
    },
    openEditAvatarPopup(state) {
      return {
        ...state,
        uxBtnTitle: "Save",
        isEditAvatarPopupOpen: true,
      };
    },
    openZoomImagePopup(state) {
      return {
        ...state,
        isZoomPopupOpen: true,
      };
    },
    openAddPlacePopup(state) {
      return {
        ...state,
        uxBtnTitle: "Create",
        isAddPlacePopupOpen: true,
      };
    },
    openDelConfirmPopup(state, action) {
      return {
        ...state,
        uxBtnTitle: "Yes",
        selectedCard: action.payload,
        isDelConfirmPopupOpen: true,
      };
    },
    closeAllPopups() {
      return initialState;
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
