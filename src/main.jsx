import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Loging from './Components/Loging/Loging.jsx';

import Outlate from './Components/Outlate/Outlate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlate></Outlate>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/loging',
        element: <Loging></Loging>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
