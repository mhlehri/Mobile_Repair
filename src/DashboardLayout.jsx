import { Outlet } from "react-router-dom";
import { DashNav } from "./Components/AdminComponent/DashNav/DashNav";

const Dashboard = () => {
  return (
    <div className="flex lg:gap-6  relative overflow-hidden z-50 bg-gradient-to-b from-[#64CCC5] from-60% to-90% to-[#D0E7D2]">
      <div className="z-50 w-0 lg:w-3/12">
        <DashNav />
      </div>
      <Outlet className="z-10 w-full  lg:w-9/12 "></Outlet>
    </div>
  );
};

export default Dashboard;
