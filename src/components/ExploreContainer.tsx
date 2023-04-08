import "./ExploreContainer.css";

interface ContainerProps {
  name: String;
  content: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, content }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <div>{content}</div>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
