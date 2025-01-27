import React, { useState } from 'react';

const CustomBtn = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.id);
  };

  return (
    <div className="hstack gap-2 flex-wrap mb-4" style={{justifyContent:"center"}}>
      {options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id={option.id}
            checked={selectedValue === option.id}
            onChange={handleChange}
          />
          <label className={`btn btn-outline-${option.style}`} htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomBtn;
