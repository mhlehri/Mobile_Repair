import Cardinfo from "./CardInfo/Cardinfo";
import LineChart from "./Chart/LineChart";
import PieChart from "./Chart/PieChart";
import { ActiveCustom } from "./Table/ActiveCustom";

const DashHome = () => {
  return (
    <div className="w-full mx-auto  px-6 pb-10 pt-20 lg:pt-10">
      <div className="grid md:grid-cols-2 gap-2  lg:gap-6">
        <Cardinfo>
          {{
            title: "Active Customer",
            icon: (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            ),
            number: 11,
          }}
        </Cardinfo>
        <Cardinfo>
          {{
            title: "Pending Customer",
            icon: (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            ),
            number: 123,
          }}
        </Cardinfo>
        <Cardinfo>
          {{
            title: "Total Sales",
            icon: (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            ),
            number: 124223,
            dollor: "$",
          }}
        </Cardinfo>
        <Cardinfo>
          {{
            title: "Total Revinue",
            icon: (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            ),
            number: 2343,
            dollor: "$",
          }}
        </Cardinfo>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
        <div className="w-full bg-[#FFFFFF] p-6 mt-3 lg:mt-5 rounded-md border">
          {/* <div className="mb-2">
            <h1 className="text-xl font-semibold">Daily Revenue Report</h1>
            <h1>Total Profit : $2342353</h1>
          </div> */}
          <LineChart></LineChart>
        </div>
        <div className="w-full bg-[#FFFFFF]   p-6 mt-2 lg:mt-5 rounded-md border">
          <div className="mb-2">
            <h1 className="text-[18px] font-semibold">
              Monthly Analytics Report
            </h1>
          </div>
          <PieChart></PieChart>
        </div>
      </div>
      <div>
        <div className="">
          <ActiveCustom></ActiveCustom>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
