import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import SecvicesPage from './Pages/SecvicesPage.jsx';
import PreOrder from './Pages/PreOrder.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Privetroute from './Privetroute/Privetroute.jsx';
import Priceing from './Pages/Priceing.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import HeroDetails from './Pages/HeroDetails.jsx';
import AllReviews from './Pages/AllReviews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/Product.json'),
        element: <Home></Home>
      },
      {
        path: '/product/:id',
        loader: () => fetch('/Product.json'),
        element: <Privetroute><ProductDetails></ProductDetails></Privetroute>
      },
      {
        path: '/services',
        loader: () => fetch('/Product.json'),
        element: <SecvicesPage></SecvicesPage>
      },
      {
        path: '/herodetails', 
        element:<Privetroute><HeroDetails></HeroDetails></Privetroute>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Privetroute><Contact></Contact></Privetroute>
      },
      {
        path: '/pricing',
        element: <Priceing></Priceing>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allreview',
        element: <Privetroute><AllReviews></AllReviews></Privetroute>
      },
      {
        path: '/preorder',
        loader: () => fetch('/Product.json'),
        element: <Privetroute><PreOrder></PreOrder></Privetroute>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
