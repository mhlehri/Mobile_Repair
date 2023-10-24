import { Outlet } from "react-router-dom";
import { DashNav } from "./Components/AdminComponent/DashNav/DashNav";

const Dashboard = () => {
  return (
    <div className="flex gap-2 ">
      <DashNav />
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
