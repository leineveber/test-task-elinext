import React from 'react';

interface IButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  className,
  text,
  onClick,
  children,
}): React.ReactElement => {
  return (
    <button className={className} type='button' onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
