import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Total from "./components/Total";

function App() {
  const [divColor, setDivColor] = useState("black");

  const handleButtonClick = () => {
    setDivColor(divColor === "black" ? " rgb(131, 173, 173)" : "black");
  };

  return (
    <div className="content" style={{ backgroundColor: divColor }}>
      <div className="header">
        <h1>
          Reviews TA Béc Cọp !!!<ion-icon name="flag-outline"></ion-icon>
        </h1>
        <button onClick={handleButtonClick}>
          <ion-icon name="cog-outline"></ion-icon>
        </button>
      </div>
      <div>
        <Total></Total>
        <div className="todo-1">
          <Todo></Todo>
        </div>
      </div>
    </div>
  );
}

export default App;
