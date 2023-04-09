import { useDispatch } from "react-redux";
import { getCategories, getCurrentStatus } from "../store/getters";

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/react";
import { fixNumber } from "../utils/helpers";

const CategoriesListItems: React.FC = () => {
  const { categories } = {
    categories: getCategories(),
  };

  return (
    <>
      {categories != undefined &&
        categories.length > 0 &&
        categories.map((item: any, index: number) => (
          <IonItem key={index}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h6>{item["קטגוריה"]}</h6>
                </IonCol>
                <IonCol>
                  <h6>{fixNumber(item["סכום"])}</h6>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        ))}
    </>
  );
};

export default CategoriesListItems;
