import React, { useState } from 'react';
import './Input.css';

interface InputProps {
  label: string;
  value: string;
  type?: string;
  name?: string;
  id?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = 'text',
  name,
  id,
  onChange,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
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
    <div className={`text-input ${focused ? 'focused' : ''}`}>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label htmlFor={id} className={`${value ? 'shrink' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default Input;