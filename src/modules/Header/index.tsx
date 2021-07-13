// react
import React from 'react';

// components
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

// styles
import './Header.styles.scss';

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <Logo />
          <Link className='header__button' to='/signup'>
            <i className='fas fa-user-circle' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
