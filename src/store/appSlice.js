import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isPopupOpen: false,
    isEditProfilePopupOpen: false,
    isEditAvatarPopupOpen: false,
    isAddPlacePopupOpen: false,
    isZoomImagePopupOpen: false,
    isDelConfirmPopupOpen: false,
    selectedCard: false,
    uxSaveBtn: `Save`,
    uxCreateBtn: `Create`,
    uxDeleteBtn: `Yes!`,
    status: null,
    error: null,
  },
  reducers: {
    openEditProfilePopup(state) {
      state.isEditProfilePopupOpen = true;
      state.isPopupOpen = true;
    },
    openEditAvatarPopup(state) {
      state.isEditAvatarPopupOpen = true;
      state.isPopupOpen = true;
    },
    openZoomImagePopup(state, action) {
      state.selectedCard = action.payload;
      state.isZoomImagePopupOpen = true;
      state.isPopupOpen = true;
    },
    openAddPlacePopup(state) {
      state.isAddPlacePopupOpen = true;
      state.isPopupOpen = true;
    },
    openDelConfirmPopup(state, action) {
      state.selectedCard = action.payload;
      state.isDelConfirmPopupOpen = true;
      state.isPopupOpen = true;
    },
    resetSelectedCard(state) {
      state.selectedCard = false;
    },
    closeAllPopups(state) {
      state.isEditProfilePopupOpen = false;
      state.isEditAvatarPopupOpen = false;
      state.isZoomImagePopupOpen = false;
      state.isAddPlacePopupOpen = false;
      state.isDelConfirmPopupOpen = false;
      state.isPopupOpen = false;
    },
    setUxSaveBtn(state) {
      state.uxSaveBtn = `Saving...`;
    },
    setUxCreateBtn(state) {
      state.uxCreateBtn = `Creating...`;
    },
    setUxDeleteBtn(state) {
      state.uxDeleteBtn = `Deleting...`;
    },
    resetUxButtons(state) {
      state.uxSaveBtn = `Save`;
      state.uxCreateBtn = `Create`;
      state.uxDelBtn = `Yes!`;
    },
  },
});

export const {
  openEditProfilePopup,
  openEditAvatarPopup,
  openZoomImagePopup,
  openAddPlacePopup,
  openDelConfirmPopup,
  setUxSaveBtn,
  setUxCreateBtn,
  setUxDeleteBtn,
  closeAllPopups,
  resetSelectedCard,
  resetUxButtons,
} = appSlice.actions;

export default appSlice.reducer;
