import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BankState {
  StatusHeader: String;
  CurrentStatus: any;
  Categories: any;
  CurrentDate: any;
  CategoriesTemplates: any;
  CategoriesPrices: any;
  Expenses: any;
}

const initialState: BankState = {
  StatusHeader: "",
  CurrentStatus: [],
  Categories: [],
  CurrentDate: undefined,
  CategoriesTemplates: {},
  CategoriesPrices: [],
  Expenses: {},
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
    setCategoriesTemplates: (state, action: PayloadAction<any>) => {
      state.CategoriesTemplates = action.payload;
    },
    setCategoriesPrices: (state, action: PayloadAction<any>) => {
      state.CategoriesPrices = action.payload;
    },
    setExpenses: (state, action: PayloadAction<any>) => {
      state.Expenses = { ...state.Expenses, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatusHeader: setStatusHeaderAction,
  setCurrentStatus: setCurrentStatusAction,
  setCategories: setCategoriesAction,
  setCurrentDate: setCurrentDateAction,
  setCategoriesTemplates: setCategoriesTemplatesAction,
  setCategoriesPrices: setCategoriesPricesAction,
  setExpenses: setExpensesAction,
} = bankSlice.actions;

export default bankSlice.reducer;
