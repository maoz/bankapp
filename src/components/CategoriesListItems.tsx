import { useDispatch } from "react-redux";
import {
  getCategories,
  getCategoriesTemplates,
  getCurrentStatus,
} from "../store/getters";

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/react";
import { fixNumber } from "../utils/helpers";
import { useState } from "react";
import "./CategoriesListItems.css";
const CategoriesListItems: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const { categories, categoriesTemplate } = {
    categories: getCategories(),
    categoriesTemplate: getCategoriesTemplates(),
  };

  function handleClickItem(item: any): void {
    if (item == selectedCategory) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(item);
    }
  }

  return (
    <>
      {categories != undefined &&
        categories.length > 0 &&
        categories.map((item: any, index: number) => (
          <>
            <IonItem
              color="light"
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
            <div className="categories-container">
              {selectedCategory == item["קטגוריה"] &&
                categoriesTemplate[item["קטגוריה"]] != undefined &&
                categoriesTemplate[item["קטגוריה"]].length > 0 &&
                categoriesTemplate[item["קטגוריה"]].map(
                  (itemCat: any, indexCat: number) => (
                    <IonItem
                      color="warning"
                      className="categories-item"
                      key={`CatTemp${indexCat}`}
                      detail={false}
                    >
                      {itemCat["Name"]}
                    </IonItem>
                  )
                )}
            </div>
          </>
        ))}
    </>
  );
};

export default CategoriesListItems;
