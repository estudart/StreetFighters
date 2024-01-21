import "./App.css";
import Ryu from "../src/images/Ryu.jpg";
import Ehonda from "../src/images/Ehonda.jpg";
import ChunLi from "../src/images/ChunLi.jpg";

const characters = [
  {
    name: "Ryu",
    description: "Best Fighter",
    img: Ryu,
  },
  {
    name: "Ken",
    description: "Strong Kick",
    img: Ryu, // Replace with the actual image for Ken
  },
  {
    name: "Chun-Li",
    description: "Fast Kicks",
    img: ChunLi, // Replace with the actual image for Chun-Li
  },
  {
    name: "Chun-Li",
    description: "Fast Kicks",
    img: Ryu, // Replace with the actual image for Chun-Li
  },
  {
    name: "Ehonda",
    description: "Fast Kicks",
    img: Ehonda, // Replace with the actual image for Chun-Li
  },
  {
    name: "Ehonda",
    description: "Fast Kicks",
    img: Ehonda, // Replace with the actual image for Chun-Li
  },
  {
    name: "Ehonda",
    description: "Fast Kicks",
    img: Ehonda, // Replace with the actual image for Chun-Li
  },
  {
    name: "Ehonda",
    description: "Fast Kicks",
    img: Ehonda, // Replace with the actual image for Chun-Li
  },
  {
    name: "Ehonda",
    description: "Fast Kicks",
    img: Ehonda, // Replace with the actual image for Chun-Li
  },
];

function App() {
  return (
    <div className="container-app d-flex">
      <div
        className="container"
        style={{
          width: "50%",
          marginLeft: "0px",
        }}
      >
        <h3 className="text-title">Choose your character</h3>
        <div
          className="row"
          style={{ borderTop: "2px solid black", paddingTop: "2%" }}
        >
          {characters.map((character) => (
            <Card character={character} />
          ))}
        </div>
      </div>
      <div className="conatiner row details">
        <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "transparent",
            color: "white",
            maxHeight: "100vh",
          }}
        >
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image cap
            </text>
          </svg>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ character }) {
  return (
    <div className="col-md-4 mb-4">
      <img src={character.img} className="card-img-top card-img" alt="street" />
    </div>
  );
}

export default App;
