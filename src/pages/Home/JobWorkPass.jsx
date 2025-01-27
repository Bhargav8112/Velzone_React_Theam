import React from 'react'
import JobWorkForm from '../Component/JobWorkForm'
import JobWorkTable from '../Component/JobWorkTable'
import Dform from '../Component/Form'

const JobWorkPass = () => {
  const  JobWorkPassData = [
{
    sr_no : "1",


}


  ]
  
  const headingData = [{
    sr_no : "SR NO",
    Material_Name :"Material Name",
    Raw_Qty:"Raw Material Qty",
    Total_Material_Weight:"Total Material Weight(Kg)",
   Total_Material_Cost :"Total Material Cost",
     Part_Name : "Part Name",
     Job_Num:"Job Num",

    

  }]
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

     {/* <JobWorkTable data={JobWorkPassData} onEdit={handleEdit} onDelete={handleDelete}   /> */}
     <Dform data={JobWorkPassData} onEdit={handleEdit} onDelete={handleDelete}  TableheadingData={headingData} />
     </div>
     </div>
     </>
  )
}

export default JobWorkPass
