import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../utils/config";

export const fetchUserInfo = createAsyncThunk(
  "users/fetchUserInfo",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Cant get user information");
      }
      const user = await response.json();
      console.log(user);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchProfile = createAsyncThunk(
  "users/patchProfile",
  async function ({ name, about }, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
        body: JSON.stringify({ name, about }),
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Can't update profile.");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchAvatar = createAsyncThunk(
  "users/patchProfile",
  async function (avatar, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
        body: JSON.stringify({ avatar: avatar.link }),
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Can't update avatar.");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: [],
    users: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUserInfo.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currentUser = action.payload;
    },
    [patchProfile.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currentUser = action.payload;
    },
    [patchAvatar.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currentUser = action.payload;
    },
    [fetchUserInfo.rejected]: setError,
    [patchProfile.rejected]: setError,
    [patchAvatar.rejected]: setError,
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
