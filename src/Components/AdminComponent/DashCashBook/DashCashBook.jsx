import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "No",
  "Date",
  "Particluar",
  "Description",
  "Income",
  "Expense",
];

const TABLE_ROWS = [
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
  {
    no: "1",
    date: "23/04/18",
    Particluar: "D5N189",
    Description: "Purchase - CELL TELL",
    Income: "₹4,000.00",
    Expense: "₹5,000.00",
  },
];

const DashCashBook = () => {
  return (
    <div className="w-full  flex flex-col lg:justify-center px-6 mt-20 lg:mt-0">
      <div className="mb-3">
        <h2 className="text-2xl">Cashbook</h2>
      </div>
      <div>
        <Card className=" w-full  overflow-scroll md:overflow-hidden max-w-full">
          <table className="w-full  min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b  p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  { no, Particluar, date, Description, Income, Expense },
                  index
                ) => (
                  <tr key={no} className="border-t-2 ">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {no}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Particluar}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Description}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Income}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Expense}
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="">
        <Card className="mt-6">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              estimation
            </Typography>
            <Typography className="text-center">
              <p>Opening Balance: ₹ -141,026.00</p>
              <p>Income: ₹51,000.00</p>
              <p>Expense: ₹48,100.00</p>
              <hr />
              <p>Closing Balance: ₹ -138,126.00</p>
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashCashBook;
