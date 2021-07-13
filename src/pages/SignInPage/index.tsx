import React from 'react';

// modules
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import SignInSection from '../../modules/SignInSection';

const SignInPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <SignInSection />
      <Footer />
    </>
  );
};

export default SignInPage;
