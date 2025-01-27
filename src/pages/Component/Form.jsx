import React from 'react'

const Form = ({data,onEdit, onDelete,TableheadingData}) => {
  return (
    <div>
           <div className="table-responsive table-card">
    <table className="table table-nowrap mb-0">
      <thead className="table-light">
      {TableheadingData.map((item, index) => (
          <tr key={index}>
             
            
            <th>{item.sr_no}</th>
            <th>{item.Material_Name}</th>
            <th>{item.Raw_Qty}</th>
            <th>{item.Total_Material_Weight}</th>
            <th>{item.Total_Material_Cost}</th>
            <th>{item.Part_Name}</th>
            <th>{item.Job_Num}</th>
            <th>{item.Job_Qty}</th>
            <th>
                {/* Edit Button */}
                
                  Edit
                
              </th>
              <th>
                {/* Delete Button */}
              
                  Delete
                
              </th>
          
          </tr>
        ))}
        {/* <tr>
           
          <th scope="col">
          SR NO</th>
          <th scope="col">Material Name</th>
          <th scope="col">	Raw Material Qty</th>
          <th scope="col">Total Material Weight(Kg)</th>
          <th scope="col">Total Material Cost</th>
          <th scope="col">Part Name</th>
          <th scope="col">Job Num</th>
          <th scope="col">Job Qty</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr> */}
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
             
            
            <td>{item.sr_no}</td>
            <td>{item.Material_Name}</td>
            <td>{item.Raw_Qty}</td>
            <td>{item.Total_Material_Weight}</td>
            <td>{item.Total_Material_Cost}</td>
            <td>{item.Part_Name}</td>
            <td>{item.Job_Num}</td>
            <td>{item.Job_Qty}</td>
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
        ))}
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default Form
