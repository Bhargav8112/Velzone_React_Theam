import React, { useState, useEffect } from 'react';
import '../CSS/Form.css';
import axios from 'axios';

const GatepassForm = ({ Title }) => {
    const [gatepassData, setGatepassData] = useState({
        suppliername: "",
        supplierphone: "",
        suppliergst: "",
        supplieremail: "",
        supplieraddress: "",
        descriptionofgoods: "",
        qty: "",
        price: "",
        remarks: "",
    });

    // Fetch API Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("YOUR_API_URL_HERE"); // Replace with your actual API URL
                setGatepassData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Handle Input Change
    const handleChange = (e) => {
        setGatepassData({ ...gatepassData, [e.target.name]: e.target.value });
    };

    // Submit Form
    const handleSubmit = async () => {
        try {
            await axios.post("YOUR_API_POST_URL_HERE", gatepassData);
            alert("Gatepass submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
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
                                <div className="row gy-4 p-2">
                                    <div className="col-xl-4 col-md-6">
                                        <div>
                                            <label className="form-label">Supplier Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="suppliername"
                                                value={gatepassData.suppliername}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div>
                                            <label className="form-label">Phone No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="supplierphone"
                                                value={gatepassData.supplierphone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div>
                                            <label className="form-label">GST No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="suppliergst"
                                                value={gatepassData.suppliergst}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row gy-4 p-2">
                                    <div className="col-xl-6 col-md-6">
                                        <div>
                                            <label className="form-label">Supplier Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="supplieremail"
                                                value={gatepassData.supplieremail}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div>
                                            <label className="form-label">Supplier Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="supplieraddress"
                                                value={gatepassData.supplieraddress}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row gy-4 p-2">
                                    <div className="col-xl-3 col-md-6">
                                        <div>
                                            <label className="form-label">Description of Goods</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="descriptionofgoods"
                                                value={gatepassData.descriptionofgoods}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div>
                                            <label className="form-label">Qty</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="qty"
                                                value={gatepassData.qty}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div>
                                            <label className="form-label">Price (in ₹)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="price"
                                                value={gatepassData.price}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div>
                                            <label className="form-label">Remarks</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="remarks"
                                                value={gatepassData.remarks}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-info waves-effect mx-2 responsive-btn" onClick={handleSubmit}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GatepassForm;
