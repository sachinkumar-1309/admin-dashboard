import React from "react";
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

export default function SideDrawer({
	Open,
	Title,
	Description,
	Btn,
	onClose,
	header,
}) {
	return (
		<Drawer open={Open} onOpenChange={onClose}>
			{console.log("message")}
			<DrawerTrigger asChild>
				{/* The trigger is managed by the parent component */}
				{/* <button
						type="submit"
						className="border px-2 flex justify-center items-center rounded-[5px] bg-slate-100">
						<span className=" text-xl ">+</span>&nbsp;Add widget
					</button> */}
				{header}
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>{Title}</DrawerTitle>
					<DrawerDescription>{Description}</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button onClick={onClose}>{Btn}</Button>
					<DrawerClose asChild>
						<Button variant="outline" onClick={onClose}>
							Cancel
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
