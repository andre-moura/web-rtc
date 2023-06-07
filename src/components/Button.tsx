import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: string | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, type }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;