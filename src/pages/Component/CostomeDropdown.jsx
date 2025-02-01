import React, { useState, useEffect } from "react";
 
const DropdownRow = () => {
  const [dropdowns, setDropdowns] = useState([]);

  useEffect(() => {
    fetch("./Dropdown.json") // Adjust path if needed
      .then(response => response.json())
      .then(data => setDropdowns(data.dropdowns))
      .catch(error => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="row  ">
      {dropdowns.length > 0 ? (
        dropdowns.map((dropdown, index) => (
          <div key={index} className="col-2">
            <select className="form-select rounded-pill mb-3" aria-label={`Dropdown ${index + 1}`}>
              <option value="">{dropdown.name}</option>
              {dropdown.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DropdownRow;
