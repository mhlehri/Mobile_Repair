import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"}>
        <a className="flex items-center">Home</a>
      </Link>
      <Link to={"/GetYourUpdates"}>
        <a className="flex items-center">Get Update</a>
      </Link>
      <Link to={"/dashboard/dashHome"}>
        <a className="flex items-center">Dashboard</a>
      </Link>
    </ul>
  );

  return (
    <div className="h-[10vh]  mx-auto">
      <Navbar className="h-full  backdrop-blur-lg bg-[#64ccc5] max-w-full border-none rounded-none px-2 py-2 lg:px-8 lg:py-4">
        <div className="max-w-screen-2xl mx-auto">
          {" "}
          <div className="flex items-center justify-between text-[#141E46]">
            <h1 className="mr-4 cursor-pointer py-1.5  font-medium">
              Material Tailwind
            </h1>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Link to="/login">
                  <Button
                    size="sm"
                    className="hidden lg:inline-block bg-[#141E46]"
                  >
                    <span>Sign in</span>
                  </Button>
                </Link>
              </div>

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav} className="p-3 rounded-lg bg-[#24746f]">
            {navList}
            <div className="flex items-center gap-x-1">
              <Link to="/login">
                <Button fullWidth size="sm" className="bg-[#141E46]">
                  <span>Sign in</span>
                </Button>
              </Link>
            </div>
          </MobileNav>
        </div>
      </Navbar>
    </div>
  );
}
