import { StickyNavbar } from "../../../Components/UserComponent/Navbar/Navbar";
import Banner from "../../../Components/UserComponent/Banner/Banner";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#64CCC5] from-60% to-90% to-[#D0E7D2]">
      <StickyNavbar></StickyNavbar>
      <Banner className=""></Banner>
    </div>
  );
};

export default Home;
