import React from 'react'
import '../CSS/Form.css'

const JobWorkForm = ({Title,P_name}) => {
  return (
    <div>
    <div className="row">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">{Title}</h4>
                  
                </div>
                {/* end card header */}
                <div className="card-body">
                    <div className="live-preview">
                        <div className="row gy-4 p-2">
                            <div className="col-xl-4 col-md-6">
                                <div>
                                    <label htmlFor="basiInput" className="form-label">
                                    Supplier Name
                                    </label>
                                    <input
                                        type="txt"
                                        className="form-control"
                                        id="basiInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-4 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    Phone No
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-4 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                   GST No
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/} 
                        </div>
                        {/*end row*/}
                        <div className="row gy-4 p-2">
                            <div className="col-xl-6 col-md-6">
                                <div>
                                    <label htmlFor="basiInput" className="form-label">
                                  Supplier Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="basiInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-6 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    Supplier Address
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                        <div className="row gy-4 p-2">
                            <div className="col-xl-12 col-md-6">
                                <div>
                                    <label htmlFor="basiInput" className="form-label">
                                 Material Name
                                    </label>
                                
                                    <textarea
                                        className="form-control"
                                        id="basiInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            
                        </div>
                        {/*end row*/}
                        <div className="row gy-4 p-2">
                            <div className="col-xl-2 col-md-6">
                                <div>
                                    <label htmlFor="basiInput" className="form-label">
                                    Raw Material Qty
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="basiInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-2 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    Total Material Weight (Kg)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-2 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    Total Material Cost (in ₹)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-xl-2 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    {P_name}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    Job Num
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6">
                                <div>
                                    <label htmlFor="labelInput" className="form-label">
                                    Job Qty
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="labelInput"
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                            <button type="button" className="btn btn-info waves-effect mx-2  responsive-btn ">Add</button>
                        </div>
                        {/*end row*/}
                        
                    </div>

                </div>
            </div>
        </div>
        
        {/*end col*/}
    </div>


</div>
  )
}

export default JobWorkForm
