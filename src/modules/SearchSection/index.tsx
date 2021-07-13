import React, { useState } from 'react';

// components
import Title from '../../components/Title';
import Input from '../../components/Input';

// styles
import './SearchSection.styles.scss';

const SearchSection: React.FC = (): React.ReactElement => {
  const [query, setQuery] = useState<string>('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

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
