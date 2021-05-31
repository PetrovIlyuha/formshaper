import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import formCreationReducer from "../features/formCreator/formCreationSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = { key: "form", storage };
const persistedFormReducer = persistReducer(persistConfig, formCreationReducer);

export const store = configureStore({
  reducer: {
    formCreation: persistedFormReducer,
  },
});
