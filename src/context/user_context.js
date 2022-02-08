import React, { useContext, useEffect, useState } from 'react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [authSim, setAuthSim] = useState(true);
  console.log(authSim);

  // const { loginWithRedirect, logout, user } = useAuth0();

  // const [myUser, setMyUser] = useState(null);
  // useEffect(() => {
  //   setMyUser(false);
  // }, [user]);

  return (
    <UserContext.Provider value={{ authSim, setAuthSim }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
