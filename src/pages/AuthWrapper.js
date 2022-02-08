import React from 'react';
import styled from 'styled-components';

const AuthWrapper = ({ children }) => {
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
