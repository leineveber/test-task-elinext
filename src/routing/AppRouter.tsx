import React from 'react';

// routing
import { Switch, Route } from 'react-router-dom';

// pages
import MainPage from '../pages/MainPage';
import BookmarksPage from '../pages/BookmarksPage';
import SignUpPage from '../pages/SignUpPage';

const AppRouter: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/bookmarks' component={BookmarksPage} />
      <Route path='/signup' component={SignUpPage} />
    </Switch>
  );
};

export default AppRouter;
