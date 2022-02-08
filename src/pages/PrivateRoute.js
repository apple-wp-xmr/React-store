import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { authSim, setAuthSim } = useUserContext();
  return (
    <Route
      {...rest}
      render={() => {
        return authSim ? children : <Redirect to='/' />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
