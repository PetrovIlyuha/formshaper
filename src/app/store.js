import { configureStore } from "@reduxjs/toolkit";
import formCreationReducer from "../features/formCreator/formCreationSlice";

export const store = configureStore({
  reducer: {
    formCreation: formCreationReducer,
  },
});
