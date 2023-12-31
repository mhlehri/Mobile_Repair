import { StickyNavbar } from "../../../Components/UserComponent/Navbar/Navbar";
import UserDashboard from "../../../Components/UserComponent/UserDashboard/UserDashboard";

const GetUpdate = () => {
  return (
    <div className="h-full md:h-screen bg-gradient-to-b from-[#64CCC5] from-60% to-90% to-[#D0E7D2]">
      <StickyNavbar></StickyNavbar>
      <UserDashboard></UserDashboard>
    </div>
  );
};

export default GetUpdate;
