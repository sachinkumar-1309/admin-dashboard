import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import jsonData from "./data.json";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { validators } from "tailwind-merge";
import SideDrawer from "./Drawer";

// const Drawer = () => {};

const Dashboard = () => {
	const [categories, setCategories] = useState(jsonData.categories);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [itemClicked, setItemClicked] = useState("cspm-dashboard");
	const [selectedWidgets, setSelectedWidgets] = useState([]);
	const [submited, setSubmited] = useState(false);

	const handleWidgetSelection = (widgetId) => {
		setSelectedWidgets((prev) =>
			prev.includes(widgetId)
				? prev.filter((id) => id !== widgetId)
				: [...prev, widgetId]
		);
	};

	const handleConfirm = () => {
		onConfirm(selectedWidgets);
	};

	const handler = () => {
		setIsDrawerOpen(true);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
	};

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
	const handleSubmit = (e) => {
		e.preventDefault();
		// const newWidget = {
		// 	id: Date.now(),
		// };
		// selectedWidgets.map((id) => addWidget(itemClicked, newWidget));
		console.log(selectedWidgets);
		console.log(itemClicked);
		setSubmited(true);
		// setName("");
		// setText("");
	};

	const toggle = (id) => {
		setItemClicked(id);
	};

	return (
		<div className="p-4 w-[90vw] mx-auto">
			<h1 className="text-left text-2xl font-bold">CNAPP Dashboard</h1>
			{categories.map((category) => (
				<div key={category.id} className="mb-4 w-[85vw] mx-auto">
					<h2 className="text-lg font-bold mb-2 text-left mt-3">
						{category.name}
					</h2>
					<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 relative">
						{submited &&
							category.widgets.map((widget) =>
								selectedWidgets.map((id) =>
									id === widget.id ? (
										<Widget
											key={widget.id}
											categoryId={itemClicked}
											widget={widget}
											removeWidget={removeWidget}
										/>
									) : null
								)
							)}

						<Drawer>
							<div className="bg-[#fefefe] shadow-md rounded-[10px] p-4 h-60">
								<div className="bg-[#fefefe] text-gray-500 opacity-85 text-lg p-2 h-full w-full rounded flex justify-center items-center">
									<button
										onClick={handler}
										type="submit"
										className="border px-2 flex justify-center items-center rounded-[5px] bg-slate-100">
										<DrawerTrigger>
											<span className=" text-xl ">+</span>&nbsp;Add widget
										</DrawerTrigger>
									</button>
								</div>
								{/* Drawer component */}
								{isDrawerOpen &&
									(console.log(),
									(
										<DrawerContent>
											<DrawerHeader>
												<DrawerTitle>
													{categories.map((category) => (
														<>
															<button
																onClick={() => toggle(category.id)}
																className="gap-2 mr-2 abs inline-block text-sm bg-slate-50 px-3 py-2 rounded-md"
																key={category.id}>
																{category.name.split(" ")[0]}
															</button>
														</>
													))}
												</DrawerTitle>
												{categories.map((category) => (
													<>
														{itemClicked === category.id && (
															<div>
																{category.widgets.map((widget) => (
																	<div>
																		<input
																			type="checkbox"
																			checked={selectedWidgets.includes(
																				widget.id
																			)}
																			onChange={() =>
																				handleWidgetSelection(widget.id)
																			}
																			className="mr-2"
																		/>
																		{widget.name}
																	</div>
																))}
															</div>
														)}
													</>
												))}
											</DrawerHeader>
											<DrawerFooter className="flex flex-row-reverse ">
												<Button
													className="w-1/3 inline-block"
													onClick={handleSubmit}>
													Submit
												</Button>
												<DrawerClose className="w-1/3">
													<Button className="w-full" variant="outline">
														Cancel
													</Button>
												</DrawerClose>
												<DrawerClose className="absolute right-4 top-4 font-extrabold text-xl">
													❌
												</DrawerClose>
											</DrawerFooter>
										</DrawerContent>
									))}
							</div>
						</Drawer>
						{/* <AddWidgetForm categoryId={category.id} addWidget={addWidget} /> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default Dashboard;
