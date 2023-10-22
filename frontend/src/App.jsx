import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import StudentLogin from './pages/StudentLogin';
import StudentRegister from './pages/StudentRegister';
import CaretakerLogin from './pages/CaretakerLogin';
import CaretakerRegister from './pages/CaretakerRegister';
import WardenRegister from './pages/WardenRegister';
import WardenLogin from './pages/WardenLogin';
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
    <Navbar/>
    <Outlet/>
    <Footer/>
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
    path: "/caretakerregister",
    element: <CaretakerRegister />
  },
  {
    path: "/caretakerlogin",
    element: <CaretakerLogin />
  },
  {
    path: "/wardenregister",
    element: <WardenRegister />
  },
  {
    path: "/wardenlogin",
    element: <WardenLogin />
  },
  {
    path: "/studentregister",
    element: <StudentRegister />
  },
  {
    path: "/studentlogin",
    element: <StudentLogin />
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