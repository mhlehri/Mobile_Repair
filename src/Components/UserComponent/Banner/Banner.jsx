import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto flex items-center h-[90vh] justify-center p-3">
      <div className="flex items-center h-full justify-center gap-5 lg:gap-0 lg:justify-between flex-col lg:flex-row-reverse">
        <div>
          <img
            src="https://i.ibb.co/fYJGLVS/3178996.webp"
            className="rounded-lg "
          />
        </div>
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Mobile Solution
          </h1>
          <p className="py-6 text-sm lg:text-lg">
            Revitalize Your Device with Expert Mobile Servicing! Fast Repairs,
            Reliable Service, and Unbeatable Quality. Your Trusted Partner for
            Mobile Solutions!
          </p>
          <Link to={"/userForm"}>
            <Button
              size="sm"
              className="btn text-white border-none hover:bg-[#141E46] bg-[#141E46] "
            >
              Click here to fill up form
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
