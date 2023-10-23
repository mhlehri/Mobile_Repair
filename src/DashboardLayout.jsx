import { Outlet } from "react-router-dom";
import { DashNav } from "./Components/AdminComponent/DashNav/DashNav";

const Dashboard = () => {
  return (
    <div className="">
      <DashNav />
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
