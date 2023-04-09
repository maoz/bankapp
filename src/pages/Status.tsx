import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Status.css";
import { IonAlert, IonButton } from "@ionic/react";
import { ReadData } from "../utils/proxy";
import { useDispatch } from "react-redux";
import { setCurrentStatusAction, setStatusHeaderAction } from "../store/slice";
import { useEffect } from "react";
import { getCurrentDate, getOshHeader } from "../store/getters";
import StatusListItems from "../components/StatusListItems";
import DatePickerToolbar from "../components/DatePickerToolbar";

const Status: React.FC = () => {
  const dispatch = useDispatch();

  const { OshHeader, date } = {
    OshHeader: getOshHeader(),
    date: getCurrentDate(),
  };

  useEffect(() => {
    ReadData(date).then((res) => {
      const statusKey = Object.keys(res.data)[0];
      dispatch(setStatusHeaderAction(statusKey));
      dispatch(setCurrentStatusAction(res.data[statusKey]));
    });
  }, [date]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">מצב חשבון</IonTitle>
          <DatePickerToolbar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">מצב חשבון</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={OshHeader} content={<StatusListItems />} />
      </IonContent>
    </IonPage>
  );
};

export default Status;
