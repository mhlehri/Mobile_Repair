import {
  Card,
  CardBody,
  Step,
  Typography,
} from "@material-tailwind/react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import start from "../../../../public/start.svg"
import progress from "../../../../public/progress.svg"
import finish from "../../../../public/finish.svg";


import { LineChart as LC, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const UserDashboard = () => {
  return (
    <div className="bg-gradient-to-b from-[#64CCC5] from-60% to-90% to-[#D0E7D2] py-20">
      <div className="bg-transparent container mx-auto ">
        {/* time Progress section */}
        <div className="py-5 text-center border-b-4 font-bold border-[#141E46]/80 text-3xl md:w-1/3 mx-auto">
          Work Progress
        </div>
        <div className="z-50 p-10 md:p-20 bg-white my-10 rounded-lg ">
          <ProgressBar
            filledBackground="linear-gradient(to right, #64CCC5, #A0DBCC)"
            percent={70}
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  className={`transitionStep ${
                    accomplished ? "accomplished" : null
                  }`}
                ></div>
              )}
              <img className="" src={start} alt="" />
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  className={`transitionStep ${
                    accomplished ? "accomplished" : null
                  }`}
                ></div>
              )}
              <img className="" src={progress} alt="" />
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  className={`transitionStep  ${
                    accomplished ? "accomplished" : null
                  }`}
                ></div>
              )}
              <img className="" src={finish} alt="" />
            </Step>
          </ProgressBar>
          <div className="pt-6 flex ">
            <div className="flex-1 font-bold text-blue-gray-700">Started</div>
            <div className="flex-1 font-bold text-blue-gray-700"> Progress</div>
            <div className="font-bold text-blue-gray-700">Finished</div>
          </div>
        </div>
        {/* time Progress section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6 my-2">
          <Card className="">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Deadline
              </Typography>
              <LC width={300} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </LC>
            </CardBody>
          </Card>
          <Card className="">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                technician info
              </Typography>
              <Typography>The place is close to</Typography>
            </CardBody>
          </Card>
          <Card className="">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Phone
              </Typography>
              <Typography>The place is close to</Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
