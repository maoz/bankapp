import { IonItem, IonLabel } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: String;
  content: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, content }) => {
  return (
    <div>
      {/* <h2>{name}</h2> */}
      <IonItem color="primary" className="header-text">
        <IonLabel>{name}</IonLabel>
      </IonItem>
      <div>{content}</div>
    </div>
  );
};

export default ExploreContainer;
