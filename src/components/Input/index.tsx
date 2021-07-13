import React from 'react';

interface IInputProps {
  className?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  className,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
}): React.ReactElement => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
