import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './components/Root.jsx';
import Section from './components/Section.jsx';
import Accessories from '../src/components/accessories.jsx'
import Login from './components/Login/Loginpage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[

      {
        path: "/",
        element:<App/>,
      },  

      {
        path: "/shop",
        element:<Section/>,
      },

      
      {
        path: "/accessories",
        element:<Accessories/>,
      }, 

    ]
  },

  {
    path: "/login",
    element:<Login/>,
    },  

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
