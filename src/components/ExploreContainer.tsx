import "./ExploreContainer.css";

interface ContainerProps {
  name: String;
  content: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, content }) => {
  return (
    <div className="center-text">
      <h2>{name}</h2>
      <div>{content}</div>
    </div>
  );
};

export default ExploreContainer;
