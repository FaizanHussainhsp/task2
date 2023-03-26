import { configureStore } from "@reduxjs/toolkit";
import authReducer from ".././slices/actions/index";
export const store = configureStore({
  reducer: { auth: authReducer },
});
