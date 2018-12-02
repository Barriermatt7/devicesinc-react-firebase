 In the next step, you can use the higher-order component to protect your routes (e.g. /home and /account) with authorization rules by using the passed condition() function. For the sake of keeping it simple, the following two components are only protected with a broad-grained authorization rule that checks if the authUser is not null. First, enhance the HomePage component with the higher-order component and define the authorization condition for it:

import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
Second, enhance the AccountPage component with the higher-order component and define the authorization condition as well. It isn’t much different from the previous usage:

import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);