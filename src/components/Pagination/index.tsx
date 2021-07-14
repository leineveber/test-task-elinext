import React from 'react';

// components
import Button from '../Button';

// hooks
import { useAppSelector } from '../../redux/hooks';

// styles
import './Pagination.styles.scss';

interface IPaginationProps {
  page: number;
  setPage: (func: (state: number) => number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  page,
  setPage,
}): React.ReactElement => {
  const pages = useAppSelector((state) => state.searchImages.pages);

  const handleDecrease = () => {
    setPage((state) => state - 1);
  };

  const handleIncrease = () => {
    setPage((state) => state + 1);
  };

  return (
    <div className='pagination'>
      <div className='row'>
        <Button
          className={page === 1 ? 'button button--disabled' : 'button'}
          text='PREV'
          disabled={page === 1}
          onClick={handleDecrease}
        />
        <span className='pagination__span'>
          Current page: {page} of {pages}
        </span>
        <Button
          className={page === pages ? 'button button--disabled' : 'button'}
          text='NEXT'
          disabled={page === pages}
          onClick={handleIncrease}
        />
      </div>
    </div>
  );
};

export default Pagination;
