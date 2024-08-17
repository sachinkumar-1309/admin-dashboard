import React from "react";

export default function Navbar() {
	return <div className="bg-[#fefefe] text-sm w-full ">
        <div className="w-[90vw] mx-auto h-11 flex justify-between items-center">
           <div className="font-semibold text-gray-500">
           Home&nbsp;＞&nbsp;<span className="font-extrabold text-[#002b56]">Dashboard&nbsp;V2</span>
           </div>
           <div className="w-1/3">
            <input type="text" className="border border-blue-200 rounded-[3px] px-3 py-1 bg-[#f1f4f9] h-[95%] w-[75%] focus:outline-none focus:border-transparent" placeholder="Search Anything..."/>
            <div className="w-[25%]"></div>
           </div>
        </div>
    </div>;
}
