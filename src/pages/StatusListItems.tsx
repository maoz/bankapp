import { useDispatch } from "react-redux";
import { getCurrentStatus } from "../store/getters";

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/react";
import "./Status.css";

const StatusListItems: React.FC = () => {
  const dispatch = useDispatch();

  const { CurrentStatus } = {
    CurrentStatus: getCurrentStatus(),
  };

  const fixNumber = (number: string) => {
    const val = Number.parseFloat(number);
    return isNaN(val) ? "" : val.toLocaleString("he-IL");
  };

  return (
    <>
      {CurrentStatus.map((item: any) => (
        <IonItem>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h3>{item["תאריך"]}</h3>
              </IonCol>
              <IonCol>
                <h3>{item["הפעולה"]}</h3>
              </IonCol>
              <IonCol>
                <h3 className="green-color">{fixNumber(item["זכות"])}</h3>
              </IonCol>
              <IonCol>
                <h3 className="red-color">{fixNumber(item["חובה"])}</h3>
              </IonCol>
              <IonCol>
                <h3>{fixNumber(item["יתרה בש''ח"])}</h3>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      ))}
    </>
  );
};

export default StatusListItems;
