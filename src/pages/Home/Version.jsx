import React, { useState } from 'react'

import ReciveTable from '../Component/CustomeDynamicTable'


const Version = () => {
     const [data, setData] = useState([
            {
                NO: '1.1',
    
                VU: "new Update",
                Edit: 'Edit',
                Delete: 'Delete',
                
    
    
            },
            {
                NO: '1.1',
    
                VU: "new Update",
                Edit: 'Edit',
                Delete: 'Delete',
    
            },
        ]);
    
    
        const tableHeadingData = [
            'NO',
    
            'Version Update',
    
            'Edit',
            'Delete',
           
    
    
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
    <div className='page-content' >
    <div className="row">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1"> Version </h4>

                </div>
                {/* end card header */}
                <div className="card-body">
                    <div className="live-preview">
                        <div className="row gy-4 p-2">
                            <div className="col-xl-6 col-md-6">
                                <div>
                                    <label htmlFor="basiInput" className="form-label">
                                    Version No
                                    </label>
                                    <input
                                        type="txt"
                                        className="form-control"
                                        id="basiInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-6 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">


                                    Version Update
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}

                            {/*end col*/}
                        </div>
                        {/*end row*/}

                        <button type="button" className="btn btn-info waves-effect mx-2  responsive-btn "  >
                            Add
                        </button>
                        {/*end col*/}
                    </div>
                    {/*end row*/}



                </div>
            </div>
        </div>

        {/*end col*/}
    </div>

    <div className='p-3'>

        <ReciveTable data={data}
            onEdit={handleEdit}
            onDelete={handleDelete}
            tableHeadingData={tableHeadingData} />
    </div>
</div>
  )
}

export default Version
