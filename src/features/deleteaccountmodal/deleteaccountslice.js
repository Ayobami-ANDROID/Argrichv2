import { createSlice } from "@reduxjs/toolkit";

const deleteAccountSlice = createSlice({
  name: "deleteAccount",
  initialState: {
    isOpen: false,
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
  },
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setIsOpen1(state, action) {
      state.isOpen1 = action.payload;
    },
    setIsOpen2(state, action) {
      state.isOpen2 = action.payload;
    },
    setIsOpen3(state, action) {
      state.isOpen3 = action.payload;
    },
  },
});

export const { setIsOpen, setIsOpen1, setIsOpen2, setIsOpen3 } =
  deleteAccountSlice.actions;
export default deleteAccountSlice.reducer;
