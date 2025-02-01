import { useState } from "react";
import React from 'react'

const ReciveTable = ({ data, onEdit, onDelete, tableHeadingData }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRadioChange = (srNo) => {
      setSelectedRow(srNo === selectedRow ? null : srNo); // Toggle selection
    };
  return (
    <div>
       <div>
      <div className="table-responsive table-card">
        <table className="table table-nowrap mb-0">
          <thead className="table-light">
            <tr>
              {tableHeadingData.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
             
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key, idx) => (
                  <td key={idx}>{item[key]}</td>
                ))}
                
                
                <td>
                  <input
                    type="radio"
                    name="rowSelection" // Same name for all radios to allow only one selection
                    value={item.Gatepass_no}
                    checked={selectedRow === item.Gatepass_no} // Check if selected
                    onChange={() => handleRadioChange(item.Gatepass_no)} // Handle change
                  />
                </td>
                
                <td>
                  {/* Edit Button */}
                  <button className="btn btn-warning" onClick={() => onEdit(item)}>
                 Return
                  </button>
                </td>
                <td>
                  {/* Edit Button */}
                  <button className="btn btn-primary" onClick={() => onEdit(item)}>
                 Details
                  </button>
                </td>
                <td>
                  {/* Delete Button */}
                  <button className="btn btn-secondary" onClick={() => onDelete(item.sr_no)}>
                  View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ReciveTable
