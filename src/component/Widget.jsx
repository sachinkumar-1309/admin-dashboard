import React from "react";
import { Doughnut } from "react-chartjs-2";

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

	return (
		<div className="bg-[#fefefe] shadow-md rounded-[10px] p-4 h-60 relative flex flex-col items-center justify-between">
			<div className="w-full mb-4">
				<h3 className="text-lg font-bold text-left">{widget.name}</h3>
				<p className="text-left">{widget.content}</p>
			</div>

			{widget && hasData && (
				<div className=" w-full chartcontainer">
					<Doughnut data={chartData} options={chartOptions} />
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
