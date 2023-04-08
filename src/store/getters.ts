import { useSelector } from "react-redux";
import { RootState } from "./store";

export const getOshHeader = () =>
  useSelector((state: RootState) => state.bank.StatusHeader);
