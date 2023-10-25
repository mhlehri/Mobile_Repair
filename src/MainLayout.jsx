import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="body-bg body-text-color ">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
