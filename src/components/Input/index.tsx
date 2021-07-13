import React from 'react';

interface IInputProps {
  className?: string;
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: () => void;
}

const Input: React.FC<IInputProps> = ({
  className,
  type,
  name,
  id,
  value,
  onChange,
}): React.ReactElement => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
