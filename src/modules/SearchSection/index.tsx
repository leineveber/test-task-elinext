import React, { useEffect, useState } from 'react';

// components
import Title from '../../components/Title';
import Input from '../../components/Input';

// hooks
import { useAppDispatch } from '../../redux/hooks';

// actions
import { fetchRequested } from '../../redux/slices/searchImagesSlice';

// api
import { FLICKR_BASE_API, FLICKR_KEY } from '../../api/flickrApi';

// constants
import MAX_IMAGES_PER_PAGE from '../../constants/maxImagesPerPage';

// styles
import './SearchSection.styles.scss';

const SearchSection: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('cat');
  const [page, setPage] = useState(1);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const params: string = `api_key=${FLICKR_KEY}&tags=${query}&format=json&nojsoncallback=1&page=${page}&per_page=${MAX_IMAGES_PER_PAGE}`;

    dispatch(
      fetchRequested({ method: 'post', url: `${FLICKR_BASE_API}&${params}` })
    );

    return () => {};
  }, []);

  return (
    <section className='search-section'>
      <main>
        <div className='container'>
          <Title
            className='search-section__title'
            text="Let's find some images!"
          />
          <div className='search-section__input-wrapper'>
            <Input
              className='search-section__input'
              type='text'
              name='search'
              id='search'
              placeholder='Enter your search query here'
              value={query}
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default SearchSection;
