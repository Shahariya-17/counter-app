import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mx-2 transition"
    >
      {label}
    </button>
  );
};

export default Button;
