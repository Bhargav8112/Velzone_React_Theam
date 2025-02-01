import React from 'react'
import DynamicTable from '../Component/DynamicTable'

const tableHeaders = [
    "NO", "SUPP NAME", "CREATED DATE", "CREATED BY", "STATUS", "QTY", "DISPATCH DATE", "RECEIVED DATE", "RECEIVED QTY"
  ];
  
  const tableData = [
    { no: "R2032PV", suppName: "Prishicon Automation", createdDate: "2025-01-28", createdBy: "Prit Vora", status: "CREATED", qty: 1, dispatchDate: "", receivedDate: "", receivedQty: 0 },
    { no: "N2574JJ", suppName: "S.S.WHITE TECHNOLOGIES INC", createdDate: "2025-01-28", createdBy: "Jeni Joshi", status: "DISPATCHED", qty: 1, dispatchDate: "2025-01-28", receivedDate: "", receivedQty: 0 },
    { no: "R2029AV", suppName: "GBD BIOCARE", createdDate: "2025-01-28", createdBy: "Aashish Visaniya", status: "CREATED", qty: 2, dispatchDate: "", receivedDate: "", receivedQty: 0 },
  ];
const Report = () => {
  return (
    <div className='page-content'>
      <DynamicTable tableData={tableData} tableHeaders={tableHeaders} />
    </div>
  )
}

export default Report
