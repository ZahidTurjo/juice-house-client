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
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Users from './components/Users.jsx';


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
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
