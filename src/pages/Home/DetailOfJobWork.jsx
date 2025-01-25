import React from 'react'
import JobWorkTable from '../Component/JobWorkTable';
import JobWorkForm from '../Component/JobWorkForm';
import DetailsOfJobWork from '../Component/DetailsOfJobWorkForm';
const DetailOfJobWork = () => {
    const  JobWorkPassData = [
        {
            g_no:"1235",
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
    <div className='page-content'>
            <JobWorkForm Title={"Jobwork Gate Pass"} P_name={"SSW Part"}/>
            <div className='p-3'>

      <DetailsOfJobWork  data={JobWorkPassData} onEdit={handleEdit} onDelete={handleDelete}  />
            </div>
    </div>
  )
}

export default DetailOfJobWork
