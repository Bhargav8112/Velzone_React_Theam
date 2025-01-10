import React from "react";

const TableComponent = ({ data }) => {
  return (
    <div className="table-responsive table-card">
      <table className="table table-nowrap mb-0">
        <thead className="table-light">
          <tr>
             
            <th scope="col">
            Gatepass Type</th>
            <th scope="col">Created</th>
            <th scope="col">Dispatched</th>
            <th scope="col">	Partial Arrived</th>
            <th scope="col">Arrived</th>
            <th scope="col">Cancelled</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
               
              
              <td>{item.Gatepass_Type}</td>
              <td>{item.Created}</td>
              <td>{item.Dispatched}</td>
              <td>{item.Partial_Arrived}</td>
              <td>{item.Arrived}</td>
              <td>{item.Cancelled}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
