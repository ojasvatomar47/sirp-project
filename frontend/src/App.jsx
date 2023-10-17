import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import StudentsComplain from './pages/StudentsComplain';
import AuthorityComplain from './pages/AuthorityComplain';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  
  return (
    <>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/studentscomplain",
        element: <StudentsComplain />,
      },
      {
        path: "/authoritycomplain",
        element: <AuthorityComplain />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App