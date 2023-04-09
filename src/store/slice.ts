import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BankState {
  StatusHeader: String;
  CurrentStatus: any;
  Categories: any;
  CurrentDate: any;
}

const initialState: BankState = {
  StatusHeader: "",
  CurrentStatus: [],
  Categories: [],
  CurrentDate: undefined,
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setStatusHeader: (state, action: PayloadAction<String>) => {
      state.StatusHeader = action.payload;
    },
    setCurrentStatus: (state, action: PayloadAction<any>) => {
      state.CurrentStatus = action.payload;
    },
    setCategories: (state, action: PayloadAction<any>) => {
      state.Categories = action.payload;
    },
    setCurrentDate: (state, action: PayloadAction<any>) => {
      state.CurrentDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatusHeader: setStatusHeaderAction,
  setCurrentStatus: setCurrentStatusAction,
  setCategories: setCategoriesAction,
  setCurrentDate: setCurrentDateAction,
} = bankSlice.actions;

export default bankSlice.reducer;
