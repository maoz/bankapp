import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Status.css";
import { IonAlert, IonButton } from "@ionic/react";
import { ReadData } from "../utils/proxy";
import { useDispatch } from "react-redux";
import { setStatusHeaderAction } from "../store/slice";
import { useEffect } from "react";
import { getOshHeader } from "../store/getters";

const Status: React.FC = () => {
  const dispatch = useDispatch();

  const { OshHeader } = {
    OshHeader: getOshHeader(),
  };

  useEffect(() => {
    ReadData().then((res) => {
      dispatch(setStatusHeaderAction(Object.keys(res.data)[0]));
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>מצב חשבון</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">מצב חשבון</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer
          name={OshHeader}
          content={
            <>
              <IonButton id="present-alert">Click Me</IonButton>
              {/* <IonAlert
                trigger="present-alert"
                header="Alert"
                subHeader="Important message"
                message="This is an alert!"
                buttons={["OK"]}
              ></IonAlert> */}
            </>
          }
        />
      </IonContent>
    </IonPage>
  );
};

export default Status;
