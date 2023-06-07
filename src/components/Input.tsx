import React, { useState, ChangeEvent } from 'react';

interface InputProps {
  label?: string;
  value: string;
  type?: string;
  name?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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