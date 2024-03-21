import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sum: 0,
};
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action) => {
        // if (action.payload.c == null) {
        //     action.payload.c = 0;
        // } 
      state.sum = action.payload.a + action.payload.b ;
    },
  },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;    