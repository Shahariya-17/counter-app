import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <h2 className="count">Count: {count}</h2>

      <div className="button-group">
        <Button label="Increase" onClick={increase} />
        <Button label="Decrease" onClick={decrease} />
        <Button label="Reset" onClick={reset} />
      </div>
    </div>
  );
};

export default App;
