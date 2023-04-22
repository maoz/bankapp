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
import { useDispatch } from "react-redux";
import { getOshHeader } from "../store/getters";
import StatusListItems from "../components/StatusListItems";
import DatePickerToolbar from "../components/DatePickerToolbar";

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
