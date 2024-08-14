import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import jsonData from "./data.json";

const Dashboard = () => {
	const [categories, setCategories] = useState(jsonData.categories);

	const addWidget = (categoryId, widget) => {
		setCategories(
			categories.map((category) =>
				category.id === categoryId
					? { ...category, widgets: [...category.widgets, widget] }
					: category
			)
		);
	};

	const removeWidget = (categoryId, widgetId) => {
		setCategories(
			categories.map((category) =>
				category.id === categoryId
					? {
							...category,
							widgets: category.widgets.filter((w) => w.id !== widgetId),
					  }
					: category
			)
		);
	};

	return (
		<div className="p-4 w-[90vw] mx-auto">
            <h1 className="text-left text-2xl font-bold">CNAPP Dashboard</h1>
			{categories.map((category) => (
				<div key={category.id} className="mb-4 w-[85vw] mx-auto">
					<h2 className="text-lg font-bold mb-2 text-left mt-3">{category.name}</h2>
					<div className="grid grid-cols-3 gap-4">
						{category.widgets.map((widget) => (
							<Widget
								key={widget.id}
								categoryId={category.id}
								widget={widget}
								removeWidget={removeWidget}
							/>
						))}
						<AddWidgetForm categoryId={category.id} addWidget={addWidget} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Dashboard;
