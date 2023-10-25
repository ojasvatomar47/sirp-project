import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import StudentLogin from './pages/LogInPages/StudentLogin';
import StudentRegister from './pages/RegisterPages/StudentRegister';
import CaretakerLogin from './pages/LogInPages/CaretakerLogin';
import CaretakerRegister from './pages/RegisterPages/CaretakerRegister';
import WardenRegister from './pages/RegisterPages/WardenRegister';
import WardenLogin from './pages/LogInPages/WardenLogin';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import StudentsComplain from './pages/ComplaintPages/StudentsComplain';
import CaretakerComplain from './pages/ComplaintPages/CaretakerComplain';
import WardenComplain from './pages/ComplaintPages/WardenComplain';
import Complaint from './pages/SinglePages/Complaint';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpdateComplaint from './pages/UpdatePages/UpdateComplaint';
import UpdateNotice from './pages/UpdatePages/UpdateNotice';
import Notice from './pages/SinglePages/Notice';
import StudentProfile from './pages/ProfilePages/StudentProfile';
import CaretakerProfile from './pages/ProfilePages/CaretakerProfile';
import WardenProfile from './pages/ProfilePages/WardenProfile';

const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
        path: "/profile/student/:student_id",
        element: <StudentProfile />,
      },
      {
        path: "/profile/caretaker/:caretaker_id",
        element: <CaretakerProfile />,
      },
      {
        path: "/profile/warden/:warden_id",
        element: <WardenProfile />,
      },
      {
        path: "/studentscomplain",
        element: <StudentsComplain />,
      },
      {
        path: "/caretakercomplain",
        element: <CaretakerComplain />,
      },
      {
        path: "/wardencomplain",
        element: <WardenComplain />,
      },
      {
        path: "/complaint/:complaint_id",
        element: <Complaint />,
      },
      {
        path: "/notice/:notice_id",
        element: <Notice />,
      },
      {
        path: "/updateNotice/:notice_id",
        element: <UpdateNotice />,
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
  {
    path: "/updateComplaint/:complain_id",
    element: <UpdateComplaint />
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App