import React, { useState } from "react";
import { ButtonProps } from "../../types/ButtonProps.model";

const Button: React.FC<ButtonProps> = ({ children, onClick, theme }) => {
  const backgroundColor =
    theme === "light" ? "var(--theme-light)" : "var(--theme-dark)";
  const textColor =
    theme === "light" ? "var(--theme-dark)" : "var(--theme-accent)";
  const borderColor =
    theme === "light" ? "var(--theme-light)" : "var(--theme-medium)";
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    border: "1px solid",
    borderColor,
    borderRadius: "9999px", 
    backgroundColor: isHovered ? textColor : backgroundColor,
    color: isHovered ? backgroundColor : textColor,
    fontStyle: "italic",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.8em",
  };

  return (
    <button
      style={buttonStyle}
      className={`button ${theme}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
