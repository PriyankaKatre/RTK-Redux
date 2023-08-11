import { configureStore } from "@reduxjs/toolkit";
// import pkg from "@reduxjs/toolkit";
// const { configureStore } = pkg;
import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamReducer from "../features/icecream/iceCreamSlice.js";
import userReducer from "../features/async/user.js";
import reduxLogger from "redux-logger";

//const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
