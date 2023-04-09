import { useDispatch } from "react-redux";
import { getCurrentStatus } from "../store/getters";

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/react";
import "./StatusListItems.css";
import { fixNumber } from "../utils/helpers";

const StatusListItems: React.FC = () => {
  const dispatch = useDispatch();

  const { CurrentStatus } = {
    CurrentStatus: getCurrentStatus(),
  };

  return (
    <>
      {CurrentStatus.map((item: any, index: number) => (
        <IonItem key={index}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6>{item["תאריך"]}</h6>
              </IonCol>
              <IonCol>
                <h6>{item["הפעולה"]}</h6>
              </IonCol>
              <IonCol>
                <h6 className="green-color">{fixNumber(item["זכות"])}</h6>
              </IonCol>
              <IonCol>
                <h6 className="red-color">{fixNumber(item["חובה"])}</h6>
              </IonCol>
              <IonCol>
                <h6>{fixNumber(item["יתרה בש''ח"])}</h6>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      ))}
    </>
  );
};

export default StatusListItems;
