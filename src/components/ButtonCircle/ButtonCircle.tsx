import React, { forwardRef, useState } from "react";
import { ButtonProps } from "../../types/ButtonProps.model";

const ButtonCircle = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, theme }, ref) => {
    const backgroundColor =
      theme === "light" ? "var(--theme-light)" : "transparent";
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle: React.CSSProperties = {
      border: "1px solid var(--theme-light)",
      borderRadius: "50%",
      backgroundColor,
      opacity: isHovered ? 0.6 : 1,
      padding: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <button
        ref={ref}
        style={buttonStyle}
        className={`button ${theme}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </button>
    );
  }
);

ButtonCircle.displayName = "Button";

export default ButtonCircle;
