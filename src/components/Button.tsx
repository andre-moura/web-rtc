import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: string | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="submit" onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;