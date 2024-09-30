// /src/modules/auth/components/InputField.tsx
import { Field } from 'formik';
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
  value?:string,
  onBlur?:(e: React.FocusEvent<HTMLInputElement>) => void;
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
  value = '',
  onBlur
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      className={`block w-${maxWidth} min-w-${minWidth} input-text-padding rounded-md border-0 bg-input_bg py-1.5 text-input_text_grey shadow-sm placeholder:text-input_text_grey sm:text-sm sm:leading-6 ${className}`}
    />
  );
};

export default InputField;
