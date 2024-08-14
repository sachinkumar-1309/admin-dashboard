import { useState } from "react";
import "./App.css";
import jsonData from "./component/data.json";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";

function App() {
	const [datas, setDatas] = useState(jsonData);
	return (
		<div className="w-full text-center bg-[#f1f4f9] border-t-[3px] border-t-purple-700">
			<Navbar/>
			<Dashboard/>
		</div>
	);
}

export default App;
