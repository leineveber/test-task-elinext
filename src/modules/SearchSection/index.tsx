import React, { useCallback, useEffect, useState } from 'react';

// components
import Title from '../../components/Title';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

// hooks
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useDebounce from '../../hooks/useDebounce';

// actions
import { fetchRequested } from '../../redux/slices/searchImagesSlice';

// api
import { FLICKR_BASE_API, FLICKR_KEY } from '../../api/flickrApi';

// constants
import MAX_IMAGES_PER_PAGE from '../../constants/maxImagesPerPage';

// interfaces
import IImage from '../../interfaces/IImage';

// styles
import './SearchSection.styles.scss';

const SearchSection: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.searchImages.data);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 1500);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const memoizedSearch = useCallback(() => {
    const params: string = `api_key=${FLICKR_KEY}&tags=${debouncedQuery}&format=json&nojsoncallback=1&page=${page}&per_page=${MAX_IMAGES_PER_PAGE}`;

    dispatch(
      fetchRequested({ method: 'post', url: `${FLICKR_BASE_API}&${params}` })
    );
  }, [dispatch, page, debouncedQuery]);

  useEffect(() => {
    memoizedSearch();
  }, [memoizedSearch]);

  return (
    <section className='search-section'>
      <main>
        <div className='container'>
          <Title text="Let's find some images!" />
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
          {images.length !== 0 ? (
            <>
              <Pagination page={page} setPage={setPage} />
              <div className='row'>
                {images.map((img: IImage) => (
                  <Card
                    key={img.id}
                    id={img.id}
                    src={img.imgUrl}
                    alt={img.title}
                    title={img.title}
                  />
                ))}
              </div>
              <Pagination page={page} setPage={setPage} />
            </>
          ) : (
            <p className='alert'>
              No images here. Would you try to search for anything else?
            </p>
          )}
        </div>
      </main>
    </section>
  );
};

export default SearchSection;
