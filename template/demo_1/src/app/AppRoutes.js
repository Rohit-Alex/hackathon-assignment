import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Error404 = lazy(() => import('./error-pages/Error404'));


const AppRoutes = () => {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          {/* <Redirect to="/dashboard" /> */}
          <Route path="*" component={ Error404 } />
        </Switch>
      </Suspense>
    );
  
}

export default AppRoutes;