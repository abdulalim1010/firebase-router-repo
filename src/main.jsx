import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layout/MainLayouts.jsx';
import Home from './Home/Home.jsx';
import Login from './Loign/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        path: '/',
        Component:Home

      },
      {
        path: '/login',
        Component:Login

      },
      {
        path: '/register',
        Component:Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
