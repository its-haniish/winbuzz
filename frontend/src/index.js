import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminScreen from './screens/AdminScreen.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App />
  },
  {
    path: '/admin',
    element: <AdminScreen />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
