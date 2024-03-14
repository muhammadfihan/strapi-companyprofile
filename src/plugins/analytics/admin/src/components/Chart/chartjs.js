import React from "react";
// @ts-ignore
import { Bar } from "react-chartjs-2";
// @ts-ignore
import { CategoryScale, Chart } from "chart.js/auto";

Chart.register(CategoryScale);

const ChartComponent = () => {
  // Data statis untuk grafik
  const chartData = {
    labels: ["Data1", "Data2", "Data3", "Data4", "Data5", "naruto"],
    datasets: [
      {
        label: "Contoh Data",
        data: [12, 19, 3, 5, 2, 10],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Data Statis</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartComponent;
