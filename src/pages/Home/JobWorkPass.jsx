import React from 'react'
import JobWorkForm from '../Component/JobWorkForm'
import JobWorkTable from '../Component/JobWorkTable'

const JobWorkPass = () => {
  const  JobWorkPassData = [
{
    sr_no : "1",


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
     <>
           <div className="page-content">
   
     <JobWorkForm Title={"Jobwork Gate Pass"} P_name={'Part Name'}/>
     <div className='p-3'>

     <JobWorkTable data={JobWorkPassData} onEdit={handleEdit} onDelete={handleDelete}   />
     </div>
     </div>
     </>
  )
}

export default JobWorkPass
