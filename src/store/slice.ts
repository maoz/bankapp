import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BankState {
  StatusHeader: String;
}

const initialState: BankState = {
  StatusHeader: "",
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setStatusHeader: (state, action: PayloadAction<String>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.StatusHeader = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStatusHeader: setStatusHeaderAction } = bankSlice.actions;

export default bankSlice.reducer;
