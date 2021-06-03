import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  formLibrary: localStorage.getItem("form") || null,
  designLibrary: localStorage.getItem("design") || null,
  formFields: [],
  codeAsText: [],
  cleanedCodeAsText: "",
};

export const formCreationSlice = createSlice({
  name: "formCreation",
  initialState,
  reducers: {
    selectFormLib: (state, { payload }) => {
      state.formLibrary = payload;
      localStorage.setItem("form", payload);
    },
    selectDesignLib: (state, { payload }) => {
      state.designLibrary = payload;
      localStorage.setItem("design", payload);
    },
    addNextFieldParams: (state, { payload }) => {
      state.formFields.push({ id: uuidv4(), ...payload });
    },
    clearCodeAsTextValue: (state, { payload }) => {
      state.codeAsText = [];
      state.cleanedCodeAsText = "";
    },
    addNextElementToTextResult: (state, { payload }) => {
      state.codeAsText.push(payload);
      state.cleanedCodeAsText = state.codeAsText
        .map((elem) => elem.content)
        .join("");
    },
    removeFormElement: (state, { payload }) => {
      state.codeAsText = state.codeAsText.filter((elem) => elem.id !== payload);
      state.formFields = state.formFields.filter((elem) => elem.id !== payload);
      state.cleanedCodeAsText = state.codeAsText.map((elem) => elem.content);
    },
  },
  extraReducers: {},
});

export const {
  selectFormLib,
  selectDesignLib,
  addNextFieldParams,
  addNextElementToTextResult,
  clearCodeAsTextValue,
  removeFormElement,
} = formCreationSlice.actions;

export const formLibrarySelector = (state) => state.formLibrary;
export const designLibrarySelector = (state) => state.designLibrary;

export default formCreationSlice.reducer;
