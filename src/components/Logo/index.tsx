import React from 'react';

import { Link } from 'react-router-dom';

import './Logo.styles.scss';

const Logo: React.FC = (): React.ReactElement => {
  return (
    <Link className='logo' to='/'>
      <h1>Image Finder</h1>
    </Link>
  );
};

export default Logo;
