import React from 'react';

const Widget = ({ categoryId, widget, removeWidget }) => {
  return (
    <div className="bg-[#fefefe] shadow-md rounded-[10px] p-4 h-64">
      <h3 className="text-lg font-bold text-left">{widget.name}</h3>
      <p>{widget.text}</p>
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="text-red-500 mt-2"
      >
        Remove
      </button>
    </div>
  );
};

export default Widget;
