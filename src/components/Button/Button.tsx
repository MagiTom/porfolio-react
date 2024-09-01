import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/ButtonProps.model';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, theme}) => {
  const backgroundColor = theme === 'light' ? 'var(--theme-light)' : 'var(--theme-dark)';
  const textColor = theme === 'light' ? 'var(--theme-dark)' : 'var(--theme-accent)';
  const borderColor = theme === 'light' ? 'var(--theme-light)' : 'var(--theme-medium)';

  const buttonStyle: React.CSSProperties = {
    border: '1px solid', borderColor,
    borderRadius: '9999px', // Okrągłe boki
    backgroundColor: backgroundColor,
    color: textColor,
    fontStyle: 'italic',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8em'
  };

  return (
    <button style={buttonStyle} className={`button ${theme}`} onClick={onClick}>
      {children}
    </button>
  );
});

Button.displayName = 'Button'; // Optional but helps in debugging

export default Button;
