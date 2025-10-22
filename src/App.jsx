import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

 
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(() => 0);

  const countColor =
    count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-gray-800";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white text-gray-900 shadow-2xl rounded-2xl p-10 w-[350px] text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          🌟 React Counter App
        </motion.h1>

        {/* Count display with animation */}
        <div className="h-16 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={count}
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`text-5xl font-extrabold ${countColor}`}
            >
              {count}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
