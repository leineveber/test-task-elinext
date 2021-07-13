import React from 'react';

import './Title.styles.scss';

interface ITitleProps {
  className?: string;
  text: string;
}

const Title: React.FC<ITitleProps> = ({
  className,
  text,
}): React.ReactElement => {
  return <h2 className={`${className} title`}>{text}</h2>;
};

export default Title;
