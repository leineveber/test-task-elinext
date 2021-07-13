import React, { useState } from 'react';

// components
import Input from '../Input';
import Button from '../Button';

// styles
import './Card.styles.scss';

interface ICardProps {
  src: string;
  alt: string;
  title: string;
}

const Card: React.FC<ICardProps> = ({
  src,
  alt,
  title,
}): React.ReactElement => {
  const [tag, setTag] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };

  return (
    <div className='card'>
      <div className='card__image'>
        <img src={src} alt={alt} />
      </div>
      <p className='card__title'>{title}</p>
      <Input
        className='card__input'
        type='text'
        name='tags'
        id='tags'
        placeholder='Any tags?'
        value={tag}
        onChange={handleChangeInput}
      />
      <Button className='card__btn button' text='Bookmark it!' />
    </div>
  );
};

export default Card;
