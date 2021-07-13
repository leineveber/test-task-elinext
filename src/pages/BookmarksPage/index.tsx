import React from 'react';

// modules
import Header from '../../modules/Header';
import BookmarksSection from '../../modules/BookmarksSection';
import Footer from '../../modules/Footer';

const BookmarksPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <BookmarksSection />
      <Footer />
    </>
  );
};

export default BookmarksPage;
