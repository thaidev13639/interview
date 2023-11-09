import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  listUser: [],
};
const string = localStorage.getItem("LIST_USER");
if (string) {
  DEFAULT_STATE.listUser = JSON.parse(string);
}
export const pageReducer = createSlice({
  name: "page",
  initialState: DEFAULT_STATE,
  reducers: {
    SET_LIST_USER: (state, action) => {
      state.listUser = action.payload;
    },
  },
});

export const pageReduce = pageReducer.reducer;
export const pageAction = pageReducer.actions;
