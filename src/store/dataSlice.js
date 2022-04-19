import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../utils/config";

export const fetchCards = createAsyncThunk(
  "data/fetchCards",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/cards`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR!");
      }
      const cards = await response.json();
      return cards;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const newCard = createAsyncThunk(
  "data/newCard",
  async function ({ name, link }, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
        body: JSON.stringify({ name, link }),
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Can't add a new card.");
      }
      const card = await response.json();
      return card;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const likeCard = createAsyncThunk(
  "data/likeCard",
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/cards/likes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Can't set like.");
      }
      const card = await response.json();
      return card;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dislikeCard = createAsyncThunk(
  "data/likeCard",
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/cards/likes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Can't set dislike.");
      }
      const card = await response.json();
      return card;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "data/deleteCard",
  async function (cardId, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_API}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "87b27e82-ce10-439c-bbe6-2acce8f72cdc",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR! Can't delete card.");
      }
      return cardId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setLoading = (state) => {
  state.statusData = "loading";
  state.error = null;
};

const handleLike = (state, action) => {
  state.cards = state.cards.map((c) =>
    c._id === action.payload._id ? action.payload : c
  );
  state.statusData = "resolved";
};

const setError = (state, action) => {
  state.error = action.payload;
  state.statusData = "rejected";
};

const dataSlice = createSlice({
  name: "data",
  initialState: {
    cards: [],
    selectedCard: [],
    statusData: null,
    error: null,
  },
  reducers: {
    setSelectedCard (state, action) {
      return {
        ...state,
        selectedCard: action.payload,
      };
    },
    resetSelectedCard (state) {
      return {
        ...state,
        selectedCard: [],
      };
    },
  },
  extraReducers: {
    [fetchCards.pending]: setLoading,
    [fetchCards.fulfilled]: (state, action) => {
      state.statusData = "resolved";
      state.cards = action.payload;
    },
    [fetchCards.rejected]: setError,
    [newCard.pending]: setLoading,
    [newCard.fulfilled]: (state, action) => {
      state.statusData = "resolved";
      state.cards = [action.payload, ...state.cards];
    },
    [newCard.rejected]: setError,
    [deleteCard.pending]: setLoading,
    [deleteCard.fulfilled]: (state, action) => {
      state.statusData = "resolved";
      state.cards = state.cards.filter((card) => card._id !== action.payload);
    },
    [deleteCard.rejected]: setError,
    [likeCard.fulfilled]: handleLike,
    [dislikeCard.fulfilled]: handleLike,
    [likeCard.rejected]: setError,
    [dislikeCard.rejected]: setError,
    
  },
});

export const {
  setSelectedCard,
  resetSelectedCard,
} = dataSlice.actions;

export default dataSlice.reducer;
