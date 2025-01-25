import React from 'react'
import GatepassForm from '../Component/GatepassForm'
 
import GatepassTable from '../Component/GatepassTable'
 
const NoneReturnablePass = () => {
    const ReturnGatePassData= [
        {
          sr_no : '1',
          DOG:'ABCD',
          Qty:'1',
          Price:'15,000 /-',
          Remarks : 'Hello',
        },
        {
          sr_no : '2',
          DOG:'ABCD',
          Qty:'1',
          Price:'15,000 /-',
          Remarks : 'Hello',
        }
      ]
      const handleEdit = (item) => {
        console.log("Editing item:", item);
        // You can implement your editing logic here
      };
      
      const handleDelete = (sr_no) => {
        console.log("Deleting item with SR NO:", sr_no);
        // Implement delete logic here
      };
      
  return (
    <div>
      <div>
      <div className="page-content">
   
        
    <GatepassForm  Title={'Non Returnable Gatepass'}/>
  
    <div className='p-3'>
    <GatepassTable data={ReturnGatePassData} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
    
      </div>
    </div>
    </div>
  )
}

export default NoneReturnablePass
