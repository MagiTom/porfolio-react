import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/ButtonProps.model';


// Komponent Button z obsługą ref
const ButtonCircle = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, theme }, ref) => {

  const backgroundColor = theme === 'light' ? 'var(--theme-light)' : 'var(--theme-dark)';


  const buttonStyle: React.CSSProperties = {
    border: '1px solid var(--theme-light)',
    borderRadius: '50%', // Okrągłe boki
    backgroundColor: backgroundColor,
    padding: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button ref={ref} style={buttonStyle} className={`button ${theme}`} onClick={onClick}>
      {children}
    </button>
  );
});

ButtonCircle.displayName = 'Button'; 

export default ButtonCircle;
