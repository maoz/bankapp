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
      {CurrentStatus != undefined &&
        CurrentStatus.length > 0 &&
        CurrentStatus.map((item: any, index: number) => (
          <IonItem key={index}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h5>{item["תאריך"]}</h5>
                </IonCol>
                <IonCol>
                  <h5>{item["הפעולה"]}</h5>
                </IonCol>
                {fixNumber(item["זכות"]) != "" && (
                  <IonCol>
                    <h5 className="green-color">{fixNumber(item["זכות"])}</h5>
                  </IonCol>
                )}
                {fixNumber(item["חובה"]) != "" && (
                  <IonCol>
                    <h5 className="red-color">{fixNumber(item["חובה"])}</h5>
                  </IonCol>
                )}
                <IonCol>
                  <h5>{fixNumber(item["יתרה בש''ח"])}</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        ))}
    </>
  );
};

export default StatusListItems;
