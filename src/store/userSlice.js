import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../utils/config";

export const getUserInfo = createAsyncThunk(
  "users/getUserInfo",
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
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProfile = createAsyncThunk(
  "users/editProfile",
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

export const editAvatar = createAsyncThunk(
  "users/editAvatar",
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

const setLoading = (state) => {
  state.statusUser = "loading";
  state.error = null;
};

const setCurrentUser = (state, action) => {
  state.statusUser = "resolved";
  state.currentUser = action.payload;
};

const setError = (state, action) => {
  state.statusUser = "rejected";
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    statusUser: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUserInfo.pending]: setLoading,
    [editProfile.pending]: setLoading,
    [editAvatar.pending]: setLoading,
    [getUserInfo.fulfilled]: setCurrentUser,
    [editProfile.fulfilled]: setCurrentUser,
    [editAvatar.fulfilled]: setCurrentUser,
    [getUserInfo.rejected]: setError,
    [editProfile.rejected]: setError,
    [editAvatar.rejected]: setError,
  },
});

export default userSlice.reducer;
