import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddJuice from './components/AddJuice.jsx';
import UpdateJuice from './components/UpdateJuice.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/addJuice',
    element:<AddJuice></AddJuice>
  },
  {
    path:'updateJuice',
    element:<UpdateJuice></UpdateJuice>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
