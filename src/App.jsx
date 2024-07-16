import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <h1>Hii</h1>
      {arr.map((val) => {
        return (
          <h1 key={val}>
            {val} x {value} = {val * value}{" "}
          </h1>
        );
      })}
    </>
  );
}

export default App;
