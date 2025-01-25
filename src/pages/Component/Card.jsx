import React from 'react';

const Card = ({ title, iconClass, counterValue, additionalClass }) => {
  return (
    <div className={`card crm-widget ${additionalClass}`}> 
      <div className="card-body p-3"> {/* Added padding here */}
        <div className="d-flex align-items-center"> 
          <div className="flex-shrink-0">
            <i className={`${iconClass} display-6 text-muted`} />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="text-muted text-uppercase fs-13 mb-2"> 
              {title}
              <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle" />
            </h5>
            <h2 className="mb-0">
              <span className="counter-value">{counterValue}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;