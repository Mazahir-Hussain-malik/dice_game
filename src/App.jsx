import { useState } from "react";
import "./App.css";
import { StartGame, PlayGame } from "./components/index";
function App() {
  const [isGamestart, setIsGameStart] = useState(false);
  const gameToggle = () => {
    setIsGameStart(!isGamestart);
  };
  return (
    <>
      <div>
        {isGamestart ? <PlayGame /> : <StartGame toggle={gameToggle} />}
      </div>
    </>
  );
}

export default App;
