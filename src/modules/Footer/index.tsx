import React from 'react';

// components
import { Link } from 'react-router-dom';

// styles
import './Footer.styles.scss';

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav className='footer__nav'>
          <ul className='footer__list row'>
            <li className='footer__list-item'>
              <Link to='/'>
                <i className='fas fa-cloud' />
              </Link>
            </li>
            <li className='footer__list-item'>
              <Link to='/bookmarks'>
                <i className='fas fa-bookmark' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
