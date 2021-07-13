import React from 'react';

import { Link } from 'react-router-dom';

const Logo: React.FC = (): React.ReactElement => {
  return (
    <Link to='/'>
      <h1>Image Finder</h1>
    </Link>
  );
};

export default Logo;
