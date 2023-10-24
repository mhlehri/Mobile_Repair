import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { LineChart as LC, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const UserDashboard = () => {
    return (
        <div className="bg-transparent container mx-auto">

            {/* time Progress section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="mt-6">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Start
                        </Typography>
                        <Typography>
                            The place is close to
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="mt-6">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            on process
                        </Typography>
                        <Typography>
                            The place is close to
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="mt-6">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Ready for receive
                        </Typography>
                        <Typography>
                            The place is close to
                        </Typography>
                    </CardBody>
                </Card>
            </div>

            {/* time Progress section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="mt-6">
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
                <Card className="mt-6">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            technician info
                        </Typography>
                        <Typography>
                            The place is close to
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="mt-6">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Phone
                        </Typography>
                        <Typography>
                            The place is close to
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default UserDashboard;