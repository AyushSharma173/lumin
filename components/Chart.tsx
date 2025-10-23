"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function Chart(props: { labels?: string[]; values?: number[]; title?: string }) {
  const labels = props.labels || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const values = props.values || [12, 19, 3, 5, 2, 3];
  const data = {
    labels,
    datasets: [
      {
        label: props.title || "Series",
        data: values,
        borderColor: "rgb(99, 102, 241)",
        backgroundColor: "rgba(99, 102, 241, 0.4)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { grid: { color: "rgba(255,255,255,0.06)" } },
      x: { grid: { color: "rgba(255,255,255,0.06)" } },
    },
  } as const;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 dark:bg-black/40">
      <Line data={data} options={options} />
    </div>
  );
}


