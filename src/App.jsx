import { useState, useEffect } from "react";
import "./App.css";
import jsonData from "./component/data.json";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";

function App() {
	// const [category, setCategory] = useState(null);

	return (
		<div className="w-full text-center bg-[#f1f4f9] border-t-[3px] border-t-purple-700">
			<Navbar />
			{console.log(jsonData)}
			<Dashboard category={jsonData} />
		</div>
	);
}

export default App;
