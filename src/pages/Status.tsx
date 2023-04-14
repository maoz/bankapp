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
import { fixNumber } from "../utils/helpers";

const Status: React.FC = () => {
  const dispatch = useDispatch();

  const { OshHeader } = {
    OshHeader: getOshHeader(),
  };

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
