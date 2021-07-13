import React, { useEffect } from 'react';

// components
import { useLocation } from 'react-router-dom';
import Title from '../../components/Title';

// api
import http from '../../api/http';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  RAINDROP_BASE_API,
} from '../../api/raindropApi';
import getBaseApi from '../../api/getBaseApi';

// styles
import './SignInSection.styles.scss';

const SignInSection: React.FC = (): React.ReactElement => {
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      const code: string = location.search.slice(6);

      http({
        method: 'post',
        url: RAINDROP_BASE_API,
        data: {
          code,
          client_id: CLIENT_ID,
          redirect_uri: getBaseApi('localhost', false),
          client_secret: CLIENT_SECRET,
          grant_type: 'authorization_code',
        },
      });
    }
  }, []);

  return (
    <section className='signin-section'>
      <div className='container'>
        <Title text='Sign in' />
        <a className='signin-section__btn button' href={RAINDROP_BASE_API}>
          Sign in via RainDrop.io
        </a>
      </div>
    </section>
  );
};

export default SignInSection;
