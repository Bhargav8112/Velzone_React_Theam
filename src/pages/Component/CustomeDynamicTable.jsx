import { useState } from "react";
import React from 'react'

const CustomeDynamicTable = ({ data, onEdit, onDelete, tableHeadingData }) => {
     const [selectedRow, setSelectedRow] = useState(null);
    
        const handleRadioChange = (srNo) => {
          setSelectedRow(srNo === selectedRow ? null : srNo); // Toggle selection
        };
  return (
    <div>
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
             
            
             
            
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 </div>
 </div>
  )
}

export default CustomeDynamicTable
