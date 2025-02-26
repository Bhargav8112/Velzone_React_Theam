import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CSS/Form.css';
import DropdownsCustome from "./DropdownsCustome";

const JobWorkForm = ({ Title, P_name }) => {
    const [gpNo, setGpNo] = useState(null);
    const [shapes, setShapes] = useState([]);
    const [grades, setGrades] = useState([]);
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
        const [loading, setLoading] = useState(true);
      const [isDropdownVisible, setIsDropdownVisible] = useState(false); // To show/hide the dropdown
      const [suppliers, setSuppliers] = useState([]);
    

  // Fetch suppliers based on entered name
  const fetchSuppliers = async (name) => {
    try {
      if (name.trim()) {
        const response = await axios.get(
          `api/Gatepass/search?supplierName=${name}`
        );
        console.log(response.supplierDetails)
        setSuppliers(response.supplierDetails); // Assuming response contains supplierDetails
        setIsDropdownVisible(true); // Show dropdown if there are matching results
      } else {
        setIsDropdownVisible(false); // Hide dropdown when input is empty
      }
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };
  const handleSupplierNameChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, suppliername: value }));

    // Fetch suppliers whenever the input changes
    fetchSuppliers(value);
  };
  const handleSupplierSelect = (supplier) => {
    setFormData((prevData) => ({
      ...prevData,
      suppliername: supplier.suppliername,
      suppliergst: supplier.suppliergst,
      supplierphone: supplier.supplierphone,
      supplieremail: supplier.supplieremail,
      supplieraddress: supplier.supplieraddress,
    }));
    setIsDropdownVisible(false); // Hide the dropdown after selection
  };

    useEffect(() => {
        axios
            .get("api/Gatepass/Material_Details")
            .then((response) => {
                console.log(response[0]);
                if (response && Array.isArray(response)) {
                    const uniqueShapes = [...new Set(response.map((item) => item.materialShape))];
                    const uniqueGrades = [...new Set(response.map((item) => item.materialGrade))];
    
                    setShapes(uniqueShapes);
                    setGrades(uniqueGrades);
                } else {
                    console.error("Unexpected API response format:", response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching material details:", error);
            })
            .finally(() => setLoading(false));
    }, []);

    const [formData, setFormData] = useState({
        suppliername: "",
        supplierphone: "",
        suppliergst: "",
        supplieremail: "",
        supplieraddress: "",
        productDescription: "",
        hsn: "",
        rawMaterialQty: "",
        materialWeight: "",
        materialCost: "",
        processType: "",
        packagingType: "",
        packagingQty: "",
        jobNum: "",
        jobQty: "",
        approx_r_qty:"",
        ssw_part:"" 
    });


    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleAddLine = () => {
        
        let existingData = JSON.parse(localStorage.getItem("jobWorkData")) || [];
        const newData = {
            sr_no: formData.sr_no || existingData.length + 1, // Auto-increment if empty
            g_no: formData.g_no || "",
            suppliername: formData.suppliername || "",
            supplieraddress: formData.supplieraddress || "",
            suppliergst: formData.suppliergst || "",
            supplieremail: formData.supplieremail || "",
            supplierphone: formData.supplierphone || "",
            Material_Name: formData.productDescription || "",
            Material_Shape: selectedShape || "",  // Ensure consistency
            Material_Grade: selectedGrade || "",  // Ensure consistency
            Raw_Material_Qty: formData.Raw_Material_Qty || 0,
            Total_Material_Weight: formData.Total_Material_Weight || 0,
            Total_Material_Cost: formData.Total_Material_Cost || 0,
            SSW_Part: formData.ssw_part || "",
            Job_Num: formData.jobNum || "",
            Job_Qty: formData.jobQty || 0,
            Create_GatePass: formData.Create_GatePass || "",
        };
    
        existingData.push(newData);
        localStorage.setItem("jobWorkData", JSON.stringify(existingData));
        alert("Line added successfully!");
    };


    const handleCreateGatepass = () => {
        const newGpNo = `GP-${Date.now()}`; // Generate a unique GP No
        setGpNo(newGpNo);
        localStorage.setItem("gatePassNumber", newGpNo);

        // Retrieve stored job work data from local storage
        const storedData = JSON.parse(localStorage.getItem("jobWorkData")) || [];

        if (storedData.length === 0) {
            alert("No items to create a gate pass!");
            return;
        }

        const payload = {
            gatePassNumber: newGpNo,
            items: storedData,
        };

        axios
            .post("api/Gatepass", payload)
            
            .then((response) => {
                console.log(payload);
                alert(`Gate Pass Created: ${newGpNo}`);
                localStorage.removeItem("jobWorkData"); // Clear local storage after submission
            })
            .catch((error) => {
                console.error("Error creating gate pass:", error);
                alert("Failed to create gate pass!");
            });
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">{Title}</h4>
                        </div>
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="card py-3 px-2">
                                <div className="row gy-4 p-2">
              <div className="col-xl-4 col-md-6">
                <label className="form-label">Supplier Name</label>
                <input
                  type="text"
                  name="suppliername"
                  className="form-control"
                  value={formData.suppliername}
                  onChange={handleSupplierNameChange}
                  onClick={() => setIsDropdownVisible(true)} // Show dropdown when clicked
                />
                {isDropdownVisible && (
                  <ul
                    className="dropdown-list"
                    style={{
                      position: "relative",
                      
                      overflowY: "auto",
                    
                      border: "1px solid #ccc",
                       
                    }}
                  >
                    {suppliers.map((supplier) => (
                      <li
                        key={supplier.suppliername}
                        className="dropdown-item"
                        onClick={() => handleSupplierSelect(supplier)}
                        style={{ padding: "5px", cursor: "pointer" }}
                      >
                        {supplier.suppliername}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-xl-4 col-md-6">
                <label className="form-label">Phone No</label>
                <input
                  type="number"
                  name="supplierphone"
                  className="form-control"
                  value={formData.supplierphone}
                  onChange={(e) =>
                    setFormData({ ...formData, supplierphone: e.target.value })
                  }
                  disabled
                />
              </div>

              <div className="col-xl-4 col-md-6">
                <label className="form-label">GST No</label>
                <input
                  type="text"
                  name="suppliergst"
                  className="form-control"
                  value={formData.suppliergst}
                  onChange={(e) =>
                    setFormData({ ...formData, suppliergst: e.target.value })
                  }
                  disabled
                />
              </div>
            </div>

            <div className="row gy-4 p-2">
              <div className="col-xl-6 col-md-6">
                <label className="form-label">Supplier Email</label>
                <input
                  type="email"
                  name="supplieremail"
                  className="form-control"
                  value={formData.supplieremail}
                  onChange={(e) =>
                    setFormData({ ...formData, supplieremail: e.target.value })
                  }
                  disabled
                />
              </div>

              <div className="col-xl-6 col-md-6">
                <label className="form-label">Supplier Address</label>
                <input
                  type="text"
                  name="supplieraddress"
                  className="form-control"
                  value={formData.supplieraddress}
                  onChange={(e) =>
                    setFormData({ ...formData, supplieraddress: e.target.value })
                  }
                  disabled
                />
              </div>
            </div>

                                </div>
                                <div className="card py-3 px-2">
                                    <div className="row gy-4 p-2">
                                        <div className="col-xl-3 col-md-6">
                                            <label className="form-label">Product / SSW Part Description</label>
                                            <textarea className="form-control" id="productDescription" value={formData.productDescription} onChange={handleChange} />
                                        </div>
                                        {/* <DropdownsCustome /> */}
                                                                            
                                                {/* Material Shape Dropdown */}
                                                <div className="col-xl-2 col-md-6">
                                                    <div className="d-flex flex-column p-2">
                                                        <label htmlFor="materialShape" className="form-label">
                                                            Material Shape
                                                        </label>
                                                        <div className="input-group">
                                                            <select className="form-select" id="GradeSelect" value={selectedShape} onChange={(e) => setSelectedShape(e.target.value)}>
                                                                <option value="Select Grade">Select shape</option>
                                                                {shapes.map((shape, index) => (
                                                                    
                                                                    <option key={index} value={shape}>  
                                                                        {shape}
                                                                    </option>
                                                                
                                                                ))}
                                                            </select>
                                                        </div>
                                                        
                                                    </div>
                                                </div>

                                                {/* Material Grade Dropdown */}
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="d-flex flex-column p-2">
                                                        <label htmlFor="materialGrade" className="form-label">
                                                            Material Grade
                                                        </label>
                                                        <div className="input-group">
                                                            <select className="form-select" id="GradeSelect" value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}>
                                                                <option value="Select Grade">Select Grade</option>
                                                                {grades.map((grade, index) => (
                                                                
                                                                        <option value={grade} key={index} >
                                                                            {grade}
                                                                        </option>
                                                                
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                        {/* <DropdownsCustome /> */}
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">HSN</label>
                                            <input type="text" className="form-control" id="hsn" value={formData.hsn} onChange={handleChange} />
                                        </div>
                                       
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Raw Material Qty</label>
                                            <input type="number" className="form-control" id="rawMaterialQty" value={formData.rawMaterialQty} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Total Material Weight (Kg)</label>
                                            <input type="number" className="form-control" id="materialWeight" value={formData.materialWeight} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Total Material Cost (₹)</label>
                                            <input type="number" className="form-control" id="materialCost" value={formData.materialCost} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">SSW Part</label>
                                            <input type="text" className="form-control" id="ssw_part" value={formData.ssw_part} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Approx Receiving Part Qty</label>
                                            <input type="text" className="form-control" id="approx_r_qty" value={formData.approx_r_qty} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Job Num</label>
                                            <input type="text" className="form-control" id="jobNum" value={formData.jobNum} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Job Qty</label>
                                            <input type="text" className="form-control" id="jobQty" value={formData.jobQty} onChange={handleChange} />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="card py-3">
                                    <div className="row gy-4 p-2">
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Processes Types</label>
                                            <select className="form-select" id="processType" value={formData.processType} onChange={handleChange}>
                                                <option value="">Select Type</option>
                                                <option value="Machining">Machining</option>
                                                <option value="Assembly">Assembly</option>
                                                <option value="Casting">Casting</option>
                                                <option value="Cutting">Cutting</option>
                                                <option value="Repairing">Repairing</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Packaging Type</label>
                                            <select className="form-select" id="packagingType" value={formData.packagingType} onChange={handleChange}>
                                                <option value="">Select Type</option>
                                                <option value="Pallets">Pallets</option>
                                                <option value="Box">Box</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-2 col-md-6">
                                            <label className="form-label">Qty Of Packaging Type</label>
                                            <input type="number" className="form-control" id="packagingQty" value={formData.packagingQty} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <button type="button" className="btn btn-info mx-2" onClick={handleAddLine}>Add Line</button>
                                    <button type="button" className="btn btn-primary mx-2" onClick={handleCreateGatepass}>Create Gatepass</button>
                                    {gpNo && <p className="mt-2">Generated Gate Pass: <strong>{gpNo}</strong></p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobWorkForm;
