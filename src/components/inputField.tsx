// /src/modules/auth/components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
  maxWidth?: string;
  minWidth?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  required = false,
  autoComplete = '',
  maxWidth = 'full',
  minWidth = '0',   
  className = '',
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={`block w-${maxWidth} min-w-${minWidth} rounded-md border-0 bg-input_bg py-1.5 text-placeholder_grey shadow-sm placeholder:text-placeholder_grey sm:text-sm sm:leading-6 ${className}`}
    />
  );
};

export default InputField;
