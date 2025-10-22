import React from "react";
import { motion } from "framer-motion";

const Button = ({ label, onClick, color }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-white font-semibold transition-all ${color} shadow-md`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
