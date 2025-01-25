import React from 'react'

const GatepassTable = ({data,onEdit, onDelete}) => {
  return (
    <div className="table-responsive table-card">
    <table className="table table-nowrap mb-0">
      <thead className="table-light">
        <tr>
           
          <th scope="col">
          SR NO</th>
          <th scope="col">Description of Goods</th>
          <th scope="col">	Qty</th>
          <th scope="col">Price</th>
          <th scope="col">Remarks</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
             
            
            <td>{item.sr_no}</td>
            <td>{item.DOG}</td>
            <td>{item.Qty}</td>
            <td>{item.Price}</td>
            <td>{item.Remarks}</td>
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
  )
}

export default GatepassTable
