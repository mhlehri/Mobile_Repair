import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../MainLayout";
import Dashboard from "../DashboardLayout";
import Home from "./../pages/UserPages/Home/Home";
import Login from "./../pages/UserPages/Login/Login";
import UserForm from "./../pages/UserPages/UserForm/UserForm";
import GetUpdate from "../pages/UserPages/GetUpdate/GetUpdate";
import DashHome from "../Components/AdminComponent/DashHome/DashHome";

import DashProfile from "../Components/AdminComponent/DashProfile/DashProfile";
import DashCashBook from "../Components/AdminComponent/DashCashBook/DashCashBook";

import UserDashboard from "../Components/UserComponent/UserDashboard/UserDashboard";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/userForm",
        element: <UserForm></UserForm>,
      },
      {
        path: "/GetYourUpdates",
        element: <GetUpdate></GetUpdate>,
      },
     
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/dashHome",
            element: <DashHome></DashHome>,
          },
          {
            path: "/dashboard/dashProfile",
            element: <DashProfile></DashProfile>,
          },
          {
            path: '/dashboard/DashCashBook',
            element: <DashCashBook></DashCashBook>
          }
        ],
      },
    ],
  },
]);

export default Router;
