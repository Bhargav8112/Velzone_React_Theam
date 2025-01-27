import React  ,{ useState } from 'react'
import HistoryTable from '../Component/HistoryTable'
import CustomBtn from '../Component/CustomeBtn'

const History = () => {
    
    const [data, setData] = useState([
        {
          Gatepass_no: 'N2560AP',
          Line: '1',
          supplier_name: 100,
          creator_name: 'Vedant Raval',
          Date:'15/12/2025',
          Status:'Created',
          Details:'Gatepass',
          
        },
        {
            Gatepass_no: 'N2560AP',
            Line: '1',
            supplier_name: 100,
            creator_name: 'Vedant Raval',
            Date:'15/12/2025',
            Status:'Created',
            Details:'Gatepass',
            
        },
      ]);
    
      const tableHeadingData = [
        'Gatepass ID',
        'Line  ',
        'Supplier Name',
  
        'Creator Name',
        'Date',
        'Status',
        'Details',
        'cancel',
          
        'View',
         
         
      ];
    const  JobWorkPassData = [
        {
            sr_no : "1",
        
        
        }
        
        
          ]
          
          const headingData = [{
            sr_no : "Gatepass ID",
            Material_Name :"Line",
            Raw_Qty:"Supplier Name",
            Total_Material_Weight:"Creator Name",
           Total_Material_Cost :"",
             Part_Name : "Status",
             Job_Num:"Details",
             cancel:"cancel",
             View:"View",
        
            
        
          }]
          const options = [
            { id: 'success-outlined', label: 'CREATED', style: 'success' },
            { id: 'primary-outlined', label: 'DISPATCHED', style: 'primary' },
            { id: 'secondary-outlined', label: 'PARTIAL ARRIVED', style: 'secondary' },
            { id: 'warning-outlined', label: 'ARRIVED', style: 'warning' },
            { id: 'danger-outlined', label: 'CANCELLED', style: 'danger' },
          ];
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
        <div className='row' style={{justifyContent:"center"}}>
            <div className='col-2'>

        <select
  className="form-select rounded-pill mb-3"
  aria-label="Default select example"
>
  <option selected="">All</option>

  <option value={1}>Returnable</option>
  <option value={2}>Non Returnable</option>
  <option value={3}>JobWork</option>
 
</select>
    </div>
    <div className='col-2'>

    <div className="input-group">
  <input
    type="text"
    className="form-control"
    aria-label="Recipient's username"
    aria-describedby="button-addon2"
  />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">
    <i className='ri-search-2-line'></i>
  </button>
</div>

    </div>

        </div>
        <div className='m-0' style={{alignItems:"center"}}>

          <CustomBtn options={options}/>
        </div>
        <div className='p-3 card'>
            <div className='card-body'>


      <HistoryTable  data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        tableHeadingData={tableHeadingData}  />
        </div>
        </div>
    </div>
  )
}

export default History
