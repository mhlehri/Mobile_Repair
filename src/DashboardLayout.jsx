import { Outlet } from "react-router-dom";
import { DashNav } from "./Components/AdminComponent/DashNav/DashNav";

const Dashboard = () => {
  return (
    <div className="flex gap-2 relative z-50">
      <div className="sticky top-0  z-50">
        <DashNav />
      </div>
      <Outlet className="z-10"></Outlet>
    </div>
  );
};

export default Dashboard;
