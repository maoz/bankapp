import { useSelector } from "react-redux";
import { RootState } from "./store";

export const getOshHeader = () =>
  useSelector((state: RootState) => state.bank.StatusHeader);

export const getCurrentStatus = () =>
  useSelector((state: RootState) => state.bank.CurrentStatus);
