import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    movie: {},
    loading: false,
    error: false,
    msg: "",
  },
  reducers: {
    GetMoviesStart: (state) => {
      return { ...state, loading: true };
    },
    GetMoviesError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetMoviesSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload,
      };
    },
    GetMovieStart: (state) => {
      return { ...state, loading: true };
    },
    GetMovieError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetMovieSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        movie: action.payload,
      };
    },
  },
});

export const {
  GetMoviesStart,
  GetMoviesSuccess,
  GetMoviesError,
  GetMovieStart,
  GetMovieSuccess,
  GetMovieError,
} = movieSlice.actions;
export default movieSlice.reducer;
