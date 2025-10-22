import React from "react";

const Button = ({ label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-white font-semibold transition-all ${color} active:scale-95 shadow-md`}
    >
      {label}
    </button>
  );
};

export default Button;
