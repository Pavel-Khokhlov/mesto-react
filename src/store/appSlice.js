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
    status: null,
    error: null,
  },
  reducers: {
    openEditProfilePopup(state, action) {
      state.isEditProfilePopupOpen = true;
      state.isPopupOpen = true;
    },
    openEditAvatarPopup(state, action) {
      state.isEditAvatarPopupOpen = true;
      state.isPopupOpen = true;
    },
    openZoomImagePopup(state, action) {
      state.selectedCard = action.payload;
      state.isZoomImagePopupOpen = true;
      state.isPopupOpen = true;
    },
    openAddPlacePopup(state, action) {
      state.isAddPlacePopupOpen = true;
      state.isPopupOpen = true;
    },
    openDelConfirmPopup(state, action) {
      state.selectedCard = action.payload;
      state.isDelConfirmPopupOpen = true;
      state.isPopupOpen = true;
    },
    resetSelectedCard(state, action){
      state.selectedCard = false;
    },
    closeAllPopups(state, action) {
      state.isEditProfilePopupOpen = false;
      state.isEditAvatarPopupOpen = false;
      state.isZoomImagePopupOpen = false;
      state.isAddPlacePopupOpen = false;
      state.isDelConfirmPopupOpen = false;
      state.isPopupOpen = false;
    },
  },
});

export const {
  openEditProfilePopup,
  openEditAvatarPopup,
  openZoomImagePopup,
  openAddPlacePopup,
  openDelConfirmPopup,
  resetSelectedCard,
  closeAllPopups,
} = appSlice.actions;

export default appSlice.reducer;
