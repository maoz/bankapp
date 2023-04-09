import { useDispatch } from "react-redux";
import {
  getCategories,
  getCategoriesTemplates,
  getCurrentStatus,
} from "../store/getters";

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/react";
import { fixNumber } from "../utils/helpers";
import { useState } from "react";

const CategoriesListItems: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const { categories, categoriesTemplate } = {
    categories: getCategories(),
    categoriesTemplate: getCategoriesTemplates(),
  };

  function handleClickItem(item: any): void {
    setSelectedCategory(item);
  }

  console.log(categoriesTemplate);

  return (
    <>
      {categories != undefined &&
        categories.length > 0 &&
        categories.map((item: any, index: number) => (
          <>
            <IonItem
              button
              key={`Cat${index}`}
              detail={true}
              onClick={(e) => handleClickItem(item["קטגוריה"])}
            >
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
            {selectedCategory == item["קטגוריה"] &&
              categoriesTemplate[item["קטגוריה"]] != undefined &&
              categoriesTemplate[item["קטגוריה"]].map(
                (itemCat: any, indexCat: number) => {
                  <IonItem key={`CatTemp${indexCat}`} detail={false}>
                    {itemCat["Name"]}
                  </IonItem>;
                }
              )}
          </>
        ))}
    </>
  );
};

export default CategoriesListItems;
