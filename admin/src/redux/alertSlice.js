import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    msg: "",
    type: "",
  },
  reducers: {
    SetAlert: (state, action) => {
      return {
        ...state,
        type: action.payload.status,
        msg: action.payload.message,
      };
    },
    ClearAlert: (state) => {
      return {
        ...state,
        type: "",
        msg: "",
      };
    },
  },
});

export const { SetAlert, ClearAlert } = alertSlice.actions;
export default alertSlice.reducer;
