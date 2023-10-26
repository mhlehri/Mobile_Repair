import {
  Card,
  CardBody,
  Step,
  Typography,
} from "@material-tailwind/react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


import { LineChart as LC, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const UserDashboard = () => {
  return (
    <div className="bg-transparent container mx-auto ">
      {/* time Progress section */}

      <div className="z-50 p-20 bg-white my-10 rounded-lg ">
        <ProgressBar
          filledBackground="linear-gradient(to right, #64CCC5, #D0E7D2)"
          percent={75}
        >
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌑
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌒
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep  ${
                  accomplished ? "accomplished" : null
                }`}
              >
                Finish
              </div>
            )}
          </Step>
        </ProgressBar>
        <div className="py-5 flex">
          <div>
            Start
          </div>
          <div>
            On Progress
          </div>
          <div>
            Finish
          </div>
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
  );
};

export default UserDashboard;
