import React from 'react';

// Routing from routes.js
// You can specify which components should show up according to corresponding routes with the Route component from React Router.

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Navigation component uses Link comp of React Router to enable navigation to diff routes defined in routes.js

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

// If a route matches a path prop, the respective component will be displayed. 
// Thus all the page components in the App component are exchangeable by changing the route, 
// but the Navigation component stays fixed independently of any route change.
// That’s how you enable a static frame that has various components (e.g. Navigation) around your dynamic pages driven by routes.

export default withAuthentication(App);
