import React,{ useState }  from 'react'
import ReciveTable from '../Component/ReciveTable'
import CostomeDropdown from '../Component/CostomeDropdown';


const Recive = () => {
    
    const [data, setData] = useState([
        {
          Gatepass_no: 'N2560AP',
        
          supplier_name: 100,
          creator_name: 'Vedant Raval',
          Date:'15/12/2025',
          Status:'Created',
        
         
          
        },
        {
            Gatepass_no: 'N2560APs',
            
            supplier_name: 100,
            creator_name: 'Vedant Raval',
            Date:'15/12/2025',
            Status:'Created',
           
          
            
        },
      ]);

    
      const tableHeadingData = [
        'Gatepass ID',
      
        'Supplier Name',
  
        'Creator Name',
        'Date',
        'Status',
        'Dispatched',
        'Return',
        'Details',
          
        'View',
         
         
      ];
      
         
      const handleEdit = (item) => {
        console.log("Editing item:", item);
        // You can implement your editing logic here
      };
      
      const handleDelete = (Gatepass_no) => {
        console.log("Deleting item with SR NO:", Gatepass_no);
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
        <div className='p-3 card'>
            <div className='card-body'>


      <ReciveTable  data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        tableHeadingData={tableHeadingData}  />
        </div>
        </div>
    </div>
  )
}

export default Recive
