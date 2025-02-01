import React, { useState } from "react";

const DynamicTable = ({ tableData, tableHeaders }) => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    type: "",
    status: "",
  });

  // Function to filter data
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    let filtered = tableData.filter((row) => {
      return (
        (filters.startDate === "" || new Date(row.createdDate) >= new Date(filters.startDate)) &&
        (filters.endDate === "" || new Date(row.createdDate) <= new Date(filters.endDate)) &&
        (filters.type === "" || row.suppName.toLowerCase().includes(filters.type.toLowerCase())) &&
        (filters.status === "" || row.status.toLowerCase() === filters.status.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className=" ">
      {/* Search Filters */}
      <div className="filters mb-3 d-flex gap-2">
        <input type="date" name="startDate" onChange={handleFilterChange} className="form-control" />
        <input type="date" name="endDate" onChange={handleFilterChange} className="form-control" />
        <input type="text" name="type" placeholder="Search Type" onChange={handleFilterChange} className="form-control" />
        <select name="status" onChange={handleFilterChange} className="form-control">
          <option value="">All Status</option>
          <option value="CREATED">Created</option>
          <option value="DISPATCHED">Dispatched</option>
        </select>
        <button className="btn btn-primary">Search</button>
        <button className="btn btn-secondary">PDF</button>
      </div>

      {/* Table */}
      <div className="table-responsive table-card p-3">
        <table className="table  table-nowrap mb-0">
          <thead className="table-light">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.no}</td>
                  <td>{row.suppName}</td>
                  <td>{row.createdDate}</td>
                  <td>{row.createdBy}</td>
                  <td>
                    <span className={`badge ${row.status === "CREATED" ? "bg-warning" : "bg-primary"}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>{row.qty}</td>
                  <td>{row.dispatchDate}</td>
                  <td>{row.receivedDate}</td>
                  <td>{row.receivedQty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={tableHeaders.length} className="text-center">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
