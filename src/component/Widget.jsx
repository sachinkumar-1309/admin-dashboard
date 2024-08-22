import React from "react";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement
);

const Widget = ({ categoryId, widget, removeWidget }) => {
	const hasData = widget.chartData && widget.chartData.labels;

	const totalQuantity = hasData
		? widget.chartData.datasets[0].data.reduce((acc, value) => acc + value, 0)
		: 0;

	const chartData = {
		labels: widget?.chartData?.labels?.map(
			(label, index) =>
				`${label} (${widget.chartData.datasets[0].data[index]})`
		),

		datasets: [
			{
				data: widget?.chartData?.datasets[0]?.data,
				backgroundColor: widget?.chartData?.datasets[0]?.backgroundColor,
			},
		],
	};

	const barchartData = {
		labels: [""],
		datasets: widget?.chartData?.labels?.map((label, index) => ({
			label: `${label} (${widget.chartData.datasets[0].data[index]})`,
			data: [widget.chartData.datasets[0].data[index]],
			backgroundColor: widget.chartData.datasets[0].backgroundColor[index],
			borderRadius:20,
			barThickness: 15,
		})),
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: "right",
				labels: {
					// padding: 20,
					font: {
						size: 12,
						family: "Arial",
						color: "#333",
					},
				},
			},
			tooltip: {
				enabled: true,
			},
		},
		layout: {
			padding: {
				right: 20,
				bottom: 20,
			},
		},
		cutout: "60%",
		rotation: -90,
		circumference: 360,
	};
	const barOptions = {
		indexAxis: "y",
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				stacked: true,
				beginAtZero: true,
				display: false, // Hide y-axis
				grid: {
					display: false, // Remove grid lines
				},
			},
			y: {
				stacked: true,
				display: false, // Hide y-axis
				grid: {
					display: false, // Remove grid lines
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: "bottom",
			},
			tooltip: {
				enabled: true,
			},
		},
		layout: {
			padding: {
				right: 20,
				bottom: 20,
			},
		},
	};

	return (
		<div className="bg-[#fefefe] shadow-md rounded-[10px] p-4 h-60 relative flex flex-col items-center justify-between">
			<div className="w-full mb-4">
				<h3 className="text-lg font-bold text-left">{widget.name}</h3>
				<p className="text-left">{widget.content}</p>
			</div>

			{widget && hasData && (
				<div className=" w-full chartcontainer">
					{/* Conditionally render the correct chart type */}
					{widget.id === "image-risk" || widget.id === "image-security" ? (
						<Bar data={barchartData} options={barOptions} /> // Render Bar chart for specific widgets
					) : (
						<Doughnut data={chartData} options={chartOptions} /> // Render Doughnut chart by default
					)}
				</div>
			)}
			<button
				onClick={() => removeWidget(categoryId, widget.id)}
				className="text-[#86b3ff] mt-2 absolute top-1 right-2 px-2 rounded-full font-bold text-2xl">
				⨯
			</button>
		</div>
	);
};

export default Widget;
