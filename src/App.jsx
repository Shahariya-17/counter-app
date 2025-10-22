import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  
  const countColor =
    count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-gray-800";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white text-gray-900 shadow-xl rounded-2xl p-10 w-[350px] text-center">
        <h1 className="text-3xl font-bold mb-6">🌟 React Counter App</h1>
        <h2 className={`text-4xl font-extrabold mb-8 ${countColor}`}>
          {count}
        </h2>

        <div className="flex justify-center gap-4">
          <Button
            label="Increase"
            onClick={increase}
            color="bg-green-500 hover:bg-green-600"
          />
          <Button
            label="Decrease"
            onClick={decrease}
            color="bg-red-500 hover:bg-red-600"
          />
          <Button
            label="Reset"
            onClick={reset}
            color="bg-blue-500 hover:bg-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
