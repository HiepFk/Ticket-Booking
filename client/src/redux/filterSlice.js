import { createSlice, current } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    all_movies: [],
    filtered_movies: [],
    sort: "name-a",
    filters: {
      text: "",
      classify: "",
      genre: [],
    },
    listView: false,
  },
  reducers: {
    SetFilterMovie: (state, action) => {
      return {
        ...state,
        filtered_movies: action.payload,
        all_movies: action.payload,
      };
    },
    SetListView: (state) => {
      return { ...state, listView: true };
    },
    SetGridView: (state) => {
      return { ...state, listView: false };
    },
    UpdateFilter: (state, action) => {
      const { name, value, checked } = action.payload;

      if (name === "text") {
        state.filters.text = value;
      }
      if (name === "classify") {
        state.filters.classify = value;
      }

      if (name === "genre") {
        if (checked) {
          state.filters.genre = [...state.filters.genre, value];
        } else {
          state.filters.genre = state.filters.genre.filter((item) => {
            return item !== value;
          });
        }
      }
    },
    FilteredMovie: (state) => {
      const containsAll = (c, d) =>
        c.every((element) => {
          return d.includes(element);
        });
      const { all_movies } = current(state);
      const { text, classify, genre } = current(state.filters);
      let tempMovies = [...all_movies];
      if (text) {
        tempMovies = tempMovies.filter((movie) => {
          return movie.name.toLowerCase().startsWith(text.toLowerCase());
        });
      }

      if (classify) {
        tempMovies = tempMovies.filter((item) => {
          return item.classify === classify;
        });
      }

      if (genre.length > 0) {
        // eslint-disable-next-line array-callback-return
        tempMovies = tempMovies.filter((item) => {
          if (containsAll(genre, item.genre)) {
            return item;
          }
        });
      }
      return { ...state, filtered_movies: tempMovies };
    },
    UpdateSort: (state, action) => {
      return { ...state, sort: action.payload };
    },
    SortMovie: (state) => {
      const { sort, filtered_movies } = current(state);
      let tempMovies = [...filtered_movies];

      if (sort === "name-a") {
        tempMovies = tempMovies.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempMovies = tempMovies.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_movies: tempMovies };
    },
    ClearFilter: (state) => {
      return {
        ...state,
        sort: "trending",
        filters: {
          ...state.filters,
          text: "",
          classify: "",
          genre: [],
        },
      };
    },
  },
});

export const {
  UpdateFilter,
  FilteredMovie,
  UpdateSort,
  SortMovie,
  ClearFilter,
  SetListView,
  SetGridView,
  SetFilterMovie,
} = filterSlice.actions;
export default filterSlice.reducer;
