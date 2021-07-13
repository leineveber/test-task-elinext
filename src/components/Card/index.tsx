import React, { useState } from 'react';

// components
import Input from '../Input';
import Button from '../Button';

// hooks
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

// actions
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../../redux/slices/bookmarksSlice';

// styles
import './Card.styles.scss';

interface ICardProps {
  id: string;
  src: string;
  alt: string;
  title: string;
  tags?: string;
}

const Card: React.FC<ICardProps> = ({
  id,
  src,
  alt,
  title,
  tags,
}): React.ReactElement => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector((state) => state.bookmarks.data);
  const isAddedToBookmarks = bookmarks.map((el) => el.id).includes(id);
  const [value, setValue] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddToBookmarks = () => {
    dispatch(addToBookmarks({ title, id, imgUrl: src, tags: value }));
  };

  const handleRemoveFromBookmarks = () => {
    dispatch(removeFromBookmarks(id));
  };

  return (
    <div className='card'>
      <div className='card__image'>
        <img src={src} alt={alt} />
      </div>
      <p className='card__title'>{title}</p>
      {!tags && (
        <Input
          className='card__input'
          type='text'
          name='tags'
          id={id}
          placeholder='Any tags?'
          value={value}
          onChange={handleChangeInput}
        />
      )}
      {tags && <p className='card__tags'>Tags: {tags}</p>}
      <Button
        className='card__btn button'
        text={isAddedToBookmarks ? 'Remove from bookmarks!' : 'Bookmark it!'}
        onClick={
          isAddedToBookmarks ? handleRemoveFromBookmarks : handleAddToBookmarks
        }
      />
    </div>
  );
};

export default Card;
