import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Stars } from "./components/stars/stars";
// import countStarType from "./components/types/stars";

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <Stars count={count} />
    </>
  );
}

export default App;
