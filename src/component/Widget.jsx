import React from 'react';

const Widget = ({ categoryId, widget, removeWidget }) => {
  return (
    <div className="bg-[#fefefe] shadow-md rounded-[10px] p-4 h-64 relative">
      <h3 className="text-lg font-bold text-left w-[90%]">{widget.name}</h3>
      <p>{widget.text}</p>
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="text-red-900 mt-2 absolute top-2 right-2 bg-slate-200 px-2 rounded-full font-bold"
      >
        X
      </button>
    </div>
  );
};

export default Widget;
