 
import React from 'react';
import '../CSS/Card.css'; // Optional: Add CSS if needed

const CustomeCard = ({ iconClass, year, status }) => {
    return (
        <div className="card" style={{ width: "25%" }}>
            <div className="row" style={{ alignItems: "center", margin: 0 }}>
                <div className="col-lg-6 col-md-6 d-flex align-items-center">
                    <div className="p-1 me-2">
                        <div className="icon-circle">
                            <i className={iconClass}></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 p-0">
                    <div className="card-body p-1">{year}</div>
                    <div className="card-body p-1">{status}</div>
                </div>
            </div>
        </div>
    );
};

export default CustomeCard;
