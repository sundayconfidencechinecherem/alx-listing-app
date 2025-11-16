import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  size = "medium", 
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  className = "",
  icon,
  iconPosition = "left"
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";
  


  // Sizes
  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
    xlarge: "px-8 py-4 text-xl"
  };

  // Disabled state
  const disabledStyles = "opacity-50 cursor-not-allowed";
  
  // Full width
  const widthStyles = fullWidth ? "w-full" : "";

  const buttonStyles = `
    ${baseStyles}
    ${sizes[size]}
    ${disabled ? disabledStyles : ""}
    ${widthStyles}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonStyles}
    >
      {/* Loading spinner */}
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {/* Icon on left */}
      {icon && iconPosition === "left" && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {/* Button text */}
      {text}
      
      {/* Icon on right */}
      {icon && iconPosition === "right" && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;