import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { ReadCategories, ReadData } from "../utils/proxy";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategoriesAction } from "../store/slice";
import CategoriesListItems from "../components/CategoriesListItems";

const Categories: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    ReadCategories().then((res) => {
      dispatch(setCategoriesAction(res.data));
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>קטגוריות</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">קטגוריות</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={""} content={<CategoriesListItems />} />
      </IonContent>
    </IonPage>
  );
};

export default Categories;
