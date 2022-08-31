import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login ';
import Logout from './components/logout';
import Home from './components/home';

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Auth0Provider
      domain="dev-23422duc.us.auth0.com"
      clientId="rRmelm6iIc2jUtkknonRwhCQvEtQuySe"
      redirectUri={window.location.origin}
    >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='home' element={<Home />} />

          </Route >
        </Routes>
      </BrowserRouter >


    </Auth0Provider>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
