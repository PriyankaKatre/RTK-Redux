// import pkg from "@reduxjs/toolkit";
// const { createSlice } = pkg;
import { createSlice } from "@reduxjs/toolkit";
import { order } from "../cake/cakeSlice.js";

const initialState = {
  numberOfIcecreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams -= 2;
    },
    reStocked: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(order, (state) => {
      state.numberOfIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer;

export const iceCreamSliceActions = iceCreamSlice.actions;
