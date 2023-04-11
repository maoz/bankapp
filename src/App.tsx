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
} from "./store/slice";
import { formatDate } from "./utils/helpers";
import {
  ReadAllCategoriesTemplates,
  ReadCategoriesPrices,
} from "./utils/proxy";
setupIonicReact();
defineCustomElements(window);

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const date = formatDate(new Date(Date.now()), "yyyy-mm-dd");
    dispatch(setCurrentDateAction(date));

    ReadAllCategoriesTemplates().then((res: any) => {
      dispatch(setCategoriesTemplatesAction(res.data));
    });
    ReadCategoriesPrices().then((res: any) => {
      dispatch(setCategoriesPricesAction(res.data["סיכום קטגוריות"]));
    });
  });
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
