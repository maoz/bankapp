import { useDispatch } from "react-redux";
import {
  getCategories,
  getCurrentDate,
  getCurrentStatus,
} from "../store/getters";

import { IonInput } from "@ionic/react";
import "./DatePickerToolbar.css";
import { setCurrentDateAction } from "../store/slice";
const DatePickerToolbar: React.FC = () => {
  const dispatch = useDispatch();

  const { date } = {
    date: getCurrentDate(),
  };

  const onInput = (ev: Event) => {
    const value = (ev.target as HTMLIonInputElement).value as string;
    dispatch(setCurrentDateAction(value));
  };

  return (
    <>
      <IonInput
        className="datePicker"
        type="date"
        slot="end"
        onIonInput={onInput}
        value={date}
      />
    </>
  );
};

export default DatePickerToolbar;
