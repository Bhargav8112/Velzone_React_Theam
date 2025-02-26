import React from "react";

const DetailsOfJobWork = ({ data, onEdit, onDelete }) => {
    return (
        <div>
            <div className="table-responsive table-card">
                <table className="table table-nowrap mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Gatepass no</th>
                            <th scope="col">SR NO</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Material Name</th>
                            <th scope="col">Material Shape</th>
                            <th scope="col">Material Grade</th>
                            <th scope="col">Raw Material Qty</th>
                            <th scope="col">Total Material Weight(Kg)</th>
                            <th scope="col">Total Material Cost</th>
                            <th scope="col">SSW Part</th>
                            <th scope="col">Job Num</th>
                            <th scope="col">Job Qty</th>
                            <th scope="col">Create Gatepass</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.Create_GatePass}</td>
                                    <td>{item.sr_no}</td>
                                    <td>{item.suppliername}</td>
                                    <td>{item.Material_Name}</td>
                                    <td>{item.Material_Shape}</td>
                                    <td>{item.Material_Grade}</td>
                                    <td>{item.Raw_Material_Qty}</td>
                                    <td>{item.Total_Material_Weight}</td>
                                    <td>{item.Total_Material_Cost}</td>
                                    <td>{item.SSW_Part}</td>
                                    <td>{item.Job_Num}</td>
                                    <td>{item.Job_Qty}</td>
                                    <td>{item.Create_GatePass}</td>
                                    <td>
                                        {/* Edit Button */}
                                        <button className="btn btn-primary" onClick={() => onEdit(item)}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        {/* Delete Button */}
                                        <button className="btn btn-danger" onClick={() => onDelete(item.sr_no)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="15" className="text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DetailsOfJobWork;
