import React from 'react';

// modules
import Header from '../../modules/Header';
import SearchSection from '../../modules/SearchSection';
import Footer from '../../modules/Footer';

const MainPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <SearchSection />
      <Footer />
    </>
  );
};

export default MainPage;
