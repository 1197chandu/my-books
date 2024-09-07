import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants";

// Thunk to fetch books by genre
export const getBooksByGenre = createAsyncThunk(
  "books/getByGenre",
  async ({ genre, url }) => {
    console.log(genre);
    try {
      const apiUrl = url || `${BASE_URL}?topic=${genre}&mime_type=image`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const searchBooks = createAsyncThunk(
  "books/search",
  async ({ genre, query }) => {
    try {
      const response = await fetch(
        `${BASE_URL}?topic=${genre}&search=${query}&mime_type=image`
      );
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      return error;
    }
  }
);

// Slice
const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksByGenre.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBooksByGenre.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (Array.isArray(action.payload.results)) {
          state.books = [...state.books, ...action.payload.results];
        }
        state.next = action.payload.next;
      })
      .addCase(getBooksByGenre.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(searchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload.results;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
