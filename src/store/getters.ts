import { useSelector } from "react-redux";
import { RootState } from "./store";

export const getOshHeader = () =>
  useSelector((state: RootState) => state.bank.StatusHeader);

export const getCurrentStatus = () =>
  useSelector((state: RootState) => state.bank.CurrentStatus);

export const getCategories = () =>
  useSelector((state: RootState) => state.bank.Categories);

export const getCurrentDate = () =>
  useSelector((state: RootState) => state.bank.CurrentDate);
