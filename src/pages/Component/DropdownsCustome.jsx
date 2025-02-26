import React, { useState, useEffect } from "react";
import axios from "axios";
const DropdownsCustome = () => {
    const [shapes, setShapes] = useState([]);
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(true);

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

    
    return (
        < > 
         {loading ? <p>Loading...</p> : (
            <>
            {/* Material Shape Dropdown */}
            <div className="col-xl-2 col-md-6">
                <div className="d-flex flex-column p-2">
                    <label htmlFor="materialShape" className="form-label">
                        Material Shape
                    </label>
                    <div className="input-group">
                        <select className="form-select" id="GradeSelect">
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
                        <select className="form-select" id="GradeSelect">
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
            </>
               )}
        </>
    );
};


export default DropdownsCustome
