import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    food: {},
    loading: false,
    error: false,
    msg: "",
  },
  reducers: {
    GetListFoodStart: (state) => {
      return { ...state, loading: true };
    },
    GetListFoodError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetListFoodSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        foods: action.payload,
      };
    },
    GetFoodStart: (state) => {
      return { ...state, loading: true };
    },
    GetFoodError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetFoodSuccess: (state, action) => {
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
  GetListFoodStart,
  GetListFoodSuccess,
  GetListFoodError,
  GetFoodStart,
  GetFoodSuccess,
  GetFoodError,
} = foodSlice.actions;
export default foodSlice.reducer;
