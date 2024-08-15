import React, { useState } from "react";

const AddWidgetForm = ({ categoryId, addWidget }) => {
	const [name, setName] = useState("");
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newWidget = {
			id: Date.now(),
			name,
			text,
		};
		addWidget(categoryId, newWidget);
		setName("");
		setText("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-[#fefefe] shadow-md rounded-[10px] p-4 h-64">
			{/* <div className="mb-2">
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div> */}
			<div className="bg-[#fefefe] text-gray-500 opacity-85 text-lg p-2 h-full w-full rounded flex justify-center items-center">
				<button type="submit" className="border px-2 flex justify-center items-center rounded-[5px] bg-slate-100">
					<span className=" text-xl ">+</span>&nbsp;Add widget
				</button>
			</div>
		</form>
	);
};

export default AddWidgetForm;
