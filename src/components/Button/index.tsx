import React from 'react';

interface IButtonProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  className,
  text,
  disabled,
  onClick,
  children,
}): React.ReactElement => {
  return (
    <button
      className={className}
      type='button'
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
