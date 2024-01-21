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
          style={{ borderTop: "2px solid red", paddingTop: "2%" }}
        >
          {characters.map((character) => (
            <Card character={character} />
          ))}
        </div>
      </div>
      <div className="row">
        <p>HIHIHIHIHI</p>
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
