import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider domain="dev-1rk1ubbo4ofg4y2e.us.auth0.com"
    clientId="ynNuEvi1jgJvxpqYZ1Xl7OcvcvZbTNZV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <RouterProvider router={router} />
  </Auth0Provider>
)



