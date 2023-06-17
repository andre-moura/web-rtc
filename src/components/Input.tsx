import React, { useState, ChangeEvent } from 'react';
import '../assets/css/stylesheet.css';

interface InputProps {
  label?: string;
  value: string;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = 'text',
  name,
  id,
  className,
  placeholder,
  onChange,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleFocus = () => {
    setFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={`input-container ${focused ? 'focused' : ''}`}>
      <label htmlFor={id} className={`${value ? 'shrink' : ''}`}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete='off'
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;