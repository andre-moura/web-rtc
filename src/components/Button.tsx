import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: string | JSX.Element;
  className?: string; // Add className prop
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, type, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type={type} onClick={handleClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;