import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-re7hlf4i.eu.auth0.com
//fMKDd5Am82Sk2Xn0m8zxUSqNrf3TrqMs

ReactDOM.render(
  <Auth0Provider
    domain='dev-re7hlf4i.eu.auth0.com'
    clientId='fMKDd5Am82Sk2Xn0m8zxUSqNrf3TrqMs'
    redirectUri={window.location.origin}
    CacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
