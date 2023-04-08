import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { IonAlert, IonButton } from "@ionic/react";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer
          name="Tab 1 page"
          content={
            <>
              <IonButton id="present-alert">Click Me</IonButton>
              <IonAlert
                trigger="present-alert"
                header="Alert"
                subHeader="Important message"
                message="This is an alert!"
                buttons={["OK"]}
              ></IonAlert>
            </>
          }
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
