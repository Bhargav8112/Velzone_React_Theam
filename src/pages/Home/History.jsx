import React  ,{ useState } from 'react'
import HistoryTable from '../Component/HistoryTable'
import CustomBtn from '../Component/CustomeBtn'
import CostomeDropdown from '../Component/CostomeDropdown';

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
  
<div className='row justify-content-center m-0'>
<div className="col-9">

<CostomeDropdown/>
</div>


<div className='col-3 '>

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

        {/* <div className='m-0' style={{alignItems:"center"}}>

          <CustomBtn options={options}/>
        </div> */}
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
