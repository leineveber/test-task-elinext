import React from 'react';

import './Title.styles.scss';

interface ITitleProps {
  text: string;
}

const Title: React.FC<ITitleProps> = ({ text }): React.ReactElement => {
  return <h2 className='title'>{text}</h2>;
};

export default Title;
