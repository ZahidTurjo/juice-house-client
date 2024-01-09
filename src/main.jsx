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
    loader:()=>fetch('http://localhost:5000/juice')
  },
  {
    path:'/addJuice',
    element:<AddJuice></AddJuice>
  },
  {
    path:'updateJuice/:id',
    element:<UpdateJuice></UpdateJuice>,
    loader:({params})=>fetch(`http://localhost:5000/juice/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
