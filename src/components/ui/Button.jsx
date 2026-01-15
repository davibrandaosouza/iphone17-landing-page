import React from "react";

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50",
  outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  ghost: "hover:text-gray-300 text-gray-400",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-4 text-lg font-medium",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        rounded-full transition-all duration-300 cursor-pointer 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
