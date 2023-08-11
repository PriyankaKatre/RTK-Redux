import { createSlice } from "@reduxjs/toolkit";
// import pkg from "@reduxjs/toolkit";
// const { createSlice } = pkg;

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfCakes--;
    },
    reStocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;

export const { order, reStocked } = cakeSlice.actions;
