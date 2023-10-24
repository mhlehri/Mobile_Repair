import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../MainLayout";
import Dashboard from "../DashboardLayout";
import Home from "./../pages/UserPages/Home/Home";
import Login from "./../pages/UserPages/Login/Login";
import UserForm from "./../pages/UserPages/UserForm/UserForm";
import GetUpdate from "../pages/UserPages/GetUpdate/GetUpdate";
import DashHome from "../Components/AdminComponent/DashHome/DashHome";

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
        children:[
          {
            path:'/dashboard/dashhome',
            element:<DashHome></DashHome>
          }
        ]
      },
    ],
  },
]);

export default Router;
