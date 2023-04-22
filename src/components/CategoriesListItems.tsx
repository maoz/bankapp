import { useDispatch } from "react-redux";
import {
  getCategories,
  getCategoriesPrices,
  getCategoriesTemplates,
  getCurrentStatus,
  getExpenses,
} from "../store/getters";

import {
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonRow,
} from "@ionic/react";
import { fixNumber } from "../utils/helpers";
import { useState } from "react";
import "./CategoriesListItems.css";
const CategoriesListItems: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const { categories, categoriesTemplate, categoriesPrices, expenses } = {
    categories: getCategories(),
    categoriesTemplate: getCategoriesTemplates(),
    categoriesPrices: getCategoriesPrices(),
    expenses: getExpenses(),
  };

  function handleClickItem(item: any): void {
    if (item == selectedCategory) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(item);
    }
  }

  function getCategoriesPricesAmountByCategory(category: string) {
    if (categoriesPrices == undefined) {
      return "";
    }
    const element = categoriesPrices.find(
      (item: any) => item["קטגוריה"] === category
    );
    return element != undefined ? element["סכום"] : "";
  }

  function calcProgress(category: string, amount: string) {
    const amountLastMonth = getCategoriesPricesAmountByCategory(category);
    return amountLastMonth != ""
      ? Number.parseFloat(amount) / Number.parseFloat(amountLastMonth)
      : 0;
  }

  function getProgressColor(category: string, amount: string) {
    const amountLastMonth = getCategoriesPricesAmountByCategory(category);
    return amountLastMonth != "" &&
      Number.parseFloat(amount) > Number.parseFloat(amountLastMonth)
      ? "danger"
      : "";
  }

  function getExpensesByName(name: string) {
    let expenses_items = Object.keys(expenses).find((item: string) =>
      item.includes(name)
    );
    if (expenses_items != undefined) {
      return expenses[expenses_items];
    }
    return 0;
  }

  return (
    <>
      {categories != undefined &&
        categories.length > 0 &&
        categories.map((item: any, index: number) => (
          <div key={`Cat${index}`}>
            <IonItem
              color="light"
              button
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
                  <IonCol className="align-progress">
                    <IonProgressBar
                      className="progress-width"
                      color={getProgressColor(item["קטגוריה"], item["סכום"])}
                      buffer={1}
                      value={calcProgress(item["קטגוריה"], item["סכום"])}
                    ></IonProgressBar>
                  </IonCol>
                  <IonCol>
                    <h6>
                      {fixNumber(
                        getCategoriesPricesAmountByCategory(item["קטגוריה"])
                      )}
                    </h6>
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
                      {itemCat["Name"]} , {getExpensesByName(itemCat["Name"])}
                    </IonItem>
                  )
                )}
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoriesListItems;
