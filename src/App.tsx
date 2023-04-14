import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  analyticsOutline,
  appsOutline,
  ellipse,
  square,
  triangle,
} from "ionicons/icons";
import Status from "./pages/Status";
import Categories from "./pages/Categories";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setCategoriesPricesAction,
  setCategoriesTemplatesAction,
  setCurrentDateAction,
  setCurrentStatusAction,
  setExpensesAction,
  setStatusHeaderAction,
} from "./store/slice";
import {
  convertDataDateToDate,
  fixNumber,
  formatDate,
  getObjectDictionaryFromArray,
  getPrevMonth,
  isDateBefore,
} from "./utils/helpers";
import {
  ReadAllCategoriesTemplates,
  ReadCardsData,
  ReadCategoriesPrices,
  ReadData,
} from "./utils/proxy";
import { getCurrentDate } from "./store/getters";
setupIonicReact();
defineCustomElements(window);

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { selectedDate } = {
    selectedDate: getCurrentDate(),
  };

  useEffect(() => {
    const date = formatDate(new Date(Date.now()), "yyyy-mm-dd");
    dispatch(setCurrentDateAction(date));
  });

  useEffect(() => {
    if (selectedDate != undefined) {
      ReadData(selectedDate).then((res) => {
        const statusKey = Object.keys(res.data)[0];
        const data = res.data[statusKey];
        dispatch(setStatusHeaderAction(fixNumber(statusKey.split(" ")[1])));
        dispatch(setCurrentStatusAction(data));
        const year = formatDate(new Date(Date.now()), "yyyy");
        const prevDate = year + "-" + getPrevMonth() + "-15";
        let filteredData = data.filter((item: any) => {
          return isDateBefore(
            prevDate,
            formatDate(convertDataDateToDate(item["תאריך"]), "yyyy-mm-dd")
          );
        });
        const obj = getObjectDictionaryFromArray(
          filteredData,
          "הפעולה",
          "חובה"
        );
        dispatch(setExpensesAction(obj));
      });

      ReadCardsData(selectedDate).then((res) => {
        for (const [key, value] of Object.entries(res.data)) {
          const obj = getObjectDictionaryFromArray(
            value,
            "שם בית עסק",
            "סכום חיוב בש''ח"
          );
          if (!(Object.keys(obj).indexOf("undefined") > -1)) {
            dispatch(setExpensesAction(obj));
          }
        }
      });

      ReadAllCategoriesTemplates().then((res: any) => {
        dispatch(setCategoriesTemplatesAction(res.data));
      });
      ReadCategoriesPrices().then((res: any) => {
        dispatch(setCategoriesPricesAction(res.data["סיכום קטגוריות"]));
      });
    }
  }, [selectedDate]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/status">
              <Status />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/status" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Status" href="/status">
              <IonIcon aria-hidden="true" icon={analyticsOutline} />
              <IonLabel>מצב חשבון</IonLabel>
            </IonTabButton>
            <IonTabButton tab="categories" href="/categories">
              <IonIcon aria-hidden="true" icon={appsOutline} />
              <IonLabel>קטגוריות</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
