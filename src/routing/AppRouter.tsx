// react
import React from 'react';

// routing
import { Switch, Route } from 'react-router-dom';

// pages
import MainPage from '../pages/MainPage';
import BookmarksPage from '../pages/BookmarksPage';

const AppRouter: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/bookmarks' component={BookmarksPage} />
    </Switch>
  );
};

export default AppRouter;
