import React from 'react';

// components
import Title from '../../components/Title';
import Card from '../../components/Card';

// hooks
import { useAppSelector } from '../../redux/hooks';

const BookmarksSection: React.FC = (): React.ReactElement => {
  const bookmarks = useAppSelector((state) => state.bookmarks.data);

  return (
    <section className='bookmarks-section'>
      <div className='container'>
        <Title text='Bookmarks' />
        {bookmarks.length !== 0 ? (
          <div className='row'>
            {bookmarks.map((bookmark) => (
              <Card
                key={bookmark.id}
                id={bookmark.id}
                src={bookmark.imgUrl}
                alt={bookmark.title}
                title={bookmark.title}
                tags={bookmark.tags || 'No tags provided'}
              />
            ))}
          </div>
        ) : (
          <p className='alert'>There is no bookmarks yet.</p>
        )}
      </div>
    </section>
  );
};

export default BookmarksSection;
