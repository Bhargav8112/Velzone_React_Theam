import React from 'react';

const HistoryTable = ({ data, onEdit, onDelete, tableHeadingData }) => {
  return (
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
                  {/* Edit Button */}
                  <button className="btn btn-primary" onClick={() => onEdit(item)}>
                  Cancel
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
  );
};

export default HistoryTable;
