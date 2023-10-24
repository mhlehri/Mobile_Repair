import { CChart } from "@coreui/react-chartjs";

const LineChart = () => {
  return (
    <CChart
      type="bar"
      data={{
        labels: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ],
        datasets: [
          {
            label: "Daily Earnings",
            backgroundColor: "#f87979",
            data: [10, 20, 12, 39, 100, 40, 39, 80, 40],
          },
        ],
      }}
      labels="months"
      options={{
        plugins: {
          legend: {
            labels: {
              color: "grey",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "grey",
            },
            ticks: {
              color: "red",
            },
          },
          y: {
            grid: {
              color: "grey",
            },
            ticks: {
              color: "red",
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
